import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import './VacinasCadastradas.css'

function TabelaDadosVacinas() {
    const [dados, setDados] = useState([]);

    useEffect(() => {
        // Simulando a obtenção dos dados de uma API
        const obterDados = async () => {
            // Delay para simular a chamada assíncrona
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Dados simulados
            const dadosSimulados = [
                { id: 1, nomemembro: 'João', nomevacina: 'COVID-19', dataaplicacao: '29 / 10 / 2019', dose: '1', proximaaplicacao: '29 / 10 / 2022' },
                { id: 2, nomemembro: 'Pedro', nomevacina: 'Tétano', dataaplicacao: '29 / 10 / 2019', dose: '3', proximaaplicacao: '29 / 10 / 2022' },
                { id: 3, nomemembro: 'João', nomevacina: 'Influenza', dataaplicacao: '29 / 10 / 2019', dose: '1', proximaaplicacao: '29 / 10 / 2022' },
                { id: 4, nomemembro: 'João', nomevacina: 'Hepatite', dataaplicacao: '29 / 10 / 2019', dose: '2', proximaaplicacao: '29 / 10 / 2022' },
                { id: 5, nomemembro: 'João', nomevacina: "Meningite", dataaplicacao: '29 / 10 / 2019', dose: '1', proximaaplicacao: '29 / 10 / 2022' },
                { id: 6, nomemembro: 'João', nomevacina: 'HPV', dataaplicacao: '29 / 10 / 2019', dose: '1', proximaaplicacao: '29 / 10 / 2022' },
                { id: 7, nomemembro: 'João', nomevacina: 'HPV', dataaplicacao: '29 / 10 / 2019', dose: '3', proximaaplicacao: '29 / 10 / 2022' },
                { id: 8, nomemembro: 'João', nomevacina: 'HPV', dataaplicacao: '29 / 10 / 2019', dose: '2', proximaaplicacao: '29 / 10 / 2022' },
                { id: 9, nomemembro: 'João', nomevacina: 'HPV', dataaplicacao: '29 / 10 / 2019', dose: '3', proximaaplicacao: '29 / 10 / 2022' },
                { id: 10, nomemembro: 'João', nomevacina: 'HPV', dataaplicacao: '29 / 10 / 2019', dose: '1', proximaaplicacao: '29 / 10 / 2022' },

            ];

            setDados(dadosSimulados);
        };

        obterDados();
    }, []);

    const colunas = React.useMemo(
        () => [
            {
                Header: 'Nome do Membro',
                accessor: 'nomemembro',
            },
            {
                Header: 'Nome da Vacina',
                accessor: 'nomevacina',
            },
            {
                Header: 'Data da Aplicação',
                accessor: 'dataaplicacao',
            },
            {
                Header: 'Dose',
                accessor: 'dose',
            },
            {
                Header: 'Data da Próxima Aplicação',
                accessor: 'proximaaplicacao',
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns: colunas, data: dados });

    return (
        <table {...getTableProps()} className="tab">
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(coluna => (
                            <th
                                {...coluna.getHeaderProps()}
                                style={{
                                    border: '1px solid #540075',
                                    background: '#540075',
                                    fontWeight: 'bold',
                                    padding: '8px',
                                }}
                            >
                                {coluna.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td
                                        {...cell.getCellProps()}
                                        style={{
                                            border: '1px solid #9113C2',
                                            padding: '8px',
                                        }}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default TabelaDadosVacinas;