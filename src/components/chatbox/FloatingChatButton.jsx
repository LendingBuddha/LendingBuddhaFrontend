import React from 'react';
import { FiMessageSquare } from 'react-icons/fi';
import './FloatingChatButton.css';

const FloatingChatButton = ({ onClick }) => {
  return (
    <div className="floating-chat-button" onClick={onClick}>
      <FiMessageSquare />
    </div>
  );
};

export default FloatingChatButton;
