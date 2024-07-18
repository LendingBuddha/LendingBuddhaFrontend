import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const OverviewChart = ({ loanIssuanceData, paymentCollectionData }) => {
  if (!loanIssuanceData || !paymentCollectionData) {
    return <div>Loading chart...</div>;
  }

  const data = {
    labels: Object.keys(loanIssuanceData),
    datasets: [
      {
        label: 'Loan Issuance Trends',
        data: Object.values(loanIssuanceData),
        backgroundColor: 'rgba(255, 99, 132, 0.6)', 
        borderColor: 'rgba(255, 99, 132, 1)', 
        borderWidth: 1,
      },
      {
        label: 'Payment Collection Trends',
        data: Object.values(paymentCollectionData),
        backgroundColor: 'rgba(54, 162, 235, 0.6)', 
        borderColor: 'rgba(54, 162, 235, 1)', 
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full lg:w-[47%] mb-5 p-3 max-h-80 bg-gray-800 border-white rounded-lg">
      <Bar data={data} options={options} />
    </div>
  );
};

export default OverviewChart;
