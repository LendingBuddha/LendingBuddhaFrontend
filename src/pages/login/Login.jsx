import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { login } from "../../authContext/apiCalls";
import "../login/login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const { dispatch,error } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [role, setRole] = useState("lender");
  const navigate = useNavigate();

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
    const success = await login(credentials, role, dispatch);
    if (!error) {
      navigate("/");
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
