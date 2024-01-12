import React from 'react';
import '../../styles/dashboard.css'; 
import arrow from '../../components/Image/arrow-up-circle.svg';
interface Graph1Props {
  month: string;
}

const Graph1: React.FC<Graph1Props> = ({ month }) => {
  const totalPercentage = 100;
  const userData = [
    { percentage: 20, color: 'rgba(248, 247, 250, 1)' },
    { percentage: 10, color: 'rgba(115, 103, 240, 1)' },
    { percentage: 20, color: 'rgba(0, 207, 232, 1)' },
    { percentage: 50, color: 'rgba(134, 146, 208, 1)' },
  ];

  let currentLeft = 0;

  return (
    <div className="graph-container">
      <h3>Tempo de Usuário por Página</h3>
      <div className="graph1-container">
        {userData.map((data, index) => {
          const width = `${(data.percentage / totalPercentage) * 100}%`;
          const styleData = {
            width,
            backgroundColor: data.color,
            left: `${currentLeft}%`,
          };
          currentLeft += data.percentage;

          return (
            <div key={index} style={styleData} className="graph1-item">
              {`${data.percentage}%`}
            </div>
          );
        })}
      </div>
      <div className="data-display">
        <div className="data-row">
          <img src={arrow} alt="Arrow" />
          <span>Home</span>
          <span>2h 30min</span>
          <span>20%</span>
        </div>
        <hr />
        <div className="data-row">
          <img src={arrow} alt="Arrow" />
          <span>Formulário 1</span>
          <span>1h 45min</span>
          <span>10%</span>
        </div>
        <hr />
        <div className="data-row">
          <img src={arrow} alt="Arrow" />
          <span>Cadastro</span>
          <span>3h 10min</span>
          <span>20%</span>
        </div>
        <hr />
        <div className="data-row">
          <img src={arrow} alt="Arrow" />
          <span>Blog</span>
          <span>4h 15min</span>
          <span>50%</span>
        </div>
      </div>
    </div>
  );
};

export default Graph1;
