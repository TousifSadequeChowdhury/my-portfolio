import React from "react";
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaGithub, FaMicrosoft, FaRocket, FaRegClipboard, FaJava, FaCode 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiNpm, SiWebpack, SiTensorflow, SiPytorch, SiPython, SiJupyter 
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      category: "Front-End",
      technologies: [
        { name: "React", icon: <FaReact /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      category: "Back-End",
      technologies: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Firebase", icon: <SiFirebase /> },
      ],
    },
    {
      category: "Programming Languages",
      technologies: [
        { name: "C++", icon: <FaCode /> },
        { name: "Java", icon: <FaJava /> },
      ],
    },
    {
      category: "AI Skills",
      technologies: [
        { name: "Python", icon: <SiPython /> },
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "PyTorch", icon: <SiPytorch /> },
        { name: "Jupyter Notebook", icon: <SiJupyter /> },
      ],
    },
    {
      category: "Tools & Others",
      technologies: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: <FaMicrosoft /> },
        { name: "NPM", icon: <SiNpm /> },
        { name: "Webpack", icon: <SiWebpack /> },
        { name: "Postman", icon: <FaRocket /> },
        { name: "Jira", icon: <FaRegClipboard /> },
      ],
    },
  ];

  return (
    <section id="skills" className="w-full py-16 bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">Skills</h2>
        <div className="space-y-16">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-8">
              <h3 className="text-3xl font-semibold text-center text-gray-300">{skill.category}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {skill.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center w-28 p-4 bg-gray-800 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                  >
                    <div className="bg-gray-900 text-white p-3 rounded-full mb-2 text-2xl">
                      {tech.icon}
                    </div>
                    <span className="font-medium text-sm text-gray-200">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
