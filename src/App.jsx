import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState,Suspense, lazy } from 'react'; // Import useState hook for managing authentication state
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import HowItWorks from './pages/howItWorks/HowItWorks';
import Borrowers from './pages/borrowers/Borrowers';
import Blogs from './pages/blogs/Blogs';
import Investors from './pages/investors/Investors';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import AboutUs from './pages/aboutUs/AboutUs';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import LoadingIndicator from './components/Loading/LoadingIndicator';
import FindLender from './pages/findLenders/FindLender';

const Footer = lazy(() => import(`./components/footer/Footer`))
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

  return (
    <Router>
      <div>
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/HowItWorks" element={<HowItWorks />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/FindLenders" element={<FindLender/>} />
          

          {/* Protected routes */}
          {/* {isLoggedIn && (
            <>
              <Route path="/borrowers" element={<Borrowers />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/dashboard" element={<Dashboard />} />
           
            </>
          )} */}

          {/* Redirect to login if not authenticated */}
          {/* {!isLoggedIn && (
            <>
              <Route path="/borrowers" element={<Navigate to="/login" />} />
              <Route path="/investors" element={<Navigate to="/login" />} />
              <Route path="/dashboard" element={<Navigate to="/login" />} />
              
            </>
          )} */}
          {/* <Route path="/signup/borrower" element={<SignupBorrower />} />
          <Route path="/signup/lender" element={<SignupLender />} /> */}
        </Routes>
        <Suspense fallback={<LoadingIndicator />}>
        <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
