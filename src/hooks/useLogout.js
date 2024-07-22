import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContextUpdated";
import axios from "axios";
import toast from "react-hot-toast";
let url = import.meta.env.VITE_APP_API_URL;

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { logout, authUser } = useAuthContext();

  const logouts = async () => {
    setLoading(true);
    try {
      let accessToken = authUser.refreshToken;
      if (accessToken) {
        accessToken = accessToken.replace(/^"(.*)"$/, "$1");
      }
      console.log("accessToken",accessToken);

      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
    console.log(headers);
      const Link = `${url}/api/auth/logout`;
      const logoutLink = `${url}/api/auth/logout`;


      const response = await axios.post(logoutLink, {}, { headers });

      if (response.status === 200) {
        
        localStorage.removeItem("accessToken");
        localStorage.removeItem("authUser");
        toast.success("Logout successful");
        logout();
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
