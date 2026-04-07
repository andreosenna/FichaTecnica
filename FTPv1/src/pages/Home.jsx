import React from 'react';
import {Link} from 'react-router-dom'
import FTP from './FTP'

export default function Home(){
    return(
<>
<section>
<div>
    <h1>Bem vindo ao Sistema de Gestão de Fichas Técnicas</h1>
    <br/>
    <h3>Menu</h3>
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/FTP">Fichas Técnicas</Link></li>
     
</ul>
</div>
</section>
</>
    )
}
/*
<table>
<thead>
<tr>
    <th>teste</th>
</tr>
</thead>
<tbody>
<tr>
<td>teste</td>
</tr>
</tbody>
</table>
*/