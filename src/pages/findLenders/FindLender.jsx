import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './findLenders.css';

const FindLender = () => {
  const [borrowers, setBorrowers] = useState([]);

  useEffect(() => {
    // Fetching data from the provided JSON structure
    const fetchBorrowers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/lender/data');
        setBorrowers(response.data.borrowerManagement.borrowerList);
      } catch (error) {
        console.error('Error fetching borrowers:', error);
        // Using the provided JSON structure for demonstration
        const data = {
          borrowerManagement: {
            borrowerList: [
              {
                borrowerName: "John Doe",
                email: "john.doe@example.com",
                contactNumber: "123-456-7890",
                loanAmount: 15000,
                loanStatus: "Active",
                dateOfLoanIssuance: "2024-06-01",
                cibilScore: 750
              },
              {
                borrowerName: "Jane Smith",
                email: "jane.smith@example.com",
                contactNumber: "234-567-8901",
                loanAmount: 8000,
                loanStatus: "Completed",
                dateOfLoanIssuance: "2023-11-15",
                cibilScore: 720
              },
              {
                borrowerName: "Bob Johnson",
                email: "bob.johnson@example.com",
                contactNumber: "345-678-9012",
                loanAmount: 12500,
                loanStatus: "Defaulted",
                dateOfLoanIssuance: "2022-05-10",
                cibilScore: 680
              }
            ]
          }
        };
        setBorrowers(data.borrowerManagement.borrowerList);
      }
    };
    fetchBorrowers();
  }, []);

  return (
    <div className="findLenderContainer">
      <h2>Available Lenders</h2>
      <table className="lenderTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {borrowers.map((borrower) => (
            <tr key={borrower.email}>
              <td>{borrower.borrowerName}</td>
              <td>{borrower.email}</td>
              <td>
                <button className="chatButton">Chat</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FindLender;
