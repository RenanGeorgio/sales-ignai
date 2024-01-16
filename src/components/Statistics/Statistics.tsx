import React from 'react';
import '../../styles/statistics.css';
import clock from '../../components/Image/clock.svg';
import users from '../../components/Image/users-red.svg';
import chart from '../../components/Image/chart-pie-2.svg';
import money from '../../components/Image/currency-dollar.svg';

interface StatisticsComponentProps {
  // Adicione props aqui, se necessário
}

const StatisticsComponent: React.FC<StatisticsComponentProps> = () => {
  return (
    <div className="statistics-container">
      <div className="statistics-item">
        <div className="title">Statistics</div>
        <div className="content-with-labels">
          <img src={clock} alt="Relógio" />
          <div className="number-label-container">
            <div className="number-statistics">230k</div>
            <div className="label">Sales</div>
          </div>
        </div>
      </div>

      <div className="statistics-item">
        <div className="content-with-labels">
          <img src={users} alt="Usuários" />
          <div className="number-label-container">
            <div className="number-statistics">8.549k</div>
            <div className="label">Customers</div>
          </div>
        </div>
      </div>

      <div className="statistics-item">
        <div className="content-with-labels">
          <img src={chart} alt="Carrinho" />
          <div className="number-label-container">
            <div className="number-statistics">1.423k</div>
            <div className="label">Products</div>
          </div>
        </div>
      </div>

      <div className="statistics-item">
        <div className="content-with-labels">
          <img src={money} alt="Dinheiro" />
          <div className="number-label-container">
            <div className="number-statistics">$9745</div>
            <div className="label">Revenue</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsComponent;
