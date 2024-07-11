import React, { useState } from 'react';
import { FaHospital, FaMoneyBillWave, FaStethoscope, FaHandshake } from 'react-icons/fa';
import './MedicalLoan.css'; // Ensure the path is correct

const MedicalLoan = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="personal-loan">
      <h1 className="heading">Medical Loan</h1>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'credit' ? 'active' : ''}`}
          onClick={() => handleTabClick('credit')}
        >
           <FaHospital className="tab-icon" /> What is a Medical Loan?
        </button>
        <button
          className={`tab-button ${activeTab === 'manage' ? 'active' : ''}`}
          onClick={() => handleTabClick('manage')}
        >
         <FaMoneyBillWave className="tab-icon" /> Managing Medical Expenses
        </button>

        <button
          className={`tab-button ${activeTab === 'strategies' ? 'active' : ''}`}
          onClick={() => handleTabClick('strategies')}
        >
        <FaStethoscope className="tab-icon" /> Planning for Medical Costs
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
           <h2>What is a Medical Loan?</h2>
           <p>A medical loan is a type of personal loan specifically designed to cover medical expenses. Whether it's for unexpected medical emergencies, elective surgeries, or long-term treatments, a medical loan provides the necessary funds to handle medical costs without financial strain.</p>
           <p>These loans typically come with flexible repayment options and can be used for a range of medical expenses, including hospital bills, medication, and treatment procedures.</p>
         </div>
       
        )}
        {activeTab === 'manage' && (
            <div className="content">
            <h2>Managing Medical Expenses</h2>
            <p>Managing medical expenses effectively involves several strategies:</p>
            <ul>
              <li>Keep track of all medical bills and expenses to monitor your spending.</li>
              <li>Prioritize essential treatments and avoid unnecessary procedures if possible.</li>
              <li>Review your health insurance coverage to understand what is and isn’t covered.</li>
              <li>Consider negotiating with healthcare providers for better payment terms or discounts.</li>
              <li>Set up a dedicated savings account for medical expenses to prepare for future costs.</li>
            </ul>
          </div>
        )}
        {activeTab === 'strategies' && (
          <div className="content">
          <h2>Planning for Medical Costs</h2>
          <p>Proper planning for medical costs can help avoid financial stress:</p>
          <ul>
            <li>Estimate potential medical costs based on your health needs and treatment plans.</li>
            <li>Set a budget for medical expenses and allocate funds accordingly.</li>
            <li>Explore financial assistance options such as medical loans or insurance benefits.</li>
            <li>Consider setting aside an emergency fund specifically for unexpected medical expenses.</li>
            <li>Stay informed about your medical costs and keep communication open with your healthcare providers.</li>
          </ul>
        </div>
        )}
        {activeTab === 'help' && (
        <div className="content">
        <h2>How Lending Buddha Can Help</h2>
        <p>Lending Buddha offers a peer-to-peer lending platform that can assist you in obtaining a medical loan. Key benefits include:</p>
        <ul>
          <li>Access to a network of individual lenders who may offer competitive interest rates for medical loans.</li>
          <li>A fast and convenient online application process with minimal paperwork.</li>
          <li>Flexible loan amounts tailored to cover various medical expenses.</li>
          <li>Personalized loan offers based on your financial profile and medical needs.</li>
        </ul>
        <p>By using Lending Buddha, you can secure the necessary funds to manage your medical expenses and focus on your health without financial worry.</p>
      </div>

        )}
       
        
      </div>
    </div>
  );
};

export default MedicalLoan;
