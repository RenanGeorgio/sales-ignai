import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface GraphRadarProps {}

const GraphRadar: React.FC<GraphRadarProps> = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'radar',
          data: {
            labels: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
            ],
            datasets: [{
              label: 'Formulário',
              data: [65, 59, 90, 81, 56, 55],
              fill: true,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgb(255, 99, 132)',
              pointBackgroundColor: 'rgb(255, 99, 132)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(255, 99, 132)'
            }, {
              label: 'WhatsApp',
              data: [28, 48, 40, 19, 96, 27],
              fill: true,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgb(54, 162, 235)',
              pointBackgroundColor: 'rgb(54, 162, 235)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(54, 162, 235)'
            }]
          },
          options: {
            elements: {
              line: {
                borderWidth: 3,
              },
            },
          },
        });
      }
    }
  }, []);

  return <canvas ref={chartRef} />;
};

export default GraphRadar;
