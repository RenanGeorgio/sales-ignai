import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const ChartSales = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const xValues = [];
    const yValues = [''];
    generateData("Math.sin(x)", 0, 10, 0.5);

    setChartData({
      labels: xValues,
      datasets: [{
        label: "", // Define o rótulo do conjunto de dados para uma string vazia
        fill: false,
        pointRadius: 0,
        borderColor: "#94e2a1",
        data: yValues,
        },{
          label:"Sin(x)",
          fill:false,
          backgroundColor:[],
          borderColor :["#3cba9f"],
          showLine: false
        
      }]
    });

    function generateData(value, i1, i2, step = 1) {
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
    responsive: true,
    layouts:{
      backgroundColor: {
        color: 'lightGreen',
      },
      
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
       
      },
    },
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    }
  };

  return (
    <div style={{width: '200px', maxWidth: '200px', height: '500px'}}>
      <Line
        data={chartData}
        style={{height: "200px", width: "100%", marginTop:-30}}
        options={options}
        height='200px'
        width='280px'
      />
    </div>
  );
}

export default ChartSales;
