import React, { useState } from 'react';
import { FaHeart, FaMoneyBillWave, FaCalendarAlt, FaHandshake } from 'react-icons/fa';
import './WeddingLoan.css'; // Ensure the path is correct

const WeddingLoan = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="personal-loan">
      <h1 className="heading">Wedding Loan</h1>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'credit' ? 'active' : ''}`}
          onClick={() => handleTabClick('credit')}
        >
         <FaHeart className="tab-icon" /> What is a Wedding Loan?
        </button>
        <button
          className={`tab-button ${activeTab === 'manage' ? 'active' : ''}`}
          onClick={() => handleTabClick('manage')}
        >
        <FaMoneyBillWave className="tab-icon" /> How to Manage Wedding Expenses
        </button>

        <button
          className={`tab-button ${activeTab === 'strategies' ? 'active' : ''}`}
          onClick={() => handleTabClick('strategies')}
        >
          <FaCalendarAlt className="tab-icon" /> Planning Your Wedding Budget
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
            <h2>What is a Wedding Loan?</h2>
            <p>A wedding loan is a personal loan specifically designed to cover the expenses associated with a wedding. These loans can help finance various aspects of the event, including venue costs, catering, attire, decorations, and more.</p>
            <p>Wedding loans typically come with flexible repayment options and competitive interest rates, making them a popular choice for couples planning their special day.</p>
          </div>
        )}
        {activeTab === 'manage' && (
            <div className="content">
            <h2>How to Manage Wedding Expenses</h2>
            <p>Managing wedding expenses effectively involves careful planning and budgeting. Here are some tips:</p>
            <ul>
              <li>Create a detailed wedding budget, including all anticipated expenses.</li>
              <li>Prioritize your spending and allocate more funds to crucial elements of the wedding.</li>
              <li>Track your expenses to ensure you stay within your budget.</li>
              <li>Look for discounts and negotiate with vendors to save on costs.</li>
              <li>Consider setting up a separate savings account specifically for wedding expenses.</li>
            </ul>
          </div>
        )}
        {activeTab === 'strategies' && (
           <div className="content">
           <h2>Planning Your Wedding Budget</h2>
           <p>Effective wedding budget planning involves:</p>
           <ul>
             <li>Assessing your total budget based on your savings and any loans or financial assistance you might receive.</li>
             <li>Itemizing your wedding expenses, including venue, catering, attire, entertainment, and other costs.</li>
             <li>Setting realistic spending limits for each category and adjusting as needed.</li>
             <li>Monitoring your budget throughout the planning process to ensure you remain on track.</li>
             <li>Utilizing budgeting tools or apps to help manage and track your expenses.</li>
           </ul>
         </div>
    
        )}
        {activeTab === 'help' && (
        <div className="content">
        <h2>How Lending Buddha Can Help</h2>
        <p>Lending Buddha offers a peer-to-peer lending platform that can assist couples in obtaining wedding loans. Key benefits include:</p>
        <ul>
          <li>Access to a wide network of individual lenders who may offer competitive interest rates.</li>
          <li>A quick and easy online application process with minimal paperwork.</li>
          <li>Flexible loan amounts to suit various wedding budgets.</li>
          <li>Personalized loan offers based on your financial profile and needs.</li>
        </ul>
        <p>By using Lending Buddha, you can secure the funds needed to make your wedding day special while managing your finances effectively.</p>
      </div>


        )}
       
        
      </div>
    </div>
  );
};

export default WeddingLoan;
