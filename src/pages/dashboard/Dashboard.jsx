// src/components/dashboard/Dashboard.js
import React from 'react';
import OverviewChart from '../overviewChart/overviewChart.jsx';
import './dashboard.css';

const Dashboard = ({ lenderData }) => {
  if (!lenderData || !lenderData.dashboardOverview) {
    return <div>Loading...</div>;
  }

  const {
    totalAmountLent,
    totalInterestEarned,
    averageLoanAmount,
    totalActiveLoans,
  } = lenderData.dashboardOverview;

  const loanIssuanceData = lenderData.dashboardOverview.graphicalInsights.loanIssuanceTrends.monthly;
  const paymentCollectionData = lenderData.dashboardOverview.graphicalInsights.paymentCollectionTrends.monthly;

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
          <h2>Total Borrowers</h2>
          <div className="sales-list">
            {/* Render list of recent borrowers */}
            {lenderData.dashboardOverview.recentActivity.recentBorrowerRegistrations.map(
              (borrower, index) => (
                <div key={index} className="sale-item">
                  <div className="sale-info">
                    <span className="sale-name">{borrower.name}</span>
                    <span className="sale-email">{borrower.date}</span>
                  </div>
                  <div className="sale-amount">💬</div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
