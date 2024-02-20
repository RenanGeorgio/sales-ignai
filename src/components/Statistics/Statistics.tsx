import React from 'react';
import '../../styles/statistics.css';
import clock from '../../components/Image/clock.svg';
import users from '../../components/Image/users-red.svg';
import chart from '../../components/Image/chart-pie-2.svg';
import money from '../../components/Image/currency-dollar.svg';
import brief from '../../components/Image/briefcase.svg';
import message from '../../components/Image/message-dots.svg';
import chart1 from '../../components/Image/Chart.svg';
import chart2 from '../../components/Image/Chart2.svg';

interface StatisticsComponentProps {
  
}

const StatisticsComponent: React.FC<StatisticsComponentProps> = () => {
  return (
    <div className="dashboard-container">
      <div className="statistics-container">
        <div className="title-subtitle-container">
          <div className="title-statistics">Statistics</div>
          <h5 className="subtitle-statistics">Updated 1 month ago</h5>
        </div>

        <div className="statistics-items-container">
          <div className="statistics-item">
            <div className="content-with-labels">
              <img src={clock} alt="Relógio" className="img-statistics" />
              <div className="number-label-container">
                <div className="number-statistics">230k</div>
                <div className="label">Sales</div>
              </div>
            </div>
          </div>

          <div className="statistics-item">
            <div className="content-with-labels">
              <img src={users} alt="Usuários" className="img-statistics" />
              <div className="number-label-container">
                <div className="number-statistics">8.549k</div>
                <div className="label">Customers</div>
              </div>
            </div>
          </div>

          <div className="statistics-item">
            <div className="content-with-labels">
              <img src={chart} alt="Carrinho" className="img-statistics" />
              <div className="number-label-container">
                <div className="number-statistics">1.423k</div>
                <div className="label">Products</div>
              </div>
            </div>
          </div>

          <div className="statistics-item">
            <div className="content-with-labels">
              <img src={money} alt="Dinheiro" className="img-statistics" />
              <div className="number-label-container">
                <div className="number-statistics">$9745</div>
                <div className="label">Revenue</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="additional-statistics-container">
        <div className="additional-statistics">
          <img src={brief} alt="Descrição" />
          <div className="number-label-container">
            <div className="number-statistics">97.8k</div>
            <div className="label">Orders</div>
          </div>
        </div>

        <div className="additional-statistics">
          <img src={message} alt="Descrição" />
          <div className="number-label-container">
            <div className="number-statistics">3.4k</div>
            <div className="label">Review</div>
          </div>
        </div>
      </div>

      <div className="additional-items-container">
        <div className="custom-additional-item">
          <div className="custom-number-label-container">
            <h3 className="custom-number-statistics">Sales</h3>
            <h4 className="custom-label">Last Year</h4>
            <img src={chart2} alt="Gráfico" className="custom-chart-image" />
            <h4 className="custom-number-statistics-left">175k</h4>
            <div className="custom-number-porcentage">
              <h4 className="custom-porcentage-text">-16.2%</h4>
            </div>
          </div>
        </div>

        <div className="custom-additional-item">
          <div className="custom-number-label-container">
            <h3 className="custom-number-statistics">Sessions</h3>
            <h4 className="custom-label">This Month</h4>
            <img src={chart1} alt="Gráfico" className="custom-chart-image-2" />
            <h4 className="custom-number-statistics-left-2">45.1k</h4>
            <div className="custom-number-porcentage">
              <h4 className="custom-porcentage-text-2">+12.6%</h4>
            </div>
          </div>
        </div>

        <div className="additional-item">
          <img src={money} alt="Dinheiro" />
          <div className="number-label-container-total">
            <h3 className="number-statistics">Total Profit</h3>
            <h4 className="label">Last week</h4>
            <h4 className="number-statistics">1.28k</h4>
            <div className="number-porcentage">
              <h4>-12.2%</h4>
            </div>
          </div>
        </div>

        <div className="additional-item">
          <img src={chart} alt="Descrição" />
          <div className="number-label-container-total">
            <h3 className="number-statistics">Total Sales</h3>
            <h4 className="label">Last week</h4>
            <h4 className="number-statistics">24.67k</h4>
            <div className="number-porcentage">
              <h4>+25.2%</h4>
            </div>
          </div>
        </div>
  
        <div className="container-revenue">
          <div className="number-label">
            <h3 className="number-label-statistics">Revenue Growth</h3>
            <h4 className="label">Weekly Report</h4>
            <h2 className="number-label-statistics larger-number">$4,673</h2>
            <div className="green-percent">
              <h4>+15.2%</h4>
            </div>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default StatisticsComponent;