import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import supabase from '../../conexao/conexao'

export default function Apontamento() {
    const [Produzido, setProduzido] = useState('');
    const [quantidadeMPApontada, setQuantidadeMPApontada] = useState('');
    const [PerdaKg, setPerdaKg] = useState('');
    const [perdaPercentual, setPerdaPercentual] = useState('');
    const [listaApontada, setListaApontada] = useState([]);
    const [opCompleta, setOpCompleta] = useState(null);
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    const { op } = useParams();

    useEffect(() => {
        const fetchOPData = async () => {
            try {
                const { data, error } = await supabase
                    .from('OPs')
                    .select('*')
                    .eq('id', op)
                    .single();
                if (error) {
                    throw error;
                }
                if (data) {
                    setOpCompleta(data);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        if (op) {
            fetchOPData();
        }
    }, [op]);

    // Usar dados da API se disponíveis, senão usar dados do state
    const opData = opCompleta || location.state?.data;

    if (loading) {
        return <div style={styles.loading}>Carregando dados da OP...</div>;
    }

    if (!opData) {
        return <div style={styles.errorMsg}>Nenhuma ordem selecionada ou dados não encontrados.</div>;
    }

    const handleAtualizarApontamento = async () => {
        if (!Produzido || !quantidadeMPApontada) {
            return alert("Preencha os campos principais!");
        }

        try {
            const quantidadeAtual = parseFloat(Produzido);
            const novoTotalProduzido = (opData.Produzido || 0) + quantidadeAtual;

            // Atualizar a OP no Supabase
            const { data, error } = await supabase
                .from('OPs')
                .update({
                    Produzido: novoTotalProduzido,
                    MPApontada: (opData.MPApontada || 0) + parseFloat(quantidadeMPApontada),
                    PerdaKg: (opData.PerdaKg || 0) + (parseFloat(PerdaKg) || 0),
                    PerdaPercentual: (opData.PerdaPercentual || 0) + (parseFloat(perdaPercentual) || 0)
                })
                .eq('id', opData.id)
                .select()
                .single();

            if (error) {
                throw error;
            }

            if (data) {
                setOpCompleta(data);

                // Adicionar ao histórico local
                const novoApontamento = {
                    quantidadeProduzida: Produzido,
                    quantidadeMPApontada: quantidadeMPApontada,
                    perdaKg: PerdaKg,
                    perdaPercentual: perdaPercentual,
                    dataHora: new Date().toLocaleString()
                };

                setListaApontada([novoApontamento, ...listaApontada]);

                // Limpar campos após salvar
                setProduzido('');
                setQuantidadeMPApontada('');
                setPerdaKg('');
                setPerdaPercentual('');

                alert('Apontamento registrado com sucesso!');
            }
        } catch (error) {
            console.error('Erro ao registrar apontamento:', error);
            alert('Erro ao registrar apontamento. Tente novamente.');
        }
    };

    return (
        <div style={styles.container}>
            {/* CABEÇALHO COM INFORMAÇÕES DA OP */}
            <header style={styles.header}>
                <h1 style={styles.title}>Apontamento de Produção</h1>
                <div style={styles.infoGrid}>
                    <div style={styles.infoCard}>
                        <span style={styles.label}>OP SISTEMA</span>
                        <span style={styles.value}>{opData.NOPSistema}</span>
                    </div>
                    <div style={styles.infoCard}>
                        <span style={styles.label}>PRODUTO</span>
                        <span style={styles.value}>{opData.nomeProduto}</span>
                    </div>
                    <div style={styles.infoCard}>
                        <span style={styles.label}>DEMANDA</span>
                        <span style={styles.value}>{opData.Demanda}</span>
                    </div>
                    <div style={styles.infoCard}>
                        <span style={styles.label}>PRODUZIDO</span>
                        <span style={styles.value}>{opData.Produzido || 0}</span>
                    </div>
                    <div style={styles.infoCard}>
                        <span style={styles.label}>STATUS</span>
                        <span style={styles.statusBadge}>{opData.StatusOP}</span>
                    </div>
                </div>
            </header>

            {/* FORMULÁRIO DE REGISTRO */}
            <section style={styles.formSection}>
                <h2 style={styles.subtitle}>Registrar Novo Evento</h2>
                <div style={styles.inputGroup}>
                    <div style={styles.field}>
                        <label style={styles.fieldLabel}>Qtd Produzida</label>
                        <input style={styles.input} value={Produzido} type="number" onChange={(e) => setProduzido(e.target.value)} placeholder="0.00" />
                    </div>
                    <div style={styles.field}>
                        <label style={styles.fieldLabel}>Qtd MP Apontada</label>
                        <input style={styles.input} type="number" value={quantidadeMPApontada} onChange={(e) => setQuantidadeMPApontada(e.target.value)} placeholder="0.00" />
                    </div>
                    <div style={styles.field}>
                        <label style={styles.fieldLabel}>Perda (Kg)</label>
                        <input style={styles.input} value={PerdaKg} type="number" onChange={(e) => setPerdaKg(e.target.value)} placeholder="0.00" />
                    </div>
                    <div style={styles.field}>
                        <label style={styles.fieldLabel}>Perda (%)</label>
                        <input style={styles.input} value={perdaPercentual} type="number" step="0.01" onChange={(e) => setPerdaPercentual(e.target.value)} placeholder="0.00%" />
                    </div>
                </div>
                <button style={styles.button} onClick={handleAtualizarApontamento}>
                    Confirmar Apontamento
                </button>
            </section>

            {/* TABELA DE HISTÓRICO */}
            <section style={styles.tableSection}>
                <h2 style={styles.subtitle}>Histórico de Lançamentos</h2>
                <div style={styles.tableWrapper}>
                    <table style={styles.table}>
                        <thead>
                            <tr style={styles.tableHeadRow}>
                                <th style={styles.th}>Qtd Produzida</th>
                                <th style={styles.th}>MP Apontada</th>
                                <th style={styles.th}>Perda (Kg)</th>
                                <th style={styles.th}>Perda (%)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaApontada.map((item, index) => (
                                <tr key={index} style={styles.tableRow}>
                                    <td style={styles.td}>{item.quantidadeProduzida}</td>
                                    <td style={styles.td}>{item.quantidadeMPApontada}</td>
                                    <td style={styles.td}>{item.perdaKg || '0'}</td>
                                    <td style={styles.td}>{item.perdaPercentual ? `${item.perdaPercentual}%` : '0%'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}

// ESTILOS (O "REFORMA" VISUAL)
const styles = {
    container: {
        maxWidth: '1100px',
        margin: '0 auto',
        fontFamily: 'Segoe UI, Roboto, sans-serif',
        color: '#333',
    },
    header: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        marginBottom: '20px',
    },
    title: { margin: '0 0 20px 0', fontSize: '1.5rem', color: '#1a73e8' },
    infoGrid: { display: 'flex', gap: '20px', flexWrap: 'wrap' },
    infoCard: { display: 'flex', flexDirection: 'column', flex: 1, minWidth: '150px' },
    label: { fontSize: '0.75rem', color: '#777', fontWeight: 'bold', marginBottom: '4px' },
    value: { fontSize: '1.1rem', fontWeight: '500' },
    statusBadge: {
        backgroundColor: '#e8f0fe',
        color: '#1a73e8',
        padding: '4px 12px',
        borderRadius: '20px',
        fontSize: '0.9rem',
        fontWeight: 'bold',
        width: 'fit-content'
    },
    formSection: {
        backgroundColor: '#fff',
        padding: '25px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        marginBottom: '20px',
    },
    subtitle: { fontSize: '1.2rem', marginBottom: '20px', color: '#555' },
    inputGroup: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '15px',
        marginBottom: '20px'
    },
    field: { display: 'flex', flexDirection: 'column', gap: '8px' },
    fieldLabel: { fontSize: '0.9rem', fontWeight: '600' },
    input: {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        fontSize: '1rem',
        outline: 'none',
        transition: 'border 0.2s',
    },
    button: {
        backgroundColor: '#1a73e8',
        color: 'white',
        border: 'none',
        padding: '12px 24px',
        borderRadius: '5px',
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: '1rem',
        width: '100%',
        boxShadow: '0 2px 5px rgba(26,115,232,0.3)',
    },
    tableSection: {
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    },
    tableWrapper: { overflowX: 'auto' },
    table: { width: '100%', borderCollapse: 'collapse', marginTop: '10px' },
    tableHeadRow: { backgroundColor: '#f8f9fa', textAlign: 'left' },
    th: { padding: '12px', borderBottom: '2px solid #eee', color: '#666', fontSize: '0.9rem' },
    tableRow: { borderBottom: '1px solid #eee' },
    td: { padding: '12px', fontSize: '0.95rem' },
    errorMsg: { textAlign: 'center', marginTop: '50px', color: '#d93025', fontWeight: 'bold' }
};

//<button type="submit">Registrar Apontamento</button>