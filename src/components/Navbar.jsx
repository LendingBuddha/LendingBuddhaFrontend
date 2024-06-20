import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/howitworks">How It Works</Link>
      <Link to="/borrowers">Borrowers</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/investors">Investors</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  );
}

export default Navbar;
