import React, {useEffect, useState} from 'react'

URL="https://69c55f5e8a5b6e2dec2c4e9b.mockapi.io/gfila/api/upLoad"

export default function GDOC(){


const[codDoc,setCodDoc] = useState("")
const[descDoc,setDescDoc] = useState("")
const[tipo,setTipo] = useState("")
const[emissor,setEmissor] = useState("")
const[data,setData] = useState(new Date().toLocaleDateString('pt-BR'))
const[status,setStatus] = useState("")
const[verDoc,setVerDoc] = useState("")
const[obsDoc,setObsDoc] = useState("")
const [file,setFile] = useState(null)

const handleUparArquivo = (arquivo)=>{
  const arquivoUpado = arquivo.target.files[0]
  if(arquivoUpado && arquivoUpado.type === "application/pdf"){
     setFile(arquivoUpado);
  }else 
  {return alert("arquivo invalido")}
}

const handlEnviarBanco = async () =>{
  //formData aceita apenas objetos 
  const formData = new FormData()
   const payload = {
    codDoc,
    descDoc,
    tipo,
    emissor,
    data,
    status,
    verDoc,
    obsDoc,
    file: file ? file.name : null // MockAPI não salva arquivo real
  }
      const response = await fetch(URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    })

    const dataResp = await response.json()
    baixarBD()
}
const [listaDocumentos, setListaDocumentos] = useState([])

const baixarBD = async ()=>{
  const response = await fetch(URL)
  const data = await response.json()
  setListaDocumentos(data)
}


useEffect(()=>{
  baixarBD()
    //setListaDocumentos(exemplo)
},[])

return(
  <>
   
    
      
    <h1>GDOC - Gestão de Documentos</h1>
    <h3>Lista de documentos</h3>
    <table className="tabela">
        <thead >
          <tr>
            <th>Codigo</th>
            <th>Descrição</th>
            <th>Tipo</th>
            <th>Emissor</th>
            <th>Data</th>
            <th>Status</th>
            <th>Versao</th>
            <th>Observações</th>
            <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {listaDocumentos.map((docs) =>(
                <tr key={docs.id}>
                    <td>{docs.codDoc}</td>
                    <td>{docs.descDoc}</td>
                    <td>{docs.tipo}</td>
                    <td>{docs.emissor}</td>
                    <td>{docs.data}</td>
                    <td>{docs.status}</td>
                    <td>{docs.verDoc}</td>
                    <td>{docs.obsDoc}</td>
                    <td><button className="button">Enviar</button></td>

                </tr>
            ))
            }
        </tbody>
    </table>

    <br/>
    <div>
      
      <h3>Insira novos documentos</h3>
      <label>Cod</label><input type="text" value={codDoc} placeholder="001" onChange={e=>setCodDoc(e.target.value)}/><br/>
      <label>Descrição do Documento</label><input type="text" placeholder="Teste" value={descDoc} onChange={e=>setDescDoc(e.target.value)}/><br/>
      <label>Tipo</label><input type="text" value={tipo}  placeholder="doc" onChange={e=>setTipo(e.target.value)}/><br/>
      <label>Emissor</label><input type="text" value={emissor}  placeholder="teste" onChange={e=>setEmissor(e.target.value)}/><br/>
      <label>Data</label><input type="text" value={data} placeholder={new Date().toLocaleDateString()} onChange={e=>setData(e.target.value)}/><br/>
      <label>Status</label><input type="text" value={status} placeholder="ativo" onChange={e=>setStatus(e.target.value)}/><br/>
      <label>Versao</label><input type="text" value={verDoc} placeholder="00" onChange={e=>setVerDoc(e.target.value)}/><br/>
      <label>observações do Documento</label><input type="text" placeholder="na" value={obsDoc} onChange={e=>setObsDoc(e.target.value)}/><br/>
      
    <input type='file' accept='.pdf' onChange={handleUparArquivo}/>
    <br/>
    <button  className="button" onClick={handlEnviarBanco}>Salvar</button>

    </div>
     <style>
        {`
          .container {
            font-family: Arial;
            padding: 20px;
          }

          .tabela {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }

          .tabela th {
            background: #2c3e50;
            color: white;
            padding: 10px;
          }

          .tabela td {
            border: 1px solid #ddd;
            padding: 10px;
          }

          .tabela tr:nth-child(even) {
            background: #f2f2f2;
          }

          .button {
            background: #3498db;
            color: white;
            border: none;
            padding: 6px 10px;
            border-radius: 4px;
            cursor: pointer;
          }

          .button:hover {
            background: green;
          }

          .formulario {
            margin-top: 20px;
            padding: 15px;
            border: 1px solid #ccc;
            width: 300px;
            border-radius: 8px;
          }

          .input {
            width: 100%;
            margin-bottom: 10px;
            padding: 6px;
          }
        `}
      </style>  
 
    </>
    
)

}

