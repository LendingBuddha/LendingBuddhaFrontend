import axios from "axios";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../authContext/AuthActions";

export const login = async (user, role, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`http://localhost:3000/api/auth/login/${role}`, user);
    const userData = { ...res.data, role }; // Add role to user data
    localStorage.setItem("user", JSON.stringify(userData)); // Store user data in localStorage
    dispatch(loginSuccess(userData));
  } catch (err) {
    dispatch(loginFailure());
  }
};


export const signup = async (formData, dispatch) => {
  dispatch(loginStart());
  try {
    const signupFormData = new FormData();
    for (const key in formData) {
      if (key !== "cibilscore" || formData.role === "borrower") {
        signupFormData.append(key, formData[key]);
      }
    }

    const res = await axios.post(`http://localhost:3000/api/auth/signup/${formData.role}`, signupFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });

    const userData = { ...res.data, role: formData.role };
    localStorage.setItem("user", JSON.stringify(userData));
    dispatch(loginSuccess(userData));
    return true; // Indicate success
  } catch (err) {
    dispatch(loginFailure());
    return false; // Indicate failure
  }
};
