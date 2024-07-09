import { useState, useEffect,useRef } from "react";
import io from "socket.io-client";
import "../styles/index.css";
const socket = io("http://localhost:3000");

const ChatRoom = () => {

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    socket.emit("join-room","123")
    socket.on("receiveMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);
  const sendMessage = () => {
    if (message.trim()) {
      socket.emit(
        "sendMessage",
        {
          message: message,
          room_id: "123"
        },
      );
      console.log(messages);
      setMessage("");
    }
  };

  return (
    <>
      <div className="message-container">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="message"
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
