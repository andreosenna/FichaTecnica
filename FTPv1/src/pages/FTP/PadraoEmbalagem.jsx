import React, { useState, useEffect } from 'react';

export default function PadraoEmbalagem() {
    const dado1 = [{
        produto: "Cadeira Monobloco Preta",
        maoObra: 1,
        codMolde: "12010201080",
        tipo: "PA",
        saco: 0,
        cxHortifruti: 0,
        pilha: 25,
        pallet: 0,
        gaiola: 0,
        total: 25,
        embalagem: "Não há",
        observacao: "empilhar após 30 min",
        cavidades: 1,
        pesoMedio: 2.10,
        cicloMedio: 57.8,
        ph: 62,
        maquina1: "J800-1",
        maquina2: "J800-2",
        maquina3: "J800-5",
        maquina4: 0
    },

    {
        produto: "Cadeira Monobloco Branca",
        maoObra: 1,
        codMolde: "12010201080",
        tipo: "PA",
        saco: 0,
        cxHortifruti: 0,
        pilha: 25,
        pallet: 0,
        gaiola: 0,
        total: 25,
        embalagem: "Não há",
        observacao: "empilhar após 30 min",
        cavidades: 1,
        pesoMedio: 2.10,
        cicloMedio: 57.8,
        ph: 62,
        maquina1: "J800-1",
        maquina2: "J800-2",
        maquina3: "J800-5",
        maquina4: 0
    }
    ]

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
    const [padrao, setPadrao] = useState([]);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [indexEdicao, setIndexEdicao] = useState(null);
    const [formularioVisivel, setFormularioVisivel] = useState(false);

    useEffect(() => {
        setPadrao(dado1)
    }, [])
const handleAddPadrao = () => {
    const novoPadrao = {
        id: Date.now(),
        produto,
        maoObra,
        codMolde,
        tipo,
        saco,
        cxHortifruti,
        pilha,
        pallet,
        gaiola,
        total,
        embalagem,
        observacao,
        cavidades,
        pesoMedio,
        cicloMedio,
        ph,
        maquina1,
        maquina2,
        maquina3,
        maquina4,
        status: "pendente",
        dataEdicao: new Date().toLocaleString('pt-BR')
    };

    if (modoEdicao) {
        // Se está editando, adiciona à fila de aprovação
        const dataEdicao = {
            ...novoPadrao,
            padraoAnterior: produtoEditado,
            tipo: 'edicao'
        };
        adicionarSolicitacao(dataEdicao);
    } else {
        // Se está adicionando novo padrão, adiciona à fila de aprovação
        const dataNova = {
            ...novoPadrao,
            tipo: 'nova'
        };
        adicionarSolicitacao(dataNova);
    }
};

const adicionarSolicitacao = (solicitacao) => {
    // Recupera fila existente
    const filaExistente = localStorage.getItem('filaAprovisacao');
    const fila = filaExistente ? JSON.parse(filaExistente) : [];

    // Adiciona nova solicitação
    fila.push(solicitacao);
    localStorage.setItem('filaAprovisacao', JSON.stringify(fila));

    // Limpa formulário e mostra mensagem de sucesso
    limparFormulario();
    setFormularioVisivel(false);
    alert(`Solicitação de ${solicitacao.tipo === 'edicao' ? 'edição' : 'novo padrão'} para "${solicitacao.produto}" adicionada à fila de aprovação!`);
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