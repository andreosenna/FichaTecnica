import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import FTP from './pages/FTP'
import Teste from './pages/Teste'
import './App.css'
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
        <Link style={linkStyle} to="/Teste">Teste</Link>
      </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/FTP" element={<FTP/>}/>
      <Route path="/Teste" element={<Teste/>}/>
    </Routes>
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
