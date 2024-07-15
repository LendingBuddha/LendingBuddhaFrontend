import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import useLogin from "../../hooks/useLogin";

const BorrowerLogin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { loading, login } = useLogin();

  const [Inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setInputs({ ...Inputs, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(Inputs);
    login(Inputs,"borrwer");
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
            <Input
              id="email"
              type="email"
              value={Inputs.email}
              onChange={onChange}
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
              id="password"
              type={passwordVisible ? "text" : "password"}
              value={Inputs.password}
              onChange={onChange}
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
