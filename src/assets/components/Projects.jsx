import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaRocket, FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiJavascript } from "react-icons/si";
import { AiOutlineRobot } from "react-icons/ai";  // Correct source
import alochona from "../images/alochona.png";
import fixeditup from "../images/fixeditup.png";
import zapgadget from "../images/zapgadget.png";

const TechIcons = {
  JavaScript: <SiJavascript className="text-base" />,
  React: <FaReact className="text-base" />,
  Node: <FaNodeJs className="text-base" />,
  MongoDB: <SiMongodb className="text-base" />,
  Express: <SiExpress className="text-base" />,
  Firebase: <SiFirebase className="text-base" />,
  TailwindCSS: <SiTailwindcss className="text-base" />,
  AI: <AiOutlineRobot  className="text-base" />, 
};

const projects = [
  {
    name: "Alochona",
    description: "Alochona is a web-based forum where users can create, like, dislike, and interact with posts. It features AI-powered post generation, Google authentication, and a commenting system.",
    techStack: ["JavaScript", "React", "TailwindCSS", "Node", "AI", "MongoDB", "Express", "Firebase"],
    liveDemo: "https://alochonaa.netlify.app/",
    frontendGithub: "https://github.com/TousifSadequeChowdhury/alochona-client-side",
    backendGithub: "https://github.com/TousifSadequeChowdhury/alochona-server-side",
    image: alochona,
  },
  {
    name: "FixedItUp",
    description: "A service-oriented platform connecting users with home services. Users can search, request, and manage services. Service providers and admins can manage services efficiently.",
    techStack: ["JavaScript", "React","TailwindCSS", "Node", "MongoDB", "Express", "Firebase"],
    liveDemo: "https://fixeditup.netlify.app/",
    frontendGithub: "https://github.com/TousifSadequeChowdhury/fixeditupClientSide",
    backendGithub: "https://github.com/TousifSadequeChowdhury/fixeditupServerSide",
    image: fixeditup,
  },
  {
    name: "Zapgadget",
    description: "A user-friendly web platform for exploring and purchasing with a React-based UI, featuring advanced filtering and sorting to enhance the shopping experience.",
    techStack: ["JavaScript", "React","TailwindCSS", "Node", "MongoDB", "Express"],
    liveDemo: "https://zapgadget.netlify.app/",
    frontendGithub: "https://github.com/TousifSadequeChowdhury/zapgadget-client-side",
    backendGithub: "https://github.com/TousifSadequeChowdhury/zapgadget-server-side",
    image: zapgadget,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-16 tracking-wide">
          Projects
        </h2>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
            >
              {/* Project Image */}
              <div className="w-full h-48 overflow-hidden rounded-md">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Project Content */}
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-800">{project.name}</h3>
                <p className="text-gray-600 mt-2 text-sm">{project.description}</p>
              </div>

              {/* Tech Stack */}
              <div className="mt-4 min-h-[110px]">
                <p className="font-semibold text-gray-700 mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="flex items-center bg-gray-100 px-2 py-1 rounded-md text-xs font-medium text-gray-700">
                      {TechIcons[tech]} <span className="ml-1">{tech}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-4 flex gap-3">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-500 transition-all"
                >
                  <FaRocket className="text-base" />
                  Live Demo
                </a>

                <a
                  href={project.frontendGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-all"
                >
                  <FaGithub className="text-base" />
                  Frontend
                </a>

                <a
                  href={project.backendGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-all"
                >
                  <FaGithub className="text-base" />
                  Backend
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
