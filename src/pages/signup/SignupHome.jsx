import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';

const SignUpHome = () => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Lending Buddha</h1>
        <p className="text-lg mb-6">
          Lending Buddha is a fintech company that connects borrowers and lenders, providing a seamless and secure platform for financial transactions. Join us to experience a new way of lending and borrowing, tailored to meet your needs.
        </p>
        <p className="text-lg mb-6">
          Choose the type of signup below to get started:
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/signup/borrower">
            <Button className="bg-blue-600 text-white w-full px-6 py-2 m-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
              Borrower Signup
            </Button>
          </Link>
          <Link to="/signup/lender">
            <Button className="bg-green-600 text-white w-full px-6 py-2 m-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600">
              Lender Signup
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpHome;
