import React, {useState,useEffect} from 'react'
import supabase from '../../conexao/conexao'

export default function FormularioRNC(){

const [listaRNC,setListaRNC] = useState([])
const [dataCriacao,setDataCriacao] = useState(new Date().toISOString().split('T')[0])
const [origemRNC,setOrigemRNC] = useState()
const [destinoRNC,setDestinoRNC] = useState()
const [relatoRNC,setRelatoRNC] = useState()
const [tipoRNC,setTipoRNC] = useState()
const [evidenciaRNC,setEvidenciaRNC] = useState()
const [referenciaRNC,setReferenciaRNC] = useState()
const [criadorRNC,setCriadorRNC] = useState()

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

const handleSalvar = async ()=>{
   // e.preventDefault()
    try{
    const {data,error} = await supabase.from('tb_cabRNC')
    .insert([{
        created_at: dataCriacao,
        origemRNC,
        destinoRNC,
        tipoRNC,
        relatoRNC,
        criadorRNC,
        evidenciaRNC,
        referenciaRNC,
        statusRNC:"criada",
        dataPrevisao: new Date(Date(dataCriacao) + 10 * 24 * 60 * 60 * 1000).toISOString(),
        dataContencao:null,
        causasRNC:"",
        acoes_id:null,
        responsavelRNC:"",
        avaliacaoRNC:"",
        responsavelAvaliacao:"",
        dataConclusao:null,
    }])
   if (error) {
                alert("Erro ao salvar: " + error.message)
            } else {
                alert("RNC cadastrada com sucesso!")
                console.log(data)
            }
        } catch (err) {
            console.error(err)
        }
    
    

}

return(
<>
<div>
<h1>Formulario RNC</h1>
<div><label>Nº RNC</label><input type="text" placeholder={"#"} readOnly></input></div>
<div><label>Status</label><input type="text" placeholder={"Criando"} readOnly></input></div>
<div><label>Data Criação</label><input type="date" value={dataCriacao} onChange={(e) => setDataCriacao(e.target.value)}/></div>
<div><label>Criador</label><input type="text" value={criadorRNC} onChange={(e) => setCriadorRNC(e.target.value)}/></div>
<div><label>Origem</label><input type="text" list='origens' value={origemRNC} onChange={(e) => setOrigemRNC(e.target.value)}/></div>
<datalist id='origens'>
    <option value="Qualidade">Qualidade</option>
    <option value="Producao">Produção</option>
    <option value="Recursos Humanos">Recursos Humanos</option>
    <option value="Comercial">Comercial</option>
    <option value="Diretoria">Diretoria</option>
    <option value="Gerencia">Gerência</option>
    <option value="Laboratorio">Laboratório</option>
    <option value="Exoeducao">Expedição</option>
    <option value="Separacao">Separação</option>
    <option value="Mecanica"> Manutenção MecÂnica</option>
    <option value="Eletrica">Elétrica</option>
    <option value="Ferramentaria">Ferramentaria</option>
    <option value="Segurancao do Trabalho">Segurança do Trabalho</option>
    <option value="Estoque Acabados">Estoque de Acabados</option>
    <option value="Montagem">Montagem</option>
</datalist>
<div><label>Destino</label><input type="text" list='destinos' value={destinoRNC} onChange={(e) => setDestinoRNC(e.target.value)}/></div>
<datalist id='destinos'>
    <option value="Qualidade">Qualidade</option>
    <option value="Producao">Produção</option>
    <option value="Recursos Humanos">Recursos Humanos</option>
    <option value="Comercial">Comercial</option>
    <option value="Diretoria">Diretoria</option>
    <option value="Gerencia">Gerência</option>
    <option value="Laboratorio">Laboratório</option>
    <option value="Exoeducao">Expedição</option>
    <option value="Separacao">Separação</option>
    <option value="Mecanica"> Manutenção MecÂnica</option>
    <option value="Eletrica">Elétrica</option>
    <option value="Ferramentaria">Ferramentaria</option>
    <option value="Segurancao do Trabalho">Segurança do Trabalho</option>
    <option value="Estoque Acabados">Estoque de Acabados</option>
    <option value="Montagem">Montagem</option>
</datalist>
<div><label>Relato Breve da RNC</label><textarea type="text" value={relatoRNC} onChange={(e) => setRelatoRNC(e.target.value)}/></div>
<div><label>Tipo RNC</label><input type="text" value={tipoRNC} list='tipos' onChange={(e) => setTipoRNC(e.target.value)}/></div>
<datalist id="tipos">
   <option value="AUD-EX">Auditoria Externa</option> 
   <option value="AUD-IN">Auditoria Interna</option> 
   <option value="PRO">Producao Interna</option> 
   <option value="RCL">Reclamação de Clientes</option> 
   <option value="MEIO">Meio Ambiente</option> 
   <option value="SST">Saude Segurança do Trabalho</option> 
</datalist>
<div><label>Evidencia</label><textarea type="text" value={evidenciaRNC} onChange={(e) => setEvidenciaRNC(e.target.value)}/></div>
<div><label>Referencia</label><textarea type="text" value={referenciaRNC} onChange={(e) => setReferenciaRNC(e.target.value)}/></div>
<button onClick={e=>handleSalvar()}>Salvar RNC</button>

</div>
</>

)

}