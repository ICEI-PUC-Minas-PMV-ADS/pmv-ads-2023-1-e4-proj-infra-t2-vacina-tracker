import './MCadastroMembro.css'

import Input from '../../Layout/Input/Input'
import { FaSave, FaPlusCircle } from "react-icons/fa";
import React from 'react'


function MCadastroMembro() {
    return (
        <section className='cadastro'>
            
            <h1>Cadastrar Membro</h1>  

            <div className='altura'>                 
                <Input type="text" text="Nome do Membro " name="name" placeholder="Digite o Nome do Membro" />
                <Input type="text" text="Idade " name="senha" placeholder="Digite a Idade" />                
            </div>

            <div className='lista-icones'>
                <FaSave className='icone' />                
                <FaPlusCircle className='icone' />                
            </div>   
        </section>        
    )
}

export default MCadastroMembro