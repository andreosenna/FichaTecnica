import React, { useState, useEffect } from 'react';
import supabase from '../../conexao/conexao';

export default function AprovacaoNovoPadrao() {
    const [autenticado, setAutenticado] = useState(false);
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [fila, setFila] = useState([]);
    const [solicitacaoSelecionada, setSolicitacaoSelecionada] = useState(null);
    const [padraoAnterior, setPadraoAnterior] = useState(null);
    const [isEdicao, setIsEdicao] = useState(false);
    const [mensagem, setMensagem] = useState("");
    const [tipoMensagem, setTipoMensagem] = useState(""); // 'sucesso' ou 'erro'

    useEffect(() => {
        carregarFila();
    }, []);

    const carregarFila = async () => {
        try {
            const { data, error } = await supabase
                .from('tb_padraoEmbalagem')
                .select('*')
                .eq('statusPadrao', 'pendente')
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Erro ao carregar fila:', error);
                return;
            }

            // Mapear dados para o formato do componente
            const filaMapeada = data.map(item => ({
                id: item.id,
                produto: item.descProduto,
                maoObra: item.mdo,
                codMolde: item.codMolde,
                tipo: item.tipoProduto,
                saco: item.sacoPlastico,
                cxHortifruti: item.cxHortifruti,
                pilha: item.pilha,
                pallet: item.pallet,
                gaiola: item.gaiola,
                total: item.totalEmbalagem,
                embalagem: item.tipoEmbalagem,
                observacao: item.obsPadrao,
                cavidades: item.nCav,
                pesoMedio: item.pesoMedio,
                cicloMedio: item.cicloProdutivo,
                ph: item.phProdutivo,
                maquina1: item.Maq1,
                maquina2: item.Maq2,
                maquina3: item.Maq3,
                maquina4: item.Maq4,
                status: item.statusPadrao,
                dataEdicao: new Date(item.created_at).toLocaleString('pt-BR'),
                created_at: item.created_at,
                tipoSolicitacao: item.tipo || 'nova' // Campo adicional para identificar se é edição ou nova
            }));

            setFila(filaMapeada);
        } catch (error) {
            console.error('Erro ao carregar fila:', error);
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (usuario === "admin" && senha === "@admin") {
            setAutenticado(true);
            setMensagem("");
        } else {
            setMensagem("Usuário ou senha incorretos!");
            setSenha("");
            setTipoMensagem("erro");
        }
    };

    const handleAprovar = async () => {
        if (solicitacaoSelecionada) {
            try {
                const { error } = await supabase
                    .from('tb_padraoEmbalagem')
                    .update({ statusPadrao: 'aprovado' })
                    .eq('id', solicitacaoSelecionada.id);

                if (error) {
                    console.error('Erro ao aprovar solicitação:', error);
                    setMensagem('Erro ao aprovar solicitação. Tente novamente.');
                    setTipoMensagem("erro");
                    return;
                }

                const tipoSolicitacao = 'de novo padrão';
                setMensagem(`✓ Solicitação ${tipoSolicitacao} para "${solicitacaoSelecionada.produto}" aprovada com sucesso!`);
                setTipoMensagem("sucesso");
                
                setTimeout(() => {
                    removerSolicitacaoDaFila(solicitacaoSelecionada.id);
                }, 2000);
            } catch (error) {
                console.error('Erro ao aprovar solicitação:', error);
                setMensagem('Erro ao aprovar solicitação. Tente novamente.');
                setTipoMensagem("erro");
            }
        }
    };

    const handleRejeitar = async () => {
        if (solicitacaoSelecionada) {
            try {
                const { error } = await supabase
                    .from('tb_padraoEmbalagem')
                    .delete()
                    .eq('id', solicitacaoSelecionada.id);

                if (error) {
                    console.error('Erro ao rejeitar solicitação:', error);
                    setMensagem('Erro ao rejeitar solicitação. Tente novamente.');
                    setTipoMensagem("erro");
                    return;
                }

                const tipoSolicitacao = 'de novo padrão';
                setMensagem(`✗ Solicitação ${tipoSolicitacao} para "${solicitacaoSelecionada.produto}" rejeitada.`);
                setTipoMensagem("erro");
                
                setTimeout(() => {
                    removerSolicitacaoDaFila(solicitacaoSelecionada.id);
                }, 2000);
            } catch (error) {
                console.error('Erro ao rejeitar solicitação:', error);
                setMensagem('Erro ao rejeitar solicitação. Tente novamente.');
                setTipoMensagem("erro");
            }
        }
    };

    const removerSolicitacaoDaFila = (id) => {
        const novaFila = fila.filter(solicitacao => solicitacao.id !== id);
        setFila(novaFila);
        setSolicitacaoSelecionada(null);
        setPadraoAnterior(null);
        setIsEdicao(false);
        setMensagem("");
    };

    const selecionarSolicitacao = async (solicitacao) => {
        setSolicitacaoSelecionada(solicitacao);
        setMensagem("");
        
        // Verificar se há um padrão anterior (obsoleto) com o mesmo código de molde
        const { data, error } = await supabase
            .from('tb_padraoEmbalagem')
            .select('*')
            .eq('codMolde', solicitacao.codMolde)
            .eq('statusPadrao', 'obsoleto')
            .order('created_at', { ascending: false })
            .limit(1);
        
        if (!error && data && data.length > 0) {
            // É uma edição - temos um padrão anterior
            const anterior = data[0];
            setPadraoAnterior({
                id: anterior.id,
                produto: anterior.descProduto,
                maoObra: anterior.mdo,
                codMolde: anterior.codMolde,
                tipo: anterior.tipoProduto,
                saco: anterior.sacoPlastico,
                cxHortifruti: anterior.cxHortifruti,
                pilha: anterior.pilha,
                pallet: anterior.pallet,
                gaiola: anterior.gaiola,
                total: anterior.totalEmbalagem,
                embalagem: anterior.tipoEmbalagem,
                observacao: anterior.obsPadrao,
                cavidades: anterior.nCav,
                pesoMedio: anterior.pesoMedio,
                cicloMedio: anterior.cicloProdutivo,
                ph: anterior.phProdutivo,
                maquina1: anterior.Maq1,
                maquina2: anterior.Maq2,
                maquina3: anterior.Maq3,
                maquina4: anterior.Maq4,
            });
            setIsEdicao(true);
        } else {
            // É um novo padrão
            setPadraoAnterior(null);
            setIsEdicao(false);
        }
    };

    const voltarParaLista = () => {
        setSolicitacaoSelecionada(null);
        setPadraoAnterior(null);
        setIsEdicao(false);
        setMensagem("");
    };

    const handleLogout = () => {
        setAutenticado(false);
        setUsuario("");
        setSenha("");
        setMensagem("");
        setTipoMensagem("");
    };

    if (!autenticado) {
        return (
            <section style={{ margin: "0px -120px", padding: "40px" }}>
                <h1>Aprovação de Novo Padrão</h1>
                <div style={styles.loginContainer}>
                    <h2>Autenticação Requerida</h2>
                    <form onSubmit={handleLogin}>
                        <div style={styles.formGroup}>
                            <label>Usuário:</label>
                            <input
                                type="text"
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                                placeholder="Digite o usuário"
                                style={styles.input}
                                autoFocus
                            />
                        </div>
                        <div style={styles.formGroup}>
                            <label>Senha:</label>
                            <input
                                type="password"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                placeholder="Digite a senha"
                                style={styles.input}
                            />
                        </div>
                        {mensagem && <p style={styles.erro}>{mensagem}</p>}
                        <button type="submit" style={styles.botao}>Entrar</button>
                    </form>
                </div>
            </section>
        );
    }

    return (
        <section style={{ margin: "0px -120px", padding: "20px" }}>
            <div style={styles.header}>
                <h1>Aprovação de Novo Padrão</h1>
                <button onClick={handleLogout} style={styles.botaoLogout}>Sair</button>
            </div>

            {fila.length > 0 ? (
                <div style={styles.container}>
                    {!solicitacaoSelecionada ? (
                        // Lista de cards
                        <div>
                            <h2 style={styles.tituloLista}>Solicitações Pendentes ({fila.length})</h2>
                            <div style={styles.gridCards}>
                                {fila.map((solicitacao) => {
                                    // Verificar se há um padrão anterior (obsoleto) para saber se é edição
                                    const temAnterior = fila.some(s => s.codMolde === solicitacao.codMolde && s.status === 'obsoleto');
                                    
                                    return (
                                        <div 
                                            key={solicitacao.id} 
                                            style={styles.card}
                                            onClick={() => selecionarSolicitacao(solicitacao)}
                                        >
                                            <div style={styles.cardHeader}>
                                                <span style={temAnterior ? styles.tipoBaggeEdicao : styles.tipoBaggeNova}>
                                                    {temAnterior ? '✏️ Edição' : '✨ Novo Padrão'}
                                                </span>
                                            </div>
                                            <div style={styles.cardContent}>
                                                <h3 style={styles.cardTitle}>{solicitacao.produto}</h3>
                                                <p style={styles.cardMolde}><strong>Molde:</strong> {solicitacao.codMolde}</p>
                                                <p style={styles.cardData}><strong>Data:</strong> {solicitacao.dataEdicao}</p>
                                            </div>
                                            <div style={styles.cardFooter}>
                                                <span style={styles.clickHint}>Clique para revisar</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        // Detalhes da solicitação selecionada
                        <div style={styles.solicitacaoContainer}>
                            <div style={styles.voltarHeader}>
                                <button onClick={voltarParaLista} style={styles.botaoVoltar}>
                                    ← Voltar para Lista
                                </button>
                            </div>

                            <h3>Dados da Solicitação: {solicitacaoSelecionada.produto}</h3>
                            
                            {isEdicao && padraoAnterior && (
                                <div style={styles.avisoEdicao}>
                                    <strong>⚠️ Esta é uma solicitação de EDIÇÃO</strong>
                                    <p>Verifique as alterações ao lado →</p>
                                </div>
                            )}
                            
                            <div>
                                {isEdicao && padraoAnterior ? (
                                    // Exibir lado a lado - Padrão anterior e novo
                                    <div style={styles.comparacaoContainer}>
                                        <div style={styles.coluna}>
                                            <h4 style={styles.tituloAnterior}>Padrão Anterior (Obsoleto)</h4>
                                            <table style={styles.tableAnterior}>
                                                <tbody>
                                                    {Object.keys(padraoAnterior).map((chave) => {
                                                        if (chave === 'id') return null;
                                                        
                                                        return (
                                                            <tr key={chave}>
                                                                <td style={{...styles.td, fontWeight: 'bold', width: '40%'}}>{chave}</td>
                                                                <td style={{...styles.td, width: '60%'}}>{String(padraoAnterior[chave])}</td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>

                                        <div style={styles.coluna}>
                                            <h4 style={styles.tituloNovo}>Novo Padrão (Em Aprovação)</h4>
                                            <table style={styles.tableNova}>
                                                <tbody>
                                                    {Object.keys(solicitacaoSelecionada).map((chave) => {
                                                        if (chave === 'status' || chave === 'dataEdicao' || chave === 'tipo' || chave === 'id' || chave === 'created_at' || chave === 'tipoSolicitacao' || chave === 'padraoAnterior') return null;
                                                        
                                                        const valorAnterior = padraoAnterior[chave];
                                                        const valorNovo = solicitacaoSelecionada[chave];
                                                        const mudou = String(valorAnterior) !== String(valorNovo);
                                                        
                                                        return (
                                                            <tr key={chave} style={mudou ? styles.linhaAlterada : {}}>
                                                                <td style={{...styles.td, fontWeight: 'bold', width: '40%'}}>{chave}</td>
                                                                <td style={{...styles.td, width: '60%', backgroundColor: mudou ? '#fff3cd' : 'transparent', fontWeight: mudou ? 'bold' : 'normal'}}>
                                                                    {String(valorNovo)}
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : (
                                    // Novo padrão - exibir apenas os dados da solicitação
                                    <div>
                                        <h4>Dados do Novo Padrão</h4>
                                        <table style={styles.tableNova}>
                                            <tbody>
                                                {Object.keys(solicitacaoSelecionada).map((chave) => {
                                                    if (chave === 'status' || chave === 'dataEdicao' || chave === 'tipo' || chave === 'id' || chave === 'created_at' || chave === 'tipoSolicitacao' || chave === 'padraoAnterior') return null;
                                                    
                                                    return (
                                                        <tr key={chave}>
                                                            <td style={{...styles.td, fontWeight: 'bold', width: '30%'}}>{chave}</td>
                                                            <td style={{...styles.td, width: '70%'}}>{String(solicitacaoSelecionada[chave])}</td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>

                            <div style={styles.infoBox}>
                                <p><strong>Data da Solicitação:</strong> {solicitacaoSelecionada.dataEdicao}</p>
                                <p><strong>Status:</strong> {solicitacaoSelecionada.status}</p>
                            </div>

                            {mensagem && (
                                <p style={tipoMensagem === 'sucesso' ? styles.sucesso : styles.erro}>
                                    {mensagem}
                                </p>
                            )}

                            <div style={styles.botoesAcao}>
                                <button 
                                    onClick={handleAprovar} 
                                    style={styles.botaoAprovar}
                                    disabled={mensagem !== ""}
                                >
                                    ✓ Aprovar
                                </button>
                                <button 
                                    onClick={handleRejeitar} 
                                    style={styles.botaoRejeitar}
                                    disabled={mensagem !== ""}
                                >
                                    ✗ Rejeitar
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ) : autenticado ? (
                <div style={styles.semSolicitacoes}>
                    <h2>✓ Nenhuma solicitação pendente</h2>
                    <p>Todas as solicitações foram processadas.</p>
                </div>
            ) : null}
        </section>
    );
}

const styles = {
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px"
    },
    loginContainer: {
        maxWidth: "400px",
        margin: "50px auto",
        padding: "30px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    },
    formGroup: {
        marginBottom: "15px",
        display: "flex",
        flexDirection: "column"
    },
    input: {
        padding: "10px",
        fontSize: "14px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        marginTop: "5px"
    },
    botao: {
        padding: "10px 20px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px",
        width: "100%"
    },
    botaoLogout: {
        padding: "8px 16px",
        backgroundColor: "#f44336",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
    },
    container: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px"
    },
    solicitacaoContainer: {
        backgroundColor: "#fafafa",
        padding: "20px",
        borderRadius: "8px",
        border: "1px solid #e0e0e0"
    },
    tipoBaggeEdicao: {
        backgroundColor: "#fff3cd",
        color: "#856404",
        padding: "5px 12px",
        borderRadius: "20px",
        fontSize: "14px",
        fontWeight: "bold"
    },
    tipoBaggeNova: {
        backgroundColor: "#d4edda",
        color: "#155724",
        padding: "5px 12px",
        borderRadius: "20px",
        fontSize: "14px",
        fontWeight: "bold"
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: "20px",
        marginTop: "15px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
    },
    tableNova: {
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: "20px",
        marginTop: "15px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
    },
    td: {
        border: "1px solid #ddd",
        padding: "12px",
        textAlign: "center"
    },
    rowMudanca: {
        backgroundColor: "#fff3cd"
    },
    infoBox: {
        backgroundColor: "#e3f2fd",
        padding: "15px",
        borderRadius: "4px",
        marginBottom: "20px",
        borderLeft: "4px solid #2196F3"
    },
    botoesAcao: {
        display: "flex",
        gap: "10px",
        marginTop: "20px",
        marginBottom: "15px"
    },
    botaoAprovar: {
        flex: 1,
        padding: "12px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
        transition: "opacity 0.3s"
    },
    botaoRejeitar: {
        flex: 1,
        padding: "12px",
        backgroundColor: "#f44336",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
        transition: "opacity 0.3s"
    },
    semSolicitacoes: {
        textAlign: "center",
        padding: "50px 20px",
        backgroundColor: "#f5f5f5",
        borderRadius: "4px"
    },
    tituloLista: {
        marginBottom: "20px",
        color: "#333"
    },
    gridCards: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "20px",
        marginTop: "20px"
    },
    card: {
        backgroundColor: "#fff",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: "20px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    },
    cardHeader: {
        marginBottom: "15px"
    },
    cardContent: {
        marginBottom: "15px"
    },
    cardTitle: {
        margin: "0 0 10px 0",
        fontSize: "18px",
        fontWeight: "bold",
        color: "#333"
    },
    cardMolde: {
        margin: "5px 0",
        fontSize: "14px",
        color: "#666"
    },
    cardData: {
        margin: "5px 0",
        fontSize: "12px",
        color: "#888"
    },
    cardFooter: {
        textAlign: "center",
        paddingTop: "10px",
        borderTop: "1px solid #eee"
    },
    clickHint: {
        fontSize: "12px",
        color: "#2196F3",
        fontStyle: "italic"
    },
    voltarHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px"
    },
    botaoVoltar: {
        padding: "8px 16px",
        backgroundColor: "#666",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "14px"
    },
    erro: {
        color: "#d32f2f",
        marginBottom: "15px",
        padding: "10px",
        backgroundColor: "#ffebee",
        borderRadius: "4px",
        textAlign: "center"
    },
    sucesso: {
        color: "#388e3c",
        marginBottom: "15px",
        padding: "10px",
        backgroundColor: "#e8f5e9",
        borderRadius: "4px",
        textAlign: "center",
        fontWeight: "bold"
    },
    comparacaoContainer: {
        display: "flex",
        gap: "20px",
        marginBottom: "20px",
        width: "100%"
    },
    coluna: {
        flex: 1,
        backgroundColor: "#fff",
        padding: "15px",
        borderRadius: "4px",
        border: "1px solid #ddd"
    },
    tituloAnterior: {
        color: "#d32f2f",
        borderBottom: "2px solid #d32f2f",
        paddingBottom: "10px",
        marginBottom: "15px"
    },
    tituloNovo: {
        color: "#388e3c",
        borderBottom: "2px solid #388e3c",
        paddingBottom: "10px",
        marginBottom: "15px"
    },
    tableAnterior: {
        width: "100%",
        borderCollapse: "collapse",
        opacity: "0.7"
    },
    linhaAlterada: {
        backgroundColor: "#fff3cd"
    },
    avisoEdicao: {
        backgroundColor: "#fff3cd",
        border: "2px solid #f9a825",
        padding: "15px",
        borderRadius: "4px",
        marginBottom: "20px",
        color: "#856404",
        fontWeight: "bold"
    }
};