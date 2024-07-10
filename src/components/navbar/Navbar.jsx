import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { AuthContext } from '../../authContext/AuthContext';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user } = useContext(AuthContext);

    console.log('User from AuthContext:', user);

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
                {user ? (
                    <>
                        {user.role === 'borrower' && (
                            <li><Link to="/FindLenders">Find Lenders</Link></li>
                        )}
                        <li><Link to="/Profile">Profile</Link></li>
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
