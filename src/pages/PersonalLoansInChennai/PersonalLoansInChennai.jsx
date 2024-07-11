// PersonalLoansInMumbai.js

import React from 'react';
import './PersonalLoansInChennai.css'; // Ensure you import the CSS file

const PersonalLoansInChennai = () => {
  return (
    <div className="personal-loans-mumbai">
      <header className="header">
        <h1 className="heading">Personal Loans in Chennai</h1>
        {/* <img src="path-to-your-image.jpg" alt="Mumbai" className="header-image" /> */}
      </header>

      <section className="intro">
        <p>
        Apply for a personal loan in Chennai with Lending Buddha for the most transparent, hassle free, fast and affordable service. Low interest rate, quick approval and completely online process from applying to disbursement. Registrations are free for a limited time, Apply now or learn more below.
        </p>
        <p>
        Chennai is a bustling metropolitan city in India and has a thriving economy. It's also one of the largest technical centers of the world. The city is the third biggest contributor to the Indian GDP and is the home to several large-scale national and international companies. The numbers are likely to grow as it has been ranked by The Economist among the top 120 cities in the world in the 2025 City Competitive Index.
        </p>
      </section>

      <section className="purpose">
        <h2 className="section-title">Purpose for Personal Loan</h2>
        <ul>
          <li>Personal Loan for a Wedding in the House.</li>
          <li>Personal Loan for an uncertain medical expense.</li>
          <li>Personal Loan for renovating your House.</li>
          <li>Personal Loan for a Family Vacation</li>
          <li>Personal Loan to set off Credit Card bills</li>
          <li>Personal Loan to make up for the time being period when in between jobs</li>
        </ul>
      </section>

      <section className="benefits">
        <h2 className="section-title">Benefits of Personal Loan with Lending Buddha</h2>
        <ul>
          <li>Personal Loan at a lower interest rate.</li>
          <li>Personal Loan with manageable EMIs.</li>
          <li>No Security or Collateral required.</li>
          <li>Online repayment of Loan via IMPS or ECS.</li>
          <li>Quick Processing.</li>
          <li>No Hidden Charges.</li>
          <li>Direct Credit of Personal Loan in the account through Fund Transfer.</li>
          <li>Easy, Fast and Simple Paperwork (Documentation) which is completely online.</li>
          <li>Personal Loans can also be taken as a Top up loan, debt consolidation or balance transfer.</li>
        </ul>
      </section>

      <section className="criteria">
        <h2 className="section-title">Eligibility Criteria</h2>
        <table>
          <thead>
            <tr>
              <th>Criteria</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Residency</td>
              <td>Must be a resident of India</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>Must be aged more than 23 years</td>
            </tr>
            <tr>
              <td>ID Proof</td>
              <td>Must hold a valid Indian ID proof</td>
            </tr>
            <tr>
              <td>PAN Card</td>
              <td>Must have a valid PAN card</td>
            </tr>
            <tr>
              <td>Bank Account</td>
              <td>Must have a bank account with an Indian bank</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="documents">
        <h2 className="section-title">Documents Required</h2>
        <div className="documents-section">
          <h3>Salaried Applicants</h3>
          <table>
            <thead>
              <tr>
                <th>Document</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Photographs</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Identity Proof</td>
                <td>PAN Card, Adhaar Card, Voter ID, Passport</td>
              </tr>
              <tr>
                <td>Date of Birth Proof</td>
                <td>PAN Card, Passport</td>
              </tr>
              <tr>
                <td>Signature Proof</td>
                <td>PAN Card, Signature verification from your bank, Passport</td>
              </tr>
              <tr>
                <td>Address Proof</td>
                <td>Passport, Bank Statement, Voter ID</td>
              </tr>
              <tr>
                <td>Contact Proof</td>
                <td>Post paid Mobile Bill (last month), Post paid Landline Bill (last month)</td>
              </tr>
              <tr>
                <td>Bank Statements</td>
                <td>Last 6 months</td>
              </tr>
              <tr>
                <td>Proof of Income</td>
                <td>Last year's Business/Personal ITR or Income Declaration</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="documents-section">
          <h3>Self-Employed Applicants</h3>
          <table>
            <thead>
              <tr>
                <th>Document</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Photographs</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Identity Proof</td>
                <td>PAN Card, Adhaar Card, Voter ID, Passport</td>
              </tr>
              <tr>
                <td>Proof of Office Address</td>
                <td>Maintenance bill/utility bill</td>
              </tr>
              <tr>
                <td>Office Ownership Proof</td>
                <td>Electricity bills/maintenance bills/property documents</td>
              </tr>
              <tr>
                <td>Income Proof</td>
                <td>Income Tax returns for last two years/profit & loss account, balance sheet and auditors report</td>
              </tr>
              <tr>
                <td>Proof of Existence</td>
                <td>Company registration certificate/Tax registration certificate</td>
              </tr>
              <tr>
                <td>Bank Statements</td>
                <td>Latest current and savings account copy for a year</td>
              </tr>
              <tr>
                <td>Existing EMIs</td>
                <td>Sanction letter/payment record</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <footer className="footer">
        <p>At Lending Buddha Personal Loans are provided with customer satisfaction. If you are residing in any part of Mumbai, Maharashtra like Borivali (E), Borivali (W), Andheri (E), Andheri (W), Kurla, CST, Nariman Point, Bandra, Kalyan, Vikroli, Colaba, etc.</p>
        <p>Want to know more? Then feel free to contact us, our loans are easy, affordable, and hassle-free and without registration fee (For some time only). Wait no more, apply now.</p>
      </footer>
    </div>
  );
};

export default PersonalLoansInChennai;
