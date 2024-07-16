import React from 'react';
import { Box } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const labels = Array.from({ length: 30 }, (_, i) => `2023-07-${i + 1}`);

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Gastos',
      data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 1000)),
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      fill: false,
      tension: 0.1,
      pointRadius: 5,
      pointHoverRadius: 8,
    },
    {
      label: 'Tesoro',
      data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 2000)),
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      fill: false,
      tension: 0.1,
      pointRadius: 5,
      pointHoverRadius: 8,
    }
  ]
};

const options = {
  responsive: true,
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: 'Fecha'
      }
    },
    y: {
      display: true,
      title: {
        display: true,
        text: 'Valor'
      }
    }
  }
};

const ExpenseChart = () => {
  return (
    <Box>
      <Line data={data} options={options} />
    </Box>
  );
};

export default ExpenseChart;
