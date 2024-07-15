import React from "react";
import { FiSend } from "react-icons/fi";
import "./ChatRooms.css";
import './Room.css'
const ChatRooms = ({ chatRooms, setChatRooms ,onSelectRoom}) => {
  return (
    <div className="chat-box">
    <div className="chat-header-container">
      <div className="chat-header">
        <h3>Your chats</h3>
        <button className="close-button" onClick={() => setChatRooms(false)}>
          X
        </button>
      </div>
      </div>
      <div className="messages">
        <div><h3>Continue chat with: </h3></div>
        {chatRooms.map((chatRoom) => (
          <>
          <div className={`room user`}>
          <p className="text">{chatRoom._id}</p>
          <button>
            <FiSend onClick={()=>onSelectRoom(chatRoom)}/>
          </button>
        </div>
        </>
        ))}
      </div>
    </div>
  );
};

export default ChatRooms;
