import React, { useState, useEffect } from 'react';
import Dashboard from '../dashboard/Dashboard';
import Appbar from '../appbar/Appbar';
import './layout.css';
import axios from 'axios';
import { useAuthContext } from '../../context/AuthContextUpdated';

const Layout = () => {
  const { authUser } = useAuthContext();
  const [lenderData, setLenderData] = useState(null);
  const [lendersData, setLendersData] = useState(null);
  const [borrowersData, setBorrowersData] = useState(null);

  

  // Fetch common data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://backendlb-1et8.onrender.com/api/lender/data');
        setLenderData(response.data);
        // console.log("Lenders data:", response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Fetch borrower data if logged in as lender
  useEffect(() => {
    const fetchBorrowersData = async () => {
      if (authUser && authUser.data.role === 'lender' && authUser.refreshToken) {
        try {
          // change url before next commit
          const response = await axios.get("https://lendingbuddhabackend.onrender.com/api/auth/borrower/users", {
            headers: {
              Authorization: `Bearer ${authUser.refreshToken}`,
            },
          });
          setBorrowersData(response.data);
          console.log("Borrowers list:", response.data);
        } catch (error) {
          console.log("Error fetching borrowers:", error);
        }
      }
    };

    fetchBorrowersData();
  }, [authUser]);

  // Fetch lenders data if logged in as borrower
  useEffect(() => {
    const fetchLendersData = async () => {
      if (authUser && authUser.data.role === 'borrower' && authUser.refreshToken) {
        try {
          // change url before next commit
          const response = await axios.get("https://lendingbuddhabackend.onrender.com/api/auth/lender/users", {
            headers: {
              Authorization: `Bearer ${authUser.refreshToken}`,
            },
          });
          setLendersData(response.data);
          console.log("Lenders list:", response.data);
        } catch (error) {
          console.log("Error fetching lenders:", error);
        }
      }
    };

    fetchLendersData();
  }, [authUser]);

  return (
    <div className=" p-2 bg-black">
      <Appbar lenderName={lenderData?.dashboardOverview?.lendorsName} />
      <Dashboard 
        lenderData={lenderData}
        borrowersData={borrowersData}
        lendersData={lendersData}
         user={authUser.data} 
      />
    </div>
  );
};

export default Layout;
