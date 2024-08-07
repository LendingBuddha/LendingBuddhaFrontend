import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import * as z from "zod";
import { useAuthContext } from "../context/AuthContextUpdated";
import { useNavigate } from "react-router-dom";

// Define Zod schema for validation
const baseSignUpSchema = z.object({
  fullname: z.string().min(1, { message: "Full name is required" }),
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  phonenumber: z.string().min(1, { message: "Phone number is required" }),
  aadharcard: z.string().min(1, { message: "Aadhar Card is required" }),
  pancard: z.string().min(1, { message: "PAN Card is required" }),
  dob: z.date().refine(
    (value) => {
      const dob = new Date(value);
      const currentDate = new Date();
      const minAge = 18;

      // Check if value is a valid date and age requirement is met
      return (
        !isNaN(dob.getTime()) &&
        dob < currentDate &&
        dob >=
          new Date(
            currentDate.getFullYear() - minAge,
            currentDate.getMonth(),
            currentDate.getDate()
          )
      );
    },
    { message: "Invalid date of birth or age must be at least 18 years old" }
  ),
});

const borrowerSignUpSchema = baseSignUpSchema.extend({
  cibilscore: z.string().min(1, { message: "CIBIL Score is required" }),
});

const useSignUp = () => {
  const {login} = useAuthContext();
  const history = useNavigate()
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
      signupEndpoint = "https://lendingbuddhabackend.onrender.com/api/auth/signup/borrower";
    } else if (role === "lender") {
      signupEndpoint = "https://lendingbuddhabackend.onrender.com/api/auth/signup/lender";
    }
    console.log(signupEndpoint);
    try {
      if (role === "lender") {
        delete input.cibilscore;
      }
      const response = await axios.post(signupEndpoint, input, {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type for file upload
        },
      });
      login(response.data);
      toast.success("Signup successful!");
      toast.success(response.data.message)
      console.log(response);
      // Handle successful signup (e.g., redirect or display a success message)
    } catch (error) {    
        console.log(error);     
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
