import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CustomerReview from "../../components/reviews/CustomerReviews";
import FloatingChatButton from "../../components/chatbox/FloatingChatButton";
import ChatBoxBorrower from "../../components/chatbox/ChatBoxBorrower";
import ChatBoxLender from "../../components/chatbox/ChatBoxLender";
import axios from "axios";
import ChatRooms from "../../components/chatRooms/ChatRooms";
import EmiCalculator from "./EMIcalculator";
import { Button } from "../../components/ui/button";
import { useAuthContext } from "../../context/AuthContextUpdated";

function Home() {
  const { authUser } = useAuthContext();
  const [chatPopUp, setChatPopUp] = useState(false);
  const [showChatRooms, setShowChatRooms] = useState(false);
  const [chatRooms, setChatRooms] = useState([]);
  const [roomData, setRoomData] = useState();
  const [lender, setLender] = useState();
  const navigate = useNavigate();

  const toggleChat = () => {
    onGetRooms(authUser.data.uid);
    setShowChatRooms(true);
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
    navigate("/signup/borrower");
  };

  const handleLendClick = () => {
    navigate("/signup/lender");
  };

  return (
    <>
      <div className=" container my-5">
        <div className=" m-auto p-5 text-center bg-slate-100 rounded-2xl ">
          <h2 className="text-3xl font-bold mb-4">
            Discover a smarter way to Borrow and Lend with our platform
          </h2>
          <p className="mb-4 text-lg">
            Gone are the days of complex and cumbersome lending processes. At Lending Buddha, we&apos;ve streamlined the entire experience to make borrowing and lending as simple as possible. Our user-friendly interface guides you through each step of the process, ensuring a seamless experience from start to finish. Whether you&apos;re a borrower in need of funds or a lender looking to invest, our platform makes it easy to achieve your financial goals.
          </p>
          <div className="flex justify-evenly mb-5 mt-5">
            <Button className="bg-blue-800 w-auto hover:bg-blue-400" onClick={handleBorrowClick}>Borrow</Button>
            <Button className="bg-green-700 w-auto hover:bg-green-400"onClick={handleLendClick}>Lend</Button>
          </div>
          <Link to="/AboutUs" className="text-blue-500 text-center font-bold hover:text-blue-800 text-lg">Contact Us</Link>
        </div>
        <div className="m-5 flex justify-center items-center flex-col">
          <p className="text-3xl font-bold w-auto p-2 rounded-2xl bg-slate-50  ">Calculator</p>
          <EmiCalculator />
        </div>

        <section className=" flex flex-col my-10 bg-slate-50 p-2 rounded-2xl">
          <h3 className="text-3xl font-semibold mb-2 text-center ">How can Lending Buddha Help You?</h3>
          <p className="mb-4">
            Lending Buddha, India&apos;s leading peer to peer Lending Marketplace, is trusted by doctors, engineers, businessmen and many more for their investing and financing needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="card p-5 border rounded shadow">
              <img
                src="https://getlendingbuddha.online/static/images/custom/want-to-invest-icon.png"
                alt=""
                className="w-16 h-16 mb-4"
              />
              <h4 className="text-lg font-semibold mb-2">Want to Invest</h4>
              <ul className="list-disc list-inside mb-4">
                <li>Earn higher interest returns on your investments as much as 36%</li>
                <li>Invest as low as Rs. 10,000 in multiple verified & creditworthy borrowers</li>
                <li>Earn monthly returns and without any hidden charges</li>
              </ul>
              <Button onClick={handleLendClick} className="w-auto m-5">Invest Now</Button>
              <Link to="/AboutUs" className="text-blue-500">Learn More</Link>
            </div>
            <div className="card p-5 border rounded shadow">
              <img
                src="https://getlendingbuddha.online/static/images/custom/need-a-loan-icon.png"
                alt=""
                className="w-16 h-16 mb-4"
              />
              <h4 className="text-lg font-semibold mb-2">Need a loan</h4>
              <ul className="list-disc list-inside mb-4">
                <li>Save more with low interest rates as low as 12%</li>
                <li>Hassle free borrowing process, interact with investors directly</li>
                <li>Avail small loans Rs. 5,000 to Rs. 5,00,000 without any hidden charges</li>
              </ul>
              <Button onClick={handleBorrowClick} className="m-5 w-auto">Register as Borrower</Button>
              <Link to="/Signup" className="text-blue-500">Learn More</Link>
            </div>
          </div>
        </section>

        <section className=" flex flex-col justify-center items-center rounded-2xl p-3 bg-slate-50 my-10">
          <h3 className="text-xl font-semibold mb-2">
            Need a loan for a Wedding? Want to buy a new car? Take A personal loan online with Lending Buddha
          </h3>
          <p className="mb-4">
            We operate with a mission of keeping our costs low compared to traditional financial institutions by cutting out the middle man and pass all of the savings directly to our investors who get high returns and borrowers who are charged low interest rates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="card p-5 border rounded shadow">
              <img
                src="https://getlendingbuddha.online/static/images/custom/hassle-free-icon.png"
                alt=""
                className="w-16 h-16 mb-4"
              />
              <h4 className="text-lg font-semibold mb-2">Bank Free = Hassle Free</h4>
              <p className="body">Lending Buddha has simplified the lending process in India.</p>
            </div>
            <div className="card p-5 border rounded shadow">
              <img
                src="https://getlendingbuddha.online/static/images/custom/higher-returns-icon.png"
                alt=""
                className="w-16 h-16 mb-4"
              />
              <h4 className="text-lg font-semibold mb-2">Higher Returns</h4>
              <p className="body">Earn much higher returns than any other channel.</p>
            </div>
            <div className="card p-5 border rounded shadow">
              <img
                src="https://getlendingbuddha.online/static/images/custom/potential-earnings-icon.png"
                alt=""
                className="w-16 h-16 mb-4"
              />
              <h4 className="text-lg font-semibold mb-2">Increase Your Potential earnings</h4>
              <p className="body">Save more money with Lending Buddha, No hidden charges.</p>
            </div>
          </div>
        </section>

        <div id="image_link2" className="my-10 text-center">
          <h3 className="text-xl font-semibold mb-4">
            Lending Buddha - Making meaningful connections for all your borrowing and investing needs
          </h3>
          <Button className="w-auto" onClick={handleLendClick}>Register as Lender</Button>
        </div>

        <section className="flex flex-col justify-center items-center rounded-2xl bg-slate-50 p-5 my-10" >
          <h3 className="text-xl font-semibold mb-2">Our Proven Process Produces Results</h3>
          <p className="mb-4">
            Lending Buddha has simplified the process of lending and borrowing. It also gives you complete control of lending and borrowing at your own terms.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="card p-5 border rounded shadow">
              <img
                src="https://getlendingbuddha.online/static/images/custom/step1.png"
                alt=""
                className="w-16 h-16 mb-4"
              />
              <h4 className="text-lg font-semibold mb-2">1. Register</h4>
            </div>
            <div className="card p-5 border rounded shadow">
              <img
                src="https://getlendingbuddha.online/static/images/custom/step2.png"
                alt=""
                className="w-16 h-16 mb-4"
              />
              <h4 className="text-lg font-semibold mb-2">2. Create a profile</h4>
            </div>
            <div className="card p-5 border rounded shadow">
              <img
                src="https://getlendingbuddha.online/static/images/custom/step3.png"
                alt=""
                className="w-16 h-16 mb-4"
              />
              <h4 className="text-lg font-semibold mb-2">3. Apply for loan or invest</h4>
            </div>
          </div>
        </section>

        <section className="flex justify-center items-center flex-col my-5">
          <h3 className="text-xl font-semibold mb-4">Our Users Love Us</h3>
          <CustomerReview />
        </section>

        <div className="my-1 text-center ">
          <Button className="w-auto" onClick={handleLendClick}>Register as Lender</Button>
        </div>

        <FloatingChatButton onClick={toggleChat} />

        {showChatRooms && (
          <ChatRooms
            chatRooms={chatRooms}
            onSelectRoom={onSelectRoom}
            onClose={() => setShowChatRooms(false)}
          />
        )}

        {chatPopUp && (
          lender ? (
            <ChatBoxBorrower
              onClose={() => setChatPopUp(false)}
              roomId={roomData._id}
              lenderId={lender}
              borrowerId={authUser.data.uid}
            />
          ) : (
            <ChatBoxLender
              onClose={() => setChatPopUp(false)}
              roomId={roomData._id}
              lenderId={authUser.data.uid}
              borrowerId={roomData.participants.find((participant) => participant.userType === "Borrower").userId}
            />
          )
        )}
      </div>
    </>
  );
}

export default Home;
