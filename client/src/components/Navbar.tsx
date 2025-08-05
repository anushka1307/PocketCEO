import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-purple-700 tracking-tight">
          Pocket CEO
        </h1>
        <nav className="space-x-6 hidden md:block">
          <Link to="/" className="text-gray-700 hover:text-purple-600 transition">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-purple-600 transition">
            About
          </Link>
          <Link to="/personas" className="text-gray-700 hover:text-purple-600 transition">
            Meet Ava
          </Link>
        </nav>
        <div>
          <Link
            to="/login"
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
