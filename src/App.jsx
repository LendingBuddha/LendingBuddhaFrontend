import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, Suspense, lazy } from "react"; // Import useState hook for managing authentication state
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import HowItWorks from "./pages/howItWorks/HowItWorks";

import Blogs from "./pages/blogs/Blogs";

import AboutUs from "./pages/aboutUs/AboutUs";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import LoadingIndicator from "./components/Loading/LoadingIndicator";
// import ChatRoom from "./pages/chatRoom/ChatRoom";

import { Toaster } from "react-hot-toast";

import BorrowerSignupPage from "./pages/signup/BorrowerPage";
import LenderSingupPage from "./pages/signup/LenderPage";
import SignUpHome from "./pages/signup/SignupHome";
import LenderLogin from "./pages/login/LenderLogin";
import BorrowerLogin from "./pages/login/BorrowerLogin";
import LoginHome from "./pages/login/LoginHome";
import { useAuthContext } from "./context/AuthContextUpdated";
import NewFooter from "./components/footer/NewFooter";

function App() {
  // Example state to manage authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to simulate login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to simulate logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const { authUser } = useAuthContext();

  return (
    <>
      <Router>
        <div>
          <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/HowItWorks" element={<HowItWorks />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route
              path="/login"
              element={authUser ? <Navigate to="/" /> : <LoginHome />}
            />
            <Route
              path="/login/lender"
              element={authUser ? <Navigate to="/" /> : <LenderLogin />}
            />
            <Route
              path="/login/borrower"
              element={authUser ? <Navigate to="/" /> : <BorrowerLogin />}
            />
            <Route
              path="/signup"
              element={authUser ? <Navigate to="/login" /> : <SignUpHome />}
            />
            <Route
              path="/signup/borrower"
              element={
                authUser ? <Navigate to="/login" /> : <BorrowerSignupPage />
              }
            />
            <Route
              path="/signup/lender"
              element={
                authUser ? <Navigate to="/login" /> : <LenderSingupPage />
              }
            />
            <Route path="/AboutUs" element={<AboutUs />} />

            <Route
              path="/dashboard"
              element={authUser ? <Navigate to="/login" /> : <Dashboard />}
            />
            
          </Routes>
          <Suspense fallback={<LoadingIndicator />}>
            <NewFooter />
          </Suspense>
        </div>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
