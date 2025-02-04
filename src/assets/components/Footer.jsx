import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-900 text-white py-8 border-t border-gray-700">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        {/* Copyright Text */}
        <p className="text-sm font-sans text-gray-300">
          &copy; {new Date().getFullYear()} Tousif Chowdhury. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/tousif-chowdhury-b6ab471b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-600 hover:scale-110 transition-all duration-300 ease-in-out text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/TousifSadequeChowdhury"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-600 hover:scale-110 transition-all duration-300 ease-in-out text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/tousifchy136"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-600 hover:scale-110 transition-all duration-300 ease-in-out text-2xl"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;