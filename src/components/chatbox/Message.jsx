import React from 'react';
import './Message.css';

const Message = ({ message}) => {
  // const messageClass = sender === 'user' ? 'user' : 'receiver';
//   const formattedDate = date ? new Date(date).toLocaleDateString() : '';
  // const formattedTime = timestamp ? new Date(timestamp).toLocaleTimeString() : '';

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
