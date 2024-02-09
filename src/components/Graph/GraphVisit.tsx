import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface GraphVisitProps {
  month: string;
}

const GraphVisit: React.FC<GraphVisitProps> = ({ month }) => {
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
              label: 'Diário',
              data: [38, 45, 32, 38, 50, 45, 37, 42, 45, 36],  
              backgroundColor: 'rgba(255, 159, 67, 1)',
              borderColor: 'rgba(255, 205, 86, 1)',
              borderWidth: 1,
              barPercentage: 0.5,
            }, {
              type: 'line',  
              label: 'Inscritos',
              data: [24, 28, 26, 29, 30, 40, 35, 31, 24, 28],  
              fill: false,
              borderColor: 'rgb(54, 162, 235)',
            }]
          },
          options: {
            indexAxis: 'x',
            scales: {
              y: {
                beginAtZero: true,
                max: 50,  
                ticks: {
                  callback: (value: string | number) => `${value}%` as string,  
                },
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
      <h5>Total número de visitas 23.8k</h5>
      <canvas ref={chartRef} width={400} height={115}></canvas>
    </div>
  );
};

export default GraphVisit;
