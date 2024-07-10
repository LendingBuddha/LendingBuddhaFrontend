import { useState, useEffect, useRef, useContext } from "react";
import io from "socket.io-client";
import "../../styles/index.css";
import "./chatRoom.css";
import axios from "axios";
const socket = io("http://localhost:3000");
const user = JSON.parse(localStorage.getItem("user"));

const ChatRoom = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [roomData, setRoomData] = useState();

  const lenderid = "aQjnqjiBAEd0ZgZSAciaZpIlRGz1";
  // console.log({user:user});
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
  // console.log(JSON.parse(localStorage.getItem("user")));
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
  const onBeginChat = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/chatroom/create/${lenderid}`,
        {
          headers: {
            Authorization: `Bearer ${user.refreshToken}`,
          },
          withCredentials: true,
        }
      );
      // console.log(res.data);
      setRoomData(res.data);
    } catch (error) {
      console.log(error);
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
  // console.log({ room: roomData?.participants});
  console.log(messages);
  return (
    <>
      <div className="chatroom-container">
        <div className="message-container">
          {messages.map((msg, index) => (
            <div key={index} className="message">
              {msg.message}
            </div>
          ))}
        </div>
        {roomData || !messages.length === 0 ? (
          <>
            <div className="input-container">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button onClick={sendMessage}>Send</button>
            </div>
          </>
        ) : (
          <button onClick={onBeginChat}>Begin Chat</button>
        )}
      </div>
    </>
  );
};

export default ChatRoom;
