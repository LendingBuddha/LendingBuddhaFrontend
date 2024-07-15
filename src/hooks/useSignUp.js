import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import * as z from "zod";

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
      signupEndpoint = "/api/auth/signup/borrower";
    } else if (role === "lender") {
      signupEndpoint = "/api/auth/signup/lender";
    }

    try {
      if (role === "lender") {
        delete input.cibilscore;
      }
      const response = await axios.post(signupEndpoint, input, {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type for file upload
        },
      });
      toast.success("Signup successful!");
      toast.success(response.data.message)
      console.log(response);
      // Handle successful signup (e.g., redirect or display a success message)
      await setAuthUser(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("Error in Signup", error);
        // Handle Axios-specific errors
        toast.error(
          error.response?.data.error || "Signup failed. Please try again."
        );
      } else {
        console.log(error);
        toast.error("An unexpected error occurred");
      }
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
