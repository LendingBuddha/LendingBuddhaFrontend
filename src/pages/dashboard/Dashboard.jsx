import React from 'react';
import './dashboard.css';
import BorrowerList from '../BorrowersList/BorrowerList';
import OverviewChart from '../overviewChart/overviewChart';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="card">
        <h3>Total money Lended</h3>
        <h2>$45,231.89</h2>
        <p>+20.1% from last month</p>
      </div>
      <div className="card">
        <h3>Earned Profit</h3>
        <h2>$2350</h2>
        <p>+180.1% from last month</p>
      </div>
      <div className="card">
        <h3>Sales</h3>
        <h2>+12,234</h2> {/* Corrected closing tag */}
        <p>+19% from last month</p>
      </div>
      <div className="card">
        <h3>Active Deals Now</h3>
        <h2>+57</h2>
        <p>+20 since last hour</p>
      </div>
      <div className="overview">
        <h3>Overview</h3>
        <OverviewChart />
      </div>
      <div className="recent-sales">
        <BorrowerList />
      </div>
    </div>
  );
};

export default Dashboard;
