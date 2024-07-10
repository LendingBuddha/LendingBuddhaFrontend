import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../authContext/AuthContext";
import { loginStart, loginSuccess, loginFailure } from "../../authContext/AuthActions";
import "../login/login.css"; 
import { Link } from "react-router-dom";

const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [role, setRole] = useState("lender");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRoleChange = (role) => {
    setRole(role);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      console.log('Sending login request:', { role, credentials });
      const response = await axios.post(
        `http://localhost:3000/api/auth/login/${role}`,
        credentials,
        { withCredentials: true }
      );
      console.log('Login response:', response.data);
      dispatch(loginSuccess(response.data));
    } catch (error) {
      console.error('Login error:', error);
      dispatch(loginFailure());
    }
  };

  return (
    <div className="loginContainer">
      <h2>Login as</h2>
      <div className="roleSelector">
        <button
          type="button"
          className={role === "lender" ? "toggleButton active" : "toggleButton"}
          onClick={() => handleRoleChange("lender")}
        >
          Lender
        </button>
        <button
          type="button"
          className={role === "borrower" ? "toggleButton active" : "toggleButton"}
          onClick={() => handleRoleChange("borrower")}
        >
          Borrower
        </button>
      </div>
      <form onSubmit={handleSubmit} className="loginForm">
        <input
          type="email"
          name="email"
          placeholder="name@example.com"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="loginBtn">
          Login
        </button>
      </form>
      <p className="signupLink">
        Don&apos;t have an account? <Link to="/signup">Sign Up Here</Link>
      </p>
    </div>
  );
};

export default Login;
