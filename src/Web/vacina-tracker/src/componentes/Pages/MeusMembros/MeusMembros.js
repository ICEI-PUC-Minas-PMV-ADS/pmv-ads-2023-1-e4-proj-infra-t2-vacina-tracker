import './MeusMembros.css'
import React from 'react';
import TabelaDados from './Tabela';
import { FaPlusCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

function MeusMembros() {
    return (
        <section>
            <div className='container-membros'>

                <h1 className='texto-1-membros'>Meus Membros</h1>

                <TabelaDados />

                <div className='lista-icones-membros'>
                    <Link to='/MCadastroMembro'>
                        <FaPlusCircle className='icone' />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default MeusMembros