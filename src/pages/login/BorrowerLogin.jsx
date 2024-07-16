import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import useLogin from "../../hooks/useLogin";

const BorrowerLogin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { loading, handleLogin } = useLogin("borrower");

  const [Inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const onEmailChange = (e) => {
    setInputs({ ...Inputs, email: e.target.value });
  };
  
  const onPasswordChange = (e) => {
    setInputs({ ...Inputs, password: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    
    // Basic email validation
    if (!Inputs.email || !Inputs.email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    
    handleLogin(Inputs);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Borrower Login</h2>
        <form className="space-y-6" onSubmit={onSubmit}>
          <div>
            <Label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email
            </Label>
            <input
              
              type="email"
              value={Inputs.email}
              onChange={onEmailChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter Your Email"
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
             
              type={passwordVisible ? "text" : "password"}
              value={Inputs.password}
              onChange={onPasswordChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter Your Password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-10 text-gray-500 focus:outline-none"
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Link
                to="/forgot-password"
                className="text-blue-500 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <Button
              type="submit"
              className="w-full px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {loading ? "Loading..." : "Login"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BorrowerLogin;
