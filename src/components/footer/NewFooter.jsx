import React, { useState, useEffect } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FacebookRounded, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { Label } from "../ui/label";

const NewFooter = () => {
  // State to manage visibility of dropdowns
  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to toggle dropdown visibility and close others
  const toggleDropdown = (dropdown) => {
    if (isResponsiveView()) {
      if (openDropdown === dropdown) {
        setOpenDropdown(null); // Close dropdown if already open
      } else {
        setOpenDropdown(dropdown); // Open the selected dropdown
      }
    }
  };

  // Function to check if the view is responsive (e.g., small screen)
  const isResponsiveView = () => {
    return window.innerWidth <= 640; // Adjust breakpoint as needed
  };

  // Effect to update dropdown state based on window resize
  useEffect(() => {
    const handleResize = () => {
      if (!isResponsiveView()) {
        setOpenDropdown(null); // Close dropdowns on larger screens
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <footer className="bg-gray-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-between items-start">
            <div className="w-full sm:w-1/2 md:w-1/5 mb-8 sm:mb-0">
              <h3
                className={`text-lg font-semibold mb-2 cursor-pointer ${
                  isResponsiveView()
                    ? "pointer-events-auto"
                    : "pointer-events-none"
                }`}
                onClick={() => toggleDropdown("about")}
              >
                Lending Buddha
              </h3>
              <ul
                className={`${
                  openDropdown === "about" || !isResponsiveView()
                    ? "block"
                    : "hidden"
                } text-sm transition-all duration-300`}
              >
                <li className="mb-1">
                  <a
                    href="/"
                    className="text-gray-300  text-lg hover:text-white"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="/HowItWorks"
                    className="text-blue-300 text-lg hover:text-white"
                  >
                    How It&apos;s Works
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="/AboutUs"
                    className="text-gray-300 text-lg hover:text-white"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#team"
                    className="text-gray-300 text-lg hover:text-white"
                  >
                    Team
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#advisory"
                    className="text-gray-300 text-lg hover:text-white"
                  >
                    Advisory
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#calculate-emi"
                    className="text-gray-300 text-lg hover:text-white"
                  >
                    Loan Calculator
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#blogs"
                    className="text-gray-300 text-lg hover:text-white"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            {/* Repeat similar structure for other columns */}
            <div className="w-full sm:w-1/2 md:w-1/5 mb-8 sm:mb-0">
              <h3
                className={`text-lg font-semibold mb-2 cursor-pointer ${
                  isResponsiveView()
                    ? "pointer-events-auto"
                    : "pointer-events-none"
                }`}
                onClick={() => toggleDropdown("lender")}
              >
                Lender
              </h3>
              <ul
                className={`${
                  openDropdown === "lender" || !isResponsiveView()
                    ? "block"
                    : "hidden"
                } text-sm transition-all duration-300`}
              >
                <li className="mb-1">
                  <a
                    href="#"
                    className="text-gray-300 text-lg hover:text-white"
                  >
                    why invest?
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="/HowItWorks"
                    className="text-gray-300 text-lg hover:text-white"
                  >
                    Investor&apos;s eligibility
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="text-gray-300 text-lg hover:text-white"
                  >
                    How to invest?
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="text-gray-300 text-lg hover:text-white"
                  >
                   Returns and fees
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#advisory"
                    className="text-gray-300 text-lg hover:text-white"
                  >
                   Investor&apos;s code of conduct
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="/AboutUs"
                    className="text-gray-300 text-lg hover:text-white"
                  >
                    Investors FAQ
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#calculate-emi"
                    className="text-gray-300 text-lg hover:text-white"
                  >
                    Tutorial for Investors
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/5 mb-8 sm:mb-0">
              <h3
                className={`text-lg font-semibold mb-2 cursor-pointer ${
                  isResponsiveView()
                    ? "pointer-events-auto"
                    : "pointer-events-none"
                }`}
                onClick={() => toggleDropdown("borrower")}
              >
                Borrower
              </h3>
              <ul
                className={`${
                  openDropdown === "borrower" || !isResponsiveView()
                    ? "block"
                    : "hidden"
                } text-sm transition-all duration-300`}
              >
                <li className="mb-1">
                  <a
                    href="#home"
                    className="text-gray-300 text-lg hover:text-white"
                  >
                   Why borrow?
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#how-it-works"
                    className="text-gray-300 text-lg hover:text-white"
                  >
                   Borrowers eligibility
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#about-us"
                    className="text-gray-300 text-lg hover:text-white"
                  >
                    How to create effective listing
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#team"
                    className="text-gray-300 text-lg hover:text-white"
                  >
                    Purpose of loan
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#advisory"
                    className="text-gray-300 text-lg hover:text-white"
                  >
                    Repayment and interest rates
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#blogs"
                    className="text-gray-300 text-lg hover:text-white"
                  >
                    Borrowers FAQ
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#calculate-emi"
                    className="text-gray-300 text-lg hover:text-white"
                  >
                    Tutorial for borrowers
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/5 mb-8 sm:mb-0">
              <h3
                className={`text-lg font-semibold mb-2 cursor-pointer ${
                  isResponsiveView()
                    ? "pointer-events-auto"
                    : "pointer-events-none"
                }`}
                onClick={() => toggleDropdown("legal")}
              >
                Legal
              </h3>
              <ul
                className={`${
                  openDropdown === "legal" || !isResponsiveView()
                    ? "block"
                    : "hidden"
                } text-sm transition-all duration-300`}
              >
                <li className="mb-1">
                  <a
                    href="#home"
                    className="text-gray-300 text-lg hover:text-white"
                  >
                    Terms of use
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#how-it-works"
                    className="text-gray-300 text-lg hover:text-white"
                  >
                   Privay policy
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#about-us"
                    className="text-gray-300 text-lg hover:text-white"
                  >
                    Refund and Cancellation
                  </a>
                </li>
                
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/5 mb-8 sm:mb-0">
              <h3 className="text-lg font-semibold mb-2">Social Handle</h3>
              <ul className="text-sm">
                <li className="mb-1 flex justify-around">
                  <a
                    href="https://www.facebook.com/lending.buddha.finance"
                    className="text-gray-300 text-lg hover:text-white"
                  >
                    <FacebookRounded />
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 text-lg hover:text-white"
                  >
                    <Twitter />
                  </a>
                  <a
                    href="https://www.instagram.com/lendingbuddha"
                    className="text-gray-300 text-lg hover:text-white"
                  >
                    <Instagram />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCSQ8T9yCJ7HfPR7a1EXVrFw"
                    className="text-gray-300 text-lg hover:text-white"
                  >
                    <YouTube />
                  </a>
                </li>
                <li className="mb-1">
                  <Label className="text-lg">Lending Buddha NewsLetter</Label>
                  <Input
                    text="email"
                    className="mt-3 px-3 py-2 placeholder-black text-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter Your Email"
                  />
                </li>
                <li className="mb-1 mt-2">
                  <Button className="hover:bg-blue-600 w-full">
                    {" "}
                    Subscribe Now
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-300 mb-1">contactus@getlendingbuddha.online</p>
            <p className="text-sm text-gray-300 mb-1">+91-7060372107</p>
            <p className="text-sm text-gray-300">
            Address: Lending Buddha, C/O We Work H-183 , Sector 63 Noida, 201301
            </p>
          </div>
        </div>

        <div className="mt-4 text-center p-4 flex justify-center items-center bg-gray-700">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Lending Buddha. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default NewFooter;
