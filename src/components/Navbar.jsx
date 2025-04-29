import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-green-600">JOB STOCK</div>
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li><a href="#">Home</a></li>
        <li><a href="#">For Candidate</a></li>
        <li><a href="#">For Employer</a></li>
        <li><a href="#">Pages</a></li>
        <li><a href="#">Help</a></li>
      </ul>
      <div className="space-x-4">
        <button className="text-sm text-green-600">Sign In</button>
        <button className="bg-green-600 text-white px-4 py-2 rounded">Upload Resume</button>
      </div>
    </nav>
  );
};

export default Navbar;
