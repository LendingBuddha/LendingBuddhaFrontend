import  { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import "../styles/index.css";

// const socket = io("http://localhost:3000");
const socket = io("https://vigilant-space-meme-x9xgp66j7492vx56-3000.app.github.dev/");

const ChatRoom = () => {

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const user = useRef(socket.id); // Initialize useRef with socket.id

  useEffect(() => {
    socket.emit("join-room","123")
    socket.on("receiveMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
      user.current = socket.id; // Update user.current with socket.id
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("sendMessage", {
        message: message,
        senderId: user.current, // Use user.current for senderId
      });
      setMessage("");
    }
  };

  return (
    <>
      <div className="message-container">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            {msg.message}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </>
  );
};

export default ChatRoom;
