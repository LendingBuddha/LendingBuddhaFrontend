import React, { useState } from 'react';
import { FaInfoCircle, FaChartLine, FaRegHandPaper, FaRegFileAlt } from 'react-icons/fa'; // Icons for tabs
import './InvestMoneyOnline.css'; // Ensure the path is correct

const InvestMoneyOnline = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='personal-loan'>
      <h1 className="heading">Invest Money Online</h1>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => handleTabClick('overview')}
        >
          <FaInfoCircle className="tab-icon" /> Overview
        </button>
        <button
          className={`tab-button ${activeTab === 'benefits' ? 'active' : ''}`}
          onClick={() => handleTabClick('benefits')}
        >
          <FaChartLine className="tab-icon" /> Benefits
        </button>
        <button
          className={`tab-button ${activeTab === 'how-to' ? 'active' : ''}`}
          onClick={() => handleTabClick('how-to')}
        >
          <FaRegHandPaper className="tab-icon" /> How to Invest
        </button>
        <button
          className={`tab-button ${activeTab === 'eligibility' ? 'active' : ''}`}
          onClick={() => handleTabClick('eligibility')}
        >
          <FaRegFileAlt className="tab-icon" /> Eligibility & Required Documents
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'overview' && (
          <div className="content">
            <h2>Overview</h2>
            <p>Investing money online allows you to grow your wealth over time by leveraging various investment opportunities available on the internet. Whether you're looking to invest in stocks, bonds, mutual funds, or peer-to-peer lending, online platforms provide a convenient way to manage and monitor your investments.</p>
          </div>
        )}
        {activeTab === 'benefits' && (
          <div className="content">
            <h2>Benefits</h2>
            <ul>
              <li>Convenience and Accessibility</li>
              <li>Diversification Opportunities</li>
              <li>Potential for Higher Returns</li>
              <li>Easy Tracking and Management</li>
              <li>Lower Costs</li>
            </ul>
          </div>
        )}
        {activeTab === 'how-to' && (
          <div className="content">
            <h2>How to Invest</h2>
            <ol>
              <li>Choose an Online Investment Platform</li>
              <li>Complete the Registration Process</li>
              <li>Link Your Bank Account</li>
              <li>Select Investment Options</li>
              <li>Monitor and Manage Your Investments</li>
            </ol>
          </div>
        )}
        {activeTab === 'eligibility' && (
          <div className="content">
            <h2>Eligibility & Required Documents</h2>
            <p>To invest money online, you need to meet certain eligibility criteria and provide specific documents for verification. Here are the general requirements:</p>
            <ul>
              <li>Resident of India</li>
              <li>Above 18 years of age</li>
              <li>Valid Indian bank account</li>
              <li>Valid PAN card</li>
              <li>Address Proof: Aadhaar Card, Voter ID, Passport</li>
            </ul>
            <p>Ensure you have these documents ready before starting the investment process.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvestMoneyOnline;
