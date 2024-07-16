import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const EmiCalculator = () => {
  const [amount, setAmount] = useState(25000);
  const [interest, setInterest] = useState(12);
  const [duration, setDuration] = useState(6);

  const [monthlyEmi, setMonthlyEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const [chartData, setChartData] = useState({
    labels: ["Principal Amount", "Total Interest Payable"],
    datasets: [
      {
        label: "EMI Details",
        data: [amount, totalInterest],
        backgroundColor: ["#4caf50", "#ff9800"], // green and orange colors
        hoverBackgroundColor: ["#4caf50", "#ff9800"],
      },
    ],
  });

  useEffect(() => {
    const calculateData = (amount, interest, duration) => {
      const monthlyInterestRate = interest / 12 / 100;
      const emi =
        (amount *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, duration)) /
        (Math.pow(1 + monthlyInterestRate, duration) - 1);
      const totalAmt = emi * duration;
      const interestPayable = totalAmt - amount;
      setMonthlyEmi(emi.toFixed(0));
      setTotalAmount(totalAmt.toFixed(0));
      setTotalInterest(interestPayable.toFixed(0));

      setChartData({
        labels: ["Principal Amount", "Total Interest Payable"],
        datasets: [
          {
            label: "EMI Details",
            data: [amount, interestPayable],
            backgroundColor: ["#4caf50", "#ff9800"], // green and orange colors
            hoverBackgroundColor: ["#4caf50", "#ff9800"],
          },
        ],
      });
    };

    calculateData(amount, interest, duration);
  }, [amount, interest, duration]);

  const handleSliderChange = (event) => {
    const amountValue = event.target.value;
    setAmount(Number(amountValue));
  };

  const handleInputChange = (event) => {
    const amountValue = event.target.value;
    setAmount(Number(amountValue));
  };

  const handleSliderChangeForInterest = (event) => {
    const interestValue = event.target.value;
    setInterest(Number(interestValue));
  };

  const handleInputChangeForInterest = (event) => {
    const interestValue = event.target.value;
    setInterest(Number(interestValue));
  };

  const handleSliderChangeForDuration = (event) => {
    const durationValue = event.target.value;
    setDuration(Number(durationValue));
  };

  const handleInputChangeForDuration = (event) => {
    const durationValue = event.target.value;
    setDuration(Number(durationValue));
  };

  return (
    <div className="bg-white-100 min-h-full py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="calculator bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4">Loan Calculator</h2>
            <div className="mb-4">
              <label className="input-label block mb-1">Amount (RS)</label>
              <input
                type="number"
                value={amount}
                onChange={handleInputChange}
                className="input w-full bg-gray-200 text-gray-800 rounded py-2 px-4"
              />
              <input
                type="range"
                min="25000"
                max="500000"
                step="5000"
                value={amount}
                onChange={handleSliderChange}
                className="slider w-full"
              />
            </div>
            <div className="mb-4">
              <label className="input-label block mb-1">ROI (%)</label>
              <input
                type="number"
                value={interest}
                onChange={handleInputChangeForInterest}
                className="input w-full bg-gray-200 text-gray-800 rounded py-2 px-4"
              />
              <input
                type="range"
                min="12"
                max="36"
                step="0.25"
                value={interest}
                onChange={handleSliderChangeForInterest}
                className="slider w-full"
              />
            </div>
            <div className="mb-4">
              <label className="input-label block mb-1">Tenure (months)</label>
              <input
                type="number"
                value={duration}
                onChange={handleInputChangeForDuration}
                className="input w-full bg-gray-200 text-gray-800 rounded py-2 px-4"
              />
              <input
                type="range"
                min="6"
                max="36"
                step="6"
                value={duration}
                onChange={handleSliderChangeForDuration}
                className="slider w-full"
              />
            </div>
          </div>
          <div className="chart-container bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4">EMI Summary</h2>
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <div>
                  <label className="font-semibold">Monthly EMIs</label>
                  <div className="text-2xl font-bold mt-1">&#8377;{monthlyEmi}</div>
                </div>
                <div>
                  <label className="font-semibold">Total Interest Payable</label>
                  <div className="text-2xl font-bold mt-1">&#8377;{totalInterest}</div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <label className="font-semibold">Total Amount</label>
                  <div className="text-2xl font-bold mt-1">&#8377;{totalAmount}</div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Pie className="chart" data={chartData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
