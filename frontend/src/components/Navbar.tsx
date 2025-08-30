import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#1E293B] text-white fixed w-full top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left side: Logo */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          {/* Search is now always visible */}
          <div className="flex items-center bg-white text-gray-700 rounded-full px-3 py-1 w-40 sm:w-48">
            <Search size={16} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none w-full text-sm bg-transparent"
            />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#" className="hover:text-blue-300 font-semibold">
            Home
          </a>
          <a href="#about" className="hover:text-blue-300 font-semibold">
            About
          </a>
          <a href="#gallery" className="hover:text-blue-300 font-semibold">
            Gallery
          </a>
          <a href="#news" className="hover:text-blue-300 font-semibold">
            News
          </a>
          <a href="#members" className="hover:text-blue-300 font-semibold">
            Members
          </a>
          <a href="#contact" className="hover:text-blue-300 font-semibold">
            Contact
          </a>
          <button className="bg-blue-400 text-white px-4 py-1 rounded-full font-semibold shadow hover:bg-blue-500 transition">
            Sign In
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden ml-3"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1E293B] border-t border-gray-700">
          <nav className="flex flex-col px-4 py-4 gap-3">
            <a href="#" className="hover:text-blue-300 font-semibold">
              Home
            </a>
            <a href="#about" className="hover:text-blue-300 font-semibold">
              About
            </a>
            <a href="#gallery" className="hover:text-blue-300 font-semibold">
              Gallery
            </a>
            <a href="#news" className="hover:text-blue-300 font-semibold">
              News
            </a>
            <a href="#members" className="hover:text-blue-300 font-semibold">
              Members
            </a>
            <a href="#contact" className="hover:text-blue-300 font-semibold">
              Contact
            </a>
            <button className="bg-blue-400 text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-blue-500 transition">
              Sign In
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
