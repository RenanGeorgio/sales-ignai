import React, { useEffect, useRef } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';
import '../../styles/graph.css';

interface GraphChatProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
      barPercentage?: number;
      fill?: boolean;
    }[];
  };
}

const GraphChat: React.FC<GraphChatProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  let chartInstance: Chart<'bar', number[], string> | null = null;

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        const chartConfig: ChartConfiguration<'bar', number[], string> = {
          type: 'bar',
          data,
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
        };

        if (chartInstance) {
          chartInstance.destroy();
        }

        chartInstance = new Chart(ctx, chartConfig);
      }
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data]);

  return (
    <div className="graph-container">
      <canvas ref={chartRef} className="canvas-chart"></canvas>
    </div>
  );
};

export default GraphChat;
