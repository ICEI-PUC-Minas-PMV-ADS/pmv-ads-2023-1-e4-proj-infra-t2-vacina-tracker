import './VacinasCadastradas.css'
import React from 'react';
import TabelaDadosVacinas from './TabelaVacinas';

function VacinasCadastradas() {
    return (
       
        <div className='container-vacinas'>

            <h1 className='texto-1-vacinas'>Vacinas Cadastradas</h1>

            <TabelaDadosVacinas />

        </div>
    )
}

export default VacinasCadastradas