import './MeusMembros.css'
import React from 'react';
import TabelaDados from './Tabela';

import { FaPlusCircle } from "react-icons/fa";

function MeusMembros() {
    return (
        <div className='container-membros'>

            <h1 className='texto-1-membros'>Meus Membros</h1>

            <TabelaDados />

            <div className='lista-icones-membros'>                
                <FaPlusCircle className='icone' />
            </div>

        </div>
    )
}

export default MeusMembros