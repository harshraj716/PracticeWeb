import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import logo from '../assets/logo.png';

const NavBar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#1C4670] text-white py-2 px-4 text-sm flex justify-end items-center gap-4">
        <a
          href="mailto:www.registerkaro.in"
          className="flex items-center gap-2 hover:text-primary"
        >
          <MdEmail className="w-4 h-4" />
          www.registerkaro.in
        </a>
        <span className="h-5 w-px bg-gray-300"></span>
        <a
          href="tel:+918447746183"
          className="flex items-center gap-2 hover:text-primary"
        >
          <MdPhone className="w-4 h-4" />
          +918447746183
        </a>
        <span className="h-5 w-px bg-gray-300"></span>
        <a href="#" className="hover:text-primary">
          <FaInstagram className="w-4 h-4" />
        </a>
        <a href="#" className="hover:text-primary">
          <FaFacebook className="w-4 h-4" />
        </a>
        <a href="#" className="hover:text-primary">
          <FaTwitter className="w-4 h-4" />
        </a>
        <a href="#" className="hover:text-primary">
          <FaPinterest className="w-4 h-4" />
        </a>
      </div>

      {/* Main Navbar */}
      <nav className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <img src={logo} alt="RegisterKaro Logo" className="h-12  w-40 md:w-80 object-contain" />
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="/"
                className="text-gray-900 hover:text-orange-500 px-3 py-2 text-sm font-medium"
              >
                Home
              </a>
              <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-gray-900 group inline-flex items-center hover:text-orange-500 px-3 py-2 text-sm font-medium"
                >
                  Our Services
                  <svg
                    className={`ml-2 h-4 w-4 transition-transform ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <a
                          href="#"
                          className="flex items-start p-3 hover:bg-gray-50 rounded-lg"
                        >
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Business Registration
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Register your business with ease
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <a
                href="/blog"
                className="text-gray-900 hover:text-orange-500 px-3 py-2 text-sm font-medium"
              >
                Blog
              </a>
              <a
                href="/contact"
                className="text-gray-900 hover:text-orange-500 px-3 py-2 text-sm font-medium"
              >
                Contact Us
              </a>
              <a
                href="/about"
                className="text-gray-900 hover:text-orange-500 px-3 py-2 text-sm font-medium"
              >
                About us
              </a>
            </div>

            {/* Right Buttons */}
            <div className="hidden md:flex items-center space-x-4">
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

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <FaBars className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="fixed left-0 top-0 w-64 bg-white h-full shadow-lg p-4">
            <div className="flex justify-between items-center">
            <div className="flex-shrink-0 flex items-center">
              <img src={logo} alt="RegisterKaro Logo" className="h-12 w-40 object-contain" />
            </div>

              <button
                onClick={() => setSidebarOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-4 space-y-4">
              <a href="/" className="block text-gray-900 hover:text-orange-500">
                Home
              </a>
              <a
                href="/services"
                className="block text-gray-900 hover:text-orange-500"
              >
                Our Services
              </a>
              <a
                href="/blog"
                className="block text-gray-900 hover:text-orange-500"
              >
                Blog
              </a>
              <a
                href="/contact"
                className="block text-gray-900 hover:text-orange-500"
              >
                Contact Us
              </a>
              <a
                href="/about"
                className="block text-gray-900 hover:text-orange-500"
              >
                About Us
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
