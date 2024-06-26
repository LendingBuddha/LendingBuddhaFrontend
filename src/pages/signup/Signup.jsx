// src/components/Signup.js
import "../signup/signup.css";
import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../authContext/AuthContext";
import { loginStart, loginSuccess, loginFailure } from "../../authContext/AuthActions";

const Signup = () => {
  const { dispatch } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    aadhar: "",
    pancard: "",
    dob: "",
    role: "Lender",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRoleChange = (role) => {
    setFormData({
      ...formData,
      role,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const response = await axios.post(
        `/api/signup/${formData.role}`,
        formData,
        { withCredentials: true }
      );
      console.log(response.data);
      setShowSuccess(true);
      dispatch(loginSuccess(response.data));
    } catch (error) {
      console.error("There was an error creating the account!", error);
      dispatch(loginFailure(error.message));
    }
  };

  return (
    <>
      <div className="account-form-container">
        <h2>Create an Account as</h2>
        <div className="role-selector">
          <button
            type="button"
            className={
              formData.role === "Lender"
                ? "toggle-button active"
                : "toggle-button"
            }
            onClick={() => handleRoleChange("Lender")}
          >
            Lender
          </button>
          <button
            type="button"
            className={
              formData.role === "Borrower"
                ? "toggle-button active"
                : "toggle-button"
            }
            onClick={() => handleRoleChange("Borrower")}
          >
            Borrower
          </button>
        </div>
        <p>Enter the details below to create an account</p>
        <form onSubmit={handleSubmit} className="account-form">
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="aadhar"
            placeholder="Enter Aadhar Card Number"
            value={formData.aadhar}
            onChange={handleChange}
            required
            maxLength="12"
            pattern="\d{12}"
            title="Aadhar must be 12 digits"
          />
          <input
            type="text"
            name="pancard"
            placeholder="Enter PanCard Number"
            value={formData.pancard}
            onChange={handleChange}
            required
            maxLength="10"
            pattern="[A-Z0-9]{10}"
            title="Pancard must be 10 characters"
          />
          <input
            type="date"
            name="dob"
            placeholder="Select Date of Birth"
            value={formData.dob}
            onChange={handleChange}
            required
            max={
              new Date(new Date().setFullYear(new Date().getFullYear() - 18))
                .toISOString()
                .split("T")[0]
            }
          />
          <div className="file-input-container">
            <input
              type="file"
              name="profileImage"
              onChange={handleChange}
              className="file-input"
              id="profileImage"
            />
            <label htmlFor="profileImage" className="file-input-label">
              Choose Image
            </label>
            <div className="file-input-text">
              {formData.profileImage ? formData.profileImage.name : "No file chosen"}
            </div>
          </div>
          <button type="submit" className="create-account-btn">
            Create Account
          </button>
          <p className="login-link">
            Already have an account? <a href="/login">Login Here</a>
          </p>
        </form>
        <p className="terms">
          By clicking Continue you agree to our{" "}
          <a href="/terms">terms of services</a> and{" "}
          <a href="/privacy">Privacy policy</a>
        </p>
      </div>
      {showSuccess && <div className="success-popup">Signup successful!</div>}
    </>
  );
};

export default Signup;
