import React, { useState } from 'react';
import { FaHome, FaTools, FaDollarSign, FaHandshake } from 'react-icons/fa';
import './HomeRenovationLoan.css'; // Ensure the path is correct

const HomeRenovationLoan = () => {
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
           <FaHome className="tab-icon" /> What is a Home Renovation Loan?
        </button>
        <button
          className={`tab-button ${activeTab === 'manage' ? 'active' : ''}`}
          onClick={() => handleTabClick('manage')}
        >
        <FaTools className="tab-icon" /> Planning Your Renovation
        </button>

        <button
          className={`tab-button ${activeTab === 'strategies' ? 'active' : ''}`}
          onClick={() => handleTabClick('strategies')}
        >
           <FaDollarSign className="tab-icon" /> Managing Renovation Costs
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
          <h2>What is a Home Renovation Loan?</h2>
          <p>A home renovation loan is a type of personal loan designed to fund the cost of upgrading or remodeling your home. Whether you're updating your kitchen, adding a new room, or improving your home's energy efficiency, this loan can provide the necessary funds to achieve your renovation goals.</p>
          <p>These loans can be used for a wide range of home improvement projects and often come with flexible repayment options to fit your budget.</p>
        </div>
        )}
        {activeTab === 'manage' && (
           <div className="content">
           <h2>Planning Your Renovation</h2>
           <p>Effective planning is crucial for a successful home renovation project:</p>
           <ul>
             <li>Define your renovation goals and priorities. Identify which areas of your home need improvement and what you want to achieve.</li>
             <li>Create a detailed budget that includes all expected costs such as materials, labor, permits, and any unexpected expenses.</li>
             <li>Research and hire reliable contractors or professionals to ensure high-quality work and adherence to your renovation plan.</li>
             <li>Obtain necessary permits and approvals from local authorities if required.</li>
             <li>Set a realistic timeline for the project and prepare for potential delays.</li>
           </ul>
         </div>
        )}
        {activeTab === 'strategies' && (
           <div className="content">
           <h2>Managing Renovation Costs</h2>
           <p>Managing renovation costs can help prevent budget overruns:</p>
           <ul>
             <li>Track all expenses throughout the renovation process to stay within your budget.</li>
             <li>Compare prices for materials and services to ensure you’re getting the best value.</li>
             <li>Consider prioritizing essential renovations and postponing non-essential improvements to manage costs better.</li>
             <li>Look for discounts or promotions on materials and services to reduce overall expenses.</li>
             <li>Keep a contingency fund for unexpected costs or emergencies that may arise during the renovation.</li>
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

export default HomeRenovationLoan;
