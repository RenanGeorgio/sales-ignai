import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import '../../styles/statistics.css'; 
import StatisticsComponent from '../../components/Statistics/Statistics';

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
          <h1 style={{marginLeft: '10%'}}>Atendimento</h1>
          <StatisticsComponent />
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
