import './VacinasCadastradas.css'
import React from 'react';
import TabelaDadosVacinas from './TabelaVacinas';

function VacinasCadastradas() {
    return (
       
        <div className='Container'>

            <h1 className='texto'>Vacinas Cadastradas</h1>

            <TabelaDadosVacinas />

        </div>
    )
}

export default VacinasCadastradas