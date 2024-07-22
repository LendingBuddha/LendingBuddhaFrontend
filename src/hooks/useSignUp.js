import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import * as z from "zod";
import { useAuthContext } from "../context/AuthContextUpdated";
let url = import.meta.env.VITE_APP_API_URL;
import { useNavigate } from "react-router-dom";

// Define Zod schema for validation
const baseSignUpSchema = z.object({
  fullname: z.string().min(1, { message: "Full name is required" }),
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  phonenumber: z.string().min(1, { message: "Phone number is required" }),
  // Removed fields
});

const borrowerSignUpSchema = baseSignUpSchema.extend({
  // Removed CIBIL Score field
});

const useSignUp = () => {
  const { login } = useAuthContext();
  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const signup = async (input, role) => {
    setLoading(true);

    let signUpSchema;
    if (role === "lender") {
      signUpSchema = baseSignUpSchema;
    } else {
      signUpSchema = borrowerSignUpSchema;
    }

    const success = handleInputErrors(input, signUpSchema);

    if (!success) {
      setLoading(false);
      return;
    }

    let signupEndpoint = "/api/auth/signup"; // Default signup endpoint

    // Determine signup endpoint based on role
    if (role === "borrower") {
      signupEndpoint = `${url}/api/auth/signup/borrower`;
    } else if (role === "lender") {
      signupEndpoint = `${url}/api/auth/signup/lender`;
    }
    console.log(signupEndpoint);
    
    try {
      const response = await axios.post(signupEndpoint, input, {
        headers: {
          "Content-Type": "application/json", // Adjusted for JSON payload
        },
      });
      login(response.data);
      toast.success("Signup successful!");
      toast.success(response.data.message);
      console.log(response);
      // Handle successful signup (e.g., redirect or display a success message)
    } catch (error) {
      console.log(error);
      toast.error("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputErrors = (input, schema) => {
    try {
      schema.parse(input);
      return true;
    } catch (e) {
      if (e instanceof z.ZodError) {
        e.errors.forEach((error) => {
          console.log(error);
          toast.error(error.message);
        });
      } else {
        toast.error("An unexpected error occurred");
      }
      return false;
    }
  };

  return {
    loading,
    signup,
  };
};

export default useSignUp;
