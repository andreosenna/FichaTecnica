import React,{useState,useEffect} from "react";


export default function ListaFTP() {

const lista =[{id: 1, nome: "FTP 1"},
             {id: 2, nome: "FTP 2"},
             {id: 3, nome: "FTP 3"}
            ]
const [listaftps, setListaFtps] = useState([]);

useEffect(() => {
    // Simulando uma chamada de API para obter a lista de FTPs
    setTimeout(() => {
        setListaFtps(lista);
    }, 1000); // Simula um atraso de 1 segundo
}, []);

    return (
        <div>
        <h1>Lista de FTPs</h1>
        {/* Aqui você pode adicionar a lógica para exibir a lista de FTPs */}
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
                {listaftps.map((ftp,index) => (
                    <tr key={index}>
                        <td>{ftp.id}</td>
                        <td>{ftp.nome}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
    }