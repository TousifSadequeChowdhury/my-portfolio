import React, { useState } from 'react';
import { FaHome, FaCode, FaBriefcase, FaEnvelope, FaLinkedin, FaGithub, FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center p-4">
        <FaBars className="text-xl" onClick={toggleSidebar} />
      </div>

      {/* Sidebar */}
      <div
        className={`bg-white text-gray-800 w-60 h-auto md:h-screen p-4 transition-all rounded-lg shadow-lg ${isOpen ? 'block' : 'hidden'} md:block`}
      >
        <div className="flex flex-col items-center space-y-4">
          {/* Profile Image */}
          <img
            src="your-image-url.jpg" // Replace with your image URL
            alt="Your Name"
            className="rounded-full w-32 h-32 object-cover border-4 border-gray-200 shadow-md"
          />
          
          {/* Name */}
          <div className="text-lg font-semibold text-center">Your Name</div>

          {/* Skills Section */}
          <div className="w-full text-center">
            <h3 className="text-sm font-semibold mb-2">Skills</h3>
            <ul className="space-y-1 text-sm">
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          {/* Experience Section */}
          <div className="w-full text-center">
            <h3 className="text-sm font-semibold mb-2">Experience</h3>
            <ul className="space-y-1 text-sm">
              <li>Junior Software Engineer - Company A</li>
              <li>Intern - Company B</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl text-blue-600" />
            </a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl text-gray-800" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
