import '../howItWorks/howitworks.css';
import {Link} from 'react-router-dom';

function HowItWorks() {
  return (

    <div className='root'>
        {/* <div className="breadCrumbMenu">
          <Link to={'/'}>Home</Link>/
          <Link to={'/howitworks'}>How It Works</Link>
        </div> */}

        <div className="howItWorks">

          <div className="card">
            <div className="cardHeading">HOW Lending Buddha WORKS?</div>
            <div className="cardBody">
              <div className="bodyHeading">What is it</div>
              <div className="bodyParagraph">
                <p>In this growing global market getting in touch with potential Lendors and borrowers is challenging and this is where Lending Buddha comes into play.</p>
                <p>Lending Buddha is an online marketplace where potential Lendors and pre-verified, creditworthy borrowers connect and pursue bilateral transactions. Lending Buddha helps strike deals amongst the Lendors and the borrowers and also help in repayment.</p>
              </div>
              <div className="bodyHeading">What is it</div>
              <div className="bodyParagraph">
                <p>In this growing global market getting in touch with potential Lendors and borrowers is challenging and this is where Lending Buddha comes into play.</p>
                <p>Lending Buddha is an online marketplace where potential Lendors and pre-verified, creditworthy borrowers connect and pursue bilateral transactions. Lending Buddha helps strike deals amongst the Lendors and the borrowers and also help in repayment.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="cardHeading">How it Works?</div>
            <div className="cardBody">
              <div className="bodyHeading">What is it</div>
              <div className="bodyParagraph">
                <p>In this growing global market getting in touch with potential Lendors and borrowers is challenging and this is where Lending Buddha comes into play.</p>
                <p>Lending Buddha is an online marketplace where potential Lendors and pre-verified, creditworthy borrowers connect and pursue bilateral transactions. Lending Buddha helps strike deals amongst the Lendors and the borrowers and also help in repayment.</p>
              </div>
              <div className="bodyHeading">What is it</div>
              <div className="bodyParagraph">
                <p>In this growing global market getting in touch with potential Lendors and borrowers is challenging and this is where Lending Buddha comes into play.</p>
                <p>Lending Buddha is an online marketplace where potential Lendors and pre-verified, creditworthy borrowers connect and pursue bilateral transactions. Lending Buddha helps strike deals amongst the Lendors and the borrowers and also help in repayment.</p>
              </div>
            </div>
          </div>

        </div>

        <div className="footBanner">
          <p>In recent times, Lending Buddha has helped a lot of individuals to realize their dreams by serving their capital needs with complete integrity.</p>
        </div>

        <div className="moreHelp">
          <p>Have more questions?</p>
          <Link to={'/'}>Get in touch</Link>
        </div>
    </div>

  );
}
export default HowItWorks;
