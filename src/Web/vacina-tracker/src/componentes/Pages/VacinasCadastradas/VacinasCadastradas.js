import './VacinasCadastradas.css'
import React from 'react';
import TabelaDadosVacinas from './TabelaVacinas';

import { FaPlusCircle } from "react-icons/fa";

function VacinasCadastradas() {
    return (
       
        <div className='container-vacinas'>

            <h1 className='texto-1-vacinas'>Vacinas Cadastradas</h1>

            <TabelaDadosVacinas />

            <div className='lista-icones-vacinas'>                
                <FaPlusCircle className='icone' />
            </div>

        </div>
    )
}

export default VacinasCadastradas