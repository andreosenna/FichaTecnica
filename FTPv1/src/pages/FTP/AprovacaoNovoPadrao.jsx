import React, { useState, useEffect } from 'react';

export default function AprovacaoNovoPadrao() {
    const [autenticado, setAutenticado] = useState(false);
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [fila, setFila] = useState([]);
    const [solicitacaoSelecionada, setSolicitacaoSelecionada] = useState(null);
    const [mensagem, setMensagem] = useState("");
    const [tipoMensagem, setTipoMensagem] = useState(""); // 'sucesso' ou 'erro'

    useEffect(() => {
        carregarFila();
    }, []);

    const carregarFila = () => {
        const filaArmazenada = localStorage.getItem('filaAprovisacao');
        if (filaArmazenada) {
            const filaArray = JSON.parse(filaArmazenada);
            setFila(filaArray);
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

    const handleAprovar = () => {
        if (solicitacaoSelecionada) {
            const tipoSolicitacao = solicitacaoSelecionada.tipo === 'edicao' ? 'de edição' : 'de novo padrão';
            setMensagem(`✓ Solicitação ${tipoSolicitacao} para "${solicitacaoSelecionada.produto}" aprovada com sucesso!`);
            setTipoMensagem("sucesso");
            
            setTimeout(() => {
                removerSolicitacaoDaFila(solicitacaoSelecionada.id);
            }, 2000);
        }
    };

    const handleRejeitar = () => {
        if (solicitacaoSelecionada) {
            const tipoSolicitacao = solicitacaoSelecionada.tipo === 'edicao' ? 'de edição' : 'de novo padrão';
            setMensagem(`✗ Solicitação ${tipoSolicitacao} para "${solicitacaoSelecionada.produto}" rejeitada.`);
            setTipoMensagem("erro");
            
            setTimeout(() => {
                removerSolicitacaoDaFila(solicitacaoSelecionada.id);
            }, 2000);
        }
    };

    const removerSolicitacaoDaFila = (id) => {
        const novaFila = fila.filter(solicitacao => solicitacao.id !== id);
        setFila(novaFila);
        localStorage.setItem('filaAprovisacao', JSON.stringify(novaFila));
        setSolicitacaoSelecionada(null);
        setMensagem("");
    };

    const selecionarSolicitacao = (solicitacao) => {
        setSolicitacaoSelecionada(solicitacao);
        setMensagem("");
    };

    const voltarParaLista = () => {
        setSolicitacaoSelecionada(null);
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
                                {fila.map((solicitacao) => (
                                    <div 
                                        key={solicitacao.id} 
                                        style={styles.card}
                                        onClick={() => selecionarSolicitacao(solicitacao)}
                                    >
                                        <div style={styles.cardHeader}>
                                            <span style={
                                                solicitacao.tipo === 'edicao' 
                                                    ? styles.tipoBaggeEdicao 
                                                    : styles.tipoBaggeNova
                                            }>
                                                {solicitacao.tipo === 'edicao' ? '✏️ Edição' : '✨ Novo'}
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
                                ))}
                            </div>
                        </div>
                    ) : (
                        // Detalhes da solicitação selecionada
                        <div style={styles.solicitacaoContainer}>
                            <div style={styles.voltarHeader}>
                                <button onClick={voltarParaLista} style={styles.botaoVoltar}>
                                    ← Voltar para Lista
                                </button>
                                <span style={
                                    solicitacaoSelecionada.tipo === 'edicao' 
                                        ? styles.tipoBaggeEdicao 
                                        : styles.tipoBaggeNova
                                }>
                                    {solicitacaoSelecionada.tipo === 'edicao' ? '✏️ Edição' : '✨ Novo Padrão'}
                                </span>
                            </div>

                            <h3>Dados da Solicitação: {solicitacaoSelecionada.produto}</h3>
                            
                            {solicitacaoSelecionada.tipo === 'edicao' && solicitacaoSelecionada.padraoAnterior && (
                                <div>
                                    <h4>Comparação: Valores Anteriores vs Novos</h4>
                                    <table style={styles.table}>
                                        <thead>
                                            <tr>
                                                <th>Campo</th>
                                                <th>Valor Anterior</th>
                                                <th>Novo Valor</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Object.keys(solicitacaoSelecionada.padraoAnterior).map((chave) => {
                                                if (chave === 'status' || chave === 'dataEdicao' || chave === 'tipo' || chave === 'id') return null;
                                                const anterior = solicitacaoSelecionada.padraoAnterior[chave];
                                                const novo = solicitacaoSelecionada[chave];
                                                const mudou = anterior !== novo;

                                                return (
                                                    <tr key={chave} style={mudou ? styles.rowMudanca : {}}>
                                                        <td style={styles.td}><strong>{chave}</strong></td>
                                                        <td style={styles.td}>{String(anterior)}</td>
                                                        <td style={styles.td}>{String(novo)}</td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            )}

                            {solicitacaoSelecionada.tipo === 'nova' && (
                                <div>
                                    <h4>Dados do Novo Padrão</h4>
                                    <table style={styles.tableNova}>
                                        <tbody>
                                            {Object.keys(solicitacaoSelecionada).map((chave) => {
                                                if (chave === 'status' || chave === 'dataEdicao' || chave === 'tipo' || chave === 'id' || chave === 'padraoAnterior') return null;
                                                
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
    }
};