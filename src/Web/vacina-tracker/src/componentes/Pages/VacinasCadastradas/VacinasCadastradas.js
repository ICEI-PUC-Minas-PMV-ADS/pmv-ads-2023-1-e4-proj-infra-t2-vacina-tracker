import './VacinasCadastradas.css'
import React from 'react';
import TabelaDadosVacinas from './TabelaVacinas';
import { FaPlusCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

function VacinasCadastradas() {
    return (
        <section>
            <div className='container-vacinas'>

                <h1 className='texto-1-vacinas'>Vacinas Cadastradas</h1>

                <TabelaDadosVacinas />

                <div className='lista-icones-vacinas'>
                    <Link to='/MCadastroVacina'>
                        <FaPlusCircle className='icone' />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default VacinasCadastradas