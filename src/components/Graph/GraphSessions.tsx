import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartSessions = () => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const xValues: number[] = [];
    const yValues: string[] = [''];

    generateData("Math.sin(x)", 0, 10, 0.5);

    setChartData({
      labels: xValues,
      datasets: [
        {
          label: "", // Define o rótulo do conjunto de dados para uma string vazia
          fill: false,
          backgroundColor:'red',
          pointRadius: 0,
          borderColor: "#94e2a1",
          data: yValues
        },
        {
          label: '',
          fill: false,
          backgroundColor: 'blue',
          borderColor: ["#3cba9f"],
          showLine: true,
          data: yValues
        }
      ]
    });

    function generateData(value: any, i1: number, i2: number, step: number = 1) {
      for (let x = i1; x <= i2; x += step) {
        yValues.push(eval(value));
        xValues.push(x);
      }
    }
  }, []);

  if (!chartData) {
    return null;
  }
  const options = {
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false
      }
    },
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false
    },
    scales: {
      x: {
        stacked: true,
        display: false
      },
      y: {
        stacked: true,
        display: false
      }
    }
  };

  return (
    <div style={{width: '210px', maxWidth: '310px', height: '500px'}}>
      <Bar
        data={chartData}
        style={{height: "200px", width: "100%", marginTop:-0}}
        options={options}
        height='150px'
        width='280px'
      />
    </div>
  );
}

export default ChartSessions;