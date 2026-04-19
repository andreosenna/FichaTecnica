import React,{useState} from "react";
import supabase from "../../conexao/conexao";

export default function Login(){
const [nome, setNome] = useState("");
const [senha,setSenha] = useState("");

const handleLogin = async (e) =>{
    e.preventDefault()
    try{
        const {data,error} = await supabase.from("Usuarios").select("nomeUsuario,senhaUsuario")
        .eq("nomeUsuario",nome)
        .eq("senhaUsuario",senha)
        .single()
        if(error){
            alert("Usuário ou senha incorretos")
        }
        else{
            alert("Login bem-sucedido")
        }
        
    }catch(error){
        console.error("Erro ao realizar login:", error)
        alert("Ocorreu um erro ao tentar fazer login. Por favor, tente novamente mais tarde.")

        
    }
}


    return(
        <>
        <section>
            <div className="header">
                <h1>Login</h1>
                <br/>
<form style={styles.container}  onSubmit={handleLogin}>
    <label >Insira o nome de usuário:</label>
    <input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome de usuário"/>
    <label >Senha:</label>
    <input  value={senha} type="password" onChange={e=> setSenha(e.target.value)} placeholder="Senha"/>
    <br/><button style={styles.button} type="submit">Entrar</button>
</form>

            </div>
        </section>
        
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