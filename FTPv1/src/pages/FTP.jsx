//import { useEffect } from 'react'
import React, { useState } from 'react'
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

  const[ficha, setFicha] = useState([])

  const handleSaveFicha = () => {
    const fichaSalva = {
      // INFORMAÇÕES GERAIS
      cabecalho: {
        tipo,
        versao,
        data,
        molde,
        papi,
        codmolde,
        cavidades,
        maquina,
        programa,
        ElaboraPor,
        VerificadoPor,
        AprovadoPor,
      },

      // DADOS BÁSICOS
      dadosBasicos: {
        Pilha,
        lastro,
        meio,
        total,
        pesoIdeal,
        tolerancia,
        pressaoInjecaoReal,
        PH,
      },

      // TEMPOS
      tempos: {
        tAbertura,
        tFechamento,
        tDosagem,
        tInjecao,
        tRecalque,
        tResfriamento,
        tExtracao,
        tCiclo,
        tRebarbagem,
        tExtracaoAux,
        tMontagem,
        tempoResfriamento,
        TempoCiclo,
      },

      // MATÉRIA PRIMA E TEMPERATURAS
      materiaPrima: {
        materiaPrima,
        secador,
        secTemperatura,
        secTempo,
        CamaraQuente,
      },

      // ZONA DE TEMPERATURAS
      temperaturas: {
        bico,
        zonas: { z1, z2, z3, z4, z5, z6, z7, z8, z9, z10, z11, z12, z13 },
        camerasQuentes: {
          c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13,
          c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27,
        },
        obsTemperaturas,
      },

      // REFRIGERAÇÃO
      refrigeracao: {
        refrigeracao,
        obsRefrigeracao,
      },

      // ABERTURA E FECHAMENTO
      aberturaFechamento: {
        abertura: {
          ab1: { VEL: ab1VEL, PRES: ab1PRES, POS: ab1POS },
          ab2: { VEL: ab2VEL, PRES: ab2PRES, POS: ab2POS },
          ab3: { VEL: ab3VEL, PRES: ab3PRES, POS: ab3POS },
          ab4: { VEL: ab4VEL, PRES: ab4PRES, POS: ab4POS },
          ab5: { VEL: abFimVEL, PRES: abFimPRES, POS: abFimPOS },
        },
        fechamento: {
          fecha1: { VEL: fecha1VEL, PRES: fecha1PRES, POS: fecha1POS },
          fecha2: { VEL: fecha2VEL, PRES: fecha2PRES, POS: fecha2POS },
          fecha3: { VEL: fecha3VEL, PRES: fecha3PRES, POS: fecha3POS },
          fecha4: { VEL: fecha4VEL, PRES: fecha4PRES, POS: fecha4POS },
          fecha5: { VEL: fechaFimVEL, PRES: fechaFimPRES, POS: fechaFimPOS },
        },
        obsAbreFecha,
        FechaAexPres,
        FechaBaixaPresPres,
        FechaForcaFechaPres,
      },

      // DOSAGEM, INJEÇÃO E RECALQUE
      dosagemInjecaoRecalque: {
        dosagem: {
          dosagem1: { VEL: dosagem1VEL, PRES: dosagem1PRES, CtP: dosagem1CONPRES, POS: dosagem1POS },
          dosagem2: { VEL: dosagem2VEL, PRES: dosagem2PRES, CtP: dosagem2CONPRES, POS: dosagem2POS },
          dosagem3: { VEL: dosagem3VEL, PRES: dosagem3PRES, CtP: dosagem3CONPRES, POS: dosagem3POS },
          retDosagem,
        },
        injecao: {
          tipoInjecao,
          injecao1: { VEL: injecao1VEL, PRES: injecao1PRES, POS: injecao1POS },
          injecao2: { VEL: injecao2VEL, PRES: injecao2PRES, POS: injecao2POS },
          injecao3: { VEL: injecao3VEL, PRES: injecao3PRES, POS: injecao3POS },
          injecao4: { VEL: injecao4VEL, PRES: injecao4PRES, POS: injecao4POS },
          InjecaoPressaoMax,
          InjecaoTempoProgramado,
          injecaoComutacao,
          InjecaoLeakage,
          injecaoColchao,
        },
        recalque: {
          recalqueTipo,
          recalque1: { VEL: recalque1VEL, PRES: recalque1PRES, TEMP: recalque1TEMP },
          recalque2: { VEL: recalque2VEL, PRES: recalque2PRES, TEMP: recalque2TEMP },
          recalque3: { VEL: recalque3VEL, PRES: recalque3PRES, TEMP: recalque3TEMP },
          recalque4: { VEL: recalque4VEL, PRES: recalque4PRES, TEMP: recalque4TEMP },
          obsRecalque,
        },
      },

      // DESCOMPRESSÃO
      descompressao: {
        descDianteiraSimNao,
        descTraseiraSimNao,
        descTraseira: { VEL: descTraseiraVEL, PRES: descTraseiraPRES, POS: descTraseiraPOS },
      },

      // EXTRAÇÃO MECÂNICA
      extracaoMecanica: {
        extracaoTipo,
        extracaoRepetir,
        extracaoRepetirQte,
        extracaoPausa,
        extracaoAux,
        avancos: {
          avancos1: { VEL: extAvanco1VEL, PRES: extAvanco1PRES, POS: extAvanco1POS },
          avancos2: { VEL: extAvanco2VEL, PRES: extAvanco2PRES, POS: extAvanco2POS },
        },
        retornos: {
          retorno1: { VEL: extRetorno1VEL, PRES: extRetorno1PRES, POS: extRetorno1POS },
          retorno2: { VEL: extRetorno2VEL, PRES: extRetorno2PRES, POS: extRetorno2POS },
        },
        obsExtracaoMecanica,
      },

      // PNEUMÁTICO
      pneumatico: {
        ar1: { Tipo: extPneu1Tipo, Posicao: extPneu1POS, Atraso: extPneu1RET, Tempo: extPneu1TEMP },
        ar2: { Tipo: extPneu2Tipo, Posicao: extPneu2POS, Atraso: extPneu2RET, Tempo: extPneu2TEMP },
        ar3: { Tipo: extPneu3Tipo, Posicao: extPneu3POS, Atraso: extPneu3RET, Tempo: extPneu3TEMP },
        ar4: { Tipo: extPneu4Tipo, Posicao: extPneu4POS, Atraso: extPneu4RET, Tempo: extPneu4TEMP },
        ar5: { Tipo: extPneu5Tipo, Posicao: extPneu5POS, Atraso: extPneu5RET, Tempo: extPneu5TEMP },
        ar6: { Tipo: extPneu6Tipo, Posicao: extPneu6POS, Atraso: extPneu6RET, Tempo: extPneu6TEMP },
      },

      // MACHOS - AVANÇOS
      machosAvancos: {
        macho1: { Modo: MachoAvanco1Modo, Cond: MachoAvanco1Cond, Curso: MachoAvanco1Curso, VEL: MachoAvanco1VEL, PRES: MachoAvanco1PRES, TEMP: MachoAvanco1TEMP },
        macho2: { Modo: MachoAvanco2Modo, Cond: MachoAvanco2Cond, Curso: MachoAvanco2Curso, VEL: MachoAvanco2VEL, PRES: MachoAvanco2PRES, TEMP: MachoAvanco2TEMP },
        macho3: { Modo: MachoAvanco3Modo, Cond: MachoAvanco3Cond, Curso: MachoAvanco3Curso, VEL: MachoAvanco3VEL, PRES: MachoAvanco3PRES, TEMP: MachoAvanco3TEMP },
        macho4: { Modo: MachoAvanco4Modo, Cond: MachoAvanco4Cond, Curso: MachoAvanco4Curso, VEL: MachoAvanco4VEL, PRES: MachoAvanco4PRES, TEMP: MachoAvanco4TEMP },
        macho5: { Modo: MachoAvanco5Modo, Cond: MachoAvanco5Cond, Curso: MachoAvanco5Curso, VEL: MachoAvanco5VEL, PRES: MachoAvanco5PRES, TEMP: MachoAvanco5TEMP },
        macho6: { Modo: MachoAvanco6Modo, Cond: MachoAvanco6Cond, Curso: MachoAvanco6Curso, VEL: MachoAvanco6VEL, PRES: MachoAvanco6PRES, TEMP: MachoAvanco6TEMP },
        macho7: { Modo: MachoAvanco7Modo, Cond: MachoAvanco7Cond, Curso: MachoAvanco7Curso, VEL: MachoAvanco7VEL, PRES: MachoAvanco7PRES, TEMP: MachoAvanco7TEMP },
        macho8: { Modo: MachoAvanco8Modo, Cond: MachoAvanco8Cond, Curso: MachoAvanco8Curso, VEL: MachoAvanco8VEL, PRES: MachoAvanco8PRES, TEMP: MachoAvanco8TEMP },
      },

      // MACHOS - RETORNOS
      machosRetornos: {
        macho1: { Modo: MachoRetorno1Modo, Cond: MachoRetorno1Cond, Curso: MachoRetorno1Curso, VEL: MachoRetorno1VEL, PRES: MachoRetorno1PRES, TEMP: MachoRetorno1TEMP },
        macho2: { Modo: MachoRetorno2Modo, Cond: MachoRetorno2Cond, Curso: MachoRetorno2Curso, VEL: MachoRetorno2VEL, PRES: MachoRetorno2PRES, TEMP: MachoRetorno2TEMP },
        macho3: { Modo: MachoRetorno3Modo, Cond: MachoRetorno3Cond, Curso: MachoRetorno3Curso, VEL: MachoRetorno3VEL, PRES: MachoRetorno3PRES, TEMP: MachoRetorno3TEMP },
        macho4: { Modo: MachoRetorno4Modo, Cond: MachoRetorno4Cond, Curso: MachoRetorno4Curso, VEL: MachoRetorno4VEL, PRES: MachoRetorno4PRES, TEMP: MachoRetorno4TEMP },
        macho5: { Modo: MachoRetorno5Modo, Cond: MachoRetorno5Cond, Curso: MachoRetorno5Curso, VEL: MachoRetorno5VEL, PRES: MachoRetorno5PRES, TEMP: MachoRetorno5TEMP },
        macho6: { Modo: MachoRetorno6Modo, Cond: MachoRetorno6Cond, Curso: MachoRetorno6Curso, VEL: MachoRetorno6VEL, PRES: MachoRetorno6PRES, TEMP: MachoRetorno6TEMP },
        macho7: { Modo: MachoRetorno7Modo, Cond: MachoRetorno7Cond, Curso: MachoRetorno7Curso, VEL: MachoRetorno7VEL, PRES: MachoRetorno7PRES, TEMP: MachoRetorno7TEMP },
        macho8: { Modo: MachoRetorno8Modo, Cond: MachoRetorno8Cond, Curso: MachoRetorno8Curso, VEL: MachoRetorno8VEL, PRES: MachoRetorno8PRES, TEMP: MachoRetorno8TEMP },
      },

      // OBSERVAÇÕES E ANOTAÇÕES
      observacoes: {
        obsMacho,
        obsProcMontagem,
        obsOptecnica,
        obsQualidade,
        instrucoes,
        consideracoes,
      },

      // ATRASOS
      atrasos: {
        MachoAvancoAtraso,
        MachoRetornoAtraso,
      },

      // RETORNOS E CONTROLES
      controlesRetorno: {
        retSaidaExtracao,
        baixaPressao,
        retFimAltaPressao,
        retFimFechamento,
        retExtrator,
        retRecuoBico,
        retAvancoBico,
        retPurga,
        aberturaLentaPorta,
        portaAberta,
      },

      // Alarmes e configurações adicionais
      alarmeReciclo: {
        alarmeRetDosagem,
        Reciclo,
        descAnteDosagem,
      },

      // Configurações do friso
      configFriso: {
        ALPRFIABPRES,
        sicExtraPres,
        FecAuxPres,
      },

      // Timestamp
      dataCriacao: new Date().toISOString(),
    }
    setFicha(fichaSalva)
    console.log('Ficha Salva:', fichaSalva)
    return fichaSalva
  }

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

                <div className="field-p"><label>Cav</label><input value={cavidades} onChange={(e) => setcavidades(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Ciclo</label><input value={tCiclo} onChange={(e) => settCiclo(e.target.value)} type='text' /></div>
                <div className="field-p"><label>PH</label><input value={PH} onChange={(e) => setPH(e.target.value)} type='text' /></div>
                <div className="field-p"><label>Peso</label><input value={pesoIdeal} onChange={(e) => setpesoIdeal(e.target.value)} type='text' /></div>
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
            <textarea className="txt-area" value={obsOptecnica} onChange={(e) => obsOptecnicaset(e.target.value)} placeholder="Digite aqui..."></textarea>
          </div>

        </Section>

        <Section title="CONTROLE DE QUALIDADE">
          <div className='field'>
            <label>Informações</label>
            <textarea className="txt-area" value={obsQualidade} onChange={(e) => setobsQualidade(e.target.value)} placeholder="Digite aqui..."></textarea>
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

        <button onClick={handleSaveFicha} style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
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