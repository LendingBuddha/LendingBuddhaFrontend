import React, { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import './findLenders.css';
import ChatBox from '../../components/chatbox/ChatBoxBorrower';
import { AuthContext } from '../../authContext/AuthContext';
const lenders=[
  {
    name: "John Doe",
    email: "john.doe@example.com",
    uid: "aQjnqjiBAEd0ZgZSAciaZpIlRGz1",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    uid: "aQjnqjiBAEd0ZgZSAciaZpIlRGz1",
  },
  {
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    uid: "aQjnqjiBAEd0ZgZSAciaZpIlRGz1",
  }
]


const FindLender = () => {
const [chatPopUp, setChatPopUp]=useState(false);
const [lender, setLender]=useState();
const [roomData, setRoomData] = useState();
const {user}=useContext(AuthContext);
// Currently no route for fetching lenders, this code is not usable 
  // useEffect(() => {
  // Fetching data from the provided JSON structure
  //   const fetchBorrowers = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:3000/api/lender/data');
  //       setBorrowers(response.data.borrowerManagement.borrowerList);
  //     } catch (error) {
  //       console.error('Error fetching borrowers:', error);
  //       // Using the provided JSON structure for demonstration
  //       const data = {
  //         borrowerManagement: {
  //           borrowerList: [
  //             {
  //               borrowerName: "John Doe",
  //               email: "john.doe@example.com",
  //               contactNumber: "123-456-7890",
  //               loanAmount: 15000,
  //               loanStatus: "Active",
  //               dateOfLoanIssuance: "2024-06-01",
  //               cibilScore: 750
  //             },
  //             {
  //               borrowerName: "Jane Smith",
  //               email: "jane.smith@example.com",
  //               contactNumber: "234-567-8901",
  //               loanAmount: 8000,
  //               loanStatus: "Completed",
  //               dateOfLoanIssuance: "2023-11-15",
  //               cibilScore: 720
  //             },
  //             {
  //               borrowerName: "Bob Johnson",
  //               email: "bob.johnson@example.com",
  //               contactNumber: "345-678-9012",
  //               loanAmount: 12500,
  //               loanStatus: "Defaulted",
  //               dateOfLoanIssuance: "2022-05-10",
  //               cibilScore: 680
  //             }
  //           ]
  //         }
  //       };
  //       setBorrowers(data.borrowerManagement.borrowerList);
  //     }
  //   };
  //   fetchBorrowers();
  // }, []);
  const onBeginChat = async (lender) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/chatroom/create/${lender.uid}`,
        {
          headers: {
            Authorization: `Bearer ${user.refreshToken}`,
          },
          withCredentials: true,
        }
      );
      console.log(res.data);
      setRoomData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user)
  return (
    <>
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
          {lenders.map((lender) => (
            <tr key={lender.email}>
              <td>{lender.name}</td>
              <td>{lender.email}</td>
              <td>
                <button className="chatButton" onClick={()=>{setChatPopUp(true), setLender(lender), onBeginChat(lender)}}>Chat</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {chatPopUp?<div>
      <ChatBox lender={lender} setChatPopUp={setChatPopUp} roomData={roomData}/>
    </div>:null}
    
    </>
  );
};

export default FindLender;
