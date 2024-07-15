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
import PersonalLoan from './pages/PersonalLoan/PersonalLoan';
import InvestMoneyOnline from './pages/InvestMoneyOnline/InvestMoneyOnline'
import ShortTermLoan from './pages/ShortTermLoan/ShortTermLoan';
import DebtConsolidation from './pages/DebtConsolidation/DebtConsolidation'
import MedicalLoan from './pages/MedicalLoan/MedicalLoan'
import TravelLoan from './pages/TravelLoan/TravelLoan'
import WeddingLoan from './pages/WeddingLoan/WeddingLoan'
import CreditCardConsolidation from './pages/CreditCardConsolidation/CreditCardConsolidation'
import BadCreditLoan from './pages/BadCreditLoan/BadCreditLoan'
import HomeRenovationLoan from './pages/HomeRenovationLoan/HomeRenovationLoan'
import PersonalLoansInMumbai from './pages/PersonalLoansInMumbai/PersonalLoansInMumbai'
import PersonalLoansPune from './pages/PersonalLoansPune/PersonalLoansPune'
import PersonalLoansInChennai from './pages/PersonalLoansInChennai/PersonalLoansInChennai'
import PersonalLoanDelhiNCR from './pages/PersonalLoanDelhiNCR/PersonalLoanDelhiNCR'
import PersonalLoanHydrabad from './pages/PersonalLoanHydrabad/PersonalLoanHydrabad'
import PersonalLoanBangalore from './pages/PersonalLoanBangalore/PersonalLoanBangalore'
import PersonalLoanAhamadabad from './pages/PersonalLoanAhamadabad/PersonalLoanAhamadabad';

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

  const { authUser } = useAuthContext();

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
          <Route path='/personal-loan' element={<PersonalLoan/>}/>
          <Route path='/invest-money' element={<InvestMoneyOnline/>}/>
          <Route path='/short-term' element={<ShortTermLoan/>}/>
          <Route path='/debt-loan' element={<DebtConsolidation/>}/>
          <Route path='/medical' element={<MedicalLoan/>}/>
          <Route path='/travel' element={<TravelLoan/>}/>
          <Route path='/wedding' element={<WeddingLoan/>}/>
          <Route path='/credit' element={<CreditCardConsolidation/>}/>
          <Route path='/bad-credit' element={<BadCreditLoan/>}/>
          <Route path='/home-renovation' element={<HomeRenovationLoan/>}/>
          <Route path='/loan-mumbai' element={<PersonalLoansInMumbai/>}/>
          <Route path='/loan-pune' element={<PersonalLoansPune/>}/>
          <Route path='/loan-chennai' element={<PersonalLoansInChennai/>}/>
          <Route path='/loan-delhi' element={<PersonalLoanDelhiNCR/>}/>
          <Route path='/loan-hydrabad' element={<PersonalLoanHydrabad/>}/>
          <Route path='/loan-bangalore' element={<PersonalLoanBangalore/>}/>
          <Route path='/loan-ahmedabad' element={<PersonalLoanAhamadabad/>}/>





          {/* <Route path='/debt' element={</>}/> */}

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
    // <Layout/>
  );
}

export default App;
