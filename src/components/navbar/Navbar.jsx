import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="flex items-center justify-between p-4 bg-white shadow-md">
            <Link to="/" className="text-2xl font-bold text-gray-800">Lending Buddha</Link>
            <div className="md:hidden bg-black p-2 rounded-lg text-white" onClick={toggleMenu}>
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
            <ul className={`md:flex md:items-center md:space-x-6 absolute md:static bg-white w-full left-0 md:w-auto md:bg-transparent transition-transform transform ${menuOpen ? 'top-16 opacity-100' : 'top-[-490px] opacity-0'}`}>
                <li className="my-2 md:my-0">
                    <Link to="/" className="block px-4 py-2 text-gray-800" onClick={handleLinkClick}>Home</Link>
                </li>
                <li className="my-2 md:my-0">
                    <Link to="/HowItWorks" className="block px-4 py-2 text-gray-800" onClick={handleLinkClick}>How it works</Link>
                </li>
                <li className="my-2 md:my-0">
                    <Link to="/Investors" className="block px-4 py-2 text-gray-800" onClick={handleLinkClick}>Investors</Link>
                </li>
                <li className="my-2 md:my-0">
                    <Link to="/Borrowers" className="block px-4 py-2 text-gray-800" onClick={handleLinkClick}>Borrowers</Link>
                </li>
                <li className="my-2 md:my-0">
                    <Link to="/Blogs" className="block px-4 py-2 text-gray-800" onClick={handleLinkClick}>Blog</Link>
                </li>
                <li className="my-2 md:my-0">
                    <Link to="/AboutUs" className="block px-4 py-2 text-gray-800" onClick={handleLinkClick}>About us</Link>
                </li>
                <li className="my-2 md:my-0">
                    <Link to="/Login" className="block px-4 py-2 text-gray-800" onClick={handleLinkClick}>Login</Link>
                </li>
                <li className="my-2 md:my-0">
                    <Link to="/Signup" className="block px-4 py-2 text-gray-800" onClick={handleLinkClick}>Signup</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
