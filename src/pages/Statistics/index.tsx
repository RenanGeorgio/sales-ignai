import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import '../../styles/statistics.css'; 
import StatisticsComponent from '../../components/Statistics/Statistics';
import GraphSource from '../../components/Graph/GraphSource';
import GraphRadar from '../../components/Graph/GraphRadar';
import StatisticsStatus from '../../components/Statistics/StatisticsStatus';

const Statistics: React.FC = () => {
  const [activePage, setActivePage] = useState('Estatísticas'); 

  const handleButtonClick = (pageName: string) => {
    setActivePage(pageName);
  };

  return (
    <div>
      <Navbar />
      <div className="buttonContainer">
        <button
          className={activePage === 'Ano' ? 'blueButton' : 'grayButton'}
          onClick={() => handleButtonClick('Ano')}
        >
          Ano
        </button>
        <button
          className={activePage === 'Mês' ? 'blueButton' : 'grayButton'}
          onClick={() => handleButtonClick('Mês')}
        >
          Mês
        </button>
        <button
          className={activePage === 'Semana' ? 'blueButton' : 'grayButton'}
          onClick={() => handleButtonClick('Semana')}
        >
          Semana
        </button>
        <button
          className={activePage === 'Dia' ? 'blueButton' : 'grayButton'}
          onClick={() => handleButtonClick('Dia')}
        >
          Dia
        </button>
      </div>
      {activePage === 'Ano' && (
        <>
          <StatisticsComponent />
          <div className='container-graph-source'>
            <GraphSource />
          </div>
          <div className='container-graph-radar'>
            <h3>Comparação</h3>
            <span>Entre fontes de Leads</span>
            <div className='graph-radar'>
              <GraphRadar />
            </div>
          </div>
          <StatisticsStatus />
        </>
      )}
      {activePage === 'Mês' && (
        <>
          <h1 style={{marginLeft: '10%'}}>Histórico</h1>
        </>
      )}
      {activePage === 'Semana' && (
        <>
          <h1 style={{marginLeft: '10%'}}>Pedidos</h1>
        </>
      )}
        {activePage === 'Dia' && (
        <>
          <h1 style={{marginLeft: '10%'}}>Estoque</h1>
        </>
      )}
    </div>
  );
};

export default Statistics;
