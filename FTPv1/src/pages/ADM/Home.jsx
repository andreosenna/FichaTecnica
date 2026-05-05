import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={styles.container}>
      
      <header>
        <h1 style={styles.title}>
          Bem vindo!
        </h1>
        <img src='../../assets/injetora.png' width="200px"/>
      </header>

      <section style={styles.menuSection}>
        <h2 style={styles.menuTitle}>Menu</h2>

        <div style={styles.buttonGroup}>
          <Link to="/" style={styles.button}>Home</Link>
          <Link to="/FTP" style={styles.button}>Fichas Técnicas</Link>
          <Link to="/OPs" style={styles.button}>Ordens de Produção</Link>
          <Link to="/Login" style={styles.button}>Login</Link>
        </div>
      </section>

    </div>
  );
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
    padding: '12px 30px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    boxShadow: '0 3px 6px rgba(0,0,0,0.1)'
  }
};
/*
<table>
<thead>
<tr>
    <th>teste</th>
</tr>
</thead>
<tbody>
<tr>
<td>teste</td>
</tr>
</tbody>
</table>
*/