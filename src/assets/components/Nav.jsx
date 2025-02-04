import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isScrolled, setIsScrolled] = useState(false); 

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
          : 'bg-gray-900'
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
            <Link 
              to="hero" 
              smooth={true} 
              duration={500} 
              className="cursor-pointer hover:text-blue-600 hover:underline hover:underline-offset-4 transition-all duration-300 ease-in-out"
            >
              About
            </Link>
            <Link 
              to="skills" 
              smooth={true} 
              duration={500} 
              className="cursor-pointer hover:text-blue-600 hover:underline hover:underline-offset-4 transition-all duration-300 ease-in-out"
            >
              Skills
            </Link>
            <Link 
              to="experience" 
              smooth={true} 
              duration={500} 
              className="cursor-pointer hover:text-blue-600 hover:underline hover:underline-offset-4 transition-all duration-300 ease-in-out"
            >
              Experience
            </Link>
            <Link 
              to="projects" 
              smooth={true} 
              duration={500} 
              className="cursor-pointer hover:text-blue-600 hover:underline hover:underline-offset-4 transition-all duration-300 ease-in-out"
            >
              Projects
            </Link>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              className="cursor-pointer hover:text-blue-600 hover:underline hover:underline-offset-4 transition-all duration-300 ease-in-out"
            >
              Contact
            </Link>
            {/* Add the Resume link here */}
            <a 
              href="/Tousif Sadeque Chowdhury.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cursor-pointer hover:text-blue-600 hover:underline hover:underline-offset-4 transition-all duration-300 ease-in-out"
            >
              Resume
            </a>
            {/* GitHub icon */}
            <a
              href="https://github.com/TousifSadequeChowdhury" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-blue-600 transition-all duration-300 ease-in-out"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            {/* Add the Resume link here */}
            <a 
              href="/Tousif Sadeque Chowdhury.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cursor-pointer hover:text-blue-600 hover:underline hover:underline-offset-4 transition-all duration-300 ease-in-out"
            >
              Resume
            </a>
            {/* GitHub icon for mobile */}
            <a
              href="https://github.com/TousifSadequeChowdhury" 
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-blue-600"
            >
              <FaGithub size={24} />
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
