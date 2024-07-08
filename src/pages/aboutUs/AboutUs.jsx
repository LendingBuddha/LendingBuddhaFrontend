import React, { useState } from 'react';
<<<<<<< HEAD
import '../aboutUs/aboutUs.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '../../components/Footer.jsx';

const AboutUs = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <>
    <div className="about-us-container">
      <h1>About Us</h1>
      <p className="intro-text">
        Welcome to Lending Buddha, India's premier peer-to-peer e-Lending Marketplace. We are committed to creating a transparent, efficient, and conducive environment for both borrowers and lenders to interact and explore business opportunities together. Our platform serves as a bridge, enabling direct communication and negotiation between parties, thereby eliminating the need for intermediaries and reducing the overall cost of transactions.
      </p>

      {[
        { title: "Our Mission", content: "At Lending Buddha, our mission is to revolutionize the personal loans market in India by providing a one-stop solution for borrowers with diverse profiles and needs. We aim to facilitate access to both retail and institutional lenders with varying risk appetites, empowering borrowers to find the best possible financing options." },
        { title: "Our Platform", content: <ul><li>Interact and discuss business prospects.</li><li>Evaluate all their options before finalizing a deal.</li><li>Benefit from a streamlined process that cuts down on unnecessary intermediaries.</li></ul> },
        { title: "Key Features", content: <><p><strong>Transparency:</strong> We prioritize clear and open communication between borrowers and lenders, ensuring all parties have the information they need to make informed decisions.</p><p><strong>Efficiency:</strong> By removing intermediaries, we reduce the time and cost associated with traditional lending processes.</p><p><strong>Security:</strong> Our platform employs robust security measures to protect user data and ensure safe transactions.</p></> },
        { title: "Our Role", content: "Lending Buddha acts solely as a facilitator and does not get involved in the lending process itself. We provide the platform for borrowers and lenders to connect, negotiate, and finalize their deals independently. Our role is to ensure a seamless and secure environment for these interactions to take place." },
        { title: "Disclaimer", content: "Lending Buddha is not a lender, financial advisor, or intermediary. We do not provide loans, accept repayments, or get involved in any financial transactions between users. All loan agreements and transactions are conducted directly between borrowers and lenders. Lending Buddha is not responsible for the terms, conditions, or outcomes of any agreements made on our platform. By using our platform, you agree to our terms and conditions and acknowledge that Lending Buddha is not liable for any losses, damages, or disputes arising from transactions conducted through our marketplace. We encourage all users to conduct their due diligence and seek professional advice if needed before entering into any financial agreements." }
      ].map((section, index) => (
        <div key={index} className="about-us-section">
          <div className="section-header" onClick={() => toggleSection(index)}>
            <h2>{section.title}</h2>
            <ExpandMoreIcon className={expandedSection === index ? "expanded" : ""} />
          </div>
          {expandedSection === index && <div className="section-content">{section.content}</div>}
        </div>
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;
=======
import './aboutUs.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '../../components/Footer';

const AboutUs = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <>
    <div className="about-us-container">
      <h1>About Us</h1>
      <p className="intro-text">
        Welcome to Lending Buddha, India's premier peer-to-peer e-Lending Marketplace. We are committed to creating a transparent, efficient, and conducive environment for both borrowers and lenders to interact and explore business opportunities together. Our platform serves as a bridge, enabling direct communication and negotiation between parties, thereby eliminating the need for intermediaries and reducing the overall cost of transactions.
      </p>

      {[
        { title: "Our Mission", content: "At Lending Buddha, our mission is to revolutionize the personal loans market in India by providing a one-stop solution for borrowers with diverse profiles and needs. We aim to facilitate access to both retail and institutional lenders with varying risk appetites, empowering borrowers to find the best possible financing options." },
        { title: "Our Platform", content: <ul><li>Interact and discuss business prospects.</li><li>Evaluate all their options before finalizing a deal.</li><li>Benefit from a streamlined process that cuts down on unnecessary intermediaries.</li></ul> },
        { title: "Key Features", content: <><p><strong>Transparency:</strong> We prioritize clear and open communication between borrowers and lenders, ensuring all parties have the information they need to make informed decisions.</p><p><strong>Efficiency:</strong> By removing intermediaries, we reduce the time and cost associated with traditional lending processes.</p><p><strong>Security:</strong> Our platform employs robust security measures to protect user data and ensure safe transactions.</p></> },
        { title: "Our Role", content: "Lending Buddha acts solely as a facilitator and does not get involved in the lending process itself. We provide the platform for borrowers and lenders to connect, negotiate, and finalize their deals independently. Our role is to ensure a seamless and secure environment for these interactions to take place." },
        { title: "Disclaimer", content: "Lending Buddha is not a lender, financial advisor, or intermediary. We do not provide loans, accept repayments, or get involved in any financial transactions between users. All loan agreements and transactions are conducted directly between borrowers and lenders. Lending Buddha is not responsible for the terms, conditions, or outcomes of any agreements made on our platform. By using our platform, you agree to our terms and conditions and acknowledge that Lending Buddha is not liable for any losses, damages, or disputes arising from transactions conducted through our marketplace. We encourage all users to conduct their due diligence and seek professional advice if needed before entering into any financial agreements." }
      ].map((section, index) => (
        <div key={index} className="about-us-section">
          <div className="section-header" onClick={() => toggleSection(index)}>
            <h2>{section.title}</h2>
            <ExpandMoreIcon className={expandedSection === index ? "expanded" : ""} />
          </div>
          {expandedSection === index && <div className="section-content">{section.content}</div>}
        </div>
      ))}
    </div>
    <Footer/>
   </> 
  );
};

export default AboutUs;

>>>>>>> d73999d9c292ac6207858cb40163f1057eae7d30
