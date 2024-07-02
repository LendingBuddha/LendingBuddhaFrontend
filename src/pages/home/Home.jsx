import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../home/home.css'


function Home() {
    const [p, setValue4] = useState(25000);
    let [r, setValue5] = useState(12);
    const [n, setValue6] = useState(6);
  
    const handleChange = (event) => {
      switch(event.target.name) {
        case 'amt':
          document.getElementById('amtText').value = event.target.value;
          document.getElementById('monthly_emi').innerHTML = '&#8377;' + monthly_amt;
          document.getElementById('total_interest').innerHTML = '&#8377;' + interest;
          document.getElementById('total_amt').innerHTML = '&#8377;' + total;
          setValue4(event.target.value);
        break;
        case 'roi':
          document.getElementById('roiText').value = event.target.value;
          document.getElementById('monthly_emi').innerHTML = '&#8377;' + monthly_amt;
          document.getElementById('total_interest').innerHTML = '&#8377;' + interest;
          document.getElementById('total_amt').innerHTML = '&#8377;' + total;
          setValue5(event.target.value);
        break;
        case 'tenure':
          document.getElementById('tenureText').value = event.target.value;
          document.getElementById('monthly_emi').innerHTML = '&#8377;' + monthly_amt;
          document.getElementById('total_interest').innerHTML = '&#8377;' + interest;
          document.getElementById('total_amt').innerHTML = '&#8377;' + total;
          setValue6(event.target.value);
        break;
        case 'amtText':
          document.getElementById('monthly_emi').innerHTML = '&#8377;' + monthly_amt;
          document.getElementById('total_interest').innerHTML = '&#8377;' + interest;
          document.getElementById('total_amt').innerHTML = '&#8377;' + total;
          setValue4(event.target.value);
        break;
        case 'roiText':
          document.getElementById('monthly_emi').innerHTML = '&#8377;' + monthly_amt;
          document.getElementById('total_interest').innerHTML = '&#8377;' + interest;
          document.getElementById('total_amt').innerHTML = '&#8377;' + total;
          setValue5(event.target.value);
        break;
        case 'tenureText':
          document.getElementById('monthly_emi').innerHTML = '&#8377;' + monthly_amt;
          document.getElementById('total_interest').innerHTML = '&#8377;' + interest;
          document.getElementById('total_amt').innerHTML = '&#8377;' + total;
          setValue6(event.target.value);
        break;
      }
    };

    r = r/12/100;
    const monthly_amt = Math.floor((p*r*(1+r)**n)/(((1+r)**n)-1));
    const total = monthly_amt*n;
    const interest = total - p;

  return (

    <div className='root'>
        <div className='container'>
          <h2>Discover a smarter way to Borrow and Lend with our platform</h2>
          <p>
            Gone are the days of complex and cumbersome lending processes. At Lending Buddha, we've streamlined the entire experience to make borrowing and lending as simple as possible. Our user-friendly interface guides you through each step of the process, ensuring a seamless experience from start to finish. Whether you're a borrower in need of funds or a lender looking to invest, our platform makes it easy to achieve your financial goals.
          </p>
          <div className='btns'>
            <button className='btn'>Borrow</button>
            <button className='btn'>Lend</button>
          </div>
          <a href="#">Contact Us</a>
        </div>

        <div id="emi">
          <h2>EMI Calculator</h2>
          <div className="input">
            <div id="amt" className='elementWrapper'>
              <label htmlFor="amtText">Amount (Rs)</label>
              <input type="number" name="amtText" id="amtText" onChange={handleChange}/>
              <input type="range" name="amt" id="amt" min={25000} max={500000} step={5000} onChange={handleChange}/>
            </div>
            <div id="roi" className='elementWrapper'>
              <label htmlFor="roiText">ROI(%)</label>
              <input type="number" name="roiText" id="roiText" onChange={handleChange}/>
              <input type="range" name="roi" id="roi" min={12} max={36} onChange={handleChange}/>
            </div>
            <div id="tenure" className='elementWrapper'>
              <label htmlFor="tenureText">Tenure (Months)</label>
              <input type="number" name="tenureText" id="tenureText" onChange={handleChange}/>
              <input type="range" name="tenure" id="tenure" min={6} max={36} step={6} onChange={handleChange}/>
            </div>
          </div>
          <div id="result">
            <div className="emi_component">
              <span className="emi_heading">
                Monthly EMI
              </span>
              <span className="emi_body" id="monthly_emi">
                &#8377;23
              </span>
            </div>
            <div className="emi_component">
              <span className="emi_heading">
                Interest Payable
              </span>
              <span className="emi_body" id="total_interest">
                &#8377;40
              </span>
            </div>
            <div className="emi_component">
              <span className="emi_heading">
                Total Payment
              </span>
              <span className="emi_body" id="total_amt">
                &#8377;10
              </span>
            </div>
          </div>
        </div>

        <section id="help_you">
          <p className="heading">
            How can Lending Buddha Help You?
          </p>
          <p className="body">
            Lending Buddha, India's leading peer to peer Lending Marketplace, is trusted by doctors, engineers, businessmen and many more for their investing and financing needs.
          </p>
          <div className="cards">
            <div className="card">
              <img src="https://getlendingbuddha.online/static/images/custom/want-to-invest-icon.png" alt="" />
              <p className="heading">Want to Invest</p>
              <ul>
                <li>Earn higher interest returns on your investments as much as 36%</li>
                <li>Invest as low as Rs. 10,000 in multiple verified & creditworthy borrowers</li>
                <li>Earn monthly returns and without any hidden charges</li>
              </ul>
              <button href="#" className="btn">Invest Now</button>
              <a href="#">Learn More</a>
            </div>
            <div className="card">
              <img src="https://getlendingbuddha.online/static/images/custom/need-a-loan-icon.png" alt="" />
              <p className="heading">Need a loan</p>
              <ul>
                <li>Save more with low interest rates as low as 12%</li>
                <li>Hassle free borrowing process, interact with investors directly</li>
                <li>Avail small loans Rs. 5,000 to Rs. 5,00,000 without any hidden charges</li>
              </ul>
              <button href="#" className="btn">Register as Borrower</button>
              <a href="#">Learn More</a>
            </div>
          </div>
        </section>

        <section id="need_loan">
          <p className="heading">
            Need a loan for a Wedding? Want to buy a new car? Take A personal loan online with Lending Buddha
          </p>
          <p className="body">
            We operate with a mission of keeping our costs low compared to traditional financial institutions by cutting out the middle man and pass all of the the savings directly to our investors who get high returns and borrowers who are charged low interest rates.
          </p>
          <div className="cards">
            <div className="card">
              <img src="https://getlendingbuddha.online/static/images/custom/hassle-free-icon.png" alt="" />
              <p className="heading">
                Bank Free = Hassle Free
              </p>
              <p className="body">
                Lending Buddha has simplified the lending process in India.
              </p>
            </div>
            <div className="card">
              <img src="https://getlendingbuddha.online/static/images/custom/higher-returns-icon.png" alt="" />
              <p className="heading">
                Higher Returns
              </p>
              <p className="body">
                Earn much higher returns than any other channel.
              </p>
            </div>
            <div className="card">
              <img src="https://getlendingbuddha.online/static/images/custom/potential-earnings-icon.png" alt="" />
              <p className="heading">
                Increase Your Potential earnings
              </p>
              <p className="body">
                Save more money with Lending Buddha, No hidden charges.
              </p>
            </div>
          </div>
        </section>

        <div id="image_link2">
          <p className='heading'>
          Lending Buddha - Making meaningful connections for all your borrowing and investing needs
          </p>
          <button>Register as Lender</button>
        </div>

        <section className="section" id="proven_process">
          <p className="heading">
            Our Proven Process Produces Results
          </p>
          <p className="body">
            Lending Buddha has simplified the process of lending and borrowing. It also gives you complete control of lending and borrowing at your own terms
          </p>
          <div className="cards">
            <div className="card">
              <img src="https://getlendingbuddha.online/static/images/custom/step1.png" alt="" />
              <p className="heading">
                1. Register
              </p>
            </div>
            <div className="card">
              <img src="https://getlendingbuddha.online/static/images/custom/step2.png" alt="" />
              <p className="heading">
                2. E-KYC to comply RBI Guidelines
              </p>
            </div>
            <div className="card">
              <img src="https://getlendingbuddha.online/static/images/custom/step3.png" alt="" />
              <p className="heading">
                3. Lending Buddha Verification
              </p>
            </div>
            <div className="card">
              <img src="https://getlendingbuddha.online/static/images/custom/step4.png" alt="" />
              <p className="heading">
                4. Start Building or Reaching out to Investors
              </p>
            </div>
            <div className="card">
              <img src="https://getlendingbuddha.online/static/images/custom/step5.png" alt="" />
              <p className="heading">
                5. Loan Disbursement
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="ai_powered">
          <p className="heading">
            AI-Powered Peer-to-Peer Lending in India
          </p>
          <div className="cards">
            <img src="https://getlendingbuddha.online/static/images/background/homepage-image.jpg" alt="" />
            <div id="wrapper">
              <p className="body">
                Lending Buddha introduces a groundbreaking concept in the Indian lending landscape: a dynamic peer-to-peer lending marketplace powered by advanced AI algorithms.
              </p><br/>
              <p className="body">
                At Lending Buddha, we leverage the latest in AI technology to facilitate seamless matchmaking between borrowers and lenders. Our AI algorithms analyze borrower profiles and lender preferences to create optimal matches, ensuring that each party finds the perfect lending or investment opportunity.
              </p>
              <div className="cards" id='customer'>
                <img src="https://getlendingbuddha.online/static/images/people/profile-s-4.png" alt="" />
                <p>
                  As an investor using Lending Buddha, I've been thoroughly impressed with the platform's AI matchmaking capabilities. It has allowed me to find suitable borrowers effortlessly, resulting in a diversified and profitable investment portfolio. The transparency and control offered by Lending Buddha make it a standout choice.
                  <span>@Y. Agarwal, New Delhi</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="customer_review">
          <p className="heading">
            What our Customers say about us?
          </p>
          <div className="cards">
            <img src="https://getlendingbuddha.online/static/images/people/imranCheulkar.png" alt="" />
            <p>
              Lending Buddha is India's one of the best loan platform and top peer to peer club. My best business partner for all my business loan solution. Always Applied for the business loan got the loan in super fast process. Lending Buddha is everything they said, quick response, best customer service and quick loan disbursement. If you are in need of a loan then Lending Buddha is the place to go. I highly recommended. My five star rating to Lending Buddha Team. Thank you for always supporting me and making my business life easy.
              <span>Imran Cheulkar</span>
            </p>
          </div>
        </section>

        <section className="section" id="press">
          <p className="heading">
            Have press inquires?
          </p>
          <Link to={'/'}>Get in touch</Link>
          <p className='body'>
            Lending Buddha operates as a marketplace connecting lenders with borrowers, and it does not facitilates the exchange of capital between parties. It is important to understand that Lending Buddha is a technology platform and not a financial institution. As such, Lending Buddha does not guarantee any returns on the capital invested by lenders. It is imperative for users of Lending Buddha to recognize that while we strive to provide a secure and efficient platform for lending and borrowing, we do not assume any credit risk on behalf of our users. Lenders and borrowers engage in transactions at their own discretion and assume full responsibility for assessing and mitigating associated risks.
          </p><br/>
          <p className="body">
            Lending Buddha will not be responsible for any financial transactions that occur outside the Lending Buddha platform. By accessing and using Lending Buddha, users agree to indemnify and hold harmless Lending Buddha, its officers, directors, employees, and affiliates from any claims, losses, or damages arising from their use of the platform.
          </p><br/>
          <p className='body'>
            Lending Buddha encourages users to exercise caution and prudence when participating in lending and borrowing activities.
          </p>
        </section>

        <div id="image_link">
          <p className='heading'>
            More than <span>50,000</span> people are actively using Lending Buddha
          </p>
          <button>Register as Borrower</button>
        </div>

        <section className="section" id="quick_links">
          <p className='heading'>Quick Links</p>
          <div className="cards">
            <div className="card">
              <p className="heading">Product</p>
              <p className="body">
                <Link to={''}>Personal Loan</Link>
                <Link to={''}>Invest Money Online</Link>
                <Link to={''}>Short Term Loan</Link><br/>
                <Link to={''}>Debt Consolidation Loan</Link>
                <Link to={''}>Bad Credit Loan</Link>
                <Link to={''}>Credit Card Consolidation</Link><br/>
                <Link to={''}>Wedding Loan</Link>
                <Link to={''}>Travel Loan</Link>
                <Link to={''}>Medical Loan</Link><br/>
                <Link to={''}>Home Renovation Loan</Link>
              </p>
            </div>
            <div className="card">
              <p className="heading">Cities</p>
              <p className="body">
                <Link to={''}>Personal Loan Delhi NCR</Link>
                <Link to={''}>Personal Loan Bangalore</Link><br/>
                <Link to={''}>Personal Loan Mumbai</Link>
                <Link to={''}>Personal Loan Hyderabad</Link><br/>
                <Link to={''}>Personal Loan Chennai</Link>
                <Link to={''}>Personal Loan Pune</Link><br/>
                <Link to={''}>Personal Loan Ahmedabad</Link>
              </p>
            </div>
          </div>
        </section>
    </div>

  );
}
export default Home;