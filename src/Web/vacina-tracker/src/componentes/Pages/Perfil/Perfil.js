import Input from '../../Layout/Input/Input'
import LinkTexto from '../../Layout/LinkTexto/LinkTexto'

import './Perfil.css'
//import {FontAwesomeIcon} from '@fortawesome/fontawesome-free'
import { FaUserCircle, FaUserPlus, FaCheckCircle, FaSave } from "react-icons/fa";
import React from 'react'


function Perfil() {
    return (
        <section className='perfil'>
            
            <h1>Perfil do Usuário</h1>  

            <div>
                <FaUserCircle className='icone-user' /> 
                <Input type="text" text="E-mail " name="name" placeholder="Digite seu E-mail" />
                <Input type="text" text="Senha " name="senha" placeholder="Digite sua Nova Senha" />

                <div>
                    <Input type="text" text="Confirme sua Senha " name="senha" placeholder="Confirme sua Nova Senha" />
                    <FaSave className='icone' />
                </div>
            </div>

            <div className='lista-icones'>
                <LinkTexto to="#" text="Membros"/>
                <FaUserPlus className='icone' />
                <FaCheckCircle className='icone'/>
            </div>
            
            <div className='lista-icones'>
                <LinkTexto to="#" text="Vacinas"/> 
                <FaUserPlus className='icone' />
                <FaCheckCircle className='icone'/>
            </div>  

        </section>        
    )
}

export default Perfil