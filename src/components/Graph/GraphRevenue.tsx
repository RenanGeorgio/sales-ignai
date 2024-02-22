import React, { useEffect, useState } from 'react';
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

const ChartRevenue = () => {
  const [chartData, setChartData] = useState(null);

  const data = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [
      {
        label: '',
        data: [4, 6, 8, 10, 12, 9, 6],
        backgroundColor: [
          '#dcf6e8',
          '#dcf6e8',
          '#dcf6e8',
          '#dcf6e8',
          '#28c76f',
          '#dcf6e8',
          '#dcf6e8',
        ],
        borderColor: [
          '#28c76f',
          '#28c76f',
          '#28c76f',
          '#28c76f',
          '#28c76f',
          '#28c76f',
          '#28c76f'
        ],
        borderWidth: 1,
        borderRadius:10,
        fill: false,
      },
    ],
  };
  
  const options = {
    indexAxis: 'x',
    elements: {
      bar: {
        // borderWidth: 1,
        width:5
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false
      },
      y: {
        display: false, // Esconde os rótulos do eixo y
        grid: {
          display: false, // Esconde a grade do gráfico
        },
      },
    },
  };
  

  return (
    <div style={{width: '210px', maxWidth: '310px', height: '500px'}}>
      <Bar
        data={data}
        style={{height: "200px", width: "100%", marginTop:20}}
        options={options}
        height='250px'
        width='280px'
        
      />
    </div>
  );
}

export default ChartRevenue;
