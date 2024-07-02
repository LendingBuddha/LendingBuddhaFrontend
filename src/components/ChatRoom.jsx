import { useState, useEffect } from "react";
import io from "socket.io-client";
import "../styles/index.css";
const socket = io("http://localhost:3000");

const ChatRoom = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    return () => {
      socket.off("receiveMessage");
    };
  }, []);
  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("sendMessage", {
        message: message,
        senderId: localStorage.getItem("socket.id"),
      });
      setMessage("");
    }
  };

  return (
    <>
      <div className="message-container">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              localStorage.getItem("socket.id") === msg.senderId
                ? "sender"
                : "receiver"
            }`}
          >
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
