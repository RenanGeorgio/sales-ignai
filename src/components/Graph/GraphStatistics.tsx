import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../../styles/statistics-transaction.css';
import seta from '../../components/Image/chevron-up.svg';

interface GraphStatisticsProps {
  data: number[];
}

const GraphStatistics: React.FC<GraphStatisticsProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        const chart = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Tempo de Entrega', 'Preço do Produto', 'Transporte', 'Endereço Incorreto'],
            datasets: [{
              data,
              backgroundColor: [
                'rgba(40, 199, 111, 1)',
                '#7dbe9a',
                '#95b6a4',
                '#abcab9',
              ],
              hoverOffset: 4,
            }],
          },
          options: {
            cutout: '70%', 
            plugins: {
              legend: {
                display: false,
              },
            },
          },
        });
      
      }
    }
  }, [data]);

  return (
    <div className="graph-container-statistics">
      <h3 className="graph-title-statistics">Generated Leads</h3>
      <span>Monthly Report</span>
      <h4>4,350</h4>
      <div className="percentage-container">
        <img src={seta} alt="Up" />
        <p>15.8%</p>
      </div>
      <canvas ref={chartRef} className="canvas-statistics"></canvas>
    </div>
  );
};

export default GraphStatistics;