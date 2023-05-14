import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import './MeusMembros.css'

function TabelaDados() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    // Simulando a obtenção dos dados de uma API
    const obterDados = async () => {
      // Delay para simular a chamada assíncrona
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Dados simulados
      const dadosSimulados = [
        { id: 1, nome: 'João', idade: 25, vacinas: 'Influenza, Hepatite B' },
        { id: 2, nome: 'Maria', idade: 30, vacinas: 'COVID-19, Tétano' },
        { id: 3, nome: 'Pedro', idade: 40, vacinas: 'Hepatite A, Sarampo' },
        { id: 3, nome: 'Pedro', idade: 40, vacinas: 'Hepatite A, Sarampo' },
        { id: 3, nome: 'Pedro', idade: 40, vacinas: 'Hepatite A, Sarampo' },
        { id: 3, nome: 'Pedro', idade: 40, vacinas: 'Hepatite A, Sarampo' },
        { id: 3, nome: 'Pedro', idade: 40, vacinas: 'Hepatite A, Sarampo' },
        { id: 3, nome: 'Pedro', idade: 40, vacinas: 'Hepatite A, Sarampo' },
        { id: 3, nome: 'Pedro', idade: 40, vacinas: 'Hepatite A, Sarampo' },
      ];

      setDados(dadosSimulados);
    };

    obterDados();
  }, []);

  const colunas = React.useMemo(
    () => [
      {
        Header: 'Nome',
        accessor: 'nome',
      },
      {
        Header: 'Idade',
        accessor: 'idade',
      },
      {
        Header: 'Vacinas',
        accessor: 'vacinas',
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

export default TabelaDados;

