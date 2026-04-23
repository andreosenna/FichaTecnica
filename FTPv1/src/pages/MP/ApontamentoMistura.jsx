import React,{useState} from 'react'
import {useLocation, useParams} from 'react-router-dom'
import '../../App.css'

export default function ApontamentoMistura (){

const location = useLocation()
const {mistura} = useParams()


    return(
        
           <>
           <h1>Apontamentos de Mistura</h1>
         <div>
            <label>Numero OP Mistura</label>
            <text>OP mistura</text>
           </div>
           </>


    )

}