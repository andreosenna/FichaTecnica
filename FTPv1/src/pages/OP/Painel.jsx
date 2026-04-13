import React, { useState, useEffect } from 'react';

export default function Painel() {
    const URL = 'https://69cebbb833a09f831b7debab.mockapi.io/';
    const [OPs, SetOPs] = useState([]);
    const [agora, setAgora] = useState(new Date()); // Estado para forçar atualização visual

    // 1. Efeito para buscar dados da API (a cada 30 segundos para não sobrecarregar)
    useEffect(() => {
        const buscarDados = async () => {
            try {
                const response = await fetch(`${URL}OPs`);
                const data = await response.json();
                SetOPs(data);
            } catch (error) {
                console.error("Erro ao buscar OPs:", error);
            }
        };

        buscarDados(); // Busca inicial
        const intervalBusca = setInterval(buscarDados, 1000); 

        return () => clearInterval(intervalBusca);
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
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                        <th>NOP</th>
                        <th>Produto</th>
                        <th>Demanda</th>
                        <th>Status</th>
                        <th>Produzido</th>
                        <th>% Perda</th>
                        <th>Data Criação</th>
                        <th>Tempo Decorrido</th>
                    </tr>
                </thead>
                <tbody>
                    {OPs.length > 0 ? (
                        OPs.filter(op => op.StatusOP === "Ativa").map(op => (
                            <tr key={op.id}>
                                <td>{op.NOPSistema}</td>
                                <td>{op.nomeProduto}</td>
                                <td>{op.Demanda}</td>
                                <td>{op.StatusOP}</td>
                                <td>{op.Produzido}</td>
                                <td>{op.PerdaPercentual}%</td>
                                <td>
                                    {new Date(op.createdAt).toLocaleDateString()} {new Date(op.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                </td>
                                <td style={{ fontWeight: 'bold', color: '#007bff' }}>
                                    {calcularTempoDecorrido(op.createdAt)}
                                </td>
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