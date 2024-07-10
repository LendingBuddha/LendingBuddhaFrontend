import React, { useState,useEffect } from 'react';
import { FiSend } from 'react-icons/fi';
import './ChatBox.css';
import io from "socket.io-client";
import axios from "axios";
const socket = io("http://localhost:3000");

import Message from './Message';
const user = JSON.parse(localStorage.getItem("user"));

const ChatBox = ({ setChatPopUp, lender,roomData }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    if (user) {
      socket.emit("join-room", user.data.uid);
    }
    if (roomData) {
      onGetMessages();
    }
    socket.on("receiveMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    console.log(messages);
    return () => {
      socket.off("receiveMessage");
    };
  }, [user, roomData]);

  const sendMessagesToDb = async (roomData, message) => {
    try {
      const res = await axios.post(
        `http://localhost:3000/chatroom/message/send/${roomData._id}`,
        { message },
        {
          headers: {
            Authorization: `Bearer ${user.refreshToken}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(res.data);
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
  
  // console.log(roomData);
  const onGetMessages = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/chatroom/message/${roomData._id}`
      );
      console.log({
        messageReceived: res.data.map((message) => message.message),
      });
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
        <button className="close-button" onClick={()=>setChatPopUp(false)}>
          X
        </button>
        </div>
      
      <h4> Chat with: {lender.name}</h4>
      </div>
      <div className="messages">
      {messages.map((msg, index) => (
           <Message key={index} message={msg.message}/>
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

export default ChatBox;
