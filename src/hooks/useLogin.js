import { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import * as z from "zod";
import { useAuthContext } from "../context/AuthContextUpdated";

// Define Zod schema for validation
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

const useLogin = (role) => {
  const {login} = useAuthContext();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (credentials) => {
    setLoading(true);

    try {
      loginSchema.parse(credentials); // Validate input using Zod schema

      let loginEndpoint = "/api/auth/login"; // Default login endpoint

      // Determine login endpoint based on role
      if (role === "lender") {
        loginEndpoint = "https://backendlb-1et8.onrender.com/api/auth/login/lender";
      } else if (role === "borrower") {
        loginEndpoint = "https://backendlb-1et8.onrender.com/api/auth/login/borrower";
      }

      const response = await axios.post(loginEndpoint, credentials, { withCredentials: true });
      const userData = response.data;

      login(response.data); // Set authenticated state in context

      toast.success("Login successful!");
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach((err) => {
          toast.error(err.message);
        });
      } else {
        console.error("Login Error:", error);
        toast.error("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleLogin,
  };
};

export default useLogin;
