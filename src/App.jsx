import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import HowItWorks from './pages/howItWorks/HowItWorks';
import Borrowers from './pages/borrowers/Borrowers';
import Blogs from './pages/blogs/Blogs';
import Investors from './pages/investors/Investors';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import AboutUs from './pages/aboutUs/AboutUs';
import './App.css';
import Footer from './components/Footer';
import Layout from './pages/layout/Layout';
import Dashboard from './pages/dashboard/Dashboard';
function App() {
  return (
    // <Router>
    //   <div>
    //     <Navbar />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/HowItWorks" element={<HowItWorks />} />
    //       <Route path="/borrowers" element={<Borrowers />} />
    //       <Route path="/blogs" element={<Blogs />} />
    //       <Route path="/investors" element={<Investors />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/signup" element={<Signup />} />
    //       <Route path="/AboutUs" element={<AboutUs/>} />

    //     </Routes>
    //     <Footer />
    //   </div>
    // </Router>

    <div className="App">
    <Layout>
      <Dashboard />
    </Layout>
  </div>
  );
}

export default App;
