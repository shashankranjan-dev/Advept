import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="py-4 md:py-5 bg-white opacity-95 shadow-lg">
      <div className="container px-4 mx-auto md:flex md:items-center">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src="/Asset 1.png" className=" w-100 h-11 " alt="" />
          </Link>

          <button
            className="border border-solid border-gray-600 px-3 py-1 rounded text-black font-semibold opacity-50 hover:opacity-75 md:hidden"
            onClick={toggleMobileMenu}
          >
            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isMobileMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 text-lg`}
        >
          <Link
            to="/"
            className="p-2 lg:px-3 md:mx-2 text-black font-semibold  rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="p-2 lg:px-3 md:mx-2 text-black font-semibold rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/service"
            className="p-2 lg:px-3 md:mx-2 text-black font-semibold rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
          >
            Service
          </Link>

          <Link
            to="/contact"
            className="p-2 lg:px-3 md:mx-2 text-black font-semibold rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
          >
            Contact
          </Link>

          <a
            href="https://aarhat-main.vercel.app/community"
            className="p-2 lg:px-6 md:mx-2 text-white shadow-lg font-semibold bg-indigo-400 text-center border border-solid border-indigo-400 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
          >
            Quotation
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
