import React from 'react';

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
    <section id="projects" className="w-full py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-4">
                <p className="font-semibold text-gray-700">Tech Stack:</p>
                <ul className="list-disc pl-6 text-gray-600">
                  {project.techStack.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
