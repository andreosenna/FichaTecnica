import React, { useState, useEffect } from 'react';
import supabase from '../../conexao/conexao';

export default function PadraoEmbalagem() {
    const [padrao, setPadrao] = useState([]);
    const [loading, setLoading] = useState(true);

    const [produto, setProduto] = useState("");
    const [maoObra, setMaoObra] = useState("");
    const [codMolde, setCodMolde] = useState("");
    const [tipo, setTipo] = useState("");
    const [saco, setSaco] = useState("");
    const [cxHortifruti, setCxHortifruti] = useState("");
    const [pilha, setPilha] = useState("");
    const [pallet, setPallet] = useState("");
    const [gaiola, setGaiola] = useState("");
    const [total, setTotal] = useState("");
    const [embalagem, setEmbalagem] = useState("");
    const [observacao, setObservacao] = useState("");
    const [cavidades, setCavidades] = useState("");
    const [pesoMedio, setPesoMedio] = useState("");
    const [cicloMedio, setCicloMedio] = useState("");
    const [ph, setPh] = useState("");
    const [maquina1, setMaquina1] = useState("");
    const [maquina2, setMaquina2] = useState("");
    const [maquina3, setMaquina3] = useState("");
    const [maquina4, setMaquina4] = useState("");
    const [produtoEditado, setProdutoEditado] = useState(null);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [indexEdicao, setIndexEdicao] = useState(null);
    const [formularioVisivel, setFormularioVisivel] = useState(false);

    useEffect(() => {
        carregarPadroes();
    }, [])

    const carregarPadroes = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('tb_padraoEmbalagem')
                .select('*')
                .eq('statusPadrao', 'aprovado')
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Erro ao carregar padrões:', error);
                return;
            }

            // Mapear dados do Supabase para o formato do componente
            const padroesMapeados = data.map(item => ({
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
                created_at: item.created_at
            }));

            setPadrao(padroesMapeados);
        } catch (error) {
            console.error('Erro ao carregar padrões:', error);
        } finally {
            setLoading(false);
        }
    };
const handleAddPadrao = () => {
    const novoPadrao = {
        descProduto: produto,
        mdo: parseInt(maoObra) || 0,
        codMolde,
        tipoProduto: tipo,
        sacoPlastico: parseInt(saco) || 0,
        cxHortifruti: parseInt(cxHortifruti) || 0,
        pilha: parseInt(pilha) || 0,
        pallet: parseInt(pallet) || 0,
        gaiola: parseInt(gaiola) || 0,
        totalEmbalagem: parseInt(total) || 0,
        tipoEmbalagem: embalagem,
        obsPadrao: observacao,
        nCav: parseInt(cavidades) || 0,
        pesoMedio: parseFloat(pesoMedio) || 0,
        cicloProdutivo: parseFloat(cicloMedio) || 0,
        phProdutivo: parseInt(ph) || 0,
        Maq1: maquina1,
        Maq2: maquina2,
        Maq3: maquina3,
        Maq4: maquina4,
        statusPadrao: "pendente"
    };

    if (modoEdicao) {
        // Se está editando, adiciona à fila de aprovação
        adicionarSolicitacao(novoPadrao, 'edicao', produtoEditado);
    } else {
        // Se está adicionando novo padrão, adiciona à fila de aprovação
        adicionarSolicitacao(novoPadrao, 'nova');
    }
};

const adicionarSolicitacao = async (dadosBanco, tipoSolicitacao, padraoAnterior = null) => {
    try {
        // Se for edição, marca o padrão anterior como obsoleto
        if (tipoSolicitacao === 'edicao' && padraoAnterior) {
            const { error: updateError } = await supabase
                .from('tb_padraoEmbalagem')
                .update({ statusPadrao: 'obsoleto' })
                .eq('id', padraoAnterior.id);

            if (updateError) {
                console.error('Erro ao atualizar padrão anterior:', updateError);
                alert('Erro ao processar a edição. Tente novamente.');
                return;
            }
        }

        // Insere o novo padrão (novo ou edição)
        const { data, error } = await supabase
            .from('tb_padraoEmbalagem')
            .insert([dadosBanco])
            .select();

        if (error) {
            console.error('Erro ao adicionar solicitação:', error);
            alert('Erro ao adicionar solicitação. Tente novamente.');
            return;
        }

        // Limpa formulário e mostra mensagem de sucesso
        limparFormulario();
        setFormularioVisivel(false);
        alert(`Solicitação de ${tipoSolicitacao === 'edicao' ? 'edição' : 'novo padrão'} para "${dadosBanco.descProduto}" adicionada com sucesso!`);
    } catch (error) {
        console.error('Erro ao adicionar solicitação:', error);
        alert('Erro ao adicionar solicitação. Tente novamente.');
    }
};

