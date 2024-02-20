import React from 'react';
import '../../styles/statistics.css';
import { ClockIcon,UsersIcon,ChartIcon, Chart2Icon, ChartPieIcon,MessageDots,
   CurrencyDollar ,BriefCaseIcon} from '../Image/icons';
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
              <ClockIcon/>
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
          <BriefCaseIcon />
          <div className="number-label-container">
            <div className="number-statistics">97.8k</div>
            <div className="label">Orders</div>
          </div>
        </div>

        <div className="additional-statistics">
          <MessageDots />
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
            <Chart2Icon />
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
            <ChartIcon />
            <h4 className="custom-number-statistics-left-2">45.1k</h4>
            <div className="custom-number-porcentage">
              <h4 className="custom-porcentage-text-2">+12.6%</h4>
            </div>
          </div>
        </div>

        <div className="additional-item">
          <CurrencyDollar/>
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
          <ChartPieIcon/>
          <div className="number-label-container-total">
            <h3 className="number-statistics">Total Sales</h3>
            <h4 className="label">Last week</h4>
            <h4 className="number-statistics">24.67k</h4>
            <div className="number-porcentage">
              <h4>+25.2%</h4>
            </div>
          </div>
        </div>
        
        <div className="additional-item revenue-growth-container">
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