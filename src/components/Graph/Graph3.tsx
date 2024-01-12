import React from 'react';
import { Bar } from 'react-chartjs-2';

interface GraphProps {
  month: string;
}

const Graph3: React.FC<GraphProps> = ({ month }) => {
  const labels = ['6', '5', '4', '3', '2', '1'];
  const data = {
    labels: labels,
    datasets: [
      {
        axis: 'y',
        label: '',
        data: [35, 30, 20, 15, 15, 10],
        fill: false,
        backgroundColor: [
          'rgba(115, 103, 240, 1)',
          'rgba(0, 207, 232, 1)',
          'rgba(40, 199, 111, 1)',
          'rgba(168, 170, 174, 1)',
          'rgba(234, 84, 85, 1)',
          'rgba(255, 159, 67, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const legendItems = [
    ['Home', 'Form 1'],
    ['Form 2', 'Cadastro'],
    ['Solução', 'Blog'],
  ];

  return (
    <div className="graph-container-3">
      <h3>Maior volume de clientes</h3>
      <div className="graph">
        <Bar data={data} options={{ maintainAspectRatio: false, indexAxis: 'y', plugins: { legend: { display: false } } }} />
      </div>
      <div className="legend">
        {legendItems.map((group, groupIndex) => (
          <div key={groupIndex} className="legend-item-group">
            {group.map((label, index) => (
              <div key={index} className="legend-item">
                <div className="color-dot" style={{ backgroundColor: data.datasets[0].backgroundColor[index + groupIndex * 2] }}></div>
                <span className="legend-label">{label}</span>
                <div className="number-container">
                  <span className="number">{groupIndex === 0 ? '40%' : '30%'}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Graph3;
