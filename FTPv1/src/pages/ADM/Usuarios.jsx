import React, { useState, useEffect } from 'react'
import supabase from '../../conexao/conexao'


export default function Usuarios(){
const [listaUsuarios, setListaUsuarios] = useState([])

useEffect(() => {
  const fetchUsuarios = async () => {
    try {
      const { data, error } = await supabase
        .from('tb_usuarios')
        .select('*')

      if (error) {
        throw error
      }

      setListaUsuarios(data)
    } catch (e) {
      console.log(e)
    }
  }

  fetchUsuarios()
}, []) 


return(
  <>
  <h1>Usuarios</h1>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Nome de Usuário</th>
        <th>Setor</th>
        <th>Status</th>
        <th>Tipo</th>
        <th>Senha</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      {listaUsuarios.map(usuario => (
        <tr key={usuario.id}>
          <td>{usuario.id}</td>
          <td>{usuario.nomeUsuario}</td>
          <td>{usuario.setorUsuario}</td>
          <td>{usuario.statusUsuario}</td>
          <td>{usuario.tipoUsuario}</td>
          <td>{usuario.senha}</td>
          <td>
            <button>Editar</button>
            <button>Excluir</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  </>
    )
}