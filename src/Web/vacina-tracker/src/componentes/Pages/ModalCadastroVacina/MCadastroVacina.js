import './MCadastroVacina.css'

import Input from '../../Layout/Input/Input'
import { FaSave, FaPlusCircle } from "react-icons/fa";
import React from 'react'


function MCadastroVacina() {
    return (
        <section className='cadastro'>
            
            <h1>Cadastrar Vacina</h1>  

            <div className='altura'>                 
                <Input type="text" text="Nome da Vacina" name="name" placeholder="Selecione o Nome da Vacina" />
                <Input type="date" text="Data da Aplicação" name="data" /> 
                <Input type="select" text="Dose" name="dose" placeholder="Selecione a Dose" />
                <Input type="date" text="Data da Próxima Aplicação " name="data" />                            
            </div>

            <div className='checkbox'>
                <Input type="checkbox" name="caixa-texto"/> Ativar/Desativar Lembrete 
            </div>

            <div className='lista-icones'>
                <FaSave className='icone' />                
                <FaPlusCircle className='icone' />                
            </div>   
        </section>        
    )
}

export default MCadastroVacina