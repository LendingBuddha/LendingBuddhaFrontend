import React, { useState } from 'react';
import { FaCreditCard, FaCalculator, FaChartLine, FaRegHandPointer } from 'react-icons/fa'; 
import './CreditCardConsolidation.css'; // Ensure the path is correct

const CreditCardConsolidation = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="personal-loan">
      <h1 className="heading">CreditCardConsolidation Loan</h1>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'credit' ? 'active' : ''}`}
          onClick={() => handleTabClick('credit')}
        >
          <FaCreditCard className="tab-icon" /> What is Credit Card Debt?
        </button>
        <button
          className={`tab-button ${activeTab === 'balance' ? 'active' : ''}`}
          onClick={() => handleTabClick('balance')}
        >
        <FaCalculator className="tab-icon" /> How to Deal with a Huge Credit Card Balance
        </button>

        <button
          className={`tab-button ${activeTab === 'chart' ? 'active' : ''}`}
          onClick={() => handleTabClick('chart')}
        >
          <FaChartLine className="tab-icon" /> Strategies for Repayment
        </button>
        <button
          className={`tab-button ${activeTab === 'consolidate' ? 'active' : ''}`}
          onClick={() => handleTabClick('consolidate')}
        >
           <FaRegHandPointer className="tab-icon" /> Consolidate Your Debt with Lending Buddha
        </button>
       
      </div>
      <div className="tab-content">
        {activeTab === 'credit' && (
           <div className="content">
           <h2>What is Credit Card Debt?</h2>
           <p>Credit card debt can be annoying, frustrating, and even depressing. The most important feature of any credit card is the finance charges or interest rate charged on your outstanding balance. In India, these charges typically range from 3% to 4% per month, equating to an annualized percentage rate of 36% to 48%, with an effective rate of interest of approximately 61% to 80%.</p>
           <p>These rates are significantly higher than business and unsecured personal loan rates in India, making credit card debt a costly financial burden.</p>
         </div>
        )}
        {activeTab === 'balance' && (
           <div className="content">
           <h2>How to Deal with a Huge Credit Card Balance</h2>
           <p>Here’s how you can manage and deal with a large credit card balance:</p>
           <ul>
             <li>List all outstanding debts and their interest rates. Understanding the effective interest rate you’re paying on various loans is crucial.</li>
             <li>Track your statutory payments (e.g., utility bills, insurance premiums) and variable expenses (necessities, comforts, and luxuries). While you don't need to cut back on essentials, limit spending on non-essential comforts and luxuries until your credit card debt is managed.</li>
             <li>Stop using credit cards until you clear your debt. Credit cards should be used to manage funds only if you can pay off the balance in full by the due date. Failing to do so leads to a debt trap.</li>
           </ul>
         </div>
        )}
        {activeTab === 'chart' && (
          <div className="content">
          <h2>Strategies for Repayment</h2>
          <p>Consider these strategies for effective credit card debt repayment:</p>
          <ul>
            <li>Pay off the highest interest rate debt first to reduce the overall cost.</li>
            <li>Repay smaller outstanding balances early to experience a sense of achievement.</li>
            <li>Consolidate all your debts by taking a mortgage loan (e.g., loan against property or security) or an unsecured personal loan. Consolidation can offer lower interest rates compared to credit card rates.</li>
          </ul>
        </div>
        )}
        {activeTab === 'consolidate' && (
         <div className="content">
         <h2>Consolidate Your Debt with Lending Buddha</h2>
         <p>Lending Buddha offers a peer-to-peer lending platform where you can consolidate your credit card debt into a single loan. Key benefits include:</p>
         <ul>
           <li>Potentially lower interest rates, starting from as low as 12%.</li>
           <li>Fast, hassle-free borrowing with no physical documentation required.</li>
           <li>Ability to interact with lenders directly through the platform, providing a transparent borrowing process.</li>
           <li>Loans available from ₹25,000 to ₹5,00,000 without collateral and hidden charges.</li>
         </ul>
         <p>By consolidating your debt with Lending Buddha, you can simplify your financial management and often save on interest payments compared to credit card debt.</p>
       </div>

        )}
       
        
      </div>
    </div>
  );
};

export default CreditCardConsolidation;
