//import { useState } from 'react'
// import {useLocation} from 'react-router-dom'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import React, { useState } from 'react'
import Home from './pages/Home'
import FTP from './pages/FTP/FTP'
import Apontamentos from './pages/OP/Apontamentos'
import Login from './pages/Login'
import Painel from './pages/OP/Painel'
import Teste from './pages/Teste'
import OPs from './pages/OP/OPs'
import './App.css'

// --- Subcomponente de Dropdown para Reutilização ---
const NavDropdown = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      style={dropdownContainerStyle} 
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)}
    >
      <button style={buttonMenuStyle}>
        {title} <span style={{ fontSize: '10px' }}>▼</span>
      </button>

      {isOpen && (
        <div style={dropdownMenuStyle}>
          {links.map((link, index) => (
            <Link 
              key={index} 
              to={link.path} 
              style={dropdownItemStyle}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

// --- Estilos Compartilhados ---
const dropdownContainerStyle = { position: "relative", display: "inline-block" };
const buttonMenuStyle = {
  background: "none", border: "none", color: "white",
  fontWeight: "bold", fontSize: "16px", cursor: "pointer",
  padding: "5px 10px"
};
const dropdownMenuStyle = {
  position: "absolute", top: "100%", left: "0",
  backgroundColor: "#444", minWidth: "180px",
  boxShadow: "0px 8px 16px rgba(0,0,0,0.2)",
  borderRadius: "4px", zIndex: 1100, display: "flex",
  flexDirection: "column", padding: "5px 0"
};
const dropdownItemStyle = {
  color: "white", padding: "12px 16px", textDecoration: "none",
  display: "block", fontSize: "14px", borderBottom: "1px solid #555"
};

function Layout() {
  const navStyle = {
    position: "fixed", top: 0, left: 0, width: "100%",
    backgroundColor: "#333", padding: "10px 20px",
    display: "flex", alignItems: "center", gap: "10px",
    zIndex: 1000, boxSizing: "border-box"
  };

  const contentStyle = { marginTop: "60px", padding: "20px" };

  return (
    <>
      <nav style={navStyle}>
        {/* 1º Menu: Home */}
        <NavDropdown 
          title="Home" 
          links={[
            { label: "Home", path: "/" },
            { label: "Login", path: "/Login" }
          ]} 
        />

        {/* 2º Menu: Fichas Técnicas */}
        <NavDropdown 
          title="Fichas Técnicas" 
          links={[
            { label: "Fichas Técnicas", path: "/FTP" },
            { label: "Teste", path: "/Teste" }
          ]} 
        />

        {/* 3º Menu: Ordens de Produção */}
        <NavDropdown 
          title="Produção" 
          links={[
            { label: "Ordens de Produção", path: "/OPs" },
            { label: "Painel", path: "/Painel" }
          ]} 
        />
      </nav>

      <div style={contentStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FTP" element={<FTP />} />
          <Route path="/Apontamentos" element={<Apontamentos />} />
          <Route path="/OPs" element={<OPs />} />
          <Route path="/Painel" element={<Painel />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Apontamentos/:op" element={<Apontamentos />} />
          <Route path="/Teste" element={<Teste />} />
        </Routes>
      </div>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App;