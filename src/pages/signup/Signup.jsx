import "../signup/signup.css";
import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext.jsx";

const Signup = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    aadhar: "",
    pancard: "",
    dob: "",
    role: "Lendor",
    profilePicture: "",
    profilePictureName: ""
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
      profilePicture: e.target.files[0],
      profilePictureName: e.target.files[0].name,
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
    const formDataToSubmit = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSubmit.append(key, formData[key]);
    });
    try {
      const response = await axios.post(
        `/api/signup/${formData.role}`,
        formDataToSubmit,
        { withCredentials: true }
      );
      console.log(response.data);
      setShowSuccess(true);
      login();
    } catch (error) {
      console.error("There was an error creating the account!", error);
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
              formData.role === "Lendor"
                ? "toggle-button active"
                : "toggle-button"
            }
            onClick={() => handleRoleChange("Lendor")}
          >
            Lendor
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
        <p>Enter the details below to create Account</p>
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
              type="text"
              className="file-input-text"
              value={formData.profilePictureName}
              placeholder="Choose Profile Picture"
              readOnly
            />
            <label htmlFor="file-input" className="file-input-label">
              Choose Image
            </label>
            <input
              type="file"
              id="file-input"
              className="file-input"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit" className="create-account-btn">
            Create Account
          </button>
          <p className="login-link">
            Already have an Account? <a href="/login">Login Here</a>
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
