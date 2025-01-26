import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <p className="text-sm">
        &copy; {new Date().getFullYear()} Tousif Chowdhury. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          {/* Social Icons */}
          <a
            href="https://www.linkedin.com/in/tousif-chowdhury-b6ab471b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#1e22ff] text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/TousifSadequeChowdhury"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#1e22ff] text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/tousifchy136"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#1e22ff] text-xl"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
