import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: 'Front-End',
      technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    },
    {
      category: 'Back-End',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Firebase'],
    },
    {
      category: 'Tools & Others',
      technologies: ['Git', 'GitHub', 'VS Code', 'NPM', 'Webpack'],
    },
  ];

  return (
    <section id="skills" className="w-full py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Skills</h2>
        <div className="space-y-12">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-700">{skill.category}</h3>
              <div className="flex flex-wrap gap-6">
                {skill.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-indigo-500 text-white rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
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
