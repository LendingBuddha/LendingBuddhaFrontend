import "../signup/signup.css";
import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../authContext/AuthContext";
import { signup } from "../../authContext/apiCalls"; // Assuming you place the login and signup functions in api/auth.js
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
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
    role: "lender",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    document.title = "Signup - Create an Account";
  }, []);

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
        `https://backendlb-1et8.onrender.com/api/auth/signup/${formData.role}`, 
        `https://backendlb-1et8.onrender.com/api/auth/signup/${formData.role}`, 
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
      navigate("/");
    
  }catch(err){
     
       console.log(err);
  }
}

  return (
    <>
      <div className="account-form-container">
        <h2>Create an Account as</h2>
        <div className="role-selector">
          {["lender", "borrower"].map((role) => (
            <button
              key={role}
              type="button"
              className={`toggle-button ${formData.role === role ? "active" : ""}`}
              onClick={() => handleRoleChange(role)}
            >
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          ))}
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
            aria-label="Email"
          />
          <input
            type="text"
            name="fullname"
            placeholder="Your name"
            value={formData.fullname}
            onChange={handleChange}
            required
            aria-label="Full Name"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
            aria-label="Password"
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
            aria-label="Aadhar Card Number"
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
            aria-label="Pancard Number"
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
            aria-label="Date of Birth"
          />
          <input
            type="text"
            name="phonenumber"
            placeholder="Enter Phone Number"
            value={formData.phonenumber}
            onChange={handleChange}
            required
            pattern="\d{10}"
            title="Phone number must be 10 digits"
            aria-label="Phone Number"
          />
          {formData.role === "borrower" && (
            <input
              type="text"
              name="cibilscore"
              placeholder="Enter CIBIL Score"
              value={formData.cibilscore}
              onChange={handleChange}
              required
              pattern="\d+"
              title="CIBIL score must be a number"
              aria-label="CIBIL Score"
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
              aria-label="Profile Picture"
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
