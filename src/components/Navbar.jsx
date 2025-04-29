import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 md:px-20 py-4 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
        <span className="text-green-700 font-bold text-xl">JOB STOCK</span>
      </div>
      <ul className="hidden md:flex items-center space-x-6 text-gray-700 text-sm">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/candidate">For Candidate</Link></li>
        <li><Link to="/employer">For Employer</Link></li>
        <li><Link to="/pages">Pages</Link></li>
        <li><Link to="/help">Help</Link></li>
      </ul>
      <div className="flex items-center space-x-4">
        <button className="text-sm text-gray-700">Sign In</button>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm">
          Upload Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;