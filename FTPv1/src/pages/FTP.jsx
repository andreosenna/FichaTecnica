import React, { useEffect, useState } from 'react'
import Section from '../components/Section'
export default function FTP() {

  const [moldes, setMoldes] = useState([
    { id: 1, molde: 'Cadeira Monobloco', foto: 'https://images.tcdn.com.br/img/img_prod/1286580/kit_4_cadeira_poltrona_alta_black_e_1_mesa_plastica_monobloco_preta_70x70cm_105_2_5c54f4819aae24902d782253178cae78.jpg', bico: 200, zona1: 240, zona2: 230, zona3: 220, cq1: 200, cq2: 200 },
    { id: 2, molde: 'Mesa Monobloco', foto: "https://cdn.awsli.com.br/2500x2500/1131/1131299/produto/321286504/catty-rosa-kvtbz9vlph.webp", bico: 200, zona1: 240, zona2: 230, zona3: 220, cq1: 200, cq2: 200 },
    { id: 3, molde: 'Estante Modular', foto: "", bico: 200, zona1: 240, zona2: 230, zona3: 220, cq1: 200, cq2: 200 },
    { id: 4, molde: 'Balde 8L', foto: "", bico: 200, zona1: 240, zona2: 230, zona3: 220, cq1: 200, cq2: 200 },
    { id: 5, molde: 'Lixeira 90L', foto: "", bico: 200, zona1: 240, zona2: 230, zona3: 220, cq1: 200, cq2: 200 },
    { id: 6, molde: 'Pote 1000ML', foto: "", bico: 200, zona1: 240, zona2: 230, zona3: 220, cq1: 200, cq2: 200 },
  ])
const [maquinas,setMaquinas] = useState([
  {id:1,maquina:'J258-1'},
  {id:2,maquina:'J320-1'},
  {id:3,maquina:'J320-2'},
  {id:4,maquina:'J480-1'},
  {id:5,maquina:'J480-2'},
  {id:6,maquina:'T630-1'},
  {id:7,maquina:'j650-1'},
  {id:8,maquina:'j650-2'},
  {id:9,maquina:'j650-3'},
  {id:10,maquina:'j800-1'},
])

  const [tipo, settipo] = useState()
  const [versao, setversao] = useState()
  const [data, setdata] = useState()
  const [molde, setmolde] = useState()
  const [papi, setpapi] = useState()
  const [codmolde, setcodmolde] = useState()
  const [cavidades, setcavidades] = useState()
  const [maquina, setmaquina] = useState()
  const [programa, setprograma] = useState()
  const [Pilha, setPilha] = useState()
  const [lastro, setlastro] = useState()
  const [meio, setmeio] = useState()
  const [total, settotal] = useState()
  const [pesoIdeal, setpesoIdeal] = useState()
  const [tolerancia, settolerancia] = useState()
  const [pressaoInjecaoReal, setpressaoInjecaoReal] = useState()
  const [tAbertura, settAbertura] = useState()
  const [tFechamento, settFechamento] = useState()
  const [tDosagem, settDosagem] = useState()
  const [tInjecao, settInjecao] = useState()
  const [tRecalque, settRecalque] = useState()
  const [tResfriamento, settResfriamento] = useState()
  const [tExtracao, settExtracao] = useState()
  const [tCiclo, settCiclo] = useState()
  const [tRebarbagem, settRebarbagem] = useState()
  const [tExtracaoAux, settExtracaoAux] = useState()
  const [tMontagem, settMontagem] = useState()
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
  const [CamaraQuente, setCamaraQuente] = useState()
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
  const [obsOptecnica, obsOptecnicaset] = useState()
  const [obsQualidade, setobsQualidade] = useState()

  const [MachoAvancoAtraso, setMachoAvancoAtraso] = useState()
  const [MachoRetornoAtraso, setMachoRetornoAtraso] = useState()
  const [instrucoes, setinstrucoes] = useState()
  const [consideracoes, setconsideracoes] = useState()
  const [ElaboraPor, setElaboraPor] = useState()
  const [VerificadoPor, setVerificadoPor] = useState()
  const [AprovadoPor, setAprovadoPor] = useState()

  return (
    <>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
<div style={{background:'#555858', color:'white'}}>
        <h3>Ficha Técnica</h3>
        <img style={{ height: '200px', border:'4px solid gray', padding:' 10px 10px 10px 10px', margin:'10px 10px 30px 10px'}} src={moldes[1].foto} />
        
        <div className='quadroMaior'>
          <div className='coluna'>
            <div className='campos-container'>
              {/* ENTRADA */}

              <label>Cod:</label>
              <select type="text" style={{ width: '200px' }}>
                {moldes.map(m => (
                  <option key={m.id} value={m.id}>{m.molde}</option>
                ))
                }</select>
                <label>Maquina</label>
              <select type="text" style={{ width: '200px' }}>
                {maquinas.map(m => (
                  <option key={m.id} value={m.id}>{m.maquina}</option>
                ))
                }</select>
              <div className='pulaLinha'></div>
                    <label>Produto:</label>
                      <input type="text" style={{ width: '300px' }} />
                    <div style={{ padding: '20px' }}>
                  </div>
              </div>
            <div className='coluna'>
              <div className='campos-container'>

                <div className="field-p"><label>Cav</label><input value={cavidades} type='text' /></div>
                <div className="field-p"><label>Ciclo</label><input value={tCiclo} type='text' /></div>
                <div className="field-p"><label>PH</label><input value={PH} type='text' /></div>
                <div className="field-p"><label>Peso</label><input value={pesoIdeal} type='text' /></div>
                <div className="field-p"><label>Padrão</label><input value={""} type='text' /></div>
                <div className="field-p"><label>Embalagem</label><input value={""} type='text' /></div>
                <div className="field-p"><label>T Dos</label><input value={tDosagem} type='text' /></div>
                <div className="field-p"><label>T Inj</label><input value={tInjecao} type='text' /></div>
                <div className="field-p"><label>T Ext</label><input value={tExtracao} type='text' /></div>
                <div className="field-p"><label>T Abe</label><input value={tAbertura} type='text' /></div>
                <div className="field-p"><label>T Fech</label><input value={tFechamento} type='text' /></div>
                </div><br/>
                <div style={{textAlign:'right'}}>
                <div><label>Elaborado por:</label><input value={ElaboraPor} type='text' /></div>
                <div><label>Aprovado por:</label><input value={AprovadoPor} type='text' /></div>
                <div><label>Aprovado em:</label><input value={data} type='text' /></div>
              </div>
            </div>
          </div>
        </div>
</div>
        {/* CABEÇALHO */}

        <Section title="MATÉRIA PRIMA">
          <div>
            <label>Matéria Prima</label>
            <textarea className='txt-area' value={materiaPrima} placeholder='Informações de Matéria Prima' />
          </div>

        </Section>

        <Section title="TEMPERATURA">

          <div className='campos-container'>
            <div className="field-p">
              <label>Bico:</label>
              <input type="text" value={bico} pattern="[Pp]?[0-9]*" />
            </div>

            <div className="field-p">
              <label>Z1:</label>
              <input value={z1} type="number" />
            </div>
            <div className="field-p">
              <label>Z2:</label>
              <input value={z2} type="number" />
            </div>
            <div className="field-p">
              <label>Z3:</label>
              <input value={z3} type="number" />
            </div>
            <div className="field-p">
              <label>Z4:</label>
              <input value={z4} type="number" />
            </div>
            <div className="field-p">
              <label>Z5:</label>
              <input value={z5} type="number" />
            </div>
            <div className="field-p">
              <label>Z6:</label>
              <input value={z6} type="number" />
            </div>
            <div className="field-p">
              <label>Z7:</label>
              <input value={z7} type="number" />
            </div>
            <div className="field-p">
              <label>Z8:</label>
              <input value={z8} type="number" />
            </div>

            <div className='pulaLinha'></div>

            <div className="field-p">
              <label>CQ 1:</label>
              <input value={c1} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 2:</label>
              <input value={c2} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 3:</label>
              <input value={c3} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 4:</label>
              <input value={c4} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 5:</label>
              <input value={c5} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 6:</label>
              <input value={c6} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 7:</label>
              <input value={c7} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 8:</label>
              <input value={c8} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 9:</label>
              <input value={c9} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 10:</label>
              <input value={c10} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 11:</label>
              <input value={c11} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 12:</label>
              <input value={c12} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 13:</label>
              <input value={c13} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 14:</label>
              <input value={c14} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 15:</label>
              <input value={c15} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 16:</label>
              <input value={c16} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 17:</label>
              <input value={c17} type="number" />
            </div>
            <div className="field-p">
              <label>CQ 18:</label>
              <input value={c18} type="number" />
            </div>
          </div>

          <div className='field'>
            <label>Observações</label>
            <textarea className="txt-area" value={obsTemperaturas} placeholder='Observações a respeito da temperatura' />
          </div>


        </Section>
        <Section title="REFRIGERÇÃO">
          <label>Água</label>
          <input type="text" value={refrigeracao} list="tiposAgua" />
          <datalist id='tiposAgua'>
            <option value="1">Normal</option>
            <option value="2">Refrigerada</option>
            <option value="3">Aquecida</option>
          </datalist>

          <div className='field'>
            <label>Observações</label>
            <textarea className="txt-area" value={obsRefrigeracao} placeholder='Observações a respeito da refrigeração' />
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
                <div className="field-p"><label>Vel 1</label><input value={ab1VEL} type='text' /></div>
                <div className="field-p"><label>Pres 1</label><input value={ab1PRES} type='text' /></div>
                <div className="field-p"><label>Pos 1</label><input value={ab1POS} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 2 */}
                <div className="field-p"><label>Vel 2</label><input value={ab2VEL} type='text' /></div>
                <div className="field-p"><label>Pres 2</label><input value={ab2PRES} type='text' /></div>
                <div className="field-p"><label>Pos 2</label><input value={ab2POS} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 3 */}
                <div className="field-p"><label>Vel 3</label><input value={ab3VEL} type='text' /></div>
                <div className="field-p"><label>Pres 3</label><input value={ab3PRES} type='text' /></div>
                <div className="field-p"><label>Pos 3</label><input value={ab3POS} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 4 */}
                <div className="field-p"><label>Vel 4</label><input value={ab4VEL} type='text' /></div>
                <div className="field-p"><label>Pres 4</label><input value={ab4PRES} type='text' /></div>
                <div className="field-p"><label>Pos 4</label><input value={ab4POS} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 5 */}
                <div className="field-p"><label>Vel 5</label><input value={abFimVEL} type='text' /></div>
                <div className="field-p"><label>Pres 5</label><input value={abFimPRES} type='text' /></div>
                <div className="field-p"><label>Pos 5</label><input value={abFimPOS} type='text' /></div>
                <div className='pulaLinha'></div>
              </div>
            </div>

            {/* COLUNA 2: FECHAMENTO */}
            <div className='coluna'>
              <div className='campos-container'>
                <div className="field"><strong>Fechamento</strong></div>
                <div className='pulaLinha'></div>

                {/* Linha 1 */}
                <div className="field-p"><label>Vel 1</label><input value={fecha1VEL} type='text' /></div>
                <div className="field-p"><label>Pres 1</label><input value={fecha1PRES} type='text' /></div>
                <div className="field-p"><label>Pos 1</label><input value={fecha1POS} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 2 */}
                <div className="field-p"><label>Vel 2</label><input value={fecha2VEL} type='text' /></div>
                <div className="field-p"><label>Pres 2</label><input value={fecha2PRES} type='text' /></div>
                <div className="field-p"><label>Pos 2</label><input value={fecha2POS} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 3 */}
                <div className="field-p"><label>Vel 3</label><input value={fecha3VEL} type='text' /></div>
                <div className="field-p"><label>Pres 3</label><input value={fecha3PRES} type='text' /></div>
                <div className="field-p"><label>Pos 3</label><input value={fecha3POS} type='text' /></div>
                <div className='pulaLinha'></div>
                {/* Linha 4 */}
                <div className="field-p"><label>Vel 4</label><input value={fecha4VEL} type='text' /></div>
                <div className="field-p"><label>Pres 4</label><input value={fecha4PRES} type='text' /></div>
                <div className="field-p"><label>Pos 4</label><input value={fecha4POS} type='text' /></div>
                <div className='pulaLinha'></div>
                {/* Linha 5 */}
                <div className="field-p"><label>Vel 5</label><input value={fechaFimVEL} type='text' /></div>
                <div className="field-p"><label>Pres 5</label><input value={fechaFimPRES} type='text' /></div>
                <div className="field-p"><label>Pos 5</label><input value={fechaFimPOS} type='text' /></div>
                <div className='pulaLinha'></div>


              </div>


            </div>

          </div>

          <label>Observações</label>
          <textarea className="txt-area" value={obsAbreFecha} placeholder='Observações a respeito da abertura e Abertura e Fechamento' />

        </Section>

        <Section title="DOSAGEM, INJEÇÃO e RECALQUE">
          <div className='quadroMaior'>

            {/* DOSAGEM */}
            <div className='coluna'>
              <div className='campos-container'>
                <div className="field"><strong>DOSAGEM</strong></div>
                <div className='pulaLinha'></div>

                {/* Linha 1 */}
                <div className="field-pp"><label>Vel 1</label><input value={dosagem1VEL} type='text' /></div>
                <div className="field-pp"><label>Pres 1</label><input value={dosagem1PRES} type='text' /></div>
                <div className="field-pp"><label>CtP 1</label><input value={dosagem1CONPRES} type='text' /></div>
                <div className="field-pp"><label>Pos 1</label><input value={dosagem1POS} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 2 */}
                <div className="field-pp"><label>Vel 2</label><input value={dosagem2VEL} type='text' /></div>
                <div className="field-pp"><label>Pres 2</label><input value={dosagem2PRES} type='text' /></div>
                <div className="field-pp"><label>CtP 2</label><input value={dosagem2CONPRES} type='text' /></div>
                <div className="field-pp"><label>Pos 2</label><input value={dosagem2POS} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 3 */}
                <div className="field-pp"><label>Vel 3</label><input value={dosagem3VEL} type='text' /></div>
                <div className="field-pp"><label>Pres 3</label><input value={dosagem3PRES} type='text' /></div>
                <div className="field-pp"><label>CtP 3</label><input value={dosagem3CONPRES} type='text' /></div>
                <div className="field-pp"><label>Pos 3</label><input value={dosagem3POS} type='text' /></div>
                <div className='pulaLinha'></div>

              </div>
            </div>

            {/* INJEÇÃO */}
            <div className='coluna'>
              <div className='campos-container'>
                <div className="field"><strong>INJEÇÃO</strong></div>
                <div className='pulaLinha'></div>

                {/* Linha 1 */}
                <div className="field-pp"><label>Vel 1</label><input value={injecao1VEL} type='text' /></div>
                <div className="field-pp"><label>Pres 1</label><input value={injecao1PRES} type='text' /></div>
                <div className="field-pp"><label>Pos 1</label><input value={injecao1POS} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 2 */}
                <div className="field-pp"><label>Vel 2</label><input value={injecao2VEL} type='text' /></div>
                <div className="field-pp"><label>Pres 2</label><input value={injecao2PRES} type='text' /></div>
                <div className="field-pp"><label>Pos 2</label><input value={injecao2POS} type='text' /></div>

                <div className='pulaLinha'></div>

                {/* Linha 3 */}
                <div className="field-pp"><label>Vel 3</label><input value={injecao3VEL} type='text' /></div>
                <div className="field-pp"><label>Pres 3</label><input value={injecao3PRES} type='text' /></div>
                <div className="field-pp"><label>Pos 3</label><input value={injecao3POS} type='text' /></div>

                <div className='pulaLinha'></div>
              </div>


            </div>
            <div className='coluna'>
              <div className='campos-container'>
                <div className="field"><strong>RECALQUE</strong></div>
                <div className='pulaLinha'></div>
                {/* comutação */}
                <div className="field-p"><label>Comutação</label><input value={injecaoComutacao} type='text' /></div>
                <div className="field-p"><label>Leakage</label><input value={InjecaoLeakage} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 1 */}
                <div className="field-pp"><label>Vel 1</label><input value={recalque1VEL} type='text' /></div>
                <div className="field-pp"><label>Pres 1</label><input value={recalque2PRES} type='text' /></div>
                <div className="field-pp"><label>Temp 1</label><input value={recalque1TEMP} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 2 */}
                <div className="field-pp"><label>Vel 2</label><input value={recalque2VEL} type='text' /></div>
                <div className="field-pp"><label>Pres 2</label><input value={recalque2PRES} type='text' /></div>
                <div className="field-pp"><label>Temp 2</label><input value={recalque2TEMP} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 3 */}
                <div className="field-pp"><label>Vel 3</label><input value={recalque3VEL} type='text' /></div>
                <div className="field-pp"><label>Pres 3</label><input value={recalque3PRES} type='text' /></div>
                <div className="field-pp"><label>Temp 3</label><input value={recalque3TEMP} type='text' /></div>
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
          <textarea className="txt-area" value={obsRecalque} placeholder='Observações a respeito dosagem, injeção, recalque e descompressão' />
        </Section>

        <Section title="EXTRAÇÃO MECANICA">
          {/* AVANÇO EXTRATOR */}

          {/* Linha 1 */}
          <div className="field"><label>Tipo Extração</label><input value={extracaoTipo} type='text' /></div>
          <div className="field"><label>NRepetições</label><input type='text' /></div>
          <div className="field"><label>Pausa Ext</label><input type='text' /></div>
          <div className='pulaLinha'></div>

          <div className='quadroMaior'>
            <div className='coluna'>
              <div className='campos-container'>

                <div className="field"><strong>AVANÇO</strong></div>
                <div className='pulaLinha'></div>
                {/* Linha 2 */}
                <div className="field-p"><label>Vel 1</label><input value={extAvanco1POS} type='text' /></div>
                <div className="field-p"><label>Pres 1</label><input value={extAvanco1PRES} type='text' /></div>
                <div className="field-p"><label>Pos 1</label><input value={extAvanco1POS} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 3 */}
                <div className="field-p"><label>Vel 2</label><input value={extAvanco2VEL} type='text' /></div>
                <div className="field-p"><label>Pres 2</label><input value={extAvanco2PRES} type='text' /></div>
                <div className="field-p"><label>Pos 2</label><input value={extAvanco2POS} type='text' /></div>
                <div className='pulaLinha'></div>

              </div>
            </div>

            {/* COLUNA 2: FECHAMENTO */}
            <div className='coluna'>
              <div className='campos-container'>
                <div className="field"><strong>FECHAMENTO</strong></div>
                <div className='pulaLinha'></div>

                {/* Linha 1 */}
                <div className="field-p"><label>Vel 1</label><input value={extRetorno1VEL} type='text' /></div>
                <div className="field-p"><label>Pres 1</label><input value={extRetorno1PRES} type='text' /></div>
                <div className="field-p"><label>Pos 1</label><input value={extRetorno1POS} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 2 */}
                <div className="field-p"><label>Vel 2</label><input value={extRetorno2VEL} type='text' /></div>
                <div className="field-p"><label>Pres 2</label><input value={extRetorno2PRES} type='text' /></div>
                <div className="field-p"><label>Pos 2</label><input value={extRetorno2POS} type='text' /></div>
                <div className='pulaLinha'></div>

              </div>


            </div>

          </div>

          <label>Observações</label>
          <textarea className="txt-area" placeholder='Observações ' value={obsExtracaoMecanica} />

        </Section>

        <Section title="PNEUMÁTICO">

          <div className='quadroMaior'>
            <div className='Coluna'>
              <div className='campos-container'>
                <div>Ar 1</div>
                <div className="field-p"><label>Tipo 1</label><input value={extPneu1Tipo} type='text' /></div>
                <div className="field-p"><label>Posicao 1</label><input value={extPneu1POS} type='text' /></div>
                <div className="field-p"><label>Atraso 1</label><input value={extPneu1RET} type='text' /></div>
                <div className="field-p"><label>Tempo 2</label><input value={extPneu1TEMP} type='text' /></div>
                <div className='pulaLinha'></div>

                <div>Ar 2</div>
                <div className="field-p"><label>Tipo 2</label><input value={extPneu2Tipo} type='text' /></div>
                <div className="field-p"><label>Posicao 2</label><input value={extPneu2POS} type='text' /></div>
                <div className="field-p"><label>Atraso 2</label><input value={extPneu2RET} type='text' /></div>
                <div className="field-p"><label>Tempo 2</label><input value={extPneu2TEMP} type='text' /></div>
                <div className='pulaLinha'></div>

                <div>Ar 3</div>
                <div className="field-p"><label>Tipo 3</label><input value={extPneu3Tipo} type='text' /></div>
                <div className="field-p"><label>Posicao 3</label><input value={extPneu3POS} type='text' /></div>
                <div className="field-p"><label>Atraso 3</label><input value={extPneu3RET} type='text' /></div>
                <div className="field-p"><label>Tempo 3</label><input value={extPneu3TEMP} type='text' /></div>
                <div className='pulaLinha'></div>

                <div>Ar 4</div>
                <div className="field-p"><label>Tipo 4</label><input value={extPneu4Tipo} type='text' /></div>
                <div className="field-p"><label>Posicao 4</label><input value={extPneu4POS} type='text' /></div>
                <div className="field-p"><label>Atraso 4</label><input value={extPneu4RET} type='text' /></div>
                <div className="field-p"><label>Tempo 4</label><input value={extPneu4TEMP} type='text' /></div>
                <div className='pulaLinha'></div>

                <div>Ar 5</div>
                <div className="field-p"><label>Tipo 5</label><input value={extPneu5Tipo} type='text' /></div>
                <div className="field-p"><label>Posicao 5</label><input value={extPneu5POS} type='text' /></div>
                <div className="field-p"><label>Atraso 5</label><input value={extPneu5RET} type='text' /></div>
                <div className="field-p"><label>Tempo 5</label><input value={extPneu5TEMP} type='text' /></div>
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
                <div className="field-pp"><label>Lig/Desl</label><input value={MachoAvanco1Modo} type='text' /></div>
                <div className="field-p"><label>Cond 1</label><input value={MachoAvanco1Cond} type='text' /></div>
                <div className="field-pp"><label>Cur 1</label><input value={MachoAvanco1Curso} type='text' /></div>
                <div className="field-pp"><label>vel 1</label><input value={MachoAvanco1VEL} type='text' /></div>
                <div className="field-pp"><label>press 1</label><input value={MachoAvanco1PRES} type='text' /></div>
                <div className="field-pp"><label>temp 1</label><input value={MachoAvanco1TEMP} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 2 */}
                <div className="field-pp"><label>Lig/Desl</label><input value={MachoAvanco2Modo} type='text' /></div>
                <div className="field-p"><label>Cond 2</label><input value={MachoAvanco2Cond} type='text' /></div>
                <div className="field-pp"><label>Cur 2</label><input value={MachoAvanco2Curso} type='text' /></div>
                <div className="field-pp"><label>vel 2</label><input value={MachoAvanco2VEL} type='text' /></div>
                <div className="field-pp"><label>press 2</label><input value={MachoAvanco2PRES} type='text' /></div>
                <div className="field-pp"><label>temp 2</label><input value={MachoAvanco2TEMP} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 2 */}
                <div className="field-pp"><label>Lig/Desl</label><input value={MachoAvanco3Modo} type='text' /></div>
                <div className="field-p"><label>Cond 3</label><input value={MachoAvanco3Cond} type='text' /></div>
                <div className="field-pp"><label>Cur 3</label><input value={MachoAvanco3Curso} type='text' /></div>
                <div className="field-pp"><label>vel 3</label><input value={MachoAvanco3VEL} type='text' /></div>
                <div className="field-pp"><label>press 3</label><input value={MachoAvanco3PRES} type='text' /></div>
                <div className="field-pp"><label>temp 3</label><input value={MachoAvanco3TEMP} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 2 */}
                <div className="field-pp"><label>Lig/Desl</label><input value={MachoAvanco4Modo} type='text' /></div>
                <div className="field-p"><label>Cond 4</label><input value={MachoAvanco4Cond} type='text' /></div>
                <div className="field-pp"><label>Cur 4</label><input value={MachoAvanco4Curso} type='text' /></div>
                <div className="field-pp"><label>vel 4</label><input value={MachoAvanco4VEL} type='text' /></div>
                <div className="field-pp"><label>press 4</label><input value={MachoAvanco4PRES} type='text' /></div>
                <div className="field-pp"><label>temp 4</label><input value={MachoAvanco4TEMP} type='text' /></div>
                <div className='pulaLinha'></div>
                {/* Linha 2 */}
                <div className="field-pp"><label>Lig/Desl</label><input value={MachoAvanco5Modo} type='text' /></div>
                <div className="field-p"><label>Cond 5</label><input value={MachoAvanco5Modo} type='text' /></div>
                <div className="field-pp"><label>Cur 5</label><input value={MachoAvanco5Curso} type='text' /></div>
                <div className="field-pp"><label>vel 5</label><input value={MachoAvanco5VEL} type='text' /></div>
                <div className="field-pp"><label>press 5</label><input value={MachoAvanco5PRES} type='text' /></div>
                <div className="field-pp"><label>temp 5</label><input value={MachoAvanco5TEMP} type='text' /></div>
                <div className='pulaLinha'></div>
                {/* Linha 2 */}
                <div className="field-pp"><label>Lig/Desl</label><input value={MachoAvanco6Modo} type='text' /></div>
                <div className="field-p"><label>Cond 6</label><input value={MachoAvanco6Cond} type='text' /></div>
                <div className="field-pp"><label>Cur 6</label><input value={MachoAvanco6Curso} type='text' /></div>
                <div className="field-pp"><label>vel 6</label><input value={MachoAvanco6VEL} type='text' /></div>
                <div className="field-pp"><label>press 6</label><input value={MachoAvanco6PRES} type='text' /></div>
                <div className="field-pp"><label>temp 6</label><input value={MachoAvanco6TEMP} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* RETORNO  */}
                <div className="field-pp"><label>Lig/Desl</label><input value={MachoAvanco7Modo} type='text' /></div>
                <div className="field-p"><label>Cond 7</label><input value={MachoAvanco7Cond} type='text' /></div>
                <div className="field-pp"><label>Cur 7</label><input value={MachoAvanco7Curso} type='text' /></div>
                <div className="field-pp"><label>vel 7</label><input value={MachoAvanco7VEL} type='text' /></div>
                <div className="field-pp"><label>press 7</label><input value={MachoAvanco7PRES} type='text' /></div>
                <div className="field-pp"><label>temp 7</label><input value={MachoAvanco7TEMP} type='text' /></div>
                <div className='pulaLinha'></div>
                {/* Linha 2 */}
                <div className="field-pp"><label>Lig/Desl</label><input value={MachoAvanco8Modo} type='text' /></div>
                <div className="field-p"><label>Cond 8</label><input value={MachoAvanco8Cond} type='text' /></div>
                <div className="field-pp"><label>Cur 8</label><input value={MachoAvanco8Curso} type='text' /></div>
                <div className="field-pp"><label>vel 8</label><input value={MachoAvanco8VEL} type='text' /></div>
                <div className="field-pp"><label>press 8</label><input value={MachoAvanco8PRES} type='text' /></div>
                <div className="field-pp"><label>temp 8</label><input value={MachoAvanco8TEMP} type='text' /></div>
                <div className='pulaLinha'></div>


              </div>
            </div>

            {/* COLUNA 2: FECHAMENTO */}
            <div className='coluna'>
              <div className='campos-container'>
                <div className="field"><strong>RECUO</strong></div>
                <div className='pulaLinha'></div>

                {/* Linha 1 */}
                <div className="field-pp"><label>Lig/Desl</label><input value={MachoRetorno1Cond} type='text' /></div>
                <div className="field-p"><label>Cond 1</label><input value={MachoRetorno1Cond} type='text' /></div>
                <div className="field-pp"><label>Cur 1</label><input value={MachoRetorno1Curso} type='text' /></div>
                <div className="field-pp"><label>vel 1</label><input value={MachoRetorno1VEL} type='text' /></div>
                <div className="field-pp"><label>press 1</label><input value={MachoRetorno1PRES} type='text' /></div>
                <div className="field-pp"><label>temp 1</label><input value={MachoRetorno1TEMP} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 2 */}
                <div className="field-pp"><label>Lig/Desl</label><input value={MachoRetorno2Modo} type='text' /></div>
                <div className="field-p"><label>Cond 2</label><input value={MachoRetorno2Cond} type='text' /></div>
                <div className="field-pp"><label>Cur 2</label><input value={MachoRetorno2Curso} type='text' /></div>
                <div className="field-pp"><label>vel 2</label><input value={MachoRetorno2VEL} type='text' /></div>
                <div className="field-pp"><label>press 2</label><input value={MachoRetorno2PRES} type='text' /></div>
                <div className="field-pp"><label>temp 2</label><input value={MachoRetorno2TEMP} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 2 */}
                <div className="field-pp"><label>Lig/Desl</label><input value={MachoRetorno3Modo} type='text' /></div>
                <div className="field-p"><label>Cond 3</label><input value={MachoRetorno3Cond} type='text' /></div>
                <div className="field-pp"><label>Cur 3</label><input value={MachoRetorno3Curso} type='text' /></div>
                <div className="field-pp"><label>vel 3</label><input value={MachoRetorno3VEL} type='text' /></div>
                <div className="field-pp"><label>press 3</label><input value={MachoRetorno3PRES} type='text' /></div>
                <div className="field-pp"><label>temp 3</label><input value={MachoRetorno3TEMP} type='text' /></div>
                <div className='pulaLinha'></div>

                {/* Linha 2 */}
                <div className="field-pp"><label>Lig/Desl</label><input value={MachoRetorno4Modo} type='text' /></div>
                <div className="field-p"><label>Cond 4</label><input value={MachoRetorno4Cond} type='text' /></div>
                <div className="field-pp"><label>Cur 4</label><input value={MachoRetorno4Curso} type='text' /></div>
                <div className="field-pp"><label>vel 4</label><input value={MachoRetorno4VEL} type='text' /></div>
                <div className="field-pp"><label>press 4</label><input value={MachoRetorno4PRES} type='text' /></div>
                <div className="field-pp"><label>temp 4</label><input value={MachoRetorno4TEMP} type='text' /></div>
                <div className='pulaLinha'></div>
                {/* Linha 2 */}

                <div className="field-pp"><label>Lig/Desl</label><input value={MachoRetorno5Modo} type='text' /></div>
                <div className="field-p"><label>Cond 5</label><input value={MachoRetorno5Cond} type='text' /></div>
                <div className="field-pp"><label>Cur 5</label><input value={MachoRetorno5Curso} type='text' /></div>
                <div className="field-pp"><label>vel 5</label><input value={MachoRetorno5VEL} type='text' /></div>
                <div className="field-pp"><label>press 5</label><input value={MachoRetorno5PRES} type='text' /></div>
                <div className="field-pp"><label>temp 5</label><input value={MachoRetorno5TEMP} type='text' /></div>
                <div className='pulaLinha'></div>
                {/* Linha 2 */}
                <div className="field-pp"><label>Lig/Desl</label><input value={MachoRetorno6Modo} type='text' /></div>
                <div className="field-p"><label>Cond 6</label><input value={MachoRetorno6Cond} type='text' /></div>
                <div className="field-pp"><label>Cur 6</label><input value={MachoRetorno6Curso} type='text' /></div>
                <div className="field-pp"><label>vel 6</label><input value={MachoRetorno6VEL} type='text' /></div>
                <div className="field-pp"><label>press 6</label><input value={MachoRetorno6PRES} type='text' /></div>
                <div className="field-pp"><label>temp 6</label><input value={MachoRetorno6TEMP} type='text' /></div>
                <div className='pulaLinha'></div>
                {/* Linha 2 */}
                <div className="field-pp"><label>Lig/Desl</label><input value={MachoRetorno7Modo} type='text' /></div>
                <div className="field-p"><label>Cond 7</label><input value={MachoRetorno7Cond} type='text' /></div>
                <div className="field-pp"><label>Cur 7</label><input value={MachoRetorno7Curso} type='text' /></div>
                <div className="field-pp"><label>vel 7</label><input value={MachoRetorno7VEL} type='text' /></div>
                <div className="field-pp"><label>press 7</label><input value={MachoRetorno7PRES} type='text' /></div>
                <div className="field-pp"><label>temp 7</label><input value={MachoRetorno7TEMP} type='text' /></div>
                <div className='pulaLinha'></div>
                {/* Linha 2 */}
                <div className="field-pp"><label>Lig/Desl</label><input value={MachoRetorno8Modo} type='text' /></div>
                <div className="field-p"><label>Cond 8</label><input value={MachoRetorno8Cond} type='text' /></div>
                <div className="field-pp"><label>Cur 8</label><input value={MachoRetorno8Curso} type='text' /></div>
                <div className="field-pp"><label>vel 8</label><input value={MachoRetorno8VEL} type='text' /></div>
                <div className="field-pp"><label>press 8</label><input value={MachoRetorno8PRES} type='text' /></div>
                <div className="field-pp"><label>temp 8</label><input value={MachoRetorno8TEMP} type='text' /></div>
                <div className='pulaLinha'></div>


              </div>


            </div>

          </div>

          <label>Observações</label>
          <textarea className="txt-area" value={obsMacho} placeholder='Observações a respeito da refrigeração' />

        </Section>

        <Section title="PROCESSOS E MONTAGEM">
          <div className='field'>
            <label>Informações</label>
            <textarea className="txt-area" value={obsProcMontagem} placeholder="Digite aqui..."></textarea>
          </div>

        </Section>

        <Section title="OPINIÃO TÉCNICA">
          <div className='field'>
            <label>Informações</label>
            <textarea className="txt-area" value={obsOptecnica} placeholder="Digite aqui..."></textarea>
          </div>

        </Section>

        <Section title="CONTROLE DE QUALIDADE">
          <div className='field'>
            <label>Informações</label>
            <textarea className="txt-area" value={obsQualidade} placeholder="Digite aqui..."></textarea>
          </div>

        </Section>

        <Section title="IMAGENS">
          <div className='quadroMaior'>
            <div className='coluna'>
              <div className='campos-container'>
                <div>
                  <label>Produto</label>
                  <div className='card'>

                    <img style={{ height: '200px' }} src={moldes[1].foto} />
                  </div>
                </div>
                <div>
                  <label>Embalagem</label>
                  <div className='card'>

                    <img style={{ height: '200px' }} src={moldes[1].foto} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <button style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
          Salvar Ficha
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