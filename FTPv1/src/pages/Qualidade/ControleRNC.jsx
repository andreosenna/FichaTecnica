import React, {useState,useEffect} from 'react'
import supabase from '../../conexao/conexao'
import { useNavigate, useLocation, useParams } from 'react-router-dom';

export default function ControleRNC(){

const [listaRNC,setListaRNC] = useState([])

const navigate = useNavigate()

useEffect (()=>{
buscarRNCs()    
},[])

const handleRNC = (RNCSelecionada)=>{
navigate (`/RNCCompleta/${RNCSelecionada.id}`, {state: {data:RNCSelecionada}})
}


const buscarRNCs = async () =>{
    try{
        const {data,error}  = await supabase.from('tb_cabRNC').select('*')
        if(error){
            console.log(error)
        }
        else{
            setListaRNC(data)
        }
    }catch(e){
            console.error('Erro inesperado:', e);    }
}



return(
<>
<h1>Relação de RNCs</h1>

<table>
    <thead>
        <tr>
            <th>id RNC</th>
            <th>Descricão RNC</th>
            <th>Status</th>
            <th>Data de Abertura</th>
            <th>Origem</th>
            <th>Destino</th>
            <th>Ações</th>

        </tr>
    </thead>
    <tbody>
    {listaRNC.map((rncs)=>(
     <tr key={rncs.id}>
        <td>{rncs.id}</td>
        <td>{rncs.relatoRNC}</td>
        <td>{rncs.statusRNC}</td>
        <td>{new Date(rncs.created_at).toLocaleDateString('pt-BR')}</td>
        <td>{rncs.origemRNC}</td>
        <td>{rncs.destinoRNC}</td>
        <td><button onClick={e=> handleRNC(rncs)} >Abrir</button></td>
     </tr>   )
    )}
   </tbody>
</table>
</>


)}
