import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-center space-x-6">
      <Link to="/" className="text-blue-500 hover:underline font-semibold">Home</Link>
      <Link to="/books" className="text-blue-500 hover:underline font-semibold">Books</Link>
      <Link to="/profile" className="text-blue-500 hover:underline font-semibold">Profile</Link>
    </nav>
  );
}
