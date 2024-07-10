// src/components/Layout.js
import React from 'react';
import { Menu, Home, Person, ShoppingCart, Settings } from '@mui/icons-material';
import './layout.css';

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="layout">
      <div className="appbar">
        <button className="menu-button" onClick={handleDrawerToggle}>
          <Menu />
        </button>
        <div className="app-title"><h2>Dashboard</h2></div>
      </div>
      <div className={`sidebar ${mobileOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            <li><Home /> Overview</li>
            <li><Person /> Borrowers</li>
            <li><ShoppingCart /> Products</li>
            <li><Settings /> Settings</li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
