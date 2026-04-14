
import React,{ useState } from 'react'

export default function OrdemServico(){
const [listaOPs, setListaOPs] = useState([
    { os: "OS001", cliente: "Empresa X", abertura: "01/01/2024", previsao: "05/01/2024", status: "Aberta" },
    { os: "OS002", cliente: "Empresa Y", abertura: "05/01/2024", previsao: "10/01/2024", status: "Em Andamento" },
    { os: "OS003", cliente: "Empresa Z", abertura: "10/01/2024", previsao: "15/01/2024", status: "Fechada" }
]);
const [maquina, setMaquina] = useState("");
const [dataAbertura, setDataAbertura] = useState("");
const [previsao, setPrevisao] = useState("");
const [status, setStatus] = useState("");
const [mostrarForm, setMostrarForm] = useState(false);

const mostrarFormulario = (e) => {
   setMostrarForm(e);
}
const fecharFormulario = (e) => {
    setMostrarForm(e);
}


return(
    <>
    <h1>Ordem de Serviço</h1>

    <table>
        <thead>
            <tr>
                <th>OS</th>
                <th>Cliente</th>
                <th>Data de Abertura</th>
                <th>Previsão</th>
                <th>Status</th>
                <th>Ações</th>

            </tr>
        </thead>
        <tbody>
            {listaOPs.map((op, index) => (
                <tr key={index}>
                    <td>{op.os}</td>
                    <td>{op.cliente}</td>
                    <td>{op.abertura}</td>
                    <td>{op.previsao}</td>
                    <td>{op.status}</td>
                    <td>
                        <button>Editar</button>
                        <button>Excluir</button>
                    </td>

                </tr>
            ))}
           
        </tbody>
    </table>
<br/>

   <button onClick={() => mostrarFormulario(true)}>Nova OS</button>
   <button onClick={() => fecharFormulario(false)}>Fechar</button>

{
mostrarForm && (
    <form>
        <input type="text" placeholder="Máquina" value={maquina} onChange={(e) => setMaquina(e.target.value)} required />
        <input type="date" placeholder="Data de Abertura" value={dataAbertura} onChange={(e) => setDataAbertura(e.target.value)} required />
        <input type="date" placeholder="Previsão" value={previsao} onChange={(e) => setPrevisao(e.target.value)} required />
        <select value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option value="">Selecione o Status</option>
            <option value="Aberta">Aberta</option>
            <option value="Em Andamento">Em Andamento</option>
            <option value="Fechada">Fechada</option>
        </select>
        <button type="submit">Adicionar OS</button>
    </form>  
)}
    </>
)

}