const handleEditar = (pad) => {
    setProduto(pad.produto);
    setMaoObra(pad.maoObra);
    setCodMolde(pad.codMolde);
    setTipo(pad.tipo);
    setSaco(pad.saco);
    setCxHortifruti(pad.cxHortifruti);
    setPilha(pad.pilha);
    setPallet(pad.pallet);
    setGaiola(pad.gaiola);
    setTotal(pad.total);
    setEmbalagem(pad.embalagem);
    setObservacao(pad.observacao);
    setCavidades(pad.cavidades);
    setPesoMedio(pad.pesoMedio);
    setCicloMedio(pad.cicloMedio);
    setPh(pad.ph);
    setMaquina1(pad.maquina1);
    setMaquina2(pad.maquina2);
    setMaquina3(pad.maquina3);
    setMaquina4(pad.maquina4);
    setProdutoEditado(pad);
    setModoEdicao(true);
    setFormularioVisivel(true);
};

const handleOcultar = () => {
    setFormularioVisivel(!formularioVisivel);
    if (formularioVisivel) {
        limparFormulario();
        setModoEdicao(false);
    }
};

const limparFormulario = () => {
    setProduto("");
    setMaoObra("");
    setCodMolde("");
    setTipo("");
    setSaco("");
    setCxHortifruti("");
    setPilha("");
    setPallet("");
    setGaiola("");
    setTotal("");
    setEmbalagem("");
    setObservacao("");
    setCavidades("");
    setPesoMedio("");
    setCicloMedio("");
    setPh("");
    setMaquina1("");
    setMaquina2("");
    setMaquina3("");
    setMaquina4("");
    setProdutoEditado(null);
    setModoEdicao(false);
};

    return (
        <>
            <section style={{ margin: "0px -120px" }}>
                <div style={styles.header}>
                    <h1>Padrão de Embalagem</h1>
                    <button onClick={() => window.location.href = '/AprovacaoNovoPadrao'} style={styles.botaoAprovacao}>
                        📋 Aprovações Pendentes
                    </button>
                </div>
                {loading ? (
                    <div style={{ textAlign: 'center', padding: '50px' }}>
                        <p>Carregando padrões de embalagem...</p>
                    </div>
                ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Mão de Obra</th>
                            <th>Código do Molde</th>
                            <th>Tipo</th>
                            <th>Saco</th>
                            <th>Caixa Hortifruti</th>
                            <th>Pilha</th>
                            <th>Pallet</th>
                            <th>Gaiola</th>
                            <th>Total</th>
                            <th>Embalagem</th>
                            <th>Observação</th>
                            <th>Cavidades</th>
                            <th>Peso Médio (kg)</th>
                            <th>Ciclo Médio (s)</th>
                            <th>PH</th>
                            <th>Máquina 1</th>
                            <th>Máquina 2</th>
                            <th>Máquina 3</th>
                            <th>Máquina 4</th>
                            <th>Ações</th>

                        </tr>
                    </thead>
                    <tbody>
                        {padrao.map((pad, index) => (
                            <tr key={pad.codMolde}>
                                <td><strong>{pad.produto}</strong></td>
                                <td>{pad.maoObra}</td>
                                <td>{pad.codMolde}</td>
                                <td>{pad.tipo}</td>
                                <td>{pad.saco}</td>
                                <td>{pad.cxHortifruti}</td>
                                <td>{pad.pilha}</td>
                                <td>{pad.pallet}</td>
                                <td>{pad.gaiola}</td>
                                <td>{pad.total}</td>
                                <td>{pad.embalagem}</td>
                                <td>{pad.observacao}</td>
                                <td>{pad.cavidades}</td>
                                <td>{pad.pesoMedio}</td>
                                <td>{pad.cicloMedio}</td>
                                <td>{pad.ph}</td>
                                <td>{pad.maquina1}</td>
                                <td>{pad.maquina2}</td>
                                <td>{pad.maquina3}</td>
                                <td>{pad.maquina4}</td>
                                <td>
                                    <button onClick={e=>{handleEditar(pad)}}>Editar</button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
                )}
          <button onClick={handleOcultar}>{formularioVisivel ? "Cancelar" : "Novo"}</button>

{/*  AREA DE ADIÇÃO E EDIÇÃO*/ }
                {formularioVisivel && (
                <div title={modoEdicao ? "Editar Padrão de Embalagem" : "Adicionar Novo Padrão de Embalagem"}>
                    <div>
                        <h3>{modoEdicao ? "Editar Padrão de Embalagem" : "Adicionar Novo Padrão de Embalagem"} </h3>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>Mão de Obra</th>
                                <th>Código do Molde</th>
                                <th>Tipo</th>
                                <th>Saco</th>
                                <th>Caixa Hortifruti</th>
                                <th>Pilha</th>
                                <th>Pallet</th>
                                <th>Gaiola</th>
                                <th>Total</th>
                                <th>Embalagem</th>
                                <th>Observação</th>
                                <th>Cavidades</th>
                                <th>Peso Médio (kg)</th>
                                <th>Ciclo Médio (s)</th>
                                <th>PH</th>
                                <th>Máquina 1</th>
                                <th>Máquina 2</th>
                                <th>Máquina 3</th>
                                <th>Máquina 4</th>
                                <th>Ações</th>

                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td style={styles.td}><input style={styles.input} type="text" value={produto} onChange={(e) => setProduto(e.target.value)} /></td>
                                <td style={styles.td}><input style={styles.input} type="text" value={maoObra} onChange={(e) => setMaoObra(e.target.value)} /></td>
                                <td style={styles.td}><input style={styles.input} type="text" value={codMolde} onChange={(e) => setCodMolde(e.target.value)} /></td>
                                <td style={styles.td}><input style={styles.input} type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} /></td>
                                <td style={styles.td}><input style={styles.input} type="text" value={saco} onChange={(e) => setSaco(e.target.value)} /></td>
                                <td style={styles.td}><input style={styles.input} type="text" value={cxHortifruti} onChange={(e) => setCxHortifruti(e.target.value)} /></td>
                                <td style={styles.td}><input style={styles.input} type="text" value={pilha} onChange={(e) => setPilha(e.target.value)} /></td>
                                <td style={styles.td}><input style={styles.input} type="text" value={pallet} onChange={(e) => setPallet(e.target.value)} /></td>
                                <td style={styles.td}><input style={styles.input} type="text" value={gaiola} onChange={(e) => setGaiola(e.target.value)} /></td>
                                <td style={styles.td}><input style={styles.input} type="text" value={total} onChange={(e) => setTotal(e.target.value)} /></td>
                                <td style={styles.td}><input style={styles.input} type="text" value={embalagem} onChange={(e) => setEmbalagem(e.target.value)} /></td>
                                <td style={styles.td}><input style={styles.input} type="text" value={observacao} onChange={(e) => setObservacao(e.target.value)} /></td>
                                <td style={styles.td}><input style={styles.input} type="text" value={cavidades} onChange={(e) => setCavidades(e.target.value)} /></td>
                                <td style={styles.td}><input style={styles.input} type="text" value={pesoMedio} onChange={(e) => setPesoMedio(e.target.value)} /></td>
                                <td style={styles.td}><input style={styles.input} type="text" value={cicloMedio} onChange={(e) => setCicloMedio(e.target.value)} /></td>
                                <td style={styles.td}><input style={styles.input} type="text" value={ph} onChange={(e) => setPh(e.target.value)} /></td>
                                <td style={styles.td}><input style={styles.input} type="text" value={maquina1} onChange={(e) => setMaquina1(e.target.value)} /></td>
                                <td style={styles.td}><input style={styles.input} type="text" value={maquina2} onChange={(e) => setMaquina2(e.target.value)} /></td>
                                <td style={styles.td}><input style={styles.input} type="text" value={maquina3} onChange={(e) => setMaquina3(e.target.value)} /></td>
                                <td style={styles.td}><input style={styles.input} type="text" value={maquina4} onChange={(e) => setMaquina4(e.target.value)} /></td>
                               
                               
                               
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={handleAddPadrao}>
                        {modoEdicao ? "Solicitar Edição" : "Solicitar Novo Padrão"}
                    </button>
                </div>
                )}


            </section>


        </>
    )
}

const styles = {
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
        padding: "10px 0",
        borderBottom: "1px solid #ddd"
    },
    botaoAprovacao: {
        padding: "10px 20px",
        backgroundColor: "#2196F3",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "bold",
        transition: "background-color 0.3s"
    },
td: {
    border: "1px solid black",
    padding: "0px",
    textAlign: "center"
},

th: {
    border: "1px solid black",
    padding: "8px",
    textAlign: "center",
    backgroundColor: "#f2f2f2"  
},
input: {
    width: "100%",
    margin: "0px 0px 0px 0px",
    padding: "0px 0px 0px 0px",
    border:"0px solid black",
    textAlign: "center"


}

}