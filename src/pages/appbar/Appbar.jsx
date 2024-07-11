// src/components/appbar.js
import React, { useState } from 'react';
import './appbar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Appbar = ({ lenderName }) => {
  const [showCard, setShowCard] = useState(false);

  const handleIconClick = () => {
    setShowCard(!showCard);
  };

  return (
    <div className="appbar">
      <div className="appbar-left">
        <span className="user-name">{lenderName}</span>
      </div>
      <div className="appbar-center"></div>
      <div className="appbar-right">
        <input type="text" placeholder="Search..." />
        <AccountCircleIcon onClick={handleIconClick} />
        {showCard && (
          <div className="user-card">
            <div className="user-info">
              <p>Name: {lenderName}</p>
              <p>Mobile: 123-456-7890</p>
              <button className="logout-button">Logout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appbar;


