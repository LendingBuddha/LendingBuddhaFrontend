import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import './ChatBox.css';
import Message from './Message';

const ChatBox = ({ onClose }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          id: Date.now(),
          text: message,
          sender: 'user',
          timestamp: new Date().toISOString(),
        //   date: new Date().toISOString(),
          
        },
      ]);
      setMessage('');
    }
  };

  return (
    <div className="chat-box">
      <div className="chat-header">
        <h3>Messages</h3>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
      <div className="messages">
        {messages.map((msg) => (
          <Message
            key={msg.id}
            text={msg.text}
            sender={msg.sender}
            timestamp={msg.timestamp}
            // date={msg.date}
          />
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
