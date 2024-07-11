import React, { useState } from 'react';
import { FaInfoCircle, FaMoneyBillWave, FaHandHoldingUsd, FaRegFileAlt } from 'react-icons/fa'; // Icons for tabs
import './ShortTermLoan.css'; // Ensure the path is correct

const ShortTermLoan = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="personal-loan">
      <h1 className="heading">Short Term Loan</h1>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'intro' ? 'active' : ''}`}
          onClick={() => handleTabClick('intro')}
        >
           <FaInfoCircle className="tab-icon" /> What is Short Term Loan?
        </button>
        <button
          className={`tab-button ${activeTab === 'short-term' ? 'active' : ''}`}
          onClick={() => handleTabClick('short-term')}
        >
          <FaMoneyBillWave className="tab-icon" /> Short Term Personal Loan
         
        </button>
        <button
          className={`tab-button ${activeTab === 'personal' ? 'active' : ''}`}
          onClick={() => handleTabClick('personal')}
        >
          <FaHandHoldingUsd className="tab-icon" /> Why Take a Personal Loan From Lending Buddha?
        </button>
        <button
          className={`tab-button ${activeTab === 'eligiblity' ? 'active' : ''}`}
          onClick={() => handleTabClick('eligiblity')}
        >
         <FaRegFileAlt className="tab-icon" /> Eligibility & Required Documents
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'intro' && (
           <div className="content">
           <h2>What is Short Term Loan?</h2>
           <p>Short-term loan is a loan taken for a relatively short period of time compared to average loan tenures, usually for a year or less. It can be given to salaried individuals or business owners, majorly for fulfilling sudden or unexpected cash requirements or managing the cash flow during a momentary funds shortage.</p>
           <p>It helps both small and large businesses to keep operations and the payroll ongoing despite of insufficient capital.</p>
         </div>
        )}
        {activeTab === 'short-term' && (
           <div className="content">
           <h2>Short Term Personal Loan</h2>
           <p>Just like businesses, individuals with good credit history can also get such loans for meeting immediate capital needs for personal reasons.</p>
           <h3>Who Should Take A Short Term Loan?</h3>
           <p>This type of loan is usually taken by businessmen for maintaining cash flow and financing business capital needs in case of a temporary funds shortage.</p>
           <p>Salaried employees and self-employed professionals can also take short term personal loans for personal needs like consumer appliances and electronics such as smartphones and laptops or similarly to manage sudden capital needs during a momentary cash crunch.</p>
         </div>
        )}
        {activeTab === 'personal' && (
          <div className="content">
           <h2>Why Take A Personal Loan From Lending Buddha?</h2>
              <p>Lending Buddha is an online P2P Lending Marketplace that helps individuals and medium and small businesses to borrow capital for their financial needs while providing a new Lendment opportunity to Lendors.</p>
              <p>As mentioned earlier, Lending Buddha is faster and cheaper than many other financial institutions. With the use of big data analytics, Lending Buddha has created a robust credit assessment procedure, giving a fair chance to every borrower to prove his/her creditworthiness on a more accurate and richer scale rather than just on the basis of credit score. Other than that, below are some features that a borrower can experience with Lending Buddha.</p>
              <ul>
                <li>Attractive Interest Rates (Starting at just 11.49% p.a.)</li>
                <li>Completely Online Process</li>
                <li>No Pre-closure Charges</li>
                <li>100% Transparency</li>
                <li>Proactive Customer Support</li>
              </ul>
              <p>With Peer to peer lending, Lending Buddha is poised to change the way India lends and borrows. We also provide loans through various partnered NBFCs and banks.</p>
          </div>
        )}
        {activeTab === 'eligiblity' && (
          <div className="content">
            <h2>Short Term Loan Eligibility & Required Documents</h2>
              <p>A borrower needs to meet the following criteria in order to apply for a personal loan on Lending Buddha:</p>
              <ul>
                <li>Borrower must be an Indian resident</li>
                <li>Borrower's monthly income should be ₹25,000 or greater</li>
                <li>Borrower must have a valid Indian bank account</li>
                <li>Borrower's age should be 25 or greater</li>
                <li>Borrower must have work experience of 2 years or greater</li>
              </ul>
              <p>Once registered, applicants will have to upload copies of some essential documents for verification and further processing. Here is the list of required documents:</p>
              <ul>
                <li><strong>Photographs:</strong> One</li>
                <li><strong>Identity Proof (any one):</strong> PAN Card*, Aadhaar Card, Voter ID*, Passport</li>
                <li><strong>DOB Proof (any one):</strong> PAN Card*, Signature verification from bank, Passport</li>
                <li><strong>Address Proof:</strong> Passport, Bank Statement, Voter ID*, Aadhar Card, Utility Bill (Electricity/Mobile/Landline), Rent Agreement</li>
                <li><strong>Bank Statement:</strong> Last 6 Months</li>
                <li><strong>Income Proof (any one):</strong> Last year ITR (Income Tax Return) or Income Declaration</li>
              </ul>
              <p>Once you upload all the required documents, it takes around 2 hours for approval and activation. If approved, you’ll have the choice whether you want a loan from banks or our platform depending on your creditworthiness.</p>
              <h3>Repayment & Processing Fees</h3>
              <p>You don’t have to pay any registration fees on Lending Buddha. This is an offer for a limited time. Lending Buddha charges a small processing fee of 2-6% of loan amount only at the time of disbursement. This is a success-based fee.</p>
              <p>If a borrower is getting a loan from a bank or NBFC then Lending Buddha doesn’t charge anything. Processing fees will be as per banks/NBFC standard. The borrower will be told about it beforehand.</p>
              <p>Once the loan amount is disbursed, the borrower will have to start repaying from the next month with easy monthly installments. There are no pre-closure charges on Lending Buddha. You can easily close your loan before its age without any extra fees.</p>
              <p>You can learn more about our repayment policy <a href="#">here</a>.</p>
          </div>
        )}
        {activeTab === 'code' && (
          <div className="content">
            <h2>Lender Code of Conduct</h2>
            <p>
              The data provided on the website is directed solely at and is for use solely by people mentioned in the terms and conditions applying to lenders. The content provided on the website is not intended for distribution to, or use by, any person or entity in any jurisdiction where such distribution or use would be contrary to applicable law or regulation.
            </p>
            <p>
              You are permitted to download and print content from this platform solely for your own personal use to the extent required to use the services provided on this website. Lending Buddha supplied content must not be copied or reproduced, modified, redistributed, used or otherwise dealt with for any other reason without our express written consent.
            </p>
            <p>
              We are not responsible for content downloaded or posted by Lenders on the platform.
            </p>
            <p>
              You agree to use the platform only for lawful purposes and in a way which does not infringe the rights of anyone else or restrict or inhibit anyone else's use and enjoyment of the platform.
            </p>
            <p>
              You agree not to use the Lending Buddha website or any information accessible on or obtained from it for the purpose of canvassing or soliciting any person or enticing any person away from Lending Buddha.
            </p>
            <p>
              You guarantee that you have taken all reasonable precautions to ensure that any information you upload or otherwise submit to the website is free from viruses and anything else which may have a contaminating or destructive effect on any part of the website or any of its technology.
            </p>
            <p>
              You are responsible for all costs incurred by you in accessing the platform.
            </p>
            <p>
              The platform may contain links to websites. We accept no responsibility or liability for any material supplied by or contained on any third party website which is linked from or to the platform, or any use of personal data by such third party.
            </p>
          </div>
        )}

        {activeTab === 'usercheck' && (
          <div className="content">
          <h2>Lender Eligibility</h2>
          <p>Lending Buddha is a platform for people with an unconventional approach to lending, which pays off with higher returns on an lender’s idle cash. The registration process to become a lender is fast and simple. Some basic requirements to be eligible are:</p>
          <ul>
            <li>You must be a resident of India</li>
            <li>You must be over 21 years old</li>
            <li>You must have a valid Indian bank account</li>
            <li>You must have a valid PAN card</li>
            <li>You must abide by Lending Buddha's Terms & Conditions</li>
            <li>You must adhere to the lender's code of conduct</li>
            <li>You must register your details on the website: <a href="https://www.getlendingbuddha.online" target="_blank" rel="noopener noreferrer">https://www.getlendingbuddha.online</a></li>
          </ul>
          <p><strong>Identity Proof:</strong> PAN Card</p>
          <p><strong>Address Proof (any one of the following):</strong> Aadhaar Card / Voter ID / Passport</p>
        </div>
        )}
        
      </div>
    </div>
  );
};

export default ShortTermLoan;
