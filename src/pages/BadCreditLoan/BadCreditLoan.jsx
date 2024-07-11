import React, { useState } from 'react';
import { FaCreditCard, FaShieldAlt, FaCogs, FaHandshake } from 'react-icons/fa'
import './BadCreditLoan.css'; // Ensure the path is correct

const BadCreditLoan = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="personal-loan">
      <h1 className="heading">BadCredit Loan</h1>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'credit' ? 'active' : ''}`}
          onClick={() => handleTabClick('credit')}
        >
          <FaCreditCard className="tab-icon" /> What is Bad Credit Loan?
        </button>
        <button
          className={`tab-button ${activeTab === 'manage' ? 'active' : ''}`}
          onClick={() => handleTabClick('manage')}
        >
        <FaShieldAlt className="tab-icon" /> How to Manage Bad Credit
        </button>

        <button
          className={`tab-button ${activeTab === 'strategies' ? 'active' : ''}`}
          onClick={() => handleTabClick('strategies')}
        >
          <FaCogs className="tab-icon" /> Strategies for Getting a Loan
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
           <h2>What is a Bad Credit Loan?</h2>
           <p>A bad credit loan is designed for individuals with poor credit scores who may have difficulty obtaining traditional loans. Bad credit typically means a credit score below 600, which may result from late payments, high credit utilization, or other financial challenges.</p>
           <p>These loans often come with higher interest rates due to the increased risk for lenders, but they can provide essential financial support for those in need.</p>
         </div>
        )}
        {activeTab === 'manage' && (
            <div className="content">
            <h2>How to Manage Bad Credit</h2>
            <p>Managing bad credit involves several strategies to improve your credit score and financial stability:</p>
            <ul>
              <li>Regularly check your credit report for inaccuracies and dispute any errors.</li>
              <li>Pay your bills on time and avoid missing payments.</li>
              <li>Reduce your credit card balances and keep your credit utilization low.</li>
              <li>Consider credit counseling or financial planning services to help manage your finances.</li>
              <li>Build a positive credit history by using credit responsibly and maintaining a mix of credit types.</li>
            </ul>
          </div>
        )}
        {activeTab === 'strategies' && (
           <div className="content">
           <h2>Strategies for Getting a Loan</h2>
           <p>If you need a loan with bad credit, consider these strategies:</p>
           <ul>
             <li>Apply for secured loans where you provide collateral to back the loan, reducing the lender's risk.</li>
             <li>Look for lenders who specialize in bad credit loans and are more likely to work with you.</li>
             <li>Consider a co-signer with good credit to improve your chances of loan approval.</li>
             <li>Prepare to provide detailed information about your financial situation to demonstrate your ability to repay the loan.</li>
           </ul>
         </div>
        )}
        {activeTab === 'help' && (
        <div className="content">
        <h2>How Lending Buddha Can Help</h2>
        <p>Lending Buddha offers a peer-to-peer lending platform that can assist individuals with bad credit in obtaining loans. Key benefits include:</p>
        <ul>
          <li>Access to a wide network of individual lenders who may be more flexible than traditional financial institutions.</li>
          <li>Potentially lower interest rates compared to traditional bad credit loans.</li>
          <li>A streamlined application process with minimal documentation requirements.</li>
          <li>Personalized loan offers based on your financial profile, improving your chances of approval.</li>
        </ul>
        <p>By using Lending Buddha, you can find suitable loan options even with bad credit, helping you manage your financial needs effectively.</p>
      </div>

        )}
       
        
      </div>
    </div>
  );
};

export default BadCreditLoan;
