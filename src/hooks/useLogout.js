import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContextUpdated";
import axios from "axios";
import toast from "react-hot-toast";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      let accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        accessToken = accessToken.replace(/^"(.*)"$/, "$1");
      }

      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

      const Link = "https://backendlb-1et8.onrender.com/api/auth/logout";

      const response = await axios.post(Link,{}, { headers });

      if (response.status === 200) {
        setAuthUser(null);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("authUser");
        toast.success("Logout successful");
      } else {
        throw new Error(response.data.error);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Logout Error", error);
        toast.error(
          error.response?.data.error || "Logout failed. Please try again."
        );
      } else {
        console.error("Logout Error", error);
        toast.error(error.message || "Logout failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading };
};

export default useLogout;
