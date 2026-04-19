import React, { useState, useEffect } from 'react';
import supabase from '../../conexao/conexao';
export default function Painel() {

    const [OPs, SetOPs] = useState([]);
    const [agora, setAgora] = useState(new Date()); // Estado para forçar atualização visual
    const [loading, setLoading] = useState(true); // Estado para controlar o carregamento dos dados
    const [error, setError] = useState(null); // Estado para armazenar erros de busca

useEffect(() => {
    const fetchOPs = async () => {
        try {
            const {data, error} = await supabase.from('tb_oppai').select('*');
            setLoading(false);
            SetOPs(data);
        } catch (error) {
            console.error("Erro ao buscar OPs:", error);
            setLoading(false);
        }
    };

    fetchOPs(); // Busca inicial
    const intervalBusca = setInterval(fetchOPs, 1000); // Atualiza a cada 30 segundos

    return () => clearInterval(intervalBusca); // Limpa o intervalo ao desmontar o componente
}, []);

  
    // 2. Efeito para atualizar o relógio interno a cada 1 minuto
    useEffect(() => {
        const intervalRelogio = setInterval(() => {
            setAgora(new Date());
        }, 1000); // 60.000ms = 1 minuto

        return () => clearInterval(intervalRelogio);
    }, []);

    // Função para formatar o tempo decorrido amigável
    const calcularTempoDecorrido = (dataCriacao) => {
        const diffMs = agora - new Date(dataCriacao);
        const diffMinutos = Math.floor(diffMs / (1000 * 60));
        
        const dias = Math.floor(diffMinutos / (60 * 24));
        const horas = Math.floor((diffMinutos % (60 * 24)) / 60);
        const minutos = diffMinutos % 60;

        let resultado = "";
        if (dias > 0) resultado += `${dias}d `;
        if (horas > 0 || dias > 0) resultado += `${horas}h `;
        resultado += `${minutos}min`;
        
        return resultado;
    };

    return (
        <>
            <header>
                <h1>OPs Ativas</h1>
                <p>Última atualização do painel: {agora.toLocaleTimeString()}</p>
            </header>
            <table border="1" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>qteProduzido</th>
                        <th>statsOpPai</th>
                        <th>obsOpPai</th>
                        <th>criadopor_OpPai</th>
                 
                    </tr>
                </thead>
                <tbody>
                    {OPs.length > 0 ? (
                        OPs.map(op => (
                            <tr key={op.id}>
                                <td>{op.id}</td>
                                <td>{op.qteProduzido}</td>
                                <td>{op.statsOpPai}</td>
                                <td>{op.obsOpPai}</td>
                                <td>{op.criadopor_OpPai}</td>
                            </tr>
                        ))
                    ) : (
                        <tr><td colSpan="8" style={{ textAlign: 'center' }}>Buscando ordens ativas...</td></tr>
                    )}
                </tbody>
            </table>
        </>
    );
}