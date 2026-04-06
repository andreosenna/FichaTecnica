import React, { useState, useEffect } from 'react'
import Section from '../components/Section'
export default function FTP(){
 
const [moldes,setMoldes] = useState([
  {id:1, molde:'Cadeira Monobloco', bico:200, zona1:240, zona2:230, zona3:220, cq1:200, cq2:200},
  {id:2, molde:'Mesa Monobloco',bico:200, zona1:240, zona2:230, zona3:220, cq1:200, cq2:200},
  {id:3, molde:'Estante Modular',bico:200, zona1:240, zona2:230, zona3:220, cq1:200, cq2:200},
  {id:4, molde:'Balde 8L',bico:200, zona1:240, zona2:230, zona3:220, cq1:200, cq2:200},
  {id:5, molde:'Lixeira 90L',bico:200, zona1:240, zona2:230, zona3:220, cq1:200, cq2:200},
  {id:6, molde:'Pote 1000ML',bico:200, zona1:240, zona2:230, zona3:220, cq1:200, cq2:200},
])
    return(
        <>
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1>Cadastro de Ficha Técnica</h1>
  <Section title="Cabeçalho">
    <div>
      <label>Cod:</label>
      <select type="text" style={{width: '200px'}}>
      {moldes.map(m=>(
      <option key={m.id} value={m.id}>{m.molde}</option>
    ))
    
    
}</select>
    <label>Nome do Produto:</label>
    <input type="text" style={{width:'300px'}}/>{}
  </div>
<div className='campos-container'>
  <div className="field">
    <label>Bico:</label>
    <input type="text" style={{width:'30px'}}/>
  </div>
  <div className="field">
    <label>Zona 1:</label>
    <input type="text" style={{width:'30px'}}/>
  </div>
  <div className="field">
    <label>Zona 2:</label>
    <input type="text" style={{width:'30px'}}/>
  </div>

  <div className='pulaLinha'>
  </div>
  <div className="field">
    <label>CQ 1:</label>
    <input type="number" style={{width:'30px'}}/>
  </div>
  <div className="field">
    <label>CQ 2:</label>
    <input type="number" style={{width:'30px'}}/>
  </div>
  <div className="field">
    <label>CQ 3:</label>
    <input type="number" style={{width:'30px'}}/>
  </div>
</div>
</Section>
      <Section title="Temperatura">
        <label>Temperatura de Lavagem:</label>
        <input type="text" placeholder="Ex: 40°C" />
        <label>Temperatura de Secagem:</label>
        <input type="text" />
      </Section>
      <Section title="Fechamento">
        <label>Tipo de Costura:</label>
        <select>
          <option>Overlock</option>
          <option>Reta</option>
        </select>
      </Section>
      
      <button style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
        Salvar Ficha
      </button>
    </div>
        </>
    )
    
}