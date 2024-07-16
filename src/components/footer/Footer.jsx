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
                            <li><a href="#home">why invest?</a></li>
                            <li><a href="/HowItWorks">Investors elegibility</a></li>
                            <li><a href="#about-us">How to invest?</a></li>
                            <li><a href="#team">Returns and fees</a></li>
                            <li><a href="#advisory">Investors code of conduct</a></li>
                            <li><a href="/AboutUs">Investors FAQ</a></li>
                            <li><a href="#calculate-emi">Tutorial for Investors</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <ul>
                        <h4>Borrowers</h4>
                            <li><a href="#home">Why borrow?</a></li>
                            <li><a href="#how-it-works">Borrowers elegibility</a></li>
                            <li><a href="#about-us">How to create effective listing</a></li>
                            <li><a href="#team">Purpose of loan</a></li>
                            <li><a href="#advisory">Repayment and interest rates</a></li>
                            <li><a href="#blogs">Borrowers FAQ</a></li>
                            <li><a href="#calculate-emi">Tutorial for beginners</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <ul>
                        <h4>Legal</h4>
                            <li><a href="#home">Terms of use</a></li>
                            <li><a href="#how-it-works">Privay policy</a></li>
                            <li><a href="#about-us">Refund and Cancellation</a></li>
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
                    <p><Email />contactus@getlendingbuddha.online</p>
                    <p><Phone /> +91-7060372107</p>
                    <p><Room />Lending Buddha, C/O We Work H-183 , Sector 63 Noida, 201301</p>
                </div>
            </div>
            
        </footer>
        <div className="footer-bottom">
                <p>Copyright@getLendingBuddha 2024</p>
            </div>
            </>
    );
};

export default Footer;
