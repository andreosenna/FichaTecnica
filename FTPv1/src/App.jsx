//import { useState } from 'react'
// import {useLocation} from 'react-router-dom'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import FTP from './pages/FTP'
import Apontamentos from './pages/Apontamentos'
import OP from './pages/OPs'
import Login from './pages/Login'
import Painel from './pages/Painel'
import Teste from './pages/Teste'
//import supabase from './conexao/conexao'

import './App.css'
import OPs from './pages/OPs'
function Layout() {
const navStyle = {
    position: "fixed",      // Fixa no topo
    top: 0,                 // Garante que comece no topo zero
    left: 0,                // Garante que comece na esquerda zero
    width: "100%",          // Ocupa 100% da largura horizontal
    backgroundColor: "#333",
    padding: "15px 20px",   // Espaçamento interno
    display: "flex",        // Ativa o Flexbox
    justifyContent: "flex-start", // Garante que tudo comece à esquerda
    gap: "20px",            // Espaço entre os botões/links
    zIndex: 1000,           // Garante que o menu fique na frente de tudo
    boxSizing: "border-box" // Garante que o padding não estoure os 100%
    
  };
  const contentStyle = {
    marginTop: "60px", // Ajuste este valor conforme a altura real do seu menu
    padding: "20px"    // Opcional: apenas para não encostar nas bordas
  };
const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold"
  };
return(
   <>
      <nav style={navStyle}>
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/FTP">Fichas Técnicas</Link>
        <Link style={linkStyle} to="/Painel">Painel</Link>
        <Link style={linkStyle} to="/OPs">Ordens de Produção</Link>
        <Link style={linkStyle} to="/Login">Login</Link>
        <Link style={linkStyle} to="/Teste">Teste</Link>
      </nav>

      <div style={contentStyle}>
        
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/FTP" element={<FTP/>}/>
      <Route path="/Apontamentos" element={<Apontamentos/>}/>
      <Route path="/OPs" element={<OPs/>}/>
      <Route path="/Painel" element={<Painel/>}/>
      <Route path="/Apontamentos/:op" element={<Apontamentos />} />
      <Route path="/Teste" element={<Teste/>} />
      
   
    </Routes>
       </div>
    </>
 
  )
}
function App(){
  return(
 <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
export default App
