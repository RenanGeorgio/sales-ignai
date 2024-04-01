import { useEffect, useRef } from "react";
import Chart, { ChartConfiguration } from "chart.js/auto";
import { ChevronUpIcon } from "@icons";
import "@styles/statistics-transaction.scss";

interface GraphStatisticsProps {
  data: number[];
}

const GraphStatistics: React.FC<GraphStatisticsProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let chartInstance: Chart<'doughnut'> | null = null;

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        const chartConfig: ChartConfiguration<'doughnut'> = {
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
        };

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
    <div className="graph-container-statistics">
      <h3 className="graph-title-statistics">Generated Leads</h3>
      <span>Monthly Report</span>
      <h4>4,350</h4>
      <div className="percentage-container">
        <ChevronUpIcon/>
        <p>15.8%</p>
      </div>
      <canvas ref={chartRef} className="canvas-statistics"></canvas>
    </div>
  );
}

export default GraphStatistics;