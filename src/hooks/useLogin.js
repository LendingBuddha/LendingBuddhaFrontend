import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import * as z from "zod";
import { useAuthContext } from "../context/AuthContextUpdated";

// Define Zod schema for validation
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

const useLogin = (role) => {
  const { login } = useAuthContext();
  const [loading, setLoading] = useState(false);

  // Create a cancel token for axios
  const source = axios.CancelToken.source();

  const handleLogin = async (credentials) => {
    setLoading(true);

    try {
      loginSchema.parse(credentials); // Validate input using Zod schema

      let loginEndpoint = "/api/auth/login"; // Default login endpoint

      // Determine login endpoint based on role
      if (role === "lender") {
        loginEndpoint = "https://lendingbuddhabackend.onrender.com/api/auth/login/lender";
      } else if (role === "borrower") {
        loginEndpoint = "https://lendingbuddhabackend.onrender.com/api/auth/login/borrower";
      }
     console.log(loginEndpoint)
      const response = await axios.post(loginEndpoint, credentials, {
        cancelToken: source.token,
      });

      const bearerToken = response.headers["authorization"]
        ?.replace("Bearer ", "")
        .trim(); // Extract bearer token from response headers
      console.log(bearerToken);

      localStorage.setItem("accessToken", bearerToken);

      login(response.data); // Set authenticated state in context
      toast.success("Login successful!");
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled:", error.message);
      } else if (error instanceof z.ZodError) {
        error.errors.forEach((err) => {
          toast.error(err.message);
        });
      } else if (error.response) {
        // Server responded with a status other than 2xx
        console.error("Login Error:", error.response.data);
        toast.error(
          error.response.data.message || "Login failed. Please try again."
        );
      } else {
        // Something else happened while setting up the request
        console.error("Login Error:", error.message);
        toast.error("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Cleanup function to cancel axios requests on unmount
  useEffect(() => {
    return () => {
      source.cancel("Operation canceled by the user.");
    };
  }, []);

  return {
    loading,
    handleLogin,
  };
};

export default useLogin;
