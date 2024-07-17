import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import "../home/home.css";
import CustomerReview from "../../components/reviews/CustomerReviews";
import FloatingChatButton from "../../components/chatbox/FloatingChatButton";
import { AuthContext } from "../../authContext/AuthContext";
import ChatBoxBorrower from "../../components/chatbox/ChatBoxBorrower";
import ChatBoxLender from "../../components/chatbox/ChatBoxLender";
import axios from "axios";
import ChatRooms from "../../components/chatRooms/ChatRooms";
import EmiCalculator from "./EMIcalculator";
import { Button } from "../../components/ui/button";
// const roomData = {
//   _id: "668e356407edda33a7dda4c6",
//   participants: [
//     {
//       userId: "cZo4ItsT0gfk4lMOqiAgDfmM7e72",
//       userType: "Borrower",
//       _id: "668e356407edda33a7dda4c7",
//     },
//     {
//       userId: "aQjnqjiBAEd0ZgZSAciaZpIlRGz1",
//       userType: "Lender",
//       _id: "668e356407edda33a7dda4c8",
//     },
//   ],
// };
const lender = { uid: "aQjnqjiBAEd0ZgZSAciaZpIlRGz1", name: "John Doe" };
function Home() {
  // const [p, setValue4] = useState(25000);
  // let [r, setValue5] = useState(12);
  // const [n, setValue6] = useState(6);
  const { user } = useContext(AuthContext);
  const [chatPopUp, setChatPopUp] = useState(false);
  const [showChatRooms, setShowChatRooms] = useState(false);
  const [chatRooms, setChatRooms] = useState([]);
  const [roomData, setRoomData] = useState();
  const [lender, setLender] = useState();
  const navigate = useNavigate();
  const toggleChat = () => {
    // setChatPopUp(!chatPopUp);
    onGetRooms(user.data.uid);
    setShowChatRooms(true);
    // navigate("/FindLenders");
  };
  const onSelectRoom = async (roomData) => {
    setShowChatRooms(false);
    setRoomData(roomData);
    setChatPopUp(true);
  };
  const onGetRooms = async (userId) => {
    try {
      const res = await axios.get(
        `https://backendlb-1et8.onrender.com/api/chatrooms/${userId}`
      );
      setChatRooms(res.data);
    } catch (error) {
      console.log({ "get rooms error": error });
    }
  };

  
  useEffect(() => {
    if (roomData) {
      roomData.participants.map((participant) =>
        participant.userType === "Lender" ? setLender(participant.userId) : null
      );
    }
  }, [roomData]);



  const handleBorrowClick = () => {
    navigate('/signup/borrower');
  };

  const handleLendClick = () => {
    navigate('/signup/lender');
  };
  return (
    <>
      <div className="root">
        {/* <div className="chat-pop-up">
        <button>
          <h3>See messages</h3>
          
            <FiMessageSquare size={20}/>
          </button>
        
        </div> */}
        <div className="container">
          <h2>Discover a smarter way to Borrow and Lend with our platform</h2>
          <p>
            Gone are the days of complex and cumbersome lending processes. At
            Lending Buddha, we&apos;ve streamlined the entire experience to make
            borrowing and lending as simple as possible. Our user-friendly
            interface guides you through each step of the process, ensuring a
            seamless experience from start to finish. Whether you&aposre a
            borrower in need of funds or a lender looking to invest, our
            platform makes it easy to achieve your financial goals.
          </p>
          <div className="flex justify-between h-full m-5">
            <Button onClick={handleBorrowClick}>Borrow</Button>
            <Button onClick={handleLendClick}>Lend</Button>
          </div>
          <a href="/AboutUs">Contact Us</a>
        </div>
        <div className="emi-comp">
        <EmiCalculator/>
        </div>
        

        <section id="help_you">
          <p className="heading">How can Lending Buddha Help You?</p>
          <p className="body">
            Lending Buddha, India&apos;s leading peer to peer Lending
            Marketplace, is trusted by doctors, engineers, businessmen and many
            more for their investing and financing needs.
          </p>
          <div className="cards">
            <div className="card">
              <img
                src="https://getlendingbuddha.online/static/images/custom/want-to-invest-icon.png"
                alt=""
              />
              <p className="heading">Want to Invest</p>
              <ul>
                <li>
                  Earn higher interest returns on your investments as much as
                  36%
                </li>
                <li>
                  Invest as low as Rs. 10,000 in multiple verified &
                  creditworthy borrowers
                </li>
                <li>Earn monthly returns and without any hidden charges</li>
              </ul>
              <button onClick={handleLendClick} className="btn">
                Invest Now
              </button>
              <a href="/AboutUs">Learn More</a>
            </div>
            <div className="card">
              <img
                src="https://getlendingbuddha.online/static/images/custom/need-a-loan-icon.png"
                alt=""
              />
              <p className="heading">Need a loan</p>
              <ul>
                <li>Save more with low interest rates as low as 12%</li>
                <li>
                  Hassle free borrowing process, interact with investors
                  directly
                </li>
                <li>
                  Avail small loans Rs. 5,000 to Rs. 5,00,000 without any hidden
                  charges
                </li>
              </ul>
              <button onClick={handleBorrowClick} className="btn">
                Register as Borrower
              </button>
              <a href="/Signup">Learn More</a>
            </div>
          </div>
        </section>

        <section id="need_loan">
          <p className="heading">
            Need a loan for a Wedding? Want to buy a new car? Take A personal
            loan online with Lending Buddha
          </p>
          <p className="body">
            We operate with a mission of keeping our costs low compared to
            traditional financial institutions by cutting out the middle man and
            pass all of the the savings directly to our investors who get high
            returns and borrowers who are charged low interest rates.
          </p>
          <div className="cards">
            <div className="card">
              <img
                src="https://getlendingbuddha.online/static/images/custom/hassle-free-icon.png"
                alt=""
              />
              <p className="heading">Bank Free = Hassle Free</p>
              <p className="body">
                Lending Buddha has simplified the lending process in India.
              </p>
            </div>
            <div className="card">
              <img
                src="https://getlendingbuddha.online/static/images/custom/higher-returns-icon.png"
                alt=""
              />
              <p className="heading">Higher Returns</p>
              <p className="body">
                Earn much higher returns than any other channel.
              </p>
            </div>
            <div className="card">
              <img
                src="https://getlendingbuddha.online/static/images/custom/potential-earnings-icon.png"
                alt=""
              />
              <p className="heading">Increase Your Potential earnings</p>
              <p className="body">
                Save more money with Lending Buddha, No hidden charges.
              </p>
            </div>
          </div>
        </section>

        <div id="image_link2">
          <p className="heading">
            Lending Buddha - Making meaningful connections for all your
            borrowing and investing needs
          </p>
          <Button onClick = {handleLendClick}>Register as Lender</Button>
        </div>

        <section className="section" id="proven_process">
          <p className="heading">Our Proven Process Produces Results</p>
          <p className="body">
            Lending Buddha has simplified the process of lending and borrowing.
            It also gives you complete control of lending and borrowing at your
            own terms
          </p>
          <div className="cards">
            <div className="card">
              <img
                src="https://getlendingbuddha.online/static/images/custom/step1.png"
                alt=""
              />
              <p className="heading">1. Register</p>
            </div>
            <div className="card">
              <img
                src="https://getlendingbuddha.online/static/images/custom/step2.png"
                alt=""
              />
              <p className="heading">2. E-KYC to comply RBI Guidelines</p>
            </div>
            <div className="card">
              <img
                src="https://getlendingbuddha.online/static/images/custom/step3.png"
                alt=""
              />
              <p className="heading">3. Lending Buddha Verification</p>
            </div>
            <div className="card">
              <img
                src="https://getlendingbuddha.online/static/images/custom/step4.png"
                alt=""
              />
              <p className="heading">
                4. Start Building or Reaching out to Investors
              </p>
            </div>
            <div className="card">
              <img
                src="https://getlendingbuddha.online/static/images/custom/step5.png"
                alt=""
              />
              <p className="heading">5. Loan Disbursement</p>
            </div>
          </div>
        </section>

        <section className="section" id="ai_powered">
          <p className="heading">AI-Powered Peer-to-Peer Lending in India</p>
          <div className="cards">
            <img
              src="https://getlendingbuddha.online/static/images/background/homepage-image.jpg"
              alt=""
            />
            <div id="wrapper">
              <p className="body">
                Lending Buddha introduces a groundbreaking concept in the Indian
                lending landscape: a dynamic peer-to-peer lending marketplace
                powered by advanced AI algorithms.
                At Lending Buddha, we leverage the latest in AI technology to
                facilitate seamless matchmaking between borrowers and lenders.
                Our AI algorithms analyze borrower profiles and lender
                preferences to create optimal matches, ensuring that each party
                finds the perfect lending or investment opportunity.
              </p>
            
              {/* <div className="cards" id='customer'>
                <img src="https://getlendingbuddha.online/static/images/people/profile-s-4.png" alt="" />
                <p>
                  As an investor using Lending Buddha, I&apos;ve been thoroughly impressed with the platform&apos;s AI matchmaking capabilities. It has allowed me to find suitable borrowers effortlessly, resulting in a diversified and profitable investment portfolio. The transparency and control offered by Lending Buddha make it a standout choice.
                  <span>@Y. Agarwal, New Delhi</span>
                </p>
              </div> */}
            </div>
          </div>
        </section>

        <section className="section" id="press">
          <p className="heading">Have press inquires?</p>
          <Link className=" font-extrabold text-lg " to={"/"}>Get in touch</Link>
          <p className="body">
            Lending Buddha operates as a marketplace connecting lenders with
            borrowers, and it does not facitilates the exchange of capital
            between parties. It is important to understand that Lending Buddha
            is a technology platform and not a financial institution. As such,
            Lending Buddha does not guarantee any returns on the capital
            invested by lenders. It is imperative for users of Lending Buddha to
            recognize that while we strive to provide a secure and efficient
            platform for lending and borrowing, we do not assume any credit risk
            on behalf of our users. Lenders and borrowers engage in transactions
            at their own discretion and assume full responsibility for assessing
            and mitigating associated risks.
          </p>
          <br />
          <p className="body">
            Lending Buddha will not be responsible for any financial
            transactions that occur outside the Lending Buddha platform. By
            accessing and using Lending Buddha, users agree to indemnify and
            hold harmless Lending Buddha, its officers, directors, employees,
            and affiliates from any claims, losses, or damages arising from
            their use of the platform.
          </p>
          <br />
          <p className="body">
            Lending Buddha encourages users to exercise caution and prudence
            when participating in lending and borrowing activities.
          </p>
        </section>
        <section>
          <div className="flex justify-center items-center m-5">
          <CustomerReview />
          </div>
        </section>

        <div id="image_link">
          <p className="heading">
            More than <span>50,000</span> people are actively using Lending
            Buddha
          </p>
          <button onClick={handleBorrowClick}>Register as Borrower</button>
        </div>

        <section className="section" id="quick_links">
          <p className="heading">Quick Links</p>
          <div className="cards">
            <div className="card">
              <p className="heading">Product</p>
              <p className="body">
                <Link to={"/personal-loan"}>Personal Loan</Link>
                <Link to={"/invest-money"}>Invest Money Online</Link>
                <Link to={"/short-term"}>Short Term Loan</Link>
                <br />
                <Link to={"/debt-loan"}>Debt Consolidation Loan</Link>
                <Link to={"/bad-credit"}>Bad Credit Loan</Link>
                <Link to={"/credit"}>Credit Card Consolidation</Link>
                <br />
                <Link to={"/wedding"}>Wedding Loan</Link>
                <Link to={"/travel"}>Travel Loan</Link>
                <Link to={"/medical"}>Medical Loan</Link>
                <br />
                <Link to={"/home-renovation"}>Home Renovation Loan</Link>
              </p>
            </div>
            <div className="card">
              <p className="heading">Cities</p>
              <p className="body">
                <Link to={"loan-delhi"}>Personal Loan Delhi NCR</Link>
                <Link to={"/loan-bangalore"}>Personal Loan Bangalore</Link>
                <br />
                <Link to={"/loan-mumbai"}>Personal Loan Mumbai</Link>
                <Link to={"/loan-hydrabad"}>Personal Loan Hyderabad</Link>
                <br />
                <Link to={"/loan-chennai"}>Personal Loan Chennai</Link>
                <Link to={"/loan-pune"}>Personal Loan Pune</Link>
                <br />
                <Link to={"/loan-ahmedabad"}>Personal Loan Ahmedabad</Link>
              </p>
              {showChatRooms ? (
                <ChatRooms chatRooms={chatRooms} onSelectRoom={onSelectRoom} />
              ) : null}
              {chatPopUp ? (
                user?.role === "borrower" ? (
                  <>
                    <ChatBoxBorrower
                      setChatPopUp={setChatPopUp}
                      lender={lender}
                      roomData={roomData}
                    />
                  </>
                ) : (
                  <ChatBoxLender
                    setChatPopUp={setChatPopUp}
                    roomData={roomData}
                  />
                )
              ) : null}
              <FloatingChatButton onClick={toggleChat} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;

