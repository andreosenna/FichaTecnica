import React,{useState,useEffect} from 'react'
import supabase from '../../conexao/conexao'
import {useNavigate} from 'react-router-dom'

export default function Misturas() {
const [mistura, setMistura] = useState([
    {id:1,op:"04505601002",produto:"Mistura Cadeira Monobloco branca",status:"Em Andamento",
        formula:{
        1:{tipo:"PP", cod:"01010000001",descMP:"PP Branco Extrusado",quantidade:1000},
        2:{tipo:"Aditivo", cod:"01020000001",descMP:"Dessecante",quantidade:10}
        }
      
    },
    {id:2,op:"04505601003",produto:"Mistura Mesa Monobloco branca",status:"Em Andamento",
        formula:{
        1:{tipo:"PP", cod:"01010000001",descMP:"PP Branco Extrusado",quantidade:2000},
        2:{tipo:"Aditivo", cod:"01020000001",descMP:"Dessecante",quantidade:20}
    }   
}
])
const navigate = useNavigate()

const handleEditar= (m) =>{
return alert(`Registro ${m.id} / ${m.produto}`)
navigate(`/ApontamentoMisturas/${m.id}`,{state:{data:m}})

}


    return (
        <>
            <h1>Misturas</h1>
        <table style={{border:"1px solid black"}}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>op</th>
                    <th>produto</th>
                    <th>status</th>
                    <th>Items da Mistura</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                {mistura.map((m=>(
                    <tr  key={m.id}>
                        <td>{m.id}</td>
                        <td>{m.op}</td>
                        <td>{m.produto}</td>
                        <td>{m.status}</td>
                        <td>
                          
                        {Object.values(m.formula).map((item,index)=>(
                        <ul key={index}>
                        <li>{item.tipo} / {item.cod} / {item.descMP} qte: {item.quantidade}</li>
                        </ul>
                        
                        ))
                        
                        }
                    </td>
                    <td><button onClick={e=>handleEditar(m)}>Editar</button></td>
            </tr>
                )))

                }
            </tbody>
        </table>
        </>
    )
}