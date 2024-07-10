import "../signup/signup.css";
import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../authContext/AuthContext";
import { loginStart, loginSuccess, loginFailure } from "../../authContext/AuthActions";
import { Link } from "react-router-dom";

const Signup = () => {
  const { dispatch } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    fullname: "",
    password: "",
    aadharcard: "",
    pancard: "",
    dob: "",
    phonenumber: "",
    profilePic: null,
    cibilscore: "", 
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profilePic: e.target.files[0],
    });
  };

  const handleRoleChange = (role) => {
    setFormData({
      ...formData,
      role : role.toLowerCase(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    const signupFormData = new FormData();
    for (const key in formData) {
      if (key !== "cibilscore" || formData.role === "borrower") {
        signupFormData.append(key, formData[key]);
      }
    }

    try {
      const response = await axios.post(
        `https://vigilant-space-meme-x9xgp66j7492vx56-3000.app.github.dev/api/auth/signup/${formData.role}`, 
        signupFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
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
            onClick={() => handleRoleChange("lender")}
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
            onClick={() => handleRoleChange("borrower")}
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
            name="fullname"
            placeholder="Your name"
            value={formData.fullname}
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
            name="aadharcard"
            placeholder="Enter Aadhar Card Number"
            value={formData.aadharcard}
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
          <input
            type="text"
            name="phonenumber"
            placeholder="Enter Phone Number"
            value={formData.phonenumber}
            onChange={handleChange}
            required
          />
          {formData.role === "borrower" && ( // Conditional rendering for CIBIL score
            <input
              type="text"
              name="cibilscore"
              placeholder="Enter CIBIL Score"
              value={formData.cibilscore}
              onChange={handleChange}
              required
              pattern="\d+"
              title="CIBIL score must be a number"
            />
          )}
          <div className="file-input-container">
            <input
              type="file"
              name="profilePic"
              onChange={handleFileChange}
              className="file-input"
              id="profilePic"
              required
            />
            <label htmlFor="profilePic" className="file-input-label">
              Choose Image
            </label>
            <div className="file-input-text">
              {formData.profilePic ? formData.profilePic.name : "No file chosen"}
            </div>
          </div>
          <button type="submit" className="create-account-btn">
            Create Account
          </button>
          <p className="login-link">
            Already have an account? <Link to="/login">Login Here</Link>
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
