// src/components/Section.jsx
import { useState } from 'react';
export default function Section({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const headerStyle = {
    backgroundColor: '#444',
    color: 'white',
    padding: '10px 15px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '4px',
    marginTop: '10px',
    userSelect: 'none' // Evita selecionar o texto ao clicar rápido
  };
  const contentStyle = {
    padding: '15px',
    background: '#f9f9f9',
    border: '1px solid #ddd',
    borderTop: 'none',
    borderRadius: '0 0 4px 4px'
  };
  return (
    <div style={{ marginBottom: '10px' }}>
      <div style={headerStyle} onClick={() => setIsOpen(!isOpen)}>
        <strong style={{ fontSize: '1.1rem' }}>{title}</strong>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      
      {isOpen && (
        <div style={contentStyle}>
          {children}
        </div>
      )}
    </div>
  );
}