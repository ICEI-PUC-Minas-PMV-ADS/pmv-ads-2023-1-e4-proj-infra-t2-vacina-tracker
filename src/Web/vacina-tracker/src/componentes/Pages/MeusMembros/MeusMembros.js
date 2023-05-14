import './MeusMembros.css'
import React from 'react';
import TabelaDados from './Tabela';



function MeusMembros() {
    return (

        <div className='Container'>

            <h1 className='texto'>Meus Membros</h1>

            <TabelaDados />

        </div>

    )
}

export default MeusMembros