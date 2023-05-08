import Input from '../../Layout/Input/Input'
import LinkTexto from '../../Layout/LinkTexto/LinkTexto'

import './Perfil.css'
//import {FontAwesomeIcon} from '@fortawesome/fontawesome-free'
import React from 'react'

function Perfil() {
    return (
        <section className='perfil'>
            
            <h1>Perfil do Usuário</h1>            
            
            <Input type="text" text="E-mail " name="name" placeholder="Digite seu E-mail" />

            <Input type="text" text="Senha " name="senha" placeholder="Digite sua Nova Senha" />

            <Input type="text" text="Confirme sua Senha " name="senha" placeholder="Confirme sua Nova Senha" />

            

            <LinkTexto to="#" text="Membros"/>
            

            <LinkTexto to="#" text="Vacinas"/>       
            
                        
        </section>        
    )
}

export default Perfil