import React, { useState,useEffect,useContext } from 'react';
import { FiSend } from 'react-icons/fi';
import './ChatBox.css';
import io from "socket.io-client";
import axios from "axios";
const socket = io("https://lendingbuddhabackend.onrender.com");

import Message from './Message';
import { AuthContext } from '../../authContext/AuthContext';


const ChatBoxLender = ({ setChatPopUp,roomData }) => {
  const [message, setMessage] = useState("");
  const [senderType, setSenderType] = useState();
  const [messages, setMessages] = useState([]);
const {user}=useContext(AuthContext);
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setSenderType(user.role);
  };
  useEffect(() => {
    if (user) {
      socket.emit("join-room", user.data.uid);
    }
    
    socket.on("receiveMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    
    return () => {
      socket.off("receiveMessage");
    };
    
  }, []);
useEffect(()=>{
  if (roomData) {
    onGetMessages();
  }
},[])
  const sendMessagesToDb = async (roomData, message) => {
    try {
      const res = await axios.post(
        `https://backendlb-1et8.onrender.com/chatroom/message/send/${roomData._id}`,
        { message },
        {
          headers: {
            Authorization: `Bearer ${user.refreshToken}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("sendMessage", {
        message: message,
        members: roomData.participants.map((memberId) => memberId.userId),
      });
      sendMessagesToDb(roomData, message);
      setMessage("");
    }
  };
  
  const onGetMessages = async () => {
    try {
      const res = await axios.get(
        `https://backendlb-1et8.onrender.com/chatroom/message/${roomData._id}`
      );
      res.data.map((message) =>
        setMessages((prevMessages) => [...prevMessages, message])
      );
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="chat-box">
      <div className="chat-header-container">
        <div className='chat-header'>
        <h3>Messages</h3>
        <button className="close-button" onClick={()=>{setChatPopUp(false),setMessages([])}}>
          X
        </button>
        </div>
      
      {/* <h4> Chat with: {lender.name}</h4> */}
      </div>
      <div className="messages">
      {messages.map((msg, index) => (
           <Message key={index} message={msg.message} senderType={msg.senderType}/>
          ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={handleMessageChange}
        />
        <button onClick={sendMessage}>
          <FiSend />
        </button>
      </div>
    </div>
  );
};

export default ChatBoxLender;
