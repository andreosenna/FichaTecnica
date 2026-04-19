
import React, { useEffect, useState } from 'react';
import supabase from '../../conexao/conexao';

export default function OrdemServico() {
  const [listaOPs, setListaOPs] = useState([
    { os: 'OS001', cliente: 'Empresa X', recursoTipo: 'molde', recursoNome: 'Molde A', abertura: '01/01/2024', previsao: '05/01/2024', status: 'Aberta' },
    { os: 'OS002', cliente: 'Empresa Y', recursoTipo: 'maquina', recursoNome: 'Máquina B', abertura: '05/01/2024', previsao: '10/01/2024', status: 'Em Andamento' },
    { os: 'OS003', cliente: 'Empresa Z', recursoTipo: 'molde', recursoNome: 'Molde C', abertura: '10/01/2024', previsao: '15/01/2024', status: 'Fechada' },
  ]);
  const [tipoRecurso, setTipoRecurso] = useState('molde');
  const [recursoId, setRecursoId] = useState('');
  const [recursos, setRecursos] = useState([]);
  const [cliente, setCliente] = useState('');
  const [dataAbertura, setDataAbertura] = useState('');
  const [previsao, setPrevisao] = useState('');
  const [status, setStatus] = useState('Aberta');
  const [mostrarForm, setMostrarForm] = useState(false);
  const [osAberta, setOsAberta] = useState(null);

  useEffect(() => {
    carregarRecursos();
  }, []);

  useEffect(() => {
    const porTipo = recursos.filter((item) => item.tipo === tipoRecurso);
    if (porTipo.length > 0) {
      setRecursoId(String(porTipo[0].id));
    } else {
      setRecursoId('');
    }
  }, [tipoRecurso, recursos]);

  const carregarRecursos = async () => {
    try {
      const { data: moldes, error: moldesError } = await supabase.from('tb_moldes').select('*');
      const { data: maquinas, error: maquinasError } = await supabase.from('tb_maquinas').select('*');

      if (moldesError) throw moldesError;
      if (maquinasError) throw maquinasError;

      const moldesFormatados = (moldes || []).map((item) => ({
        id: item.id,
        tipo: 'molde',
        nome: item.descMolde || 'Molde sem descrição',
      }));
      const maquinasFormatadas = (maquinas || []).map((item) => ({
        id: item.id,
        tipo: 'maquina',
        nome: item.descMaquina || 'Máquina sem descrição',
      }));

      setRecursos([...moldesFormatados, ...maquinasFormatadas]);
    } catch (error) {
      console.error('Erro ao carregar recursos:', error);
    }
  };

  const recursosFiltrados = recursos.filter((item) => item.tipo === tipoRecurso);
  const recursoSelecionado = recursosFiltrados.find((item) => String(item.id) === recursoId);

  const mostrarFormulario = (value) => {
    setMostrarForm(value);
  };

  const handleCriarOS = (e) => {
    e.preventDefault();
    if (!cliente || !dataAbertura || !previsao || !recursoSelecionado) {
      alert('Preencha os campos obrigatórios e selecione um recurso.');
      return;
    }

    const novaOS = {
      os: `OS${String(listaOPs.length + 1).padStart(3, '0')}`,
      cliente,
      recursoTipo: tipoRecurso,
      recursoNome: recursoSelecionado.nome,
      abertura: new Date(dataAbertura).toLocaleDateString('pt-BR'),
      previsao: new Date(previsao).toLocaleDateString('pt-BR'),
      status,
    };

    setListaOPs((prev) => [...prev, novaOS]);
    setCliente('');
    setDataAbertura('');
    setPrevisao('');
    setStatus('Aberta');
    setMostrarForm(false);
  };

  const handleExcluir = (index) => {
    if (!window.confirm('Deseja excluir esta OS?')) return;
    setListaOPs((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAbrirOS = (op) => {
    setOsAberta(op);
  };

  return (
    <>
      <h1>Ordem de Serviço</h1>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '24px' }}>
        <thead>
          <tr>
            <th style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>OS</th>
            <th style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>Cliente</th>
            <th style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>Recurso</th>
            <th style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>Abertura</th>
            <th style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>Previsão</th>
            <th style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>Status</th>
            <th style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {listaOPs.map((op, index) => (
            <tr key={`${op.os}-${index}`}>
              <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{op.os}</td>
              <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{op.cliente}</td>
              <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
                {`${op.recursoTipo === 'molde' ? 'Molde' : 'Máquina'}: ${op.recursoNome}`}
              </td>
              <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{op.abertura}</td>
              <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{op.previsao}</td>
              <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{op.status}</td>
              <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
                <button onClick={() => handleAbrirOS(op)} style={{ marginRight: '8px' }}>
                  Abrir
                </button>
                <button onClick={() => handleExcluir(index)} style={{ backgroundColor: '#c00', color: '#fff' }}>
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => mostrarFormulario(true)} style={{ marginRight: '12px' }}>
        Nova OS
      </button>
      <button onClick={() => mostrarFormulario(false)}>Fechar</button>

      {mostrarForm && (
        <form onSubmit={handleCriarOS} style={{ marginTop: '24px', display: 'grid', gap: '12px' }}>
          <label>
            Tipo de Recurso:
            <select value={tipoRecurso} onChange={(e) => setTipoRecurso(e.target.value)} style={{ marginLeft: '8px' }}>
              <option value="molde">Molde</option>
              <option value="maquina">Máquina</option>
            </select>
          </label>

          <label>
            Recurso:
            <select
              value={recursoId}
              onChange={(e) => setRecursoId(e.target.value)}
              style={{ marginLeft: '8px' }}
              required
            >
              <option value="">Selecione um recurso</option>
              {recursosFiltrados.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.nome}
                </option>
              ))}
            </select>
          </label>

          <input
            type="text"
            placeholder="Cliente"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
            required
          />

          <label>
            Data de Abertura:
            <input
              type="date"
              value={dataAbertura}
              onChange={(e) => setDataAbertura(e.target.value)}
              required
              style={{ marginLeft: '8px' }}
            />
          </label>

          <label>
            Previsão:
            <input
              type="date"
              value={previsao}
              onChange={(e) => setPrevisao(e.target.value)}
              required
              style={{ marginLeft: '8px' }}
            />
          </label>

          <label>
            Status:
            <select value={status} onChange={(e) => setStatus(e.target.value)} style={{ marginLeft: '8px' }}>
              <option value="Aberta">Aberta</option>
              <option value="Em Andamento">Em Andamento</option>
              <option value="Fechada">Fechada</option>
            </select>
          </label>

          <button type="submit">Adicionar OS</button>
          {recursosFiltrados.length === 0 && (
            <p style={{ color: '#c00' }}>
              Nenhum recurso disponível para o tipo selecionado. Cadastre recursos em Recursos antes.
            </p>
          )}
        </form>
      )}

      {osAberta && (
        <section style={{ marginTop: '24px', padding: '16px', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h2>OS Aberta: {osAberta.os}</h2>
          <p>
            <strong>Cliente:</strong> {osAberta.cliente}
          </p>
          <p>
            <strong>Recurso:</strong> {`${osAberta.recursoTipo === 'molde' ? 'Molde' : 'Máquina'} - ${osAberta.recursoNome}`}
          </p>
          <p>
            <strong>Data de Abertura:</strong> {osAberta.abertura}
          </p>
          <p>
            <strong>Previsão:</strong> {osAberta.previsao}
          </p>
          <p>
            <strong>Status:</strong> {osAberta.status}
          </p>
        </section>
      )}
    </>
  );
}
