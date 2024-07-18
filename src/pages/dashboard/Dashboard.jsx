import React, { useState } from "react";
import OverviewChart from "../overviewChart/overviewChart.jsx";
import ChatBoxBorrower from "../../components/chatbox/ChatBoxBorrower.jsx";
import ChatBoxLender from "../../components/chatbox/ChatBoxLender.jsx";
import axios from "axios";

const Dashboard = ({ lenderData, borrowersData, lendersData, user }) => {
  const {authUser} = useAuthContext();
  const [chatPopUp, setChatPopUp] = useState(false);
  const [roomData, setRoomData] = useState();
  
  if (!lenderData || !lenderData.dashboardOverview) {
    return <div>Loading...</div>;
  }

  const {
    totalAmountLent,
    totalInterestEarned,
    averageLoanAmount,
    totalActiveLoans,
  } = lenderData.dashboardOverview;

  const loanIssuanceData =
    lenderData.dashboardOverview.graphicalInsights.loanIssuanceTrends.monthly;
  const paymentCollectionData =
    lenderData.dashboardOverview.graphicalInsights.paymentCollectionTrends
      .monthly;
      console.log(authUser);
  const onBeginChat = async (userToChat) => {
    try {
      const res = await axios.get(
        `https://lendingbuddhabackend.onrender.com/chatroom/create/${userToChat.uid}`,
        {
          headers: {
            Authorization: `Bearer ${authUser.refreshToken}`,
          },    
          withCredentials: true,
        }
      );
      
      setRoomData(res.data);
      setChatPopUp(!chatPopUp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col flex-1 p-5 bg-black">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <div className="flex space-x-3">
          <div className="px-3 py-1 bg-gray-900 text-white rounded-md cursor-pointer">Overview</div>
          <div className="px-3 py-1 bg-gray-900 text-white rounded-md cursor-pointer">Analytics</div>
          <div className="px-3 py-1 bg-gray-900 text-white rounded-md cursor-pointer">Reports</div>
          <div className="px-3 py-1 bg-gray-900 text-white rounded-md cursor-pointer">Notifications</div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between mb-5">
        <div className="bg-gray-800 p-5 rounded-lg w-full sm:w-[48%] lg:w-[23%] mb-5 sm:mb-0 border border-white text-white">
          <div className="text-lg mb-2">Total Amount Lent</div>
          <div className="text-2xl font-bold">${totalAmountLent.toFixed(2)}</div>
          <div className="mt-2 text-green-500">+20.1% from last month</div>
        </div>
        <div className="bg-gray-800 p-5 rounded-lg w-full sm:w-[48%] lg:w-[23%] mb-5 sm:mb-0 border border-white text-white">
          <div className="text-lg mb-2">Total Interest Earned</div>
          <div className="text-2xl font-bold">${totalInterestEarned.toFixed(2)}</div>
          <div className="mt-2 text-green-500">+180.1% from last month</div>
        </div>
        <div className="bg-gray-800 p-5 rounded-lg w-full sm:w-[48%] lg:w-[23%] mb-5 sm:mb-0 border border-white text-white">
          <div className="text-lg mb-2">Average Loan Amount</div>
          <div className="text-2xl font-bold">${averageLoanAmount.toFixed(2)}</div>
          <div className="mt-2 text-green-500">+19% from last month</div>
        </div>
        <div className="bg-gray-800 p-5 rounded-lg w-full sm:w-[48%] lg:w-[23%] mb-5 sm:mb-0 border border-white text-white">
          <div className="text-lg mb-2">Total Active Loans</div>
          <div className="text-2xl font-bold">{totalActiveLoans}</div>
          <div className="mt-2 text-green-500">+201 since last hour</div>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly">
        <OverviewChart
          loanIssuanceData={loanIssuanceData}
          paymentCollectionData={paymentCollectionData}
        />
        <div className="bg-gray-800 p-5 rounded-lg w-full lg:w-[48%] max-h-80 overflow-y-auto border border-white">
          <h2 className="text-2xl font-bold mb-3 text-white">
            {user.role === "lender" ? "Total Borrowers" : "Total Lenders"}
          </h2>
          <div className="space-y-3">
            {(user.role === "lender" ? borrowersData : lendersData)?.map(
              (person, index) => (
                <div key={index} className="flex justify-between items-center border-b border-gray-700 pb-2 text-white">
                  <div className="flex flex-col flex-grow">
                    <span className="font-bold truncate">{person.fullname}</span>
                    <span className="text-sm text-gray-500 truncate">{person.email}</span>
                  </div>
                  <button
                    className="font-bold text-lg"
                    onClick={() => {
                      onBeginChat(person);
                    }}
                  >
                    💬
                  </button>
                </div>
              )
            ) || <div>No data available</div>}
          </div>
        </div>
      </div>
      {chatPopUp && (
        user.role === "borrower" ? (
          <ChatBoxBorrower setChatPopUp={setChatPopUp} roomData={roomData} />
        ) : (
          <ChatBoxLender setChatPopUp={setChatPopUp} roomData={roomData} />
        )
      )}
    </div>
  );
};

export default Dashboard;
