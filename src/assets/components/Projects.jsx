import React from 'react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { motion } from 'framer-motion';
const TechIcons = {
  React: <FaReact className="text-2xl text-blue-500" />,
  Node: <FaNodeJs className="text-2xl text-green-500" />,
  MongoDB: <FaDatabase className="text-2xl text-green-700" />,
};
const Projects = () => {
  const projects = [
    {
      name: "Project One",
      description: "A full-stack web application built with React, Node.js, and MongoDB.",
      techStack: ["React", "Node.js", "MongoDB", "Express.js"],
      liveDemo: "https://example.com",
      github: "https://github.com/yourusername/project-one",
    },
    {
      name: "Project Two",
      description: "An e-commerce website built with React and Firebase.",
      techStack: ["React", "Firebase", "CSS"],
      liveDemo: "https://example.com",
      github: "https://github.com/yourusername/project-two",
    },
    {
      name: "Project Three",
      description: "A mobile app built with React Native and Redux.",
      techStack: ["React Native", "Redux", "Firebase"],
      liveDemo: "https://example.com",
      github: "https://github.com/yourusername/project-three",
    },
  ];

  return (
    <section id="projects" className="w-full py-16 bg-gradient-to-r ">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-gray-800 text-center mb-16 tracking-wide text-shadow-md">
          Our Stunning Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-indigo-50"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-6">{project.name}</h3>
              <p className="text-gray-600 mb-8 text-lg">{project.description}</p>
              <div className="mb-8">
                <p className="font-semibold text-gray-700 mb-3">Tech Stack:</p>
                <ul className="flex flex-wrap gap-4 text-gray-600">
                  {project.techStack.map((tech, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-3 bg-indigo-100 p-2 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-110 hover:bg-indigo-200"
                    >
                      {TechIcons[tech] || <span className="text-gray-500">{tech}</span>}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-center">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0d3776] hover:text-indigo-800 font-semibold text-lg transition-all duration-300"
                >
                  View Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0d3776] hover:text-indigo-800 font-semibold text-lg transition-all duration-300"
                >
                  View Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
