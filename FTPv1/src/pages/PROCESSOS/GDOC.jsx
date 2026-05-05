import React, {useEffect, useState} from 'react'

URL="https://69c55f5e8a5b6e2dec2c4e9b.mockapi.io/gfila/api/upLoad"

export default function GDOC(){

const exemplo = [
    {id:1,codDoc:"PG-PH-01-01", descDoc:"Gestão de RH", tipo:"PG", emissor:"RH", data:"01/05/2026", status:"Atual", obsDoc:"Trainamento Introdutório", urlArquivo:"" },
    {id:2,codDoc:"PG-QL-01-01", descDoc:"Gestão de Documentos", tipo:"PG", emissor:"Qualidade", data:"01/05/2026", status:"Atual", obsDoc:"Treinamento por conta do RH", urlArquivo:""}
]

const [file,setFile] = useState()

const handleUparArquivo = (arquivo)=>{
  const arquivoUpado = arquivo.target.files[0]
  if(arquivoUpado && arquivoUpado.type === "application/pdf"){
     setFile(arquivoUpado);
  }else 
  {return alert("arquivo invalido")}
}

const handlEnviarBanco = async () =>{
    const formData = new FormData()
    formData.append('file',file)
    try{
    const response = await fetch(URL,{method:'POST', body:formData})
    }catch(e) {
      console.log(e)
    }
    }

const [listaDocumentos, setListaDocumentos] = useState([])

useEffect(()=>{
    setListaDocumentos(exemplo)
},[])

return(
    <>
    <h1>GDOC - Gestão de Documentos</h1>
    <h3>Lista de documentos</h3>
    <table>
        <thead >
          <tr>
            <th>Codigo</th>
            <th>Descrição</th>
            <th>Tipo</th>
            <th>Emissor</th>
            <th>Data</th>
            <th>Status</th>
            <th>Observações</th>
            <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {listaDocumentos.map((docs) =>(
                <tr key={docs.id}>
                    <td>{docs.descDoc}</td>
                    <td>{docs.tipo}</td>
                    <td>{docs.emissor}</td>
                    <td>{docs.data}</td>
                    <td>{docs.status}</td>
                    <td>{docs.obsDoc}</td>
                    <td><button>Enviar</button></td>

                </tr>
            ))
            }
        </tbody>
    </table>

    {/* inserir novo documento */}
    <br/>
    <div>

<h3>Insira novos documentos</h3>
    <input type='file' accept='.pdf' onChange={handleUparArquivo}/>
    <button onClick={handlEnviarBanco}>enviar</button>

    </div>





    </>
)
}