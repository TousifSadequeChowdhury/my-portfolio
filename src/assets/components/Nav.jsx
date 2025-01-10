import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the mobile menu
  const [isScrolled, setIsScrolled] = useState(false); // State to track if the navbar is scrolled

  // Add scroll listener to toggle glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Set the threshold for scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-10 ${
        isScrolled
          ? 'bg-gray-900/70 backdrop-blur-md shadow-lg' // Glass effect when scrolled
          : 'bg-[#051329]'
      } text-white transition duration-300 ease-in-out`}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold italic">
            <a href="/">Tousif</a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {/* Links for larger screens */}
          <div className="hidden md:flex space-x-6 text-xs">
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-400">
              Home
            </Link>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-400">
              About
            </Link>
            <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-400">
              Skills
            </Link>
            <Link to="experience" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-400">
              Experience
            </Link>
            <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-400">
              Projects
            </Link>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-400">
              Contact
            </Link>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-indigo-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-indigo-400"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-indigo-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-indigo-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-indigo-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-indigo-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
