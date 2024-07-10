import React from 'react';
import './Message.css';

const Message = ({ text, sender, timestamp, date }) => {
  const messageClass = sender === 'user' ? 'user' : 'receiver';
//   const formattedDate = date ? new Date(date).toLocaleDateString() : '';
  const formattedTime = timestamp ? new Date(timestamp).toLocaleTimeString() : '';

  return (
    <div className={`message ${messageClass}`}>
      <p className="text">{text}</p>
      <div className="message-info">
        {/* {formattedDate && <span className="date">{formattedDate}</span>} */}
        {formattedTime && <span className="timestamp">{formattedTime}</span>}
      </div>
    </div>
  );
};

export default Message;
