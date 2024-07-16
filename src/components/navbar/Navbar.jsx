import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AuthContext } from "../../authContext/AuthContext";
import useLogout from "../../hooks/useLogout";




const Navbar =  ({authUser}) => {
  const {loading,logout}=useLogout()
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileCardOpen, setProfileCardOpen] = useState(false);
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleProfileCard = () => {
    setProfileCardOpen(!profileCardOpen);
  };

  const handleLogout = async() => {
    await logout()
  };

  const navigateToDashboard = () => {
    navigate('/dashboard'); // Adjust the path based on your routing
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">Lending Buddha</Link>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
      <ul className={menuOpen ? "navbar-links active" : "navbar-links"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/HowItWorks">How it works</Link></li>
        <li><Link to="/Investors">Investors</Link></li>
        <li><Link to="/Borrowers">Borrowers</Link></li>
        <li><Link to="/Blogs">Blog</Link></li>
        <li><Link to="/AboutUs">About us</Link></li>
        {authUser ? (
          <>
            {authUser.role === 'borrower' && (
              <li><Link to="/FindLenders">Find Lenders</Link></li>
            )}
            <li className="profile-icon" onClick={toggleProfileCard}>
              <AccountCircleIcon />
              <div className={profileCardOpen ? "profile-card show" : "profile-card"}>
                <div className="profile-info">
                  <p>Name: {authUser.data.displayName}</p>
                  <p>Role: {authUser.role}</p>
                  <p>Email: {authUser.data.email}</p>
                </div>
                <button className="logout-button" onClick={navigateToDashboard}>
                  Go to Dashboard
                </button>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
              </div>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Signup">Signup</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
