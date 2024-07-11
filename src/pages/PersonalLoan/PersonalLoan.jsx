import React, { useState } from 'react';
import { FaMoneyBillWave, FaChartLine, FaFileInvoiceDollar, FaInfoCircle, FaBook ,FaUserCheck} from 'react-icons/fa';
import './PersonalLoan.css'; // Ensure the path is correct
import { Link } from 'react-router-dom';

const PersonalLoan = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    
    <div className="personal-loan">
      <h1 className="heading">Personal Loan</h1>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => handleTabClick('overview')}
        >
          <FaMoneyBillWave className="tab-icon" />
          Why Lend
        </button>
        <button
          className={`tab-button ${activeTab === 'benefits' ? 'active' : ''}`}
          onClick={() => handleTabClick('benefits')}
        >
          <FaChartLine className="tab-icon" />
          Benefits
        </button>
        <button
          className={`tab-button ${activeTab === 'assessment' ? 'active' : ''}`}
          onClick={() => handleTabClick('assessment')}
        >
          <FaFileInvoiceDollar className="tab-icon" />
          Assessment
        </button>
        <button
          className={`tab-button ${activeTab === 'fees' ? 'active' : ''}`}
          onClick={() => handleTabClick('fees')}
        >
          <FaInfoCircle className="tab-icon" />
          Fees & Terms
        </button>
        <button
          className={`tab-button ${activeTab === 'code' ? 'active' : ''}`}
          onClick={() => handleTabClick('code')}
        >
          <FaBook className="tab-icon" />
          Lender Code of Conduct
        </button>
        <button
          className={`tab-button ${activeTab === 'usercheck' ? 'active' : ''}`}
          onClick={() => handleTabClick('usercheck')}
        >
          <FaUserCheck className="tab-icon" />
          Lender Elibiblity
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'overview' && (
          <div className="content">
            <p>
              Lending Buddha is a Peer-to-Peer Lending Marketplace, which gets creditworthy borrowers and willing Lenders together to transact on short to medium term personal unsecured loans.
            </p>
            <p>
              All borrowers go through a thorough financial, personal, professional, and social background check, which is performed through the use of sophisticated technology and machine learning algorithms working in tandem with experienced professionals.
            </p>
            <p>
              Lending Buddha's Lenders have access to a wide range of borrowers with varied risk profiles, giving the Lender an option to create a diverse portfolio.
            </p>
            <p>
              Financial Institutions provide limited products for Lendments and low returns on options such as fixed deposits. Mutual funds are limited with regards to the Lenders they attract as they require high capital commitments over a long period of time. Finally, equity markets are highly volatile and require a significant holding capacity and risk appetite, and even then returns are not guaranteed.
            </p>
            <p>
              Lending Buddha fills this gap by offering a new fixed income asset class that is safe and secure and offers ROIs of as high as 36%.
            </p>
            <p>
              You may have been refused a loan from high street banks or other traditional financial institutions even though you are more than capable of repaying your loans. This may be due to an unconventional profile or something that banks might consider a "bad credit" profile.
            </p>
            <p>
              Lending Buddha takes a different approach compared to that of banks and looks at several more data points to create a more holistic credit profile and does not rely entirely on credit bureau scores and conventional KYC information.
            </p>
            <p>
              This approach helps us assist individuals with so-called bad credit profiles in getting personal loans at desired interest rates. Sign up as a Lender and explore the tailor-made proposals that suit your needs.
            </p>
          </div>
        )}
        {activeTab === 'benefits' && (
          <div className="content">
            <h2>Key Advantages of Lending Through Lending Buddha</h2>
            <ul>
              <li>Attractive returns of as high as 36%</li>
              <li>Access to a wide range of pre-verified creditworthy borrowers</li>
              <li>Detailed credit assessment through sophisticated technology and experienced professionals</li>
              <li>Diversified portfolio of borrowers</li>
              <li>Convenient and transparent processing system with no hidden charges</li>
              <li>Opportunity to negotiate with the borrower before closing a deal</li>
              <li>Support in collections when required</li>
              <li>Recommended score and interest rate along with approved amount</li>
            </ul>
          </div>
        )}
        {activeTab === 'assessment' && (
          <div className="content">
            <h2>Credit Assessment Approach</h2>
            <p>
              Lending Buddha follows an out-of-the-box approach to credit assessment through a perfect blend of big data analytics and highly qualified professionals. Some of the factors we thoroughly assess are:
            </p>
            <ul>
              <li>Net Salary and expenditure trends</li>
              <li>Educational Qualification and Professional History</li>
              <li>Professional industry type and total asset holding</li>
              <li>Number of total jobs held and frequency of job changes</li>
              <li>Utility and Mobile bills</li>
              <li>Credit card expenditure and limits</li>
              <li>Locality of stay</li>
              <li>Online spending behavior and many other non-traditional data points</li>
            </ul>
            <p>
              In total, Lending Buddha reviews over 1000 data points to ensure that our system accurately profiles borrowers and our Lenders are provided with an accurate credit assessment to assist in their decision-making process.
            </p>
          </div>
        )}
        {activeTab === 'fees' && (
          <div className="content">
            <h2>Fees and Terms</h2>
            <p>
              <strong>Registration Fee:</strong> Non-refundable registration fee of Rs 500 is applicable at signup for a new Lender.
            </p>
            <p>
              <strong>Lendment Fee:</strong> An additional fee of Rs 500 is applicable for every 1 lac (Rs 100,000) committed for Lendment on Lending Buddha.
            </p>
            <p>
              The returns you earn by Lending through Lending Buddha depend on your risk appetite. So, you decide the risk profile of borrowers you want to Lend in and Lending Buddha will facilitate the process afterward.
            </p>
            <p>
              <strong>Non-Payment of EMI:</strong> In case the borrowers do not transfer the EMI by the due date, additional penal interest would be applicable as per the loan agreement signed between the Lenders and their respective borrowers and will be applied to the due amount for the duration of delay, which Borrowers will be liable to pay the Lender.
            </p>
            <p>
              Lending Buddha does not guarantee any returns on the capital. Lending Buddha is a tech platform and it does not assume any credit risk on behalf of its users.
            </p>
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

export default PersonalLoan;
