import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg sticky top-0 z-50">
      <div className="relative container mx-auto flex items-center justify-between p-5">
        <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 hover:scale-105 transition-transform duration-300">
          <a href="#home">My<span className="text-light">Portfolio</span></a>
        </div>

        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 hidden md:flex justify-center space-x-12 text-lg font-medium">
          <a
            href="#home"
            className="text-gray-300 hover:text-white transition-transform duration-300 hover:scale-105"
          >
            Home
          </a>
          <a
            href="#skills"
            className="text-gray-300 hover:text-white transition-transform duration-300 hover:scale-105"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="text-gray-300 hover:text-white transition-transform duration-300 hover:scale-105"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:text-white transition-transform duration-300 hover:scale-105"
          >
            Projects
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          <a
            href="https://www.cake.me/s--sajbOcsyBeicvxxjj1C18A--/alif-alfarizi-f6e3e1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-semibold text-gray-300 bg-gray-800 border border-gray-600 rounded-md hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white transition-all duration-300 hover:scale-105 relative group"
          >
            My CV
          </a>
          <a
            href="https://www.linkedin.com/in/alif-alfarizi-8b7420293/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-semibold text-gray-300 bg-gray-800 border border-gray-600 rounded-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white transition-all duration-300 hover:scale-105 relative group"
          >
            My LinkedIn
          </a>
        </div>


        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-300 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={`w-6 h-6 ${menuOpen ? "rotate-90" : ""}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-900 shadow-lg overflow-hidden transition-all duration-500">
          <div className="flex flex-col items-center space-y-6 py-6">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="https://your-cv-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              My CV
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              My LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

