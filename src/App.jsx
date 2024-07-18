import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Suspense } from "react"; // Import useState hook for managing authentication state
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import HowItWorks from "./pages/howItWorks/HowItWorks";
import Borrowers from "./pages/borrowers/Borrowers";
import Blogs from "./pages/blogs/Blogs";
import Investors from "./pages/investors/Investors";
import AboutUs from "./pages/aboutUs/AboutUs";
import "./App.css";
import LoadingIndicator from "./components/Loading/LoadingIndicator";
import FindLender from "./pages/findLenders/FindLender";
import PersonalLoan from "./pages/PersonalLoan/PersonalLoan";
import InvestMoneyOnline from "./pages/InvestMoneyOnline/InvestMoneyOnline";
import ShortTermLoan from "./pages/ShortTermLoan/ShortTermLoan";
import DebtConsolidation from "./pages/DebtConsolidation/DebtConsolidation";
import MedicalLoan from "./pages/MedicalLoan/MedicalLoan";
import TravelLoan from "./pages/TravelLoan/TravelLoan";
import WeddingLoan from "./pages/WeddingLoan/WeddingLoan";
import CreditCardConsolidation from "./pages/CreditCardConsolidation/CreditCardConsolidation";
import BadCreditLoan from "./pages/BadCreditLoan/BadCreditLoan";
import HomeRenovationLoan from "./pages/HomeRenovationLoan/HomeRenovationLoan";
import PersonalLoansInMumbai from "./pages/PersonalLoansInMumbai/PersonalLoansInMumbai";
import PersonalLoansPune from "./pages/PersonalLoansPune/PersonalLoansPune";
import PersonalLoansInChennai from "./pages/PersonalLoansInChennai/PersonalLoansInChennai";
import PersonalLoanDelhiNCR from "./pages/PersonalLoanDelhiNCR/PersonalLoanDelhiNCR";
import PersonalLoanHydrabad from "./pages/PersonalLoanHydrabad/PersonalLoanHydrabad";
import PersonalLoanBangalore from "./pages/PersonalLoanBangalore/PersonalLoanBangalore";
import PersonalLoanAhamadabad from "./pages/PersonalLoanAhamadabad/PersonalLoanAhamadabad";
import NewFooter from "./components/footer/NewFooter";
import LoginHome from "./pages/login/LoginHome";
import LenderLogin from "./pages/login/LenderLogin";
import BorrowerLogin from "./pages/login/BorrowerLogin";
import SignUpHome from "./pages/signup/SignupHome";
import BorrowerSignupPage from "./pages/signup/BorrowerPage";
import LenderSingupPage from "./pages/signup/LenderPage";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContextUpdated";
import Layout from "./pages/layout/Layout.jsx"

// const Footer = lazy(() => import(`./components/footer/Footer`));
function App() {
  const { authUser } = useAuthContext();

  return (
    <Router>
      <div>
        <Navbar  authUser={authUser}/>
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
            element={authUser ? <Navigate to="/" /> : <SignUpHome />}
          />
          <Route
            path="/signup/lender"
            element={authUser ? <Navigate to="/" /> : <LenderSingupPage />}
          />
          <Route
            path="/signup/borrower"
            element={authUser ? <Navigate to="/" /> : <BorrowerSignupPage />}
          />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/FindLenders" element={<FindLender />} />
          <Route path="/personal-loan" element={<PersonalLoan />} />
          <Route path="/invest-money" element={<InvestMoneyOnline />} />
          <Route path="/short-term" element={<ShortTermLoan />} />
          <Route path="/debt-loan" element={<DebtConsolidation />} />
          <Route path="/medical" element={<MedicalLoan />} />
          <Route path="/travel" element={<TravelLoan />} />
          <Route path="/wedding" element={<WeddingLoan />} />
          <Route path="/credit" element={<CreditCardConsolidation />} />
          <Route path="/bad-credit" element={<BadCreditLoan />} />
          <Route path="/home-renovation" element={<HomeRenovationLoan />} />
          <Route path="/loan-mumbai" element={<PersonalLoansInMumbai />} />
          <Route path="/loan-pune" element={<PersonalLoansPune />} />
          <Route path="/loan-chennai" element={<PersonalLoansInChennai />} />
          <Route path="/loan-delhi" element={<PersonalLoanDelhiNCR />} />
          <Route path="/loan-hydrabad" element={<PersonalLoanHydrabad />} />
          <Route path="/loan-bangalore" element={<PersonalLoanBangalore />} />
          <Route path="/loan-ahmedabad" element={<PersonalLoanAhamadabad />} />

          {/* Protected routes */}
          {authUser && (
            <>
              <Route path="/Borrowers" element={<Borrowers />} />
              <Route path="/Investors" element={<Investors />} />
              <Route path="/dashboard" element={<Layout />} />
             {/*  */}
            </>
          )}

          {/* Redirect to login if not authenticated */}
          {!authUser && (
            <>
              <Route path="/Borrowers" element={<Navigate to="/login" />} />
              <Route path="/Investors" element={<Navigate to="/login" />} />
              <Route path="/dashboard" element={<Navigate to="/login" />} />
            </>
          )}
        </Routes>
        <Toaster />
        <Suspense fallback={<LoadingIndicator />}>
          <NewFooter />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
