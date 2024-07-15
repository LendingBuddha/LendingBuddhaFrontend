import React from 'react';
import { Email, Phone, Room, Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';


const Footer = () => {
    return (
        <>
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-sections">
                    <div className="footer-section">
                        <ul>
                        <h4>About Lending Buddha</h4>
                            <li><a href="/">Home</a></li>
                            <li><a href="/HowItWorks">How it works</a></li>
                            <li><a href="/AboutUs">About us</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#advisory">Advisory</a></li>
                            <li><a href="#blogs">Blog</a></li>
                            <li><a href="#emi-calculator">Calculate EMI</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <ul>
                        <h4>Lenders</h4>
                            <li><a href="#home">Home</a></li>
                            <li><a href="/HowItWorks">How it works</a></li>
                            <li><a href="#about-us">About us</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#advisory">Advisory</a></li>
                            <li><a href="/AboutUs">Blog</a></li>
                            <li><a href="#calculate-emi">Calculate EMI</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <ul>
                        <h4>Borrowers</h4>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#how-it-works">How it works</a></li>
                            <li><a href="#about-us">About us</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#advisory">Advisory</a></li>
                            <li><a href="#blogs">Blog</a></li>
                            <li><a href="#calculate-emi">Calculate EMI</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <ul>
                        <h4>Legal</h4>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#how-it-works">How it works</a></li>
                            <li><a href="#about-us">About us</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#advisory">Advisory</a></li>
                            <li><a href="#blogs">Blog</a></li>
                            <li><a href="#calculate-emi">Calculate EMI</a></li>
                        </ul>
                    </div>
                    <div className="footer-subscribe">
                        <div className="social-icons">
                            <a href="#facebook"><Facebook /></a>
                            <a href="#twitter"><Twitter /></a>
                            <a href="#instagram"><Instagram /></a>
                            <a href="#linkedin"><LinkedIn /></a>
                        </div>
                        <form className="subscribe-form">
                            <input type="email" placeholder="Enter email" />
                            <button type="submit">Subscribe now</button>
                        </form>
                    </div>
                </div>
                <div className="footer-contact">
                    <p><Email /> contactus@gmail.com</p>
                    <p><Phone /> +91 - 34567890</p>
                    <p><Room /> Address: Lending Buddha, H-183, Sector 63 Noida, 201301</p>
                </div>
            </div>
            
        </footer>
        <div className="footer-bottom">
                <p>Copyright @ getLendingBuddha 2024</p>
            </div>
            </>
    );
};

export default Footer;
