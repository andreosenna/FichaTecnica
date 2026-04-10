import React, { useState, useEffect } from 'react'
import supabase from '../conexao/conexao'


export default function Teste(){
    const [OPs, setOPs] = useState([])
    const [loading,setLoading]=  useState(true)
    const [error,setError] = useState(null)

   useEffect(() =>{
        const fetchOPs = async ()=>{
try{
        const {data,error}= await supabase.from('OPs').select('*') 
if(error){
    throw error
}setOPs(data || [])
    }catch(err){
        setError(err.message)
    }
    finally{
        setLoading(false)
    }
        }
        fetchOPs()
    },[])

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;

    return(

        <>
        <h1>Teste</h1>
        <table>
        <thead>
            <tr>
                <th>OP</th>
                <th>Produto</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
           {OPs.map((ops, index) => (
            <tr key={ops.id || index}>
                <td>{ops.id || index}</td>
                <td>{ops.nomeProduto}</td>
                <td>{ops.StatusOPs}</td>
            </tr>
           ))}
        </tbody>

        </table>        
        </>

    )
}