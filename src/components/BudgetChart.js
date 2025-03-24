import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const BudgetChart = ({ transactions }) => {
  const chartData = {
    labels: transactions.map((t) => t.date.slice(0, 10)),
    datasets: [
      {
        label: 'Amount',
        data: transactions.map((t) => t.amount),
        borderColor: '#7c3aed',
        borderWidth: 2,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, 'rgba(124, 58, 237, 0.4)');
          gradient.addColorStop(1, 'rgba(124, 58, 237, 0)');
          return gradient;
        },
        fill: true,
        tension: 0.3,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { 
        grid: { display: false },
        ticks: { 
          color: '#94a3b8',
          maxRotation: 0,
          autoSkipPadding: 20
        }
      },
      y: { 
        beginAtZero: true,
        grace: '10%',  // Added space for lowest value
        grid: { color: 'rgba(255,255,255,0.1)' },
        ticks: { 
          color: '#94a3b8',
          callback: (value) => `$${value}`,
          padding: 10  // Added label padding
        }
      },
    },
    layout: {
      padding: {
        bottom: 15  // Added bottom padding
      }
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="h-[420px] pb-4">  {/* Increased container height */}
      <h2 className="text-2xl font-semibold mb-4">Spending Trend</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default BudgetChart;