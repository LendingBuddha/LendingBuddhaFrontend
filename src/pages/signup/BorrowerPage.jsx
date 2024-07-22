import React, { useState } from "react";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Separator } from "../../components/ui/separator";
import useSignUp from "../../hooks/useSignUp";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const BorrowerSignupPage = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    password: "",
    phonenumber: "",
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

  const handlePhoneChange = (value) => {
    setInputs((prev) => ({
      ...prev,
      phonenumber: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs); // For debugging, logs the form data
    await signup(inputs, "borrower"); // Calls signup function from useSignUp hook
    navigate("/dashboard");
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
              {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </button>
          </div>
          <div>
            <Label
              htmlFor="phonenumber"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Phone Number
            </Label>
            <PhoneInput
              id="phonenumber"
              name="phonenumber"
              placeholder="Enter Your Phone Number"
              value={inputs.phonenumber}
              onChange={handlePhoneChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="flex items-center justify-center">
            <Button className="w-full px-6 py-2 m-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
              Signup
            </Button>
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
