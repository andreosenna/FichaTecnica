import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import Section from '../../components/Section'
import supabase from '../../conexao/conexao'

export default function OPs(){
const [listaProdutos,setListaProdutos] = useState([])
const [novaOp,setNovaOP] = useState([])
const[nomeProduto,setNomeProduto] = useState('')
const [NOPSistema,setNOPSistema] = useState('')
const [codProduto,setCodProduto] = useState('')
const [Demanda,setDemanda] = useState('')
const [Produzido,setProduzido] = useState('')
const [MPAlocada,setMPAlocada] = useState('')
const [MPApontada,setMPApontada] = useState('')
const [PerdaKg,setPerdaKg] = useState('')
const [PerdaPercentual,setPerdaPercentual] = useState('')
const [OPs,setOPs] = useState([])
const [loading,setLoading]=  useState(true)
const [error,setError] = useState(null)

const navigate = useNavigate()

useEffect(()=>{
const fetchProdutos = async ()=>{
const {data} = await supabase.from('tb_produtos').select('*')
    setListaProdutos(data)
}
fetchProdutos()
},[])

useEffect(() => {
  const fetchOPs = async () => {
    try {
      setLoading(true); // Garante que o loading comece ao iniciar a busca
      const { data, error } = await supabase.from('tb_oppai').select('*');
      
      if (error) throw error;

      setOPs(data || []); // Verifique se o nome da função é setOps ou SetOPs
    } catch (err) {
      console.error('Erro ao buscar OPs:', err);
    } finally {
      setLoading(false);
    }
  };

  fetchOPs(); // A chamada deve ser feita aqui, fora da definição da função
}, []);
/*
///////////// antigo
useEffect(()=>{
fetch(`${URL}OPs`)
.then(res=> res.json())
.then(data=> SetOPs(data))
},[])*/






const handleAbrirOP = (opSelecionada)=>{
navigate (`/Apontamentos/${opSelecionada.op}`, {state: {data:opSelecionada}})
}

const handleCriarOP = async () => { // Adicionamos async aqui
  try {
    const novaOP = {
      nomeProduto,
      NOPSistema,
      codProduto,
      Demanda,
      Produzido: 0,
      MPAlocada,
      MPApontada: 0,
      PerdaKg: 0,
      PerdaPercentual: 0,
      StatusOP: 'Pendente' // Status inicial, por exemplo
    };

    // No Supabase, você usa await em vez de .then() para ficar mais limpo
    const { data, error } = await supabase
      .from('tb_oppai')
      .insert([novaOP]) // O Supabase exige que seja um array []
      .select();       // IMPORTANTE: Sem o .select(), o 'data' volta vazio!

    if (error) throw error;

    // O data do Supabase é sempre uma lista, então pegamos o primeiro item [0]
    if (data) {
      setOPs(prev => [...prev, data[0]]); 
      alert('OP criada com sucesso!');
    }

  } catch (error) {
    console.error('Erro ao criar OP:', error);
    alert('Ocorreu um erro ao criar a OP. Tente novamente.');
  }
};
/*
const handleCriarOP = (OP)=>{
try {
   
    const novaOP = {
        nomeProduto,
        NOPSistema,
        codProduto,
        Demanda,
        Produzido:0,
        MPAlocada,
        MPApontada:0,
        PerdaKg:0,
        PerdaPercentual:0
    }
    
    fetch(`${URL}OPs`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novaOP)
    })
    .then(res=> res.json())
    .then(data=>{
        SetOPs(prev => [...prev, data])
        alert('OP criada com sucesso!')
    })
} catch (error) {
    console.error('Erro ao criar OP:', error)
    alert('Ocorreu um erro ao criar a OP. Tente novamente.')
}
}*/

const handleAtualizarCodProduto = (e)=>{

}

    return(
        <>
        <div>
        <h1 style={styles.header}>Ordens Disponíveis </h1>
        </div>
        <table style={styles.table}>
        <thead style={styles.thead}>
            <tr>
                <th style={styles.th}>Numero OP</th>
                <th style={styles.th}>Produto</th>
                <th style={styles.th}>Demanda</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Ação</th>
            </tr>
        </thead>
<tbody>
    {OPs.map(op=>(
        <tr key={op.id}>
            <td style={styles.td}>{op.id}</td>
            <td style={styles.td}>{op.nomeProduto}</td>
            <td style={styles.td}>{op.Demanda}</td>
            <td style={styles.td}>{op.StatusOP}</td>
            <td style={styles.td}><button onClick={()=> handleAbrirOP(op)} style={styles.button}>abrir</button></td>
        </tr>
     ))}
        </tbody>
    </table>

<Section title="Criar Ordem de Produção">
  <div style={formStyles.container}>
    
    {/* Cabeçalho de Identificação */}
    <div style={formStyles.idBadge}>
      <span style={formStyles.labelSmall}>ID da Nova OP</span>
      <strong style={formStyles.idValue}>#0000</strong>
    </div>

    <div style={formStyles.grid}>
      {/* Campo Produto - Ocupa 2 colunas se quiser destaque */}
      <div style={{ ...formStyles.field, gridColumn: "1 / -1" }}>
        <label style={formStyles.label}>Produto</label>
        <input 
          style={formStyles.input}
          value={nomeProduto} 
          type="text" 
          list='produtos' 
          placeholder="Busque ou selecione o produto..."
          onChange={(e) => setNomeProduto(e.target.value)}
        />
        <datalist id='produtos'>
          {listaProdutos.map(produto => (
            <option key={produto.id} value={produto.descProduto}/>
          ))}
        </datalist>
      </div>

      <div style={formStyles.field}>
        <label style={formStyles.label}>Código do Produto</label>
        <text>{listaProdutos.find(p => p.descProduto === nomeProduto)?.codProdutoExterno || 'Preencha o nome do produto'}</text> 
          
        
      </div>

      <div style={formStyles.field}>
        <label style={formStyles.label}>NOP Protheus</label>
        <input 
          style={formStyles.input}
          value={NOPSistema} 
          onChange={(e) => setNOPSistema(e.target.value)} 
          type="text"
          placeholder="Número da OP"
        />
      </div>

      <div style={formStyles.field}>
        <label style={formStyles.label}>Quantidade Demandada</label>
        <input 
          style={formStyles.input}
          value={Demanda} 
          onChange={(e) => setDemanda(e.target.value)} 
          type="number"
          placeholder="0"
        />
      </div>

      <div style={formStyles.field}>
        <label style={formStyles.label}>Quantidade MP</label>
        <input 
          style={formStyles.input}
          value={MPAlocada} 
          onChange={(e) => setMPAlocada(e.target.value)} 
          type="number"
          placeholder="0.00"
        />
      </div>
    </div>

    <div style={formStyles.footer}>
      <button onClick={handleCriarOP} style={formStyles.mainButton}>
        🚀 Gerar Ordem de Produção
      </button>
    </div>
  </div>
</Section>
        </>
    )
}
const styles = {
  container: {
    minHeight: '100vh',
    background: '#f4f6f8',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  header: {
    width: '100%',
    background: 'linear-gradient(135deg, #525353, #575a57)',
    padding: '60px 20px',
    textAlign: 'center',
    color: 'white',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  },

  title: {
    fontSize: '32px',
    margin: 0,
    fontWeight: '400',
    color: 'white'
  },

  menuSection: {
    marginTop: '50px',
    textAlign: 'center',
  },

  menuTitle: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333'
  },

  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    alignItems: 'center'
  },

  button: {
    textDecoration: 'none',
    background: '#357749',
    color: 'white',
    padding: '2px 15px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    boxShadow: '0 3px 6px rgba(0,0,0,0.1)'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontFamily: 'Arial, sans-serif',
    background: '#ffffff',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  },

  thead: {
    background: '#2f2f2f',
  },

  th: {
    padding: '14px',
    textAlign: 'center',
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: '600',
    letterSpacing: '0.5px',
  },

  tr: {
    borderBottom: '1px solid #e0e0e0',
  },

  td: {
    padding: '12px 14px',
    fontSize: '14px',
    color: '#333',
  },

  trHover: {
    background: '#f5f5f5',
    transition: '0.2s',
  },

  zebra: {
    background: '#fafafa',
  }
};


const formStyles = {
  container: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    border: '1px solid #e0e0e0',
  },
  idBadge: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f8f9fa',
    padding: '10px 15px',
    borderRadius: '8px',
    marginBottom: '20px',
    borderLeft: '4px solid #1a73e8'
  },
  labelSmall: { fontSize: '0.7rem', color: '#666', textTransform: 'uppercase', fontWeight: 'bold' },
  idValue: { fontSize: '1.1rem', color: '#333' },
  
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', // Duas colunas
    gap: '20px',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#444',
  },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '0.95rem',
    outline: 'none',
    backgroundColor: '#fdfdfd',
    transition: 'border-color 0.2s',
    '&:focus': { borderColor: '#1a73e8' }
  },
  footer: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  mainButton: {
    backgroundColor: '#1a73e8',
    color: 'white',
    padding: '14px 28px',
    borderRadius: '8px',
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background 0.3s',
    boxShadow: '0 4px 6px rgba(26, 115, 232, 0.2)',
  }
};