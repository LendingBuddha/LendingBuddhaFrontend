import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top" style={{ position: "absolute"}}>
      <div className="container-fluid d-flex justify-content-end">
        <button className="btn btn-outline-primary" style={{ backgroundColor: "#47c9af", color: "white", marginTop: 20, height: 80, width: 170, fontSize: 20, marginLeft: 100 }}>
          <span style={{ textAlign: 'center' }}><strong>Lending<br />Buddha</strong></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/howitworks">HowItWorks</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/borrowers">Borrowers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/blogs">Blogs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/investors">Investors</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/aboutus">AboutUs</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <strong>SignUp</strong>
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/signup/lender">Lender</Link></li>
                <li><Link className="dropdown-item" to="/signup/borrower">Borrower</Link></li>
              </ul>
            </li>
            
            <li className="nav-item">
              <Link to="/login" className="btn btn-outline-light" style={{ background: "transparent", border: "solid", color: "black" }} type="button"><strong>Login</strong></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
