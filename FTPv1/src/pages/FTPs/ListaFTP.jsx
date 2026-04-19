import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import supabase from "../../conexao/conexao";

export default function ListaFTP() {
  
  const [listaftps, setListaFtps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    carregarFichas();
  }, []);

  const carregarFichas = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from('tb_ftp')
        .select()

      if (error) throw error

      if (data) {
        // Mapear os dados para mostrar apenas molde, versão, dataCriação e máquina
        const fichasFormatadas = data.map(ficha => ({
          id: ficha.id,
          molde: ficha.cabecalho?.molde || 'N/A',
          versao: ficha.cabecalho?.versao || 'N/A',
          dataCriacao: ficha.dataCriacao ? new Date(ficha.dataCriacao).toLocaleDateString('pt-BR') : 'N/A',
          maquina: ficha.cabecalho?.maquina || 'N/A'
        }));
        setListaFtps(fichasFormatadas);
      } else {
        setError('Erro ao carregar fichas da API');
      }
    } catch (error) {
      console.error('Erro ao carregar fichas:', error);
      setError('Erro na requisição: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div style={{ padding: '20px' }}>Carregando fichas...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Lista de Fichas Técnicas</h1>
      
      {error && (
        <div style={{
          padding: '10px 15px',
          backgroundColor: '#f8d7da',
          color: '#721c24',
          border: '1px solid #f5c6cb',
          borderRadius: '4px',
          marginBottom: '20px'
        }}>
          {error}
        </div>
      )}

      {listaftps.length === 0 ? (
        <p>Nenhuma ficha técnica encontrada.</p>
      ) : (
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '20px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#f5f5f5', borderBottom: '2px solid #ddd' }}>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>ID</th>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Molde</th>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Versão</th>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Data de Criação</th>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Máquina</th>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {listaftps.map((ftp) => (
              <tr key={ftp.id} style={{ borderBottom: '1px solid #ddd', backgroundColor: '#fff' }}>
                <td style={{ padding: '12px' }}>{ftp.id}</td>
                <td style={{ padding: '12px' }}>{ftp.molde}</td>
                <td style={{ padding: '12px' }}>{ftp.versao}</td>
                <td style={{ padding: '12px' }}>{ftp.dataCriacao}</td>
                <td style={{ padding: '12px' }}>{ftp.maquina}</td>
                <td style={{ padding: '12px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <Link to={`/FTP?mode=edit&id=${ftp.id}`} style={{ textDecoration: 'none' }}>
                    <button style={{ padding: '8px 12px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                      Editar
                    </button>
                  </Link>
                  <Link to={`/FTP?mode=duplicate&id=${ftp.id}`} style={{ textDecoration: 'none' }}>
                    <button style={{ padding: '8px 12px', backgroundColor: '#17a2b8', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                      Duplicar
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
        <Link to="/FTP" style={{ textDecoration: 'none' }}>
          <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}>
            Nova ficha
          </button>
        </Link>
        <button 
          onClick={carregarFichas}
          style={{
            padding: '10px 20px',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Atualizar Lista
        </button>
      </div>
    </div>
  );
}