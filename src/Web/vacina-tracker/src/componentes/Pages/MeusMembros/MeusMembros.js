import './MeusMembros.css'
import React from 'react';
import TabelaDados from './Tabela';



function MeusMembros() {
    return (
        <div className='container-membros'>

            <h1 className='texto-1-membros'>Meus Membros</h1>

            <TabelaDados />            

        </div>
    )
}

export default MeusMembros