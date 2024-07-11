import React, { useState } from 'react';
import { FaCreditCard, FaMoneyBillWave, FaHandshake, FaRegFileAlt } from 'react-icons/fa'; 
import './DebtConsolidation.css'; // Ensure the path is correct

const DebtConsolidation = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="personal-loan">
      <h1 className="heading">DebtConsolidation Loan</h1>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'credit' ? 'active' : ''}`}
          onClick={() => handleTabClick('credit')}
        >
         <FaCreditCard className="tab-icon" /> What is Debt Consolidation & Credit Card Settlement?
        </button>
        <button
          className={`tab-button ${activeTab === 'bill' ? 'active' : ''}`}
          onClick={() => handleTabClick('bill')}
        >
         <FaMoneyBillWave className="tab-icon" /> How Can Lending Buddha Help You?
        </button>

        <button
          className={`tab-button ${activeTab === 'feature' ? 'active' : ''}`}
          onClick={() => handleTabClick('feature')}
        >
          <FaHandshake className="tab-icon" /> Features of Lending Buddha Debt Consolidation Loan
        </button>
        <button
          className={`tab-button ${activeTab === 'eligiblity' ? 'active' : ''}`}
          onClick={() => handleTabClick('eligiblity')}
        >
          <FaRegFileAlt className="tab-icon" /> Eligibility & Required Documents
        </button>
       
      </div>
      <div className="tab-content">
        {activeTab === 'credit' && (
          <div className="content">
          <h2>What is Debt Consolidation & Credit Card Settlement?</h2>
          <p>A debt consolidation loan is a loan taken to pay off other debts. By consolidating many small debts with one debt, one gets favorable payment terms and a lower burden of EMI.</p>
          <p>For example, if someone has many small informal debts or credit card dues (with very high monthly interest rates) causing financial imbalance, they can take a loan through Lending Buddha to fully repay these debts, turning multiple monthly EMIs into a single EMI, which is usually cheaper than the multiple debts.</p>
        </div>
        )}
        {activeTab === 'bill' && (
           <div className="content">
           <h2>How Can Lending Buddha Help You?</h2>
           <p>Lending Buddha is an Indian peer-to-peer Lending Marketplace that provides loans to individuals through banks, non-banks, and private lenders. Peer-to-peer lending involves borrowing capital from individual or multiple lenders at a negotiated interest rate through an online platform like Lending Buddha.</p>
           <p>Whether it's an informal debt or credit card dues, you can take a loan with Lending Buddha for any personal matter. Debt consolidation through Lending Buddha or peer-to-peer (P2P) lending is a great way to manage all your loans by combining all your outstanding dues into one easy payment system.</p>
           <p>Lending Buddha uses a robust credit assessment procedure, taking into account your salary and 400 other parameters, providing a fair chance to borrowers who may not qualify for traditional bank loans but are financially capable and healthy to repay the loan.</p>
         </div>
        )}
        {activeTab === 'feature' && (
           <div className="content">
           <h2>Features of Lending Buddha Debt Consolidation Loan</h2>
           <ul>
             <li>Easy registration - Apply instantly through desktop, laptop, or mobile. Upload all KYC documents online, with no physical paperwork needed.</li>
             <li>Reasonable interest rates - Depending on your credit assessment, interest rates can start as low as 11.49% per annum.</li>
             <li>No pre-closure fees - Prepay the loan before its term ends without any penalty or extra charges.</li>
           </ul>
         </div>
        )}
        {activeTab === 'eligiblity' && (
         <div className="content">
         <h2>Eligibility & Required Documents</h2>
         <p>To apply for a debt consolidation loan with Lending Buddha, you must meet the following eligibility criteria:</p>
         <ul>
           <li>You must be an Indian resident</li>
           <li>Minimum eligible age is 22 years</li>
           <li>You must have an Indian bank account</li>
           <li>You must have a valid Indian ID proof</li>
           <li>Your monthly net income should be at least ₹25,000</li>
         </ul>
         <p>Required documents for verification and credit assessment:</p>
         <ul>
           <li><strong>Photographs:</strong> One</li>
           <li><strong>Identity Proof (any one):</strong> PAN Card*, Aadhaar Card, Voter ID*, Passport</li>
           <li><strong>DOB Proof (any one):</strong> PAN Card*, Signature verification from bank, Passport</li>
           <li><strong>Address Proof:</strong> Passport, Bank Statement, Voter ID*, Aadhaar Card, Utility Bill (Electricity/Mobile/Landline), Rent Agreement</li>
           <li><strong>Bank Statement:</strong> Last 6 Months</li>
           <li><strong>Income Proof (any one):</strong> Last year ITR (Income Tax Return) or Income Declaration</li>
         </ul>
         <p>Ensure you have a stable internet connection and mobile phone for OTP verification.</p>
       </div>
        )}
       
        
      </div>
    </div>
  );
};

export default DebtConsolidation;
