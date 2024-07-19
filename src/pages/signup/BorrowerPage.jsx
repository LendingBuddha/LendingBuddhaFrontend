import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Separator } from "../../components/ui/separator";
import useSignUp from "../../hooks/useSignUp";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityoffIcon from '@mui/icons-material/VisibilityOff';

const BorrowerSignupPage = () => {
  const navigate= useNavigate()
  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    password: "",
    phonenumber: "",
    aadharcard: "",
    pancard: "",
    cibilscore: "",
    dob: null, // Initialize dob as null for date input
    profilePic: null, // Initialize profilePic as null for file input
  });

  const { loading, signup } = useSignUp();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setInputs((prev) => ({
      ...prev,
      dob: date,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("file", file);
    setInputs((prev) => ({
      ...prev,
      profilePic: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs); // For debugging, logs the form data
    await signup(inputs, "borrower"); // Calls signup function from useSignUp hook
    navigate("/dashboard")
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className="flex items-center justify-center w-screen h-full bg-gray-100 p-4">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
        >
          <div className="flex items-center justify-center">
            <h2 className="text-[1.4rem] font-bold">
              Lending Buddha Borrower Registration
            </h2>
          </div>
          <div>
            <Label
              htmlFor="fullname"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Full Name
            </Label>
            <Input
              id="fullname"
              name="fullname"
              placeholder="Enter Your Full Name"
              type="text"
              value={inputs.fullname}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <Label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="Enter Your Email"
              type="email"
              value={inputs.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="relative">
            <Label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="Enter Your Password"
              type={passwordVisible ? "text" : "password"}
              value={inputs.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-9 text-gray-500 focus:outline-none"
            >
              {passwordVisible ? <VisibilityoffIcon/> : <VisibilityIcon/>}
            </button>
          </div>
          <div>
            <Label
              htmlFor="phonenumber"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Phone Number
            </Label>
            <Input
              id="phonenumber"
              name="phonenumber"
              placeholder="Enter Your Phone Number"
              type="tel"
              value={inputs.phonenumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <Label
              htmlFor="dob"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Date of Birth
            </Label>
            <DatePicker
              selected={inputs.dob}
              onChange={handleDateChange}
              showYearDropdown
              dateFormat="dd/MM/yyyy"
              placeholderText="Select Your Date of Birth"
              maxDate={new Date()}
              className="w-full px-3 py-2 bg-white border rounded-md text-black font-bold text-[.8rem] focus:outline-none focus:ring-2 focus:ring-blue-600"
              popperClassName="react-datepicker-popper"
            />
          </div>
          <div>
            <Label
              htmlFor="aadharcard"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Aadhaar Card
            </Label>
            <Input
              id="aadharcard"
              name="aadharcard"
              placeholder="Enter Your Aadhaar Card Number"
              type="text"
              value={inputs.aadharcard}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <Label
              htmlFor="pancard"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              PAN Card
            </Label>
            <Input
              id="pancard"
              name="pancard"
              placeholder="Enter Your PAN Card Number"
              type="text"
              value={inputs.pancard}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <Label
              htmlFor="cibilscore"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              CIBIL Score
            </Label>
            <Input
              id="cibilscore"
              name="cibilscore"
              placeholder="Enter Your CIBIL Score"
              type="number"
              value={inputs.cibilscore}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <Label
              htmlFor="profilePic"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Profile Image
            </Label>
            <input
              id="profilePic"
              name="profilePic"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="flex items-center justify-center">
           <Button className="w-full px-6 py-2 m-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">Singup</Button>
          </div>
          <Separator />

          <span className="text-lg">
            Already have an account? Please{" "}
            <Link
              to="/login/borrower"
              className="text-blue-500 hover:underline"
            >
              login to LendingBuddha
            </Link>
            .
          </span>
        </form>
      </div>
    </>
  );
};

export default BorrowerSignupPage;
