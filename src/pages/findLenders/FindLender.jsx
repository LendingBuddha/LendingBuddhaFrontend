import React, { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import './findLenders.css';
import { AuthContext } from '../../authContext/AuthContext';
import ChatBoxBorrower from '../../components/chatbox/ChatBoxBorrower';



const FindLender = () => {
const [chatPopUp, setChatPopUp]=useState(false);
const [lenderToChat, setLenderToChat]=useState();
const [lenders, setLenders]=useState([]);
const [roomData, setRoomData] = useState();
const {user}=useContext(AuthContext);
  useEffect(() => {
    const fetchLenders = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/auth/lender/users`, {
          headers: {
            Authorization: `Bearer ${user.refreshToken}`,
          },
          withCredentials: true,
        });
        setLenders(res.data)
      } catch (error) {
        console.error('Error fetching lenders:', error);
        
      }
    };
    fetchLenders();
  }, []);
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
      setRoomData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log({lenderToChat:lenderToChat})
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
            <tr key={lender._id}>
              <td>{lender.fullname}</td>
              <td>{lender.email}</td>
              <td>
                <button className="chatButton" onClick={()=>{setChatPopUp(true), setLenderToChat(lender), onBeginChat(lender)}}>Chat</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {chatPopUp?<div>
      <ChatBoxBorrower lender={lenderToChat} setChatPopUp={setChatPopUp} roomData={roomData}/>
    </div>:null}
    
    </>
  );
};

export default FindLender;
