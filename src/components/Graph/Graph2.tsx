import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface Graph2Props {
  month: string;
}

const Graph2: React.FC<Graph2Props> = ({ month }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan', '9 Jan', '10 Jan'],
            datasets: [{
              label: 'Subscribers',
              data: [120, 130, 115, 150, 110, 135, 125, 140, 128, 145], 
              backgroundColor: 'rgba(255, 205, 86, 0.5)',
              borderColor: 'rgba(255, 205, 86, 1)',
              borderWidth: 1,
              barPercentage: 0.5, 
            }]
          },
          options: {
            indexAxis: 'x',
            scales: {
              y: {
                beginAtZero: true,
              },
              x: {
                grid: {
                  display: false,
                },
              },
            },
          },
        });
      }
    }
  }, []);

  return (
    <div className="graph-container">
      <h3>Visitas Diárias</h3>
      <canvas ref={chartRef} width={400} height={115}></canvas>
    </div>
  );
};

export default Graph2;
