// src/pages/Layout.js
import React, {useState,useEffect, useContext} from 'react';
// import appbar from '../appbar/Appbar.jsx';
import Dashboard from '../dashboard/Dashboard';
import Appbar from '../appbar/Appbar';
import './layout.css';
import axios from 'axios'
import { AuthContext } from '../../authContext/AuthContext';

const Layout = () => {
  const {user} = useContext(AuthContext);
  const [lenderData, setLenderData] = useState(null);
  const [lendersData, setLendersData] = useState(null);
  const [borrowersData, setBorrowersData] = useState(null);


  // fetching common data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/lender/data');
       setLenderData(response.data);
        // console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
 
    // Fetch borrower data if logged in as lender
    useEffect(() => {
      const fetchBorrowersData = async () => {
        if (user && user.role === 'lender' && user.refreshToken) {
          try {
            const response = await axios.get("http://localhost:3000/api/auth/borrower/users", {
              headers: {
                Authorization: `Bearer ${user.refreshToken}`,
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
    }, [user]);

  // Fetch lenders data if logged in as borrower
  useEffect(() => {
    const fetchLendersData = async () => {
      if (user && user.role === 'borrower' && user.refreshToken) {
        try {
          const response = await axios.get("http://localhost:3000/api/auth/lender/users", {
            headers: {
              Authorization: `Bearer ${user.refreshToken}`,
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
  }, [user]);


  return (
    <div className="layout">
      <Appbar lenderName={lenderData?.dashboardOverview?.lendorsName} />
      {/* <Sidebar /> */}
      <Dashboard lenderData={lenderData}
       borrowersData={borrowersData} 
       lendersData={lendersData} user ={user} />
    </div>
  );
};

export default Layout;
