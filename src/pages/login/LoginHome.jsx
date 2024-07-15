import React from 'react';
import { Link } from 'react-router-dom';

const LoginHome = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Welcome to Lending Buddha</h2>
        <p className="text-gray-600 text-center mb-6">
          Join our fintech platform for seamless lending and borrowing experiences.
        </p>
        <div className="grid grid-cols-1 gap-4">
          <Link
            to="/login/lender"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-center block"
          >
            Login as Lender
          </Link>
          <Link
            to="/login/borrower"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md text-center block"
          >
            Login as Borrower
          </Link>
        </div>
        <p className="mt-6 text-center text-gray-500 text-sm">
          Forgot your password?{' '}
          <Link to="/forgot-password" className="text-blue-500 hover:underline">
            Reset it here.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginHome;
