import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Section from '../../components/Section'
import supabase from '../../conexao/conexao'

export default function FTP() {

  
const [listaMoldes,setListaMoldes] = useState([])
  /*const [moldes, setMoldes] = useState([
    { id: 1, molde: 'Cadeira Monobloco', foto: 'https://images.tcdn.com.br/img/img_prod/1286580/kit_4_cadeira_poltrona_alta_black_e_1_mesa_plastica_monobloco_preta_70x70cm_105_2_5c54f4819aae24902d782253178cae78.jpg', bico: 200, zona1: 240, zona2: 230, zona3: 220, cq1: 200, cq2: 200 },
    { id: 2, molde: 'Mesa Monobloco', foto: "https://cdn.awsli.com.br/2500x2500/1131/1131299/produto/321286504/catty-rosa-kvtbz9vlph.webp", bico: 200, zona1: 240, zona2: 230, zona3: 220, cq1: 200, cq2: 200 },
    { id: 3, molde: 'Estante Modular', foto: "", bico: 200, zona1: 240, zona2: 230, zona3: 220, cq1: 200, cq2: 200 },
    { id: 4, molde: 'Balde 8L', foto: "", bico: 200, zona1: 240, zona2: 230, zona3: 220, cq1: 200, cq2: 200 },
    { id: 5, molde: 'Lixeira 90L', foto: "", bico: 200, zona1: 240, zona2: 230, zona3: 220, cq1: 200, cq2: 200 },
    { id: 6, molde: 'Pote 1000ML', foto: "", bico: 200, zona1: 240, zona2: 230, zona3: 220, cq1: 200, cq2: 200 },
  ])*/

const fetchMoldes = async ()=>{
const {data,error} = await supabase.from('tb_moldes').select('*')
if(error)throw error
if(data) setListaMoldes(data)

}
useEffect (()=>{
  fetchMoldes()
})

const [maquinas,setMaquinas] = useState([])


const fetchMaquinas = async ()=>{
  try{
  const {data , error} = await supabase.from('tb_maquinas').select('*')
  if(error){
    throw error
  }
  if(data){ 
    setMaquinas(data)
  }
  }catch(e){
    console.error('Erro ao buscar máquinas:', e)
}
}
useEffect(()=> {
  fetchMaquinas()

})



  const [tipo, settipo] = useState()
  const [versao, setversao] = useState()
  const [data, setdata] = useState()
  const [molde, setmolde] = useState()
  const [papi, setpapi] = useState()
  const [codmolde, setcodmolde] = useState()
  const [cavidades, setcavidades] = useState()
  const [maquina, setmaquina] = useState(maquinas[0]?.maquina || '')
  const [programa, setprograma] = useState()
  const [Pilha, setPilha] = useState()
  const [lastro, setlastro] = useState()
  const [meio, setmeio] = useState()
  const [total, settotal] = useState()
  const [pesoIdeal, setpesoIdeal] = useState()
  const [tolerancia, settolerancia] = useState()
 // const [pressaoInjecaoReal, setpressaoInjecaoReal] = useState()
  const [tAbertura, settAbertura] = useState()
  const [tFechamento, settFechamento] = useState()
  const [tDosagem, settDosagem] = useState()
  const [tInjecao, settInjecao] = useState()
  const [tRecalque, settRecalque] = useState()
  const [tResfriamento, settResfriamento] = useState()
  const [tExtracao, settExtracao] = useState()
  const [tCiclo, settCiclo] = useState()
 // const [tRebarbagem, settRebarbagem] = useState()
 // const [tExtracaoAux, settExtracaoAux] = useState()
 // const [tMontagem, settMontagem] = useState()
  const [PH, setPH] = useState()
  const [materiaPrima, setmateriaPrima] = useState()
  const [bico, setbico] = useState()
  const [z1, setz1] = useState()
  const [z2, setz2] = useState()
  const [z3, setz3] = useState()
  const [z4, setz4] = useState()
  const [z5, setz5] = useState()
  const [z6, setz6] = useState()
  const [z7, setz7] = useState()
  const [z8, setz8] = useState()
  const [z9, setz9] = useState()
  const [z10, setz10] = useState()
  const [z11, setz11] = useState()
  const [z12, setz12] = useState()
  const [z13, setz13] = useState()
  const [secador, setsecador] = useState()
  const [secTemperatura, setsecTemperatura] = useState()
  const [secTempo, setsecTempo] = useState()
//  const [CamaraQuente, setCamaraQuente] = useState()
  const [c1, setc1] = useState()
  const [c2, setc2] = useState()
  const [c3, setc3] = useState()
  const [c4, setc4] = useState()
  const [c5, setc5] = useState()
  const [c6, setc6] = useState()
  const [c7, setc7] = useState()
  const [c8, setc8] = useState()
  const [c9, setc9] = useState()
  const [c10, setc10] = useState()
  const [c11, setc11] = useState()
  const [c12, setc12] = useState()
  const [c13, setc13] = useState()
  const [c14, setc14] = useState()
  const [c15, setc15] = useState()
  const [c16, setc16] = useState()
  const [c17, setc17] = useState()
  const [c18, setc18] = useState()
  const [obsTemperaturas, setobsTemperaturas] = useState()
  const [c19, setc19] = useState()
  const [c20, setc20] = useState()
  const [c21, setc21] = useState()
  const [c22, setc22] = useState()
  const [c23, setc23] = useState()
  const [c24, setc24] = useState()
  const [c25, setc25] = useState()
  const [c26, setc26] = useState()
  const [c27, setc27] = useState()
  const [refrigeracao, setrefrigeracao] = useState()
  const [obsRefrigeracao, setobsRefrigeracao] = useState()
  const [ab1VEL, setab1VEL] = useState()
  const [ab1PRES, setab1PRES] = useState()
  const [ab1POS, setab1POS] = useState()
  const [ab2VEL, setab2VEL] = useState()
  const [ab2PRES, setab2PRES] = useState()
  const [ab2POS, setab2POS] = useState()
  const [ab3VEL, setab3VEL] = useState()
  const [ab3PRES, setab3PRES] = useState()
  const [ab3POS, setab3POS] = useState()
  const [ab4VEL, setab4VEL] = useState()
  const [ab4PRES, setab4PRES] = useState()
  const [ab4POS, setab4POS] = useState()
  const [abFimVEL, setabFimVEL] = useState()
  const [abFimPRES, setabFimPRES] = useState()
  const [abFimPOS, setabFimPOS] = useState()
  const [ALPRFIABPRES, setALPRFIABPRES] = useState()
  const [sicExtraPres, setsicExtraPres] = useState()
  const [FecAuxPres, setFecAuxPres] = useState()
  const [fecha1VEL, setfecha1VEL] = useState()
  const [fecha1PRES, setfecha1PRES] = useState()
  const [fecha1POS, setfecha1POS] = useState()
  const [fecha2VEL, setfecha2VEL] = useState()
  const [fecha2PRES, setfecha2PRES] = useState()
  const [fecha2POS, setfecha2POS] = useState()
  const [fecha3VEL, setfecha3VEL] = useState()
  const [fecha3PRES, setfecha3PRES] = useState()
  const [fecha3POS, setfecha3POS] = useState()
  const [fecha4VEL, setfecha4VEL] = useState()
  const [fecha4PRES, setfecha4PRES] = useState()
  const [fecha4POS, setfecha4POS] = useState()
  const [fechaFimVEL, setfechaFimVEL] = useState()
  const [fechaFimPRES, setfechaFimPRES] = useState()
  const [fechaFimPOS, setfechaFimPOS] = useState()
  const [obsAbreFecha, setobsAbreFecha] = useState()
  const [FechaAexPres, setFechaAexPres] = useState()
  const [FechaBaixaPresPres, setFechaBaixaPresPres] = useState()
  const [FechaForcaFechaPres, setFechaForcaFechaPres] = useState()
  const [alarmeRetDosagem, setalarmeRetDosagem] = useState()
  const [tempoResfriamento, settempoResfriamento] = useState()
  const [Reciclo, setReciclo] = useState()
  const [descAnteDosagem, setdescAnteDosagem] = useState()
  const [TempoCiclo, setTempoCiclo] = useState()
  const [retSaidaExtracao, setretSaidaExtracao] = useState()
  const [baixaPressao, setbaixaPressao] = useState()
  const [retFimAltaPressao, setretFimAltaPressao] = useState()
  const [retFimFechamento, setretFimFechamento] = useState()
  const [retExtrator, setretExtrator] = useState()
  const [retRecuoBico, setretRecuoBico] = useState()
  const [retAvancoBico, setretAvancoBico] = useState()
  const [retPurga, setretPurga] = useState()
  const [aberturaLentaPorta, setaberturaLentaPorta] = useState()
  const [portaAberta, setportaAberta] = useState()
  const [dosagem1VEL, setdosagem1VEL] = useState()
  const [dosagem1PRES, setdosagem1PRES] = useState()
  const [dosagem1CONPRES, setdosagem1CONPRES] = useState()
  const [dosagem1POS, setdosagem1POS] = useState()
  const [dosagem2VEL, setdosagem2VEL] = useState()
  const [dosagem2PRES, setdosagem2PRES] = useState()
  const [dosagem2CONPRES, setdosagem2CONPRES] = useState()
  const [dosagem2POS, setdosagem2POS] = useState()
  const [dosagem3VEL, setdosagem3VEL] = useState()
  const [dosagem3PRES, setdosagem3PRES] = useState()
  const [dosagem3CONPRES, setdosagem3CONPRES] = useState()
  const [dosagem3POS, setdosagem3POS] = useState()
  const [retDosagem, setretDosagem] = useState()
  const [tipoInjecao, settipoInjecao] = useState()
  const [injecao1VEL, setinjecao1VEL] = useState()
  const [injecao1PRES, setinjecao1PRES] = useState()
  const [injecao1POS, setinjecao1POS] = useState()
  const [injecao2VEL, setinjecao2VEL] = useState()
  const [injecao2PRES, setinjecao2PRES] = useState()
  const [injecao2POS, setinjecao2POS] = useState()
  const [injecao3VEL, setinjecao3VEL] = useState()
  const [injecao3PRES, setinjecao3PRES] = useState()
  const [injecao3POS, setinjecao3POS] = useState()
  const [injecao4VEL, setinjecao4VEL] = useState()
  const [injecao4PRES, setinjecao4PRES] = useState()
  const [injecao4POS, setinjecao4POS] = useState()
  const [InjecaoPressaoMax, setInjecaoPressaoMax] = useState()
  const [InjecaoTempoProgramado, setInjecaoTempoProgramado] = useState()
  const [injecaoComutacao, setinjecaoComutacao] = useState()
  const [InjecaoLeakage, setInjecaoLeakage] = useState()
  const [injecaoColchao, setinjecaoColchao] = useState()
  const [recalqueTipo, setrecalqueTipo] = useState()
  const [recalque1VEL, setrecalque1VEL] = useState()
  const [recalque1PRES, setrecalque1PRES] = useState()
  const [recalque1TEMP, setrecalque1TEMP] = useState()
  const [recalque2VEL, setrecalque2VEL] = useState()
  const [recalque2PRES, setrecalque2PRES] = useState()
  const [recalque2TEMP, setrecalque2TEMP] = useState()
  const [recalque3VEL, setrecalque3VEL] = useState()
  const [recalque3PRES, setrecalque3PRES] = useState()
  const [recalque3TEMP, setrecalque3TEMP] = useState()
  const [obsRecalque, setobsRecalque] = useState()
  const [recalque4VEL, setrecalque4VEL] = useState()
  const [recalque4PRES, setrecalque4PRES] = useState()
  const [recalque4TEMP, setrecalque4TEMP] = useState()
  const [descDianteiraSimNao, setdescDianteiraSimNao] = useState()
  const [descTraseiraSimNao, setdescTraseiraSimNao] = useState()
  const [descTraseiraVEL, setdescTraseiraVEL] = useState()
  const [descTraseiraPRES, setdescTraseiraPRES] = useState()
  const [descTraseiraPOS, setdescTraseiraPOS] = useState()
  const [extracaoTipo, setextracaoTipo] = useState()
  const [extracaoRepetir, setextracaoRepetir] = useState()
  const [extracaoRepetirQte, setextracaoRepetirQte] = useState()
  const [extracaoPausa, setextracaoPausa] = useState()
  const [extracaoAux, setextracaoAux] = useState()
  const [extAvanco1VEL, setextAvanco1VEL] = useState()
  const [extAvanco1PRES, setextAvanco1PRES] = useState()
  const [extAvanco1POS, setextAvanco1POS] = useState()
  const [extAvanco2VEL, setextAvanco2VEL] = useState()
  const [extAvanco2PRES, setextAvanco2PRES] = useState()
  const [extAvanco2POS, setextAvanco2POS] = useState()
  const [extRetorno1VEL, setextRetorno1VEL] = useState()
  const [extRetorno1PRES, setextRetorno1PRES] = useState()
  const [extRetorno1POS, setextRetorno1POS] = useState()
  const [extRetorno2VEL, setextRetorno2VEL] = useState()
  const [extRetorno2PRES, setextRetorno2PRES] = useState()
  const [extRetorno2POS, setextRetorno2POS] = useState()
  const [obsExtracaoMecanica, setobsExtracaoMecanica] = useState()
  const [extPneu1Tipo, setextPneu1Tipo] = useState()
  const [extPneu1POS, setextPneu1POS] = useState()
  const [extPneu1RET, setextPneu1RET] = useState()
  const [extPneu1TEMP, setextPneu1TEMP] = useState()
  const [extPneu2Tipo, setextPneu2Tipo] = useState()
  const [extPneu2POS, setextPneu2POS] = useState()
  const [extPneu2RET, setextPneu2RET] = useState()
  const [extPneu2TEMP, setextPneu2TEMP] = useState()
  const [extPneu3Tipo, setextPneu3Tipo] = useState()
  const [extPneu3POS, setextPneu3POS] = useState()
  const [extPneu3RET, setextPneu3RET] = useState()
  const [extPneu3TEMP, setextPneu3TEMP] = useState()
  const [extPneu4Tipo, setextPneu4Tipo] = useState()
  const [extPneu4POS, setextPneu4POS] = useState()
  const [extPneu4RET, setextPneu4RET] = useState()
  const [extPneu4TEMP, setextPneu4TEMP] = useState()
  const [extPneu5Tipo, setextPneu5Tipo] = useState()
  const [extPneu5POS, setextPneu5POS] = useState()
  const [extPneu5RET, setextPneu5RET] = useState()
  const [extPneu5TEMP, setextPneu5TEMP] = useState()
  const [extPneu6Tipo, setextPneu6Tipo] = useState()
  const [extPneu6POS, setextPneu6POS] = useState()
  const [extPneu6RET, setextPneu6RET] = useState()
  const [extPneu6TEMP, setextPneu6TEMP] = useState()
  const [MachoAvanco1Modo, setMachoAvanco1Modo] = useState()
  const [MachoAvanco1Cond, setMachoAvanco1Cond] = useState()
  const [MachoAvanco1Curso, setMachoAvanco1Curso] = useState()
  const [MachoAvanco1VEL, setMachoAvanco1VEL] = useState()
  const [MachoAvanco1PRES, setMachoAvanco1PRES] = useState()
  const [MachoAvanco1TEMP, setMachoAvanco1TEMP] = useState()
  const [MachoRetorno1Modo, setMachoRetorno1Modo] = useState()
  const [MachoRetorno1Cond, setMachoRetorno1Cond] = useState()
  const [MachoRetorno1Curso, setMachoRetorno1Curso] = useState()
  const [MachoRetorno1VEL, setMachoRetorno1VEL] = useState()
  const [MachoRetorno1PRES, setMachoRetorno1PRES] = useState()
  const [MachoRetorno1TEMP, setMachoRetorno1TEMP] = useState()
  const [MachoAvanco2Modo, setMachoAvanco2Modo] = useState()
  const [MachoAvanco2Cond, setMachoAvanco2Cond] = useState()
  const [MachoAvanco2Curso, setMachoAvanco2Curso] = useState()
  const [MachoAvanco2VEL, setMachoAvanco2VEL] = useState()
  const [MachoAvanco2PRES, setMachoAvanco2PRES] = useState()
  const [MachoAvanco2TEMP, setMachoAvanco2TEMP] = useState()
  const [MachoRetorno2Modo, setMachoRetorno2Modo] = useState()
  const [MachoRetorno2Cond, setMachoRetorno2Cond] = useState()
  const [MachoRetorno2Curso, setMachoRetorno2Curso] = useState()
  const [MachoRetorno2VEL, setMachoRetorno2VEL] = useState()
  const [MachoRetorno2PRES, setMachoRetorno2PRES] = useState()
  const [MachoRetorno2TEMP, setMachoRetorno2TEMP] = useState()
  const [MachoAvanco3Modo, setMachoAvanco3Modo] = useState()
  const [MachoAvanco3Cond, setMachoAvanco3Cond] = useState()
  const [MachoAvanco3Curso, setMachoAvanco3Curso] = useState()
  const [MachoAvanco3VEL, setMachoAvanco3VEL] = useState()
  const [MachoAvanco3PRES, setMachoAvanco3PRES] = useState()
  const [MachoAvanco3TEMP, setMachoAvanco3TEMP] = useState()
  const [MachoRetorno3Modo, setMachoRetorno3Modo] = useState()
  const [MachoRetorno3Cond, setMachoRetorno3Cond] = useState()
  const [MachoRetorno3Curso, setMachoRetorno3Curso] = useState()
  const [MachoRetorno3VEL, setMachoRetorno3VEL] = useState()
  const [MachoRetorno3PRES, setMachoRetorno3PRES] = useState()
  const [MachoRetorno3TEMP, setMachoRetorno3TEMP] = useState()
  const [MachoAvanco4Modo, setMachoAvanco4Modo] = useState()
  const [MachoAvanco4Cond, setMachoAvanco4Cond] = useState()
  const [MachoAvanco4Curso, setMachoAvanco4Curso] = useState()
  const [MachoAvanco4VEL, setMachoAvanco4VEL] = useState()
  const [MachoAvanco4PRES, setMachoAvanco4PRES] = useState()
  const [MachoAvanco4TEMP, setMachoAvanco4TEMP] = useState()
  const [MachoRetorno4Modo, setMachoRetorno4Modo] = useState()
  const [MachoRetorno4Cond, setMachoRetorno4Cond] = useState()
  const [MachoRetorno4Curso, setMachoRetorno4Curso] = useState()
  const [MachoRetorno4VEL, setMachoRetorno4VEL] = useState()
  const [MachoRetorno4PRES, setMachoRetorno4PRES] = useState()
  const [MachoRetorno4TEMP, setMachoRetorno4TEMP] = useState()
  const [MachoAvanco5Modo, setMachoAvanco5Modo] = useState()
  const [MachoAvanco5Cond, setMachoAvanco5Cond] = useState()
  const [MachoAvanco5Curso, setMachoAvanco5Curso] = useState()
  const [MachoAvanco5VEL, setMachoAvanco5VEL] = useState()
  const [MachoAvanco5PRES, setMachoAvanco5PRES] = useState()
  const [MachoAvanco5TEMP, setMachoAvanco5TEMP] = useState()
  const [MachoRetorno5Modo, setMachoRetorno5Modo] = useState()
  const [MachoRetorno5Cond, setMachoRetorno5Cond] = useState()
  const [MachoRetorno5Curso, setMachoRetorno5Curso] = useState()
  const [MachoRetorno5VEL, setMachoRetorno5VEL] = useState()
  const [MachoRetorno5PRES, setMachoRetorno5PRES] = useState()
  const [MachoRetorno5TEMP, setMachoRetorno5TEMP] = useState()
  const [MachoAvanco6Modo, setMachoAvanco6Modo] = useState()
  const [MachoAvanco6Cond, setMachoAvanco6Cond] = useState()
  const [MachoAvanco6Curso, setMachoAvanco6Curso] = useState()
  const [MachoAvanco6VEL, setMachoAvanco6VEL] = useState()
  const [MachoAvanco6PRES, setMachoAvanco6PRES] = useState()
  const [MachoAvanco6TEMP, setMachoAvanco6TEMP] = useState()
  const [MachoRetorno6Modo, setMachoRetorno6Modo] = useState()
  const [MachoRetorno6Cond, setMachoRetorno6Cond] = useState()
  const [MachoRetorno6Curso, setMachoRetorno6Curso] = useState()
  const [MachoRetorno6VEL, setMachoRetorno6VEL] = useState()
  const [MachoRetorno6PRES, setMachoRetorno6PRES] = useState()
  const [MachoRetorno6TEMP, setMachoRetorno6TEMP] = useState()
  const [MachoAvanco7Modo, setMachoAvanco7Modo] = useState()
  const [MachoAvanco7Cond, setMachoAvanco7Cond] = useState()
  const [MachoAvanco7Curso, setMachoAvanco7Curso] = useState()
  const [MachoAvanco7VEL, setMachoAvanco7VEL] = useState()
  const [MachoAvanco7PRES, setMachoAvanco7PRES] = useState()
  const [MachoAvanco7TEMP, setMachoAvanco7TEMP] = useState()
  const [MachoRetorno7Modo, setMachoRetorno7Modo] = useState()
  const [MachoRetorno7Cond, setMachoRetorno7Cond] = useState()
  const [MachoRetorno7Curso, setMachoRetorno7Curso] = useState()
  const [MachoRetorno7VEL, setMachoRetorno7VEL] = useState()
  const [MachoRetorno7PRES, setMachoRetorno7PRES] = useState()
  const [MachoRetorno7TEMP, setMachoRetorno7TEMP] = useState()
  const [MachoAvanco8Modo, setMachoAvanco8Modo] = useState()
  const [MachoAvanco8Cond, setMachoAvanco8Cond] = useState()
  const [MachoAvanco8Curso, setMachoAvanco8Curso] = useState()
  const [MachoAvanco8VEL, setMachoAvanco8VEL] = useState()
  const [MachoAvanco8PRES, setMachoAvanco8PRES] = useState()
  const [MachoAvanco8TEMP, setMachoAvanco8TEMP] = useState()
  const [MachoRetorno8Modo, setMachoRetorno8Modo] = useState()
  const [MachoRetorno8Cond, setMachoRetorno8Cond] = useState()
  const [MachoRetorno8Curso, setMachoRetorno8Curso] = useState()
  const [MachoRetorno8VEL, setMachoRetorno8VEL] = useState()
  const [MachoRetorno8PRES, setMachoRetorno8PRES] = useState()
  const [MachoRetorno8TEMP, setMachoRetorno8TEMP] = useState()
  const [obsMacho, setobsMacho] = useState()
  const [obsProcMontagem, setobsProcMontagem] = useState()
  const [obsOptecnica, setobsOptecnica] = useState()
  const [obsQualidade, setobsQualidade] = useState()

  const [MachoAvancoAtraso, setMachoAvancoAtraso] = useState()
  const [MachoRetornoAtraso, setMachoRetornoAtraso] = useState()
  const [instrucoes, setinstrucoes] = useState()
  const [consideracoes, setconsideracoes] = useState()
  const [ElaboraPor, setElaboraPor] = useState()
  const [VerificadoPor, setVerificadoPor] = useState()
  const [AprovadoPor, setAprovadoPor] = useState()

  const [imagemCabecalho, setImagemCabecalho] = useState('')
  const [imagens, setImagens] = useState([])

  const [ficha, setFicha] = useState(null)
  const [formMode, setFormMode] = useState('new')
  const [editingId, setEditingId] = useState(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [searchParams] = useSearchParams()

  // Função para redimensionar imagem e fazer upload para Supabase
  const uploadImagemSupabase = async (file) => {
    try {
      setMessage('⏳ Fazendo upload de imagem...')
      
      // Redimensionar imagem
      const reader = new FileReader()
      const resizedBlob = await new Promise((resolve, reject) => {
        reader.onload = () => {
          const img = new Image()
          img.onload = () => {
            const maxDimension = 600
            let width = img.width
            let height = img.height

            if (width > maxDimension || height > maxDimension) {
              if (width > height) {
                height = Math.round((maxDimension / width) * height)
                width = maxDimension
              } else {
                width = Math.round((maxDimension / height) * width)
                height = maxDimension
              }
            }

            const canvas = document.createElement('canvas')
            canvas.width = width
            canvas.height = height
            const ctx = canvas.getContext('2d')
            ctx.drawImage(img, 0, 0, width, height)
            canvas.toBlob(blob => resolve(blob), 'image/webp', 0.5)
          }
          img.onerror = reject
          img.src = reader.result
        }
        reader.onerror = reject
        reader.readAsDataURL(file)
      })
      
      // Gerar nome único para o arquivo
      const timestamp = Date.now()
      const randomStr = Math.random().toString(36).substring(2, 8)
      const fileExt = file.name.split('.').pop()
      const fileName = `${timestamp}-${randomStr}.${fileExt}`
      
      // Fazer upload para o bucket "fotos"
      const { data, error } = await supabase.storage
        .from('fotos')
        .upload(fileName, resizedBlob, { cacheControl: '3600', upsert: false })
      
      if (error) throw error
      
      // Obter URL pública
      const { data: publicUrlData } = supabase.storage
        .from('fotos')
        .getPublicUrl(fileName)
      
      setMessage('✓ Imagem enviada com sucesso!')
      setTimeout(() => setMessage(''), 2000)
      
      return publicUrlData.publicUrl
    } catch (error) {
      setMessage('✗ Erro ao fazer upload: ' + error.message)
      console.error('Erro:', error)
      return null
    }
  }

  const handleImagemCabecalhoChange = async (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    const url = await uploadImagemSupabase(file)
    if (url) setImagemCabecalho(url)
  }

  const handleAddImagem = () => {
    setImagens(prev => [...prev, { id: Date.now(), imagem: '', titulo: '', observacao: '' }])
  }

  const handleRemoveImagem = (id) => {
    setImagens(prev => prev.filter(item => item.id !== id))
  }

  const handleImagemChange = async (id, event) => {
    const file = event.target.files?.[0]
    if (!file) return
    const url = await uploadImagemSupabase(file)
    if (url) setImagens(prev => prev.map(item => item.id === id ? { ...item, imagem: url } : item))
  }

  const handleImagemTituloChange = (id, value) => {
    setImagens(prev => prev.map(item => item.id === id ? { ...item, titulo: value } : item))
  }

  const handleImagemObservacaoChange = (id, value) => {
    setImagens(prev => prev.map(item => item.id === id ? { ...item, observacao: value } : item))
  }

  // Função para enviar dados para a API
  const incrementVersao = (valorAtual) => {
    if (!valorAtual) return '1'
    const match = valorAtual.match(/(\d+)(?!.*\d)/)
    if (!match) return `${valorAtual} (nova)`
    const number = parseInt(match[1], 10)
    return `${valorAtual.slice(0, match.index)}${number + 1}${valorAtual.slice(match.index + match[1].length)}`
  }

  const handleSaveFicha = async () => {
    try {
      setLoading(true)
      
      // Mapear campos do formulário para os campos da tabela tb_FTP
      const fichaSalva = {
        imagem_cabecalho: imagemCabecalho || null,
        tipo,
        versao,
        data,
        molde: molde ? parseInt(molde) : null,
        maquina: maquina ? parseInt(maquina) : null,
        papi,
        codmolde,
        cavidades: cavidades ? parseInt(cavidades) : null,
        programa,
        pilha: Pilha ? parseFloat(Pilha) : null,
        lastro: lastro ? parseFloat(lastro) : null,
        meio: meio ? parseFloat(meio) : null,
        total: total ? parseFloat(total) : null,
        peso_ideal: pesoIdeal ? parseFloat(pesoIdeal) : null,
        tolerancia: tolerancia ? parseFloat(tolerancia) : null,
        t_abertura: tAbertura ? parseFloat(tAbertura) : null,
        t_fechamento: tFechamento ? parseFloat(tFechamento) : null,
        t_dosagem: tDosagem ? parseFloat(tDosagem) : null,
        t_injecao: tInjecao ? parseFloat(tInjecao) : null,
        t_recalque: tRecalque ? parseFloat(tRecalque) : null,
        t_resfriamento: tResfriamento ? parseFloat(tResfriamento) : null,
        t_extracao: tExtracao ? parseFloat(tExtracao) : null,
        t_ciclo: tCiclo ? parseFloat(tCiclo) : null,
        ph: PH ? parseFloat(PH) : null,
        materia_prima: materiaPrima,
        bico: bico ? parseFloat(bico) : null,
        z1: z1 ? parseFloat(z1) : null,
        z2: z2 ? parseFloat(z2) : null,
        z3: z3 ? parseFloat(z3) : null,
        z4: z4 ? parseFloat(z4) : null,
        z5: z5 ? parseFloat(z5) : null,
        z6: z6 ? parseFloat(z6) : null,
        z7: z7 ? parseFloat(z7) : null,
        z8: z8 ? parseFloat(z8) : null,
        z9: z9 ? parseFloat(z9) : null,
        z10: z10 ? parseFloat(z10) : null,
        z11: z11 ? parseFloat(z11) : null,
        z12: z12 ? parseFloat(z12) : null,
        z13: z13 ? parseFloat(z13) : null,
        secador,
        sec_temperatura: secTemperatura ? parseFloat(secTemperatura) : null,
        sec_tempo: secTempo ? parseFloat(secTempo) : null,
        c1: c1 ? parseFloat(c1) : null,
        c2: c2 ? parseFloat(c2) : null,
        c3: c3 ? parseFloat(c3) : null,
        c4: c4 ? parseFloat(c4) : null,
        c5: c5 ? parseFloat(c5) : null,
        c6: c6 ? parseFloat(c6) : null,
        c7: c7 ? parseFloat(c7) : null,
        c8: c8 ? parseFloat(c8) : null,
        c9: c9 ? parseFloat(c9) : null,
        c10: c10 ? parseFloat(c10) : null,
        c11: c11 ? parseFloat(c11) : null,
        c12: c12 ? parseFloat(c12) : null,
        c13: c13 ? parseFloat(c13) : null,
        c14: c14 ? parseFloat(c14) : null,
        c15: c15 ? parseFloat(c15) : null,
        c16: c16 ? parseFloat(c16) : null,
        c17: c17 ? parseFloat(c17) : null,
        c18: c18 ? parseFloat(c18) : null,
        c19: c19 ? parseFloat(c19) : null,
        c20: c20 ? parseFloat(c20) : null,
        c21: c21 ? parseFloat(c21) : null,
        c22: c22 ? parseFloat(c22) : null,
        c23: c23 ? parseFloat(c23) : null,
        c24: c24 ? parseFloat(c24) : null,
        c25: c25 ? parseFloat(c25) : null,
        c26: c26 ? parseFloat(c26) : null,
        c27: c27 ? parseFloat(c27) : null,
        obs_temperaturas: obsTemperaturas,
        refrigeracao,
        obs_refrigeracao: obsRefrigeracao,
        tipo_injecao: tipoInjecao,
        injecao1_vel: injecao1VEL ? parseFloat(injecao1VEL) : null,
        injecao1_pres: injecao1PRES ? parseFloat(injecao1PRES) : null,
        injecao1_pos: injecao1POS ? parseFloat(injecao1POS) : null,
        injecao2_vel: injecao2VEL ? parseFloat(injecao2VEL) : null,
        injecao2_pres: injecao2PRES ? parseFloat(injecao2PRES) : null,
        injecao2_pos: injecao2POS ? parseFloat(injecao2POS) : null,
        injecao3_vel: injecao3VEL ? parseFloat(injecao3VEL) : null,
        injecao3_pres: injecao3PRES ? parseFloat(injecao3PRES) : null,
        injecao3_pos: injecao3POS ? parseFloat(injecao3POS) : null,
        injecao4_vel: injecao4VEL ? parseFloat(injecao4VEL) : null,
        injecao4_pres: injecao4PRES ? parseFloat(injecao4PRES) : null,
        injecao4_pos: injecao4POS ? parseFloat(injecao4POS) : null,
        injecao_pressao_max: InjecaoPressaoMax ? parseFloat(InjecaoPressaoMax) : null,
        injecao_tempo_programado: InjecaoTempoProgramado ? parseFloat(InjecaoTempoProgramado) : null,
        recalque_tipo: recalqueTipo,
        recalque1_vel: recalque1VEL ? parseFloat(recalque1VEL) : null,
        recalque1_pres: recalque1PRES ? parseFloat(recalque1PRES) : null,
        recalque1_temp: recalque1TEMP ? parseFloat(recalque1TEMP) : null,
        recalque2_vel: recalque2VEL ? parseFloat(recalque2VEL) : null,
        recalque2_pres: recalque2PRES ? parseFloat(recalque2PRES) : null,
        recalque2_temp: recalque2TEMP ? parseFloat(recalque2TEMP) : null,
        recalque3_vel: recalque3VEL ? parseFloat(recalque3VEL) : null,
        recalque3_pres: recalque3PRES ? parseFloat(recalque3PRES) : null,
        recalque3_temp: recalque3TEMP ? parseFloat(recalque3TEMP) : null,
        recalque4_vel: recalque4VEL ? parseFloat(recalque4VEL) : null,
        recalque4_pres: recalque4PRES ? parseFloat(recalque4PRES) : null,
        recalque4_temp: recalque4TEMP ? parseFloat(recalque4TEMP) : null,
        obs_recalque: obsRecalque,
        extracao_tipo: extracaoTipo,
        extracao_repetir: extracaoRepetir === 'sim',
        extracao_repetir_qte: extracaoRepetirQte ? parseInt(extracaoRepetirQte) : null,
        obs_extracao_mecanica: obsExtracaoMecanica,
        obs_macho: obsMacho,
        obs_proc_montagem: obsProcMontagem,
        obs_op_tecnica: obsOptecnica,
        obs_qualidade: obsQualidade,
        instrucoes,
        consideracoes,
        elaborado_por: ElaboraPor,
        verificado_por: VerificadoPor,
        aprovado_por: AprovadoPor,
      }

      try {
        let result
        if (editingId) {
          // Atualizar ficha existente
          const { error } = await supabase
            .from('tb_ftp')
            .update(fichaSalva)
            .eq('id', editingId)
          
          if (error) throw error
          result = { ...fichaSalva, id: editingId }
        } else {
          // Criar nova ficha
          const { data, error } = await supabase
            .from('tb_ftp')
            .insert([fichaSalva])
            .select()
          
          if (error) throw error
          result = data?.[0]
        }

        setFicha(result)
        setMessage('✓ Ficha salva com sucesso!')
        setTimeout(() => setMessage(''), 3000)
        console.log('Ficha Salva:', result)
      } catch (dbError) {
        setMessage('✗ Erro ao salvar ficha: ' + dbError.message)
        console.error('Erro:', dbError)
      }
    } catch (error) {
      setMessage('✗ Erro na requisição: ' + error.message)
      console.error('Erro:', error)
    } finally {
      setLoading(false)
    }
  }

  // Função para recuperar dados de uma ficha específica
  const carregarFicha = async (id, mode = 'edit') => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('tb_ftp')
        .select()
        .eq('id', id)

      if (error) throw error

      if (data && data.length > 0) {
        const fichaData = data[0]
        preencherFormulario(fichaData, mode)
        setFicha(fichaData)
        setFormMode(mode)
        setEditingId(mode === 'edit' ? id : null)
        setMessage('✓ Ficha carregada com sucesso!')
        setTimeout(() => setMessage(''), 3000)
      } else {
        setMessage('✗ Ficha não encontrada')
      }
    } catch (error) {
      setMessage('✗ Erro ao carregar ficha: ' + error.message)
      console.error('Erro:', error)
    } finally {
      setLoading(false)
    }
  }

  // Função para preencher o formulário com dados recuperados
  const preencherFormulario = (data, mode = 'edit') => {
    // Mapear os campos da tabela tb_FTP para os estados React
    settipo(data.tipo)
    setImagemCabecalho(data.imagem_cabecalho || '')
    setversao(mode === 'duplicate' ? incrementVersao(data.versao) : data.versao)
    setdata(data.data)
    setmolde(data.molde || '')
    setpapi(data.papi)
    setcodmolde(data.codmolde)
    setcavidades(data.cavidades || '')
    setmaquina(data.maquina || '')
    setprograma(data.programa)
    setPilha(data.pilha || '')
    setlastro(data.lastro || '')
    setmeio(data.meio || '')
    settotal(data.total || '')
    setpesoIdeal(data.peso_ideal || '')
    settolerancia(data.tolerancia || '')
    setPH(data.ph || '')
    setmateriaPrima(data.materia_prima)
    setbico(data.bico || '')
    setz1(data.z1 || '')
    setz2(data.z2 || '')
    setz3(data.z3 || '')
    setz4(data.z4 || '')
    setz5(data.z5 || '')
    setz6(data.z6 || '')
    setz7(data.z7 || '')
    setz8(data.z8 || '')
    setz9(data.z9 || '')
    setz10(data.z10 || '')
    setz11(data.z11 || '')
    setz12(data.z12 || '')
    setz13(data.z13 || '')
    setsecador(data.secador)
    setsecTemperatura(data.sec_temperatura || '')
    setsecTempo(data.sec_tempo || '')
    setc1(data.c1 || '')
    setc2(data.c2 || '')
    setc3(data.c3 || '')
    setc4(data.c4 || '')
    setc5(data.c5 || '')
    setc6(data.c6 || '')
    setc7(data.c7 || '')
    setc8(data.c8 || '')
    setc9(data.c9 || '')
    setc10(data.c10 || '')
    setc11(data.c11 || '')
    setc12(data.c12 || '')
    setc13(data.c13 || '')
    setc14(data.c14 || '')
    setc15(data.c15 || '')
    setc16(data.c16 || '')
    setc17(data.c17 || '')
    setc18(data.c18 || '')
    setc19(data.c19 || '')
    setc20(data.c20 || '')
    setc21(data.c21 || '')
    setc22(data.c22 || '')
    setc23(data.c23 || '')
    setc24(data.c24 || '')
    setc25(data.c25 || '')
    setc26(data.c26 || '')
    setc27(data.c27 || '')
    setobsTemperaturas(data.obs_temperaturas)
    setrefrigeracao(data.refrigeracao)
    setobsRefrigeracao(data.obs_refrigeracao)
    settAbertura(data.t_abertura || '')
    settFechamento(data.t_fechamento || '')
    settDosagem(data.t_dosagem || '')
    settInjecao(data.t_injecao || '')
    settRecalque(data.t_recalque || '')
    settResfriamento(data.t_resfriamento || '')
    settExtracao(data.t_extracao || '')
    settCiclo(data.t_ciclo || '')
    settipoInjecao(data.tipo_injecao)
    setinjecao1VEL(data.injecao1_vel || '')
    setinjecao1PRES(data.injecao1_pres || '')
    setinjecao1POS(data.injecao1_pos || '')
    setinjecao2VEL(data.injecao2_vel || '')
    setinjecao2PRES(data.injecao2_pres || '')
    setinjecao2POS(data.injecao2_pos || '')
    setinjecao3VEL(data.injecao3_vel || '')
    setinjecao3PRES(data.injecao3_pres || '')
    setinjecao3POS(data.injecao3_pos || '')
    setinjecao4VEL(data.injecao4_vel || '')
    setinjecao4PRES(data.injecao4_pres || '')
    setinjecao4POS(data.injecao4_pos || '')
    setInjecaoPressaoMax(data.injecao_pressao_max || '')
    setInjecaoTempoProgramado(data.injecao_tempo_programado || '')
    setrecalqueTipo(data.recalque_tipo)
    setrecalque1VEL(data.recalque1_vel || '')
    setrecalque1PRES(data.recalque1_pres || '')
    setrecalque1TEMP(data.recalque1_temp || '')
    setrecalque2VEL(data.recalque2_vel || '')
    setrecalque2PRES(data.recalque2_pres || '')
    setrecalque2TEMP(data.recalque2_temp || '')
    setrecalque3VEL(data.recalque3_vel || '')
    setrecalque3PRES(data.recalque3_pres || '')
    setrecalque3TEMP(data.recalque3_temp || '')
    setrecalque4VEL(data.recalque4_vel || '')
    setrecalque4PRES(data.recalque4_pres || '')
    setrecalque4TEMP(data.recalque4_temp || '')
    setobsRecalque(data.obs_recalque)
    setextracaoTipo(data.extracao_tipo)
    setextracaoRepetir(data.extracao_repetir ? 'sim' : 'nao')
    setextracaoRepetirQte(data.extracao_repetir_qte || '')
    setobsExtracaoMecanica(data.obs_extracao_mecanica)
    setobsMacho(data.obs_macho)
    setobsProcMontagem(data.obs_proc_montagem)
    setobsOptecnica(data.obs_op_tecnica)
    setobsQualidade(data.obs_qualidade)
    setinstrucoes(data.instrucoes)
    setconsideracoes(data.consideracoes)
    setElaboraPor(data.elaborado_por)
    setVerificadoPor(data.verificado_por)
    setAprovadoPor(data.aprovado_por)
  }

  useEffect(() => {
    const id = searchParams.get('id')
    const mode = searchParams.get('mode')

    if (id) {
      carregarFicha(id, mode === 'duplicate' ? 'duplicate' : 'edit')
    } else {
      setFormMode('new')
      setEditingId(null)
    }
  }, [searchParams])

  return (
    <>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
<div style={{background:'#555858', color:'white'}}>
        <h3>{formMode === 'edit' ? 'Editar Ficha Técnica' : formMode === 'duplicate' ? 'Duplicar Ficha Técnica' : 'Nova Ficha Técnica'}</h3>
        <img id='imagem_cabecalho' style={{ height: '200px', border:'4px solid gray', padding:' 10px 10px 10px 10px', margin:'10px 10px 30px 10px'}} src={imagemCabecalho} />
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '6px' }}>Imagem de Cabeçalho</label>
          <input id='imagem_cabecalho_input' type='file' accept='image/*' onChange={handleImagemCabecalhoChange} />
        </div>
        
        <div className='quadroMaior'>
          <div className='coluna'>
            <div className='campos-container'>
              {/* ENTRADA */}

              <label>Cod:</label>
              <input type='text' value={molde} list="listMoldes" onChange={(e) => setmolde(e.target.value)} style={{ width: '200px' }}/>
                <datalist id='listMoldes'>
                  {listaMoldes.map(m => (
                  <option key={m.id} value={m.codMoldeExterno}>{m.descMolde}</option>
                ))}
                </datalist>
              
              <label>Máquina</label>
              <select value={maquina} onChange={(e) => setmaquina(e.target.value)} style={{ width: '200px' }}>
                {maquinas.map(m => (
                  <option style={{ color: 'black' }} key={m.id} value={m.codMaquina}>{m.descMaquina}</option>
                ))}
              </select>
              <div className='pulaLinha'></div>
              <label>Produto:</label>
              <input type="text" style={{ width: '300px' }}   />
              <div style={{ padding: '20px' }}>
              </div>
            </div>
            <div className='coluna'>
              <div className='campos-container'>

                <div className="field-p"><label>Cav</label><input value={cavidades} onChange={(e) => setcavidades(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Ciclo</label><input value={tCiclo} onChange={(e) => settCiclo(e.target.value)} type='text' /></div>
                <div className="field-p"><label>PH</label><input value={PH} onChange={(e) => setPH(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Peso</label><input value={pesoIdeal} onChange={(e) => setpesoIdeal(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Padrão</label><input type='text' /></div>
                <div className="field-p"><label>Embalagem</label><input type='text' /></div>
                <div className="field-p"><label>T Dos</label><input value={tDosagem} onChange={(e) => settDosagem(e.target.value)} type='text' /></div>
                <div className="field-p"><label>T Inj</label><input value={tInjecao} onChange={(e) => settInjecao(e.target.value)} type='text' /></div>
                <div className="field-p"><label>T Ext</label><input value={tExtracao} onChange={(e) => settExtracao(e.target.value)} type='text' /></div>
                <div className="field-p"><label>T Abe</label><input value={tAbertura} onChange={(e) => settAbertura(e.target.value)} type='text' /></div>
                <div className="field-p"><label>T Fech</label><input value={tFechamento} onChange={(e) => settFechamento(e.target.value)} type='text' /></div>
                </div><br/>
                <div style={{textAlign:'right'}}>
                <div><label>Elaborado por:</label><input value={ElaboraPor} onChange={(e) => setElaboraPor(e.target.value)} type='text' /></div>
                <div><label>Aprovado por:</label><input value={AprovadoPor} onChange={(e) => setAprovadoPor(e.target.value)} type='text' /></div>
                <div><label>Aprovado em:</label><input value={data} onChange={(e) => setdata(e.target.value)} type='text' /></div>
              </div>
            </div>
          </div>
        </div>
</div>
        {/* CABEÇALHO */}

        <Section title="MATÉRIA PRIMA">
          <div>
            <label>Matéria Prima</label>
            <textarea className='txt-area' value={materiaPrima} onChange={(e) => setmateriaPrima(e.target.value)} placeholder='Informações de Matéria Prima' />
          </div>

        </Section>

        <Section title="TEMPERATURA">

          <div className='campos-container'>
            <div className="field-p">
              <label>Bico:</label>
              <input type="text" value={bico} onChange={(e) => setbico(e.target.value)} pattern="[Pp]?[0-9]*" />
            </div>

            <div className="field-p">
              <label>Z1:</label>
              <input value={z1} onChange={(e) => setz1(e.target.value)} type="number" />
            </div>
            <div className="field-p">
              <label>Z2:</label>
              <input value={z2} onChange={(e) => setz2(e.target.value)} type="number" />
            </div>
            <div className="field-p">
              <label>Z3:</label>
              <input value={z3} onChange={(e) => setz3(e.target.value)} type="number" />
            </div>
            <div className="field-p">
              <label>Z4:</label>
              <input value={z4} onChange={(e) => setz4(e.target.value)} type="number" />
            </div>
            <div className="field-p">
              <label>Z5:</label>
              <input value={z5} onChange={(e) => setz5(e.target.value)} type="number" />
            </div>
            <div className="field-p">
              <label>Z6:</label>
              <input value={z6} onChange={(e) => setz6(e.target.value)} type="number" />
            </div>
            <div className="field-p">
              <label>Z7:</label>
              <input value={z7} onChange={(e) => setz7(e.target.value)} type="number" />
            </div>
            <div className="field-p">
              <label>Z8:</label>
              <input value={z8} onChange={(e) => setz8(e.target.value)} type="number" />
            </div>

            <div className='pulaLinha'></div>

            <div className="field-p">
              <label>CQ 1:</label>
              <input value={c1} onChange={(e) => setc1(e.target.value)} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 2:</label>
              <input value={c2} onChange={(e) => setc2(e.target.value)} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 3:</label>
              <input value={c3} onChange={(e) => setc3(e.target.value)} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 4:</label>
              <input value={c4} onChange={(e) => setc4(e.target.value)} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 5:</label>
              <input value={c5} onChange={(e) => setc5(e.target.value)} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 6:</label>
              <input value={c6} onChange={(e) => setc6(e.target.value)} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 7:</label>
              <input value={c7} onChange={(e) => setc7(e.target.value)} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 8:</label>
              <input value={c8} onChange={(e) => setc8(e.target.value)} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 9:</label>
              <input value={c9} onChange={(e) => setc9(e.target.value)} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 10:</label>
              <input value={c10} onChange={(e) => setc10(e.target.value)} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 11:</label>
              <input value={c11} onChange={(e) => setc11(e.target.value)} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 12:</label>
              <input value={c12} onChange={(e) => setc12(e.target.value)} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 13:</label>
              <input value={c13} onChange={(e) => setc13(e.target.value)} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 14:</label>
              <input value={c14} onChange={(e) => setc14(e.target.value)} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 15:</label>
              <input value={c15} onChange={(e) => setc15(e.target.value)} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 16:</label>
              <input value={c16} onChange={(e) => setc16(e.target.value)} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 17:</label>
              <input value={c17} onChange={(e) => setc17(e.target.value)} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 18:</label>
              <input value={c18} onChange={(e) => setc18(e.target.value)} type="number" />
            </div>
          </div>

          <div className='field'>
            <label>Observações</label>
            <textarea className="txt-area" value={obsTemperaturas} onChange={(e) => setobsTemperaturas(e.target.value)} placeholder='Observações a respeito da temperatura' />
          </div>


        </Section>
        <Section title="REFRIGERÇÃO">
          <label>Água</label>
          <input type="text" value={refrigeracao} onChange={(e) => setrefrigeracao(e.target.value)} list="tiposAgua" />
          <datalist id='tiposAgua'>
            <option value="1">Normal</option>
            <option value="2">Refrigerada</option>
            <option value="3">Aquecida</option>
          </datalist>

          <div className='field'>
            <label>Observações</label>
            <textarea className="txt-area" value={obsRefrigeracao} onChange={(e) => setobsRefrigeracao(e.target.value)} placeholder='Observações a respeito da refrigeração' />
          </div>

        </Section>

        <Section title="ABERTURA E FECHAMENTO">
          <div className='quadroMaior'>

            {/* COLUNA 1: ABERTURA */}
            <div className='coluna'>
              <div className='campos-container'>
                <div className="field"><strong>Abertura</strong></div>
                <div className='pulaLinha'></div>

                {/* Linha 1 */}
                <div className="field-p"><label>Vel 1</label><input value={ab1VEL} onChange={(e) => setab1VEL(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Pres 1</label><input value={ab1PRES} onChange={(e) => setab1PRES(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Pos 1</label><input value={ab1POS} onChange={(e) => setab1POS(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 2 */}
                <div className="field-p"><label>Vel 2</label><input value={ab2VEL} onChange={(e) => setab2VEL(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Pres 2</label><input value={ab2PRES} onChange={(e) => setab2PRES(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Pos 2</label><input value={ab2POS} onChange={(e) => setab2POS(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 3 */}
                <div className="field-p"><label>Vel 3</label><input value={ab3VEL} onChange={(e) => setab3VEL(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Pres 3</label><input value={ab3PRES} onChange={(e) => setab3PRES(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Pos 3</label><input value={ab3POS} onChange={(e) => setab3POS(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 4 */}
                <div className="field-p"><label>Vel 4</label><input value={ab4VEL} onChange={(e) => setab4VEL(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Pres 4</label><input value={ab4PRES} onChange={(e) => setab4PRES(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Pos 4</label><input value={ab4POS} onChange={(e) => setab4POS(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 5 */}
                <div className="field-p"><label>Vel 5</label><input value={abFimVEL} onChange={(e) => setabFimVEL(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Pres 5</label><input value={abFimPRES} onChange={(e) => setabFimPRES(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Pos 5</label><input value={abFimPOS} onChange={(e) => setabFimPOS(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>
              </div>
            </div>

            {/* COLUNA 2: FECHAMENTO */}
            <div className='coluna'>
              <div className='campos-container'>
                <div className="field"><strong>Fechamento</strong></div>
                <div className='pulaLinha'></div>

                {/* Linha 1 */}
                <div className="field-p"><label>Vel 1</label><input value={fecha1VEL} onChange={(e) => setfecha1VEL(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Pres 1</label><input value={fecha1PRES} onChange={(e) => setfecha1PRES(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Pos 1</label><input value={fecha1POS} onChange={(e) => setfecha1POS(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 2 */}
                <div className="field-p"><label>Vel 2</label><input value={fecha2VEL} onChange={(e) => setfecha2VEL(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Pres 2</label><input value={fecha2PRES} onChange={(e) => setfecha2PRES(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Pos 2</label><input value={fecha2POS} onChange={(e) => setfecha2POS(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 3 */}
                <div className="field-p"><label>Vel 3</label><input value={fecha3VEL} onChange={(e) => setfecha3VEL(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Pres 3</label><input value={fecha3PRES} onChange={(e) => setfecha3PRES(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Pos 3</label><input value={fecha3POS} onChange={(e) => setfecha3POS(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>
                {/* Linha 4 */}
                <div className="field-p"><label>Vel 4</label><input value={fecha4VEL} onChange={(e) => setfecha4VEL(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Pres 4</label><input value={fecha4PRES} onChange={(e) => setfecha4PRES(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Pos 4</label><input value={fecha4POS} onChange={(e) => setfecha4POS(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>
                {/* Linha 5 */}
                <div className="field-p"><label>Vel 5</label><input value={fechaFimVEL} onChange={(e) => setfechaFimVEL(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Pres 5</label><input value={fechaFimPRES} onChange={(e) => setfechaFimPRES(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Pos 5</label><input value={fechaFimPOS} onChange={(e) => setfechaFimPOS(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>


              </div>


            </div>

          </div>

          <label>Observações</label>
          <textarea className="txt-area" value={obsAbreFecha} onChange={(e) => setobsAbreFecha(e.target.value)} placeholder='Observações a respeito da abertura e Abertura e Fechamento' />

        </Section>

        <Section title="DOSAGEM, INJEÇÃO e RECALQUE">
          <div className='quadroMaior'>

            {/* DOSAGEM */}
            <div className='coluna'>
              <div className='campos-container'>
                <div className="field"><strong>DOSAGEM</strong></div>
                <div className='pulaLinha'></div>

                {/* Linha 1 */}
                <div className="field-pp"><label>Vel 1</label><input value={dosagem1VEL} onChange={(e) => setdosagem1VEL(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Pres 1</label><input value={dosagem1PRES} onChange={(e) => setdosagem1PRES(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>CtP 1</label><input value={dosagem1CONPRES} onChange={(e) => setdosagem1CONPRES(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Pos 1</label><input value={dosagem1POS} onChange={(e) => setdosagem1POS(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 2 */}
                <div className="field-pp"><label>Vel 2</label><input value={dosagem2VEL} onChange={(e) => setdosagem2VEL(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Pres 2</label><input value={dosagem2PRES} onChange={(e) => setdosagem2PRES(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>CtP 2</label><input value={dosagem2CONPRES} onChange={(e) => setdosagem2CONPRES(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Pos 2</label><input value={dosagem2POS} onChange={(e) => setdosagem2POS(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 3 */}
                <div className="field-pp"><label>Vel 3</label><input value={dosagem3VEL} onChange={(e) => setdosagem3VEL(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Pres 3</label><input value={dosagem3PRES} onChange={(e) => setdosagem3PRES(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>CtP 3</label><input value={dosagem3CONPRES} onChange={(e) => setdosagem3CONPRES(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Pos 3</label><input value={dosagem3POS} onChange={(e) => setdosagem3POS(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>

              </div>
            </div>

            {/* INJEÇÃO */}
            <div className='coluna'>
              <div className='campos-container'>
                <div className="field"><strong>INJEÇÃO</strong></div>
                <div className='pulaLinha'></div>

                {/* Linha 1 */}
                <div className="field-pp"><label>Vel 1</label><input value={injecao1VEL} onChange={(e) => setinjecao1VEL(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Pres 1</label><input value={injecao1PRES} onChange={(e) => setinjecao1PRES(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Pos 1</label><input value={injecao1POS} onChange={(e) => setinjecao1POS(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 2 */}
                <div className="field-pp"><label>Vel 2</label><input value={injecao2VEL} onChange={(e) => setinjecao2VEL(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Pres 2</label><input value={injecao2PRES} onChange={(e) => setinjecao2PRES(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Pos 2</label><input value={injecao2POS} onChange={(e) => setinjecao2POS(e.target.value)} type='text' /></div>

                <div className='pulaLinha'></div>

                {/* Linha 3 */}
                <div className="field-pp"><label>Vel 3</label><input value={injecao3VEL} onChange={(e) => setinjecao3VEL(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Pres 3</label><input value={injecao3PRES} onChange={(e) => setinjecao3PRES(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Pos 3</label><input value={injecao3POS} onChange={(e) => setinjecao3POS(e.target.value)} type='text' /></div>

                <div className='pulaLinha'></div>
              </div>


            </div>
            <div className='coluna'>
              <div className='campos-container'>
                <div className="field"><strong>RECALQUE</strong></div>
                <div className='pulaLinha'></div>
                {/* comutação */}
                <div className="field-p"><label>Comutação</label><input value={injecaoComutacao} onChange={(e) => setinjecaoComutacao(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Leakage</label><input value={InjecaoLeakage} onChange={(e) => setInjecaoLeakage(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 1 */}
                <div className="field-pp"><label>Vel 1</label><input value={recalque1VEL} onChange={(e) => setrecalque1VEL(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Pres 1</label><input value={recalque2PRES} onChange={(e) => setrecalque2PRES(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Temp 1</label><input value={recalque1TEMP} onChange={(e) => setrecalque1TEMP(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 2 */}
                <div className="field-pp"><label>Vel 2</label><input value={recalque2VEL} onChange={(e) => setrecalque2VEL(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Pres 2</label><input value={recalque2PRES} onChange={(e) => setrecalque2PRES(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Temp 2</label><input value={recalque2TEMP} onChange={(e) => setrecalque2TEMP(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 3 */}
                <div className="field-pp"><label>Vel 3</label><input value={recalque3VEL} onChange={(e) => setrecalque3VEL(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Pres 3</label><input value={recalque3PRES} onChange={(e) => setrecalque3PRES(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Temp 3</label><input value={recalque3TEMP} onChange={(e) => setrecalque3TEMP(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>
              </div>
            </div>
          </div>


          <div>
          </div>
          <div className='quadroMaior'>
            <div className='coluna'>
              <div className='campos-container'>
                {/* Linha 2 */}
                <label> DESCOMPRESSÃO</label>
                <div className='pulaLinha'></div>
                <label>DIANTEIRA</label>
                <div className="field-pp"><label>LIG/DESL</label><input type='text' /></div>
                <div className="field-pp"><label>Vel1</label><input type='text' /></div>
                <div className="field-pp"><label>Pres1</label><input type='text' /></div>
                <div className="field-pp"><label>Pos1</label><input type='text' /></div>
                <div className='pulaLinha'></div>

                <label>TRASEIRA</label>
                <div className="field-pp"><label>LIG/DESL</label><input type='text' /></div>
                <div className="field-pp"><label>Vel1</label><input type='text' /></div>
                <div className="field-pp"><label>Pres1</label><input type='text' /></div>
                <div className="field-pp"><label>Pos1</label><input type='text' /></div>
                <div className='pulaLinha'></div>
              </div>
            </div>
          </div>
          <label>Observações</label>
          <textarea className="txt-area" value={obsRecalque} onChange={(e) => setobsRecalque(e.target.value)} placeholder='Observações a respeito dosagem, injeção, recalque e descompressão' />
        </Section>

        <Section title="EXTRAÇÃO MECANICA">
          {/* AVANÇO EXTRATOR */}

          {/* Linha 1 */}
          <div className="field"><label>Tipo Extração</label><input value={extracaoTipo} onChange={(e) => setextracaoTipo(e.target.value)} type='text' /></div>
          <div className="field"><label>NRepetições</label><input onChange={(e) => setextracaoRepetirQte(e.target.value)} type='text' /></div>
          <div className="field"><label>Pausa Ext</label><input onChange={(e) => setextracaoPausa(e.target.value)} type='text' /></div>
          <div className='pulaLinha'></div>

          <div className='quadroMaior'>
            <div className='coluna'>
              <div className='campos-container'>

                <div className="field"><strong>AVANÇO</strong></div>
                <div className='pulaLinha'></div>
                {/* Linha 2 */}
                <div className="field-p"><label>Vel 1</label><input value={extAvanco1VEL} onChange={(e) => setextAvanco1VEL(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Pres 1</label><input value={extAvanco1PRES} onChange={(e) => setextAvanco1PRES(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Pos 1</label><input value={extAvanco1POS} onChange={(e) => setextAvanco1POS(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 3 */}
                <div className="field-p"><label>Vel 2</label><input value={extAvanco2VEL} onChange={(e) => setextAvanco2VEL(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Pres 2</label><input value={extAvanco2PRES} onChange={(e) => setextAvanco2PRES(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Pos 2</label><input value={extAvanco2POS} onChange={(e) => setextAvanco2POS(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>

              </div>
            </div>

            {/* COLUNA 2: FECHAMENTO */}
            <div className='coluna'>
              <div className='campos-container'>
                <div className="field"><strong>FECHAMENTO</strong></div>
                <div className='pulaLinha'></div>

                {/* Linha 1 */}
                <div className="field-p"><label>Vel 1</label><input value={extRetorno1VEL} onChange={(e) => setextRetorno1VEL(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Pres 1</label><input value={extRetorno1PRES} onChange={(e) => setextRetorno1PRES(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Pos 1</label><input value={extRetorno1POS} onChange={(e) => setextRetorno1POS(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 2 */}
                <div className="field-p"><label>Vel 2</label><input value={extRetorno2VEL} onChange={(e) => setextRetorno2VEL(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Pres 2</label><input value={extRetorno2PRES} onChange={(e) => setextRetorno2PRES(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Pos 2</label><input value={extRetorno2POS} onChange={(e) => setextRetorno2POS(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>

              </div>


            </div>

          </div>

          <label>Observações</label>
          <textarea className="txt-area" placeholder='Observações ' value={obsExtracaoMecanica} onChange={(e) => setobsExtracaoMecanica(e.target.value)} />

        </Section>

        <Section title="PNEUMÁTICO">

          <div className='quadroMaior'>
            <div className='Coluna'>
              <div className='campos-container'>
                <div>Ar 1</div>
                <div className="field-p"><label>Tipo 1</label><input value={extPneu1Tipo} onChange={(e) => setextPneu1Tipo(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Posicao 1</label><input value={extPneu1POS} onChange={(e) => setextPneu1POS(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Atraso 1</label><input value={extPneu1RET} onChange={(e) => setextPneu1RET(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Tempo 2</label><input value={extPneu1TEMP} onChange={(e) => setextPneu1TEMP(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>

                <div>Ar 2</div>
                <div className="field-p"><label>Tipo 2</label><input value={extPneu2Tipo} onChange={(e) => setextPneu2Tipo(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Posicao 2</label><input value={extPneu2POS} onChange={(e) => setextPneu2POS(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Atraso 2</label><input value={extPneu2RET} onChange={(e) => setextPneu2RET(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Tempo 2</label><input value={extPneu2TEMP} onChange={(e) => setextPneu2TEMP(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>

                <div>Ar 3</div>
                <div className="field-p"><label>Tipo 3</label><input value={extPneu3Tipo} onChange={(e) => setextPneu3Tipo(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Posicao 3</label><input value={extPneu3POS} onChange={(e) => setextPneu3POS(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Atraso 3</label><input value={extPneu3RET} onChange={(e) => setextPneu3RET(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Tempo 3</label><input value={extPneu3TEMP} onChange={(e) => setextPneu3TEMP(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>

                <div>Ar 4</div>
                <div className="field-p"><label>Tipo 4</label><input value={extPneu4Tipo} onChange={(e) => setextPneu4Tipo(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Posicao 4</label><input value={extPneu4POS} onChange={(e) => setextPneu4POS(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Atraso 4</label><input value={extPneu4RET} onChange={(e) => setextPneu4RET(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Tempo 4</label><input value={extPneu4TEMP} onChange={(e) => setextPneu4TEMP(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>

                <div>Ar 5</div>
                <div className="field-p"><label>Tipo 5</label><input value={extPneu5Tipo} onChange={(e) => setextPneu5Tipo(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Posicao 5</label><input value={extPneu5POS} onChange={(e) => setextPneu5POS(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Atraso 5</label><input value={extPneu5RET} onChange={(e) => setextPneu5RET(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Tempo 5</label><input value={extPneu5TEMP} onChange={(e) => setextPneu5TEMP(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>


              </div>

            </div>

          </div>

        </Section>

        <Section title="MACHOS">
          <div className='quadroMaior'>

            {/* MACHO 1: ABERTURA */}
            <div className='coluna'>
              <div className='campos-container'>
                <div className="field"><strong>AVANÇO</strong></div>
                <div className='pulaLinha'></div>

                {/* Linha 1 */}
                <div className="field-pp"><label>Lig/Desl</label><input value={MachoAvanco1Modo} onChange={(e) => setMachoAvanco1Modo(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Cond 1</label><input value={MachoAvanco1Cond} onChange={(e) => setMachoAvanco1Cond(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Cur 1</label><input value={MachoAvanco1Curso} onChange={(e) => setMachoAvanco1Curso(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>vel 1</label><input value={MachoAvanco1VEL} onChange={(e) => setMachoAvanco1VEL(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>press 1</label><input value={MachoAvanco1PRES} onChange={(e) => setMachoAvanco1PRES(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>temp 1</label><input value={MachoAvanco1TEMP} onChange={(e) => setMachoAvanco1TEMP(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 2 */}
                <div className="field-pp"><label>Lig/Desl</label><input value={MachoAvanco2Modo} onChange={(e) => setMachoAvanco2Modo(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Cond 2</label><input value={MachoAvanco2Cond} onChange={(e) => setMachoAvanco2Cond(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Cur 2</label><input value={MachoAvanco2Curso} onChange={(e) => setMachoAvanco2Curso(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>vel 2</label><input value={MachoAvanco2VEL} onChange={(e) => setMachoAvanco2VEL(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>press 2</label><input value={MachoAvanco2PRES} onChange={(e) => setMachoAvanco2PRES(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>temp 2</label><input value={MachoAvanco2TEMP} onChange={(e) => setMachoAvanco2TEMP(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 2 */}
                <div className="field-pp"><label>Lig/Desl</label><input value={MachoAvanco3Modo} onChange={(e) => setMachoAvanco3Modo(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Cond 3</label><input value={MachoAvanco3Cond} onChange={(e) => setMachoAvanco3Cond(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Cur 3</label><input value={MachoAvanco3Curso} onChange={(e) => setMachoAvanco3Curso(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>vel 3</label><input value={MachoAvanco3VEL} onChange={(e) => setMachoAvanco3VEL(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>press 3</label><input value={MachoAvanco3PRES} onChange={(e) => setMachoAvanco3PRES(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>temp 3</label><input value={MachoAvanco3TEMP} onChange={(e) => setMachoAvanco3TEMP(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 2 */}
                <div className="field-pp"><label>Lig/Desl</label><input value={MachoAvanco4Modo} onChange={(e) => setMachoAvanco4Modo(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Cond 4</label><input value={MachoAvanco4Cond} onChange={(e) => setMachoAvanco4Cond(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Cur 4</label><input value={MachoAvanco4Curso} onChange={(e) => setMachoAvanco4Curso(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>vel 4</label><input value={MachoAvanco4VEL} onChange={(e) => setMachoAvanco4VEL(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>press 4</label><input value={MachoAvanco4PRES} onChange={(e) => setMachoAvanco4PRES(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>temp 4</label><input value={MachoAvanco4TEMP} onChange={(e) => setMachoAvanco4TEMP(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>
                {/* Linha 2 */}
                <div className="field-pp"><label>Lig/Desl</label><input value={MachoAvanco5Modo} onChange={(e) => setMachoAvanco5Modo(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Cond 5</label><input value={MachoAvanco5Cond} onChange={(e) => setMachoAvanco5Cond(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Cur 5</label><input value={MachoAvanco5Curso} onChange={(e) => setMachoAvanco5Curso(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>vel 5</label><input value={MachoAvanco5VEL} onChange={(e) => setMachoAvanco5VEL(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>press 5</label><input value={MachoAvanco5PRES} onChange={(e) => setMachoAvanco5PRES(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>temp 5</label><input value={MachoAvanco5TEMP} onChange={(e) => setMachoAvanco5TEMP(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>
                {/* Linha 2 */}
                <div className="field-pp"><label>Lig/Desl</label><input value={MachoAvanco6Modo} onChange={(e) => setMachoAvanco6Modo(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Cond 6</label><input value={MachoAvanco6Cond} onChange={(e) => setMachoAvanco6Cond(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Cur 6</label><input value={MachoAvanco6Curso} onChange={(e) => setMachoAvanco6Curso(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>vel 6</label><input value={MachoAvanco6VEL} onChange={(e) => setMachoAvanco6VEL(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>press 6</label><input value={MachoAvanco6PRES} onChange={(e) => setMachoAvanco6PRES(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>temp 6</label><input value={MachoAvanco6TEMP} onChange={(e) => setMachoAvanco6TEMP(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* RETORNO  */}
                <div className="field-pp"><label>Lig/Desl</label><input value={MachoAvanco7Modo} onChange={(e) => setMachoAvanco7Modo(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Cond 7</label><input value={MachoAvanco7Cond} onChange={(e) => setMachoAvanco7Cond(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Cur 7</label><input value={MachoAvanco7Curso} onChange={(e) => setMachoAvanco7Curso(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>vel 7</label><input value={MachoAvanco7VEL} onChange={(e) => setMachoAvanco7VEL(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>press 7</label><input value={MachoAvanco7PRES} onChange={(e) => setMachoAvanco7PRES(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>temp 7</label><input value={MachoAvanco7TEMP} onChange={(e) => setMachoAvanco7TEMP(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>
                {/* Linha 2 */}
                <div className="field-pp"><label>Lig/Desl</label><input value={MachoAvanco8Modo} onChange={(e) => setMachoAvanco8Modo(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Cond 8</label><input value={MachoAvanco8Cond} onChange={(e) => setMachoAvanco8Cond(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Cur 8</label><input value={MachoAvanco8Curso} onChange={(e) => setMachoAvanco8Curso(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>vel 8</label><input value={MachoAvanco8VEL} onChange={(e) => setMachoAvanco8VEL(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>press 8</label><input value={MachoAvanco8PRES} onChange={(e) => setMachoAvanco8PRES(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>temp 8</label><input value={MachoAvanco8TEMP} onChange={(e) => setMachoAvanco8TEMP(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>


              </div>
            </div>

            {/* COLUNA 2: FECHAMENTO */}
            <div className='coluna'>
              <div className='campos-container'>
                <div className="field"><strong>RECUO</strong></div>
                <div className='pulaLinha'></div>

                {/* Linha 1 */}
                <div className="field-pp"><label>Lig/Desl</label><input value={MachoRetorno1Modo} onChange={(e) => setMachoRetorno1Modo(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Cond 1</label><input value={MachoRetorno1Cond} onChange={(e) => setMachoRetorno1Cond(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Cur 1</label><input value={MachoRetorno1Curso} onChange={(e) => setMachoRetorno1Curso(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>vel 1</label><input value={MachoRetorno1VEL} onChange={(e) => setMachoRetorno1VEL(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>press 1</label><input value={MachoRetorno1PRES} onChange={(e) => setMachoRetorno1PRES(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>temp 1</label><input value={MachoRetorno1TEMP} onChange={(e) => setMachoRetorno1TEMP(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 2 */}
                <div className="field-pp"><label>Lig/Desl</label><input value={MachoRetorno2Modo} onChange={(e) => setMachoRetorno2Modo(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Cond 2</label><input value={MachoRetorno2Cond} onChange={(e) => setMachoRetorno2Cond(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Cur 2</label><input value={MachoRetorno2Curso} onChange={(e) => setMachoRetorno2Curso(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>vel 2</label><input value={MachoRetorno2VEL} onChange={(e) => setMachoRetorno2VEL(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>press 2</label><input value={MachoRetorno2PRES} onChange={(e) => setMachoRetorno2PRES(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>temp 2</label><input value={MachoRetorno2TEMP} onChange={(e) => setMachoRetorno2TEMP(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 2 */}
                <div className="field-pp"><label>Lig/Desl</label><input value={MachoRetorno3Modo} onChange={(e) => setMachoRetorno3Modo(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Cond 3</label><input value={MachoRetorno3Cond} onChange={(e) => setMachoRetorno3Cond(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Cur 3</label><input value={MachoRetorno3Curso} onChange={(e) => setMachoRetorno3Curso(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>vel 3</label><input value={MachoRetorno3VEL} onChange={(e) => setMachoRetorno3VEL(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>press 3</label><input value={MachoRetorno3PRES} onChange={(e) => setMachoRetorno3PRES(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>temp 3</label><input value={MachoRetorno3TEMP} onChange={(e) => setMachoRetorno3TEMP(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 2 */}
                <div className="field-pp"><label>Lig/Desl</label><input value={MachoRetorno4Modo} onChange={(e) => setMachoRetorno4Modo(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Cond 4</label><input value={MachoRetorno4Cond} onChange={(e) => setMachoRetorno4Cond(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Cur 4</label><input value={MachoRetorno4Curso} onChange={(e) => setMachoRetorno4Curso(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>vel 4</label><input value={MachoRetorno4VEL} onChange={(e) => setMachoRetorno4VEL(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>press 4</label><input value={MachoRetorno4PRES} onChange={(e) => setMachoRetorno4PRES(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>temp 4</label><input value={MachoRetorno4TEMP} onChange={(e) => setMachoRetorno4TEMP(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>
                {/* Linha 2 */}

                <div className="field-pp"><label>Lig/Desl</label><input value={MachoRetorno5Modo} onChange={(e) => setMachoRetorno5Modo(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Cond 5</label><input value={MachoRetorno5Cond} onChange={(e) => setMachoRetorno5Cond(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Cur 5</label><input value={MachoRetorno5Curso} onChange={(e) => setMachoRetorno5Curso(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>vel 5</label><input value={MachoRetorno5VEL} onChange={(e) => setMachoRetorno5VEL(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>press 5</label><input value={MachoRetorno5PRES} onChange={(e) => setMachoRetorno5PRES(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>temp 5</label><input value={MachoRetorno5TEMP} onChange={(e) => setMachoRetorno5TEMP(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>
                {/* Linha 2 */}
                <div className="field-pp"><label>Lig/Desl</label><input value={MachoRetorno6Modo} onChange={(e) => setMachoRetorno6Modo(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Cond 6</label><input value={MachoRetorno6Cond} onChange={(e) => setMachoRetorno6Cond(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Cur 6</label><input value={MachoRetorno6Curso} onChange={(e) => setMachoRetorno6Curso(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>vel 6</label><input value={MachoRetorno6VEL} onChange={(e) => setMachoRetorno6VEL(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>press 6</label><input value={MachoRetorno6PRES} onChange={(e) => setMachoRetorno6PRES(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>temp 6</label><input value={MachoRetorno6TEMP} onChange={(e) => setMachoRetorno6TEMP(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>
                {/* Linha 2 */}
                <div className="field-pp"><label>Lig/Desl</label><input value={MachoRetorno7Modo} onChange={(e) => setMachoRetorno7Modo(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Cond 7</label><input value={MachoRetorno7Cond} onChange={(e) => setMachoRetorno7Cond(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Cur 7</label><input value={MachoRetorno7Curso} onChange={(e) => setMachoRetorno7Curso(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>vel 7</label><input value={MachoRetorno7VEL} onChange={(e) => setMachoRetorno7VEL(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>press 7</label><input value={MachoRetorno7PRES} onChange={(e) => setMachoRetorno7PRES(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>temp 7</label><input value={MachoRetorno7TEMP} onChange={(e) => setMachoRetorno7TEMP(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>
                {/* Linha 2 */}
                <div className="field-pp"><label>Lig/Desl</label><input value={MachoRetorno8Modo} onChange={(e) => setMachoRetorno8Modo(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Cond 8</label><input value={MachoRetorno8Cond} onChange={(e) => setMachoRetorno8Cond(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>Cur 8</label><input value={MachoRetorno8Curso} onChange={(e) => setMachoRetorno8Curso(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>vel 8</label><input value={MachoRetorno8VEL} onChange={(e) => setMachoRetorno8VEL(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>press 8</label><input value={MachoRetorno8PRES} onChange={(e) => setMachoRetorno8PRES(e.target.value)} type='text' /></div>
                <div className="field-pp"><label>temp 8</label><input value={MachoRetorno8TEMP} onChange={(e) => setMachoRetorno8TEMP(e.target.value)} type='text' /></div>
                <div className='pulaLinha'></div>


              </div>


            </div>

          </div>

          <label>Observações</label>
          <textarea className="txt-area" value={obsMacho} onChange={(e) => setobsMacho(e.target.value)} placeholder='Observações a respeito da refrigeração' />

        </Section>

        <Section title="PROCESSOS E MONTAGEM">
          <div className='field'>
            <label>Informações</label>
            <textarea className="txt-area" value={obsProcMontagem} onChange={(e) => setobsProcMontagem(e.target.value)} placeholder="Digite aqui..."></textarea>
          </div>

        </Section>

        <Section title="OPINIÃO TÉCNICA">
          <div className='field'>
            <label>Informações</label>
            <textarea className="txt-area" value={obsOptecnica} onChange={(e) => setobsOptecnica(e.target.value)} placeholder="Digite aqui..."></textarea>
          </div>

        </Section>

        <Section title="CONTROLE DE QUALIDADE">
          <div className='field'>
            <label>Informações</label>
            <textarea className="txt-area" value={obsQualidade} onChange={(e) => setobsQualidade(e.target.value)} placeholder="Digite aqui..."></textarea>
          </div>

        </Section>

        <Section title="IMAGENS">
          <div style={{ marginBottom: '15px' }}>
            <button type='button' onClick={handleAddImagem} style={{ padding: '10px 16px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#f0f0f0' }}>
              Adicionar imagem
            </button>
          </div>

          {imagens.length === 0 && (
            <div style={{ marginBottom: '15px' }}>
              Nenhuma imagem adicionada. Clique em "Adicionar imagem" para incluir fotos.
            </div>
          )}

          {imagens.map((item, index) => (
            <div key={item.id} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <strong>Imagem {index + 1}</strong>
                <button type='button' onClick={() => handleRemoveImagem(item.id)} style={{ padding: '6px 10px', cursor: 'pointer' }}>
                  Remover
                </button>
              </div>
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <div style={{ minWidth: '200px' }}>
                  <label>Preview</label>
                  <div className='card' style={{ marginTop: '8px', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    <img style={{ maxHeight: '150px', maxWidth: '100%', objectFit: 'contain' }} src={item.imagem || moldes[1].foto} />
                  </div>
                  <div style={{ marginTop: '10px' }}>
                    <input type='file' accept='image/*' onChange={(e) => handleImagemChange(item.id, e)} />
                  </div>
                </div>
                <div style={{ flex: '1 1 280px' }}>
                  <div style={{ marginBottom: '10px' }}>
                    <label>Título</label>
                    <input type='text' value={item.titulo} onChange={(e) => handleImagemTituloChange(item.id, e.target.value)} style={{ width: '100%' }} />
                  </div>
                  <div>
                    <label>Observação</label>
                    <textarea className='txt-area' value={item.observacao} onChange={(e) => handleImagemObservacaoChange(item.id, e.target.value)} placeholder='Digite aqui...' />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Section>

        {message && (
          <div style={{
            marginTop: '20px',
            padding: '10px 15px',
            backgroundColor: message.includes('✓') ? '#d4edda' : '#f8d7da',
            color: message.includes('✓') ? '#155724' : '#721c24',
            border: `1px solid ${message.includes('✓') ? '#c3e6cb' : '#f5c6cb'}`,
            borderRadius: '4px'
          }}>
            {message}
          </div>
        )}

        <button onClick={handleSaveFicha} disabled={loading} style={{ marginTop: '20px', padding: '10px 20px', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.6 : 1 }}>
          {loading ? 'Salvando...' : 'Salvar Ficha'}
        </button>

        <button style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
          Modificar
        </button>
        <button style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
          Excluir
        </button>
      </div>
    </>
  )

}