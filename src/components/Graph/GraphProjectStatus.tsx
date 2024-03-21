import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartProjectStatus = () => {
  const [chartData, setChartData] = useState(null);

  const data = {
    labels: [1,2,3,4,5,6,7,8,3,10],
    datasets: [
      {
        label: '',
        data: [0,6, 6, 2,2,4,4 ,1,1,8, 8, ],
        backgroundColor: [
          '#FF9F43',
        
        ],
        borderColor: [
          '#FF9F43',
          
        ],
        borderWidth: 5,
        borderRadius:10,
        fill: false,
        pointRadius:0
      },
    ],
  };
  
  const options = {
    // indexAxis: 'x',
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
        display: false, // Mostra os rótulos do eixo x
        grid: {
          display: true, // Esconde a grade do gráfico
        },
      },
      y: {
        display: true, // Mostra os rótulos do eixo y
        grid: {
          display: true, // Mostra a grade do gráfico
        },
      },
    },
  };
  

  return (
    <div style={{width: '350px', maxWidth: '350px', }}>
      <Line
        data={data}
        style={{height: "250px", width: "100%", marginTop:0, background:'#ffeedd'}}
        options={options}
        height='270px'
        width='480px'
      />
    </div>
  );
}

export default ChartProjectStatus;