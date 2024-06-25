import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold">
            <img src="/path/to/logo.png" alt="Logo" className="h-8 w-8 mr-2 inline-block" />
            Home
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/howitworks" className="text-gray-600 hover:text-gray-900">How It Works</Link>
          <Link to="/borrowers" className="text-gray-600 hover:text-gray-900">Borrowers</Link>
          <Link to="/blogs" className="text-gray-600 hover:text-gray-900">Blogs</Link>
          <Link to="/investors" className="text-gray-600 hover:text-gray-900">Investors</Link>
          <Link to="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
          <Link to="/signup" className="text-gray-600 hover:text-gray-900">Signup</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
