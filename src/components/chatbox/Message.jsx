import React from 'react';
import './Message.css';
import { useContext } from 'react';
import { AuthContext } from '../../authContext/AuthContext';
const Message = ({ message,senderType}) => {
  const {user}=useContext(AuthContext);
  // const messageClass = user.role === senderType?.toLowerCase() ? 'user' : 'receiver';
//   const formattedDate = date ? new Date(date).toLocaleDateString() : '';
  // const formattedTime = timestamp ? new Date(timestamp).toLocaleTimeString() : '';
  console.log(senderType)
  return (
    <div className={`message user`}>
      <p className="text">{message}</p>
      <div className="message-info">
        {/* {formattedDate && <span className="date">{formattedDate}</span>} */}
        {/* {formattedTime && <span className="timestamp">{formattedTime}</span>} */}
      </div>
    </div>
  );
};

export default Message;
