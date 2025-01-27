import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest, FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineSearch, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import logo from '../assets/logo.png';

const NavBar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <nav className="border-b border-gray-100 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <img
            src={logo}
            alt="RegisterKaro Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-gray-900 hover:text-orange-500 px-3 py-2 text-sm font-medium">
            Home
          </a>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-gray-900 group inline-flex items-center hover:text-orange-500 px-3 py-2 text-sm font-medium"
            >
              Our Services
              <svg
                className={`ml-2 h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown menu */}
            {isServicesOpen && (
              <div className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {/* Add your service items here */}
                    <a href="#" className="flex items-start p-3 hover:bg-gray-50 rounded-lg">
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">Business Registration</p>
                        <p className="mt-1 text-sm text-gray-500">Register your business with ease</p>
                      </div>
                    </a>
                    {/* Add more service items as needed */}
                  </div>
                </div>
              </div>
            )}
          </div>

          <a href="/blog" className="text-gray-900 hover:text-orange-500 px-3 py-2 text-sm font-medium">
            Blog
          </a>
          <a href="/contact" className="text-gray-900 hover:text-orange-500 px-3 py-2 text-sm font-medium">
            Contact Us
          </a>
          <a href="/about" className="text-gray-900 hover:text-orange-500 px-3 py-2 text-sm font-medium">
            About us
          </a>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
            Talk An Expert
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    {/* Mobile menu, show/hide based on menu state */}
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="/" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-orange-500">
          Home
        </a>
        <a href="/services" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-orange-500">
          Our Services
        </a>
        <a href="/blog" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-orange-500">
          Blog
        </a>
        <a href="/contact" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-orange-500">
          Contact Us
        </a>
        <a href="/about" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-orange-500">
          About us
        </a>
      </div>
    </div>
  </nav>
  );
};

export default NavBar;
