import { useEffect, useState } from 'react'
import supabase from '../../conexao/conexao'


export default function PAPC(){
const [listaPAPCs, setListaPAPCs] = useState([])

useEffect(() => {
  const fetchPAPCs = async () => {
    try {
      const { data, error } = await supabase
        .from('tb_papcs')
        .select('*')

      if (error) {
        throw error
      }

      setListaPAPCs(data)
    } catch (e) {
      console.log(e)
    }
  }

  fetchPAPCs()
}, [])

return(
<>

<h1>PAPC</h1>

<table>
<thead>
  <tr>
    <th>ID</th>
    <th>Responsavel:</th>
    <th>Data de Criação</th>
    <th>status</th>
    <th>Até Quando</th>
    <th>Ações</th>
  </tr>
</thead>
<tbody>
  {listaPAPCs.map(papc => (
    <tr key={papc.id}>
      <td>{papc.id}</td>
      <td>{papc.quemPAPC}</td>
      <td>{new Date(papc.created_at).toLocaleDateString()}</td>
      <td>{papc.statusPAPC}</td>
      <td>{new Date(papc.quandoPAPC).toLocaleDateString()}</td>
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