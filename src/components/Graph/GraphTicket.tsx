import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import '../../styles/graph.css';

interface GraphTicketProps {
  data: number[];
}

const GraphTicket: React.FC<GraphTicketProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const [chartInstance, setChartInstance] = useState<Chart<"doughnut", number[], string> | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (chartInstance) {
          chartInstance.destroy();
        }

        const newChartInstance = new Chart<"doughnut", number[], string>(ctx, {
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
      
        setChartInstance(newChartInstance);
      }
    }

    return () => {
      
    };
  }, [data, chartInstance]);

  return (
    <div className="graph-container-ticket">
      <h3 className="graph-title">Taxa de Solução de tickets pelo robô</h3>
      <div className="menu-icon">&#8942;</div>
      <canvas ref={chartRef} className="canvas-ticket"></canvas>
      <div className="legenda">
        <div>
          <span className="legenda-cor" style={{ backgroundColor: '#abcab9' }}></span>
          <span className="legenda-texto">Endereço Incorreto</span>
        </div>
        <div>
          <span className="legenda-cor" style={{ backgroundColor: 'rgba(40, 199, 111, 1)' }}></span>
          <span className="legenda-texto">Tempo de Entrega</span>
        </div>
      </div>
      <div className="legenda">
        <div>
          <span className="legenda-cor" style={{ backgroundColor: '#7dbe9a' }}></span>
          <span className="legenda-texto">Preço do Produto</span>
        </div>
        <div>
          <span className="legenda-cor" style={{ backgroundColor: '#95b6a4' }}></span>
          <span className="legenda-texto">Transporte</span>
        </div>
      </div>
    </div>
  );
};

export default GraphTicket;
