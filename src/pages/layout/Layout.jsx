// src/pages/Layout.js
import React, {useState,useEffect} from 'react';
// import appbar from '../appbar/Appbar.jsx';
import Dashboard from '../dashboard/Dashboard';
import Appbar from '../appbar/Appbar';
import './layout.css';
import axios from 'axios'

const Layout = () => {
  const [lenderData, setLenderData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/lender/data');
       setLenderData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="layout">
      <Appbar lenderName={lenderData?.dashboardOverview?.lendorsName} />
      {/* <Sidebar /> */}
      <Dashboard lenderData={lenderData} />
    </div>
  );
};

export default Layout;
