import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContextUpdated";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { logout, authUser } = useAuthContext();

  const logouts = async () => {
    const history = useNavigate();
    setLoading(true);
    try {
      let accessToken = localStorage.getItem("refreshToken");
      if (accessToken) {
        accessToken = accessToken.replace(/^"(.*)"$/, "$1");
      }
      console.log("accessToken", accessToken);

      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      console.log(headers);
      const logoutLink =
        "https://lendingbuddhabackend.onrender.com/api/auth/logout";
      const response = await axios.post(logoutLink, {}, { headers });

      if (response.status === 200) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("authUser");
        toast.success("Logout successful");
        logout();
        history("/");
      } else {
        throw new Error(response.data.error);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Logout Error", error);
        toast.error(
          error.response?.data.message || "Logout failed. Please try again."
        );
      } else {
        console.error("Logout Error", error);
        toast.error(error.message || "Logout failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { logouts, loading };
};

export default useLogout;
