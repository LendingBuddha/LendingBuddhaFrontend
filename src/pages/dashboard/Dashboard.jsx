import { useAuthContext } from "../../context/AuthContextUpdated.jsx";
import React, { useState, useContext } from "react";
import OverviewChart from "../overviewChart/overviewChart.jsx";
import "./dashboard.css";
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
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>

        <div className="tabs">
          <div className="tab active">Overview</div>
          <div className="tab">Analytics</div>
          <div className="tab">Reports</div>
          <div className="tab">Notifications</div>
        </div>
      </div>
      <div className="stats">
        <div className="stat-card">
          <div className="stat-title">Total Amount Lent</div>
          <div className="stat-value">${totalAmountLent.toFixed(2)}</div>
          <div className="stat-change">+20.1% from last month</div>
        </div>
        <div className="stat-card">
          <div className="stat-title">Total Interest Earned</div>
          <div className="stat-value">${totalInterestEarned.toFixed(2)}</div>
          <div className="stat-change">+180.1% from last month</div>
        </div>
        <div className="stat-card">
          <div className="stat-title">Average Loan Amount</div>
          <div className="stat-value">${averageLoanAmount.toFixed(2)}</div>
          <div className="stat-change">+19% from last month</div>
        </div>
        <div className="stat-card">
          <div className="stat-title">Total Active Loans</div>
          <div className="stat-value">{totalActiveLoans}</div>
          <div className="stat-change">+201 since last hour</div>
        </div>
      </div>
      <div className="charts">
        <OverviewChart
          loanIssuanceData={loanIssuanceData}
          paymentCollectionData={paymentCollectionData}
        />
        <div className="recent-sales">
          <h2>
            {user.role === "lender" ? "Total Borrowers" : "Total Lenders"}
          </h2>
          <div className="sales-list">
            {/* Render list of recent borrowers or lenders */}
            {(user.role === "lender" ? borrowersData : lendersData)?.map(
              (person, index) => (
                <div key={index} className="sale-item">
                  <div className="sale-info">
                    <span className="sale-name">{person.fullname}</span>
                    <span className="sale-email">{person.email}</span>
                  </div>
                  <button
                    className="sale-amount"
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
      {chatPopUp ? (
        user.role === "borrower" ? (
          <>
            <ChatBoxBorrower setChatPopUp={setChatPopUp} roomData={roomData} />
          </>
        ) : (
          <ChatBoxLender setChatPopUp={setChatPopUp} roomData={roomData} />
        )
      ) : null}
    </div>
  );
};

export default Dashboard;
