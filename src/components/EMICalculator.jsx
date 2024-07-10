import React, { useState, useEffect } from "react";
import "./EMICalculator.css";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const EmiCalculator = () => {
  const [amount, setAmount] = useState(25000);
  const [interest, setInterest] = useState(12);
  const [duration, setDuration] = useState(6);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [monthlyEmi, setMonthlyEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const [chartData, setChartData] = useState({
    labels: ['Principal Amount', 'Total Interest Payable'],
    datasets: [
      {
        label: 'EMI Details',
        data: [amount, totalInterest],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    const calculateData = (amount, interest, duration) => {
      const monthlyInterestRate = interest / 12 / 100;
      const emi = (amount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, duration)) /
        (Math.pow(1 + monthlyInterestRate, duration) - 1);
      const totalAmt = emi * duration;
      const interestPayable = totalAmt - amount;
      setMonthlyEmi(emi.toFixed(0));
      setTotalAmount(totalAmt.toFixed(0));
      setTotalInterest(interestPayable.toFixed(0));

      setChartData({
        labels: ['Principal Amount', 'Total Interest Payable'],
        datasets: [
          {
            label: 'EMI Details',
            data: [amount, interestPayable],
            backgroundColor: ['#29c8ae', '#272939'],
            hoverBackgroundColor: ['#5CDBC1', '#1E1F2C'],
            borderColor: "#c4f8ef",
            borderWidth: 7,
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

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <button className="collapse-button" onClick={toggleCollapse}>
        {isCollapsed ? <h3>Calculate EMI &#709;</h3> : <h3>Hide EMI Calculator &#708;</h3>}
      </button>
      {!isCollapsed && (
        <div className="collapsible">
          <div className="flex-container">
            <div className="calculator">
              <div className="amount">
                <label className="input-label">Amount(RS)</label><br />
                <input
                  type="number"
                  value={amount}
                  onChange={handleInputChange}
                  className="input"
                />
                <input
                  type="range"
                  min="25000"
                  max="500000"
                  step="5000"
                  value={amount}
                  onChange={handleSliderChange}
                  className="slider"
                />
              </div>
              <div className="ROI">
                <label className="input-label">ROI (%)</label><br />
                <input
                  type="number"
                  value={interest}
                  onChange={handleInputChangeForInterest}
                  className="input"
                />
                <input
                  type="range"
                  min="12"
                  max="36"
                  step="0.25"
                  value={interest}
                  onChange={handleSliderChangeForInterest}
                  className="slider"
                />
              </div>
              <div className="duration">
                <label className="input-label">Tenure (months)</label><br />
                <input
                  type="number"
                  value={duration}
                  onChange={handleInputChangeForDuration}
                  className="input"
                />
                <input
                  type="range"
                  min="6"
                  max="36"
                  step="6"
                  value={duration}
                  onChange={handleSliderChangeForDuration}
                  className="slider"
                />
              </div>
            </div>
            <div className="separator"></div>
            <div className="calculator">
              <div className="chart-container">
                <Pie className="chart" data={chartData} />
              </div>
            </div>
          </div>
          <div className="flex-container">
            <div className="box">
              <div className="label">
                <label>Monthly EMIs</label>
              </div>
              <div className="data">
                <h2>&#8377;{monthlyEmi}</h2>
              </div>
            </div>
            <div className="box">
              <div className="label">
                <label>Total Interest Payable</label>
              </div>
              <div className="data">
                <h2> &#8377;{totalInterest}</h2>
              </div>
            </div>
            <div className="box">
              <div className="label">
                <label>Total Amount</label>
              </div>
              <div className="data">
                <h2>&#8377;{totalAmount}</h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmiCalculator;
