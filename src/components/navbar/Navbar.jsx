import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
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
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Signup">Signup</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
