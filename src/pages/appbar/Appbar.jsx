// src/components/appbar.js
// src/components/appbar.js
import React from 'react';
import './appbar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const appbar = ({ lenderName }) => {
  return (
    <div className="appbar">
    <div className="appbar-left">
      <span className="user-name">{lenderName}</span>
    </div>
    <div className="appbar-center"></div>
    <div className="appbar-right">
      <input type="text" placeholder="Search..." />
     <AccountCircleIcon/>
    </div>
  </div>
  );
};

export default appbar;

