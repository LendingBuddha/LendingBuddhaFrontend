import React, { useState } from 'react';
import { FaGlobe, FaMoneyBillWave, FaWallet, FaHandshake } from 'react-icons/fa';
import './TravelLoan.css'; // Ensure the path is correct

const TravelLoan = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="personal-loan">
      <h1 className="heading">Travel Loan</h1>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'credit' ? 'active' : ''}`}
          onClick={() => handleTabClick('credit')}
        >
           <FaGlobe className="tab-icon" /> What is a Travel Loan?
        </button>
        <button
          className={`tab-button ${activeTab === 'manage' ? 'active' : ''}`}
          onClick={() => handleTabClick('manage')}
        >
        <FaMoneyBillWave className="tab-icon" /> How to Plan Your Travel Budget
        </button>

        <button
          className={`tab-button ${activeTab === 'strategies' ? 'active' : ''}`}
          onClick={() => handleTabClick('strategies')}
        >
          <FaWallet className="tab-icon" /> Managing Travel Expenses
        </button>
        <button
          className={`tab-button ${activeTab === 'help' ? 'active' : ''}`}
          onClick={() => handleTabClick('help')}
        >
          <FaHandshake className="tab-icon" /> How Lending Buddha Can Help
        </button>
       
      </div>
      <div className="tab-content">
        {activeTab === 'credit' && (
          <div className="content">
          <h2>What is a Travel Loan?</h2>
          <p>A travel loan is a type of personal loan specifically designed to finance travel-related expenses. Whether you're planning a vacation, a business trip, or a special journey, a travel loan can help cover costs such as flights, accommodation, tours, and other travel expenses.</p>
          <p>These loans usually come with flexible repayment options and competitive interest rates, making them an attractive option for travelers looking to spread their costs over time.</p>
        </div>
        )}
        {activeTab === 'manage' && (
            <div className="content">
            <h2>How to Plan Your Travel Budget</h2>
            <p>Effective travel budget planning involves several steps:</p>
            <ul>
              <li>Determine the total cost of your trip, including flights, accommodation, food, transportation, and activities.</li>
              <li>Break down your expenses into categories to get a clearer picture of where your money will go.</li>
              <li>Set a budget for each category and adjust based on your total available funds.</li>
              <li>Plan for unexpected expenses by setting aside a contingency fund.</li>
              <li>Consider using budgeting tools or apps to track and manage your travel expenses.</li>
            </ul>
          </div>
        )}
        {activeTab === 'strategies' && (
           <div className="content">
           <h2>Managing Travel Expenses</h2>
           <p>Managing your travel expenses effectively can help you stay within budget and avoid financial stress:</p>
           <ul>
             <li>Use travel reward programs and credit card points to offset some of your costs.</li>
             <li>Book flights and accommodation in advance to secure the best rates.</li>
             <li>Monitor your spending while traveling to avoid overspending.</li>
             <li>Consider traveling during off-peak seasons to take advantage of lower prices.</li>
             <li>Keep track of all receipts and expenses for accurate budgeting and potential reimbursement.</li>
           </ul>
         </div>
        )}
        {activeTab === 'help' && (
        <div className="content">
        <h2>How Lending Buddha Can Help</h2>
        <p>Lending Buddha offers a peer-to-peer lending platform that can assist you in obtaining a travel loan. Key benefits include:</p>
        <ul>
          <li>Access to a network of individual lenders who may offer competitive interest rates for travel loans.</li>
          <li>A quick and convenient online application process with minimal documentation.</li>
          <li>Flexible loan amounts tailored to cover various travel expenses.</li>
          <li>Personalized loan offers based on your financial profile and travel needs.</li>
        </ul>
        <p>By using Lending Buddha, you can secure the necessary funds to make your travel plans a reality while managing your finances effectively.</p>
      </div>

        )}
       
        
      </div>
    </div>
  );
};

export default TravelLoan;
