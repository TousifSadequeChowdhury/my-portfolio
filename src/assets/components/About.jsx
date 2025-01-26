import React from 'react';

const About = () => {
  return (
    <section id="about" className="w-full py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section: Text Content */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-lg text-gray-600 mb-6">
              I am a passionate software developer with a deep interest in building web applications that are both
              user-friendly and performant. I specialize in full-stack development and am proficient in modern
              technologies like JavaScript, React, Node.js, and MongoDB.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              My mission is to continuously learn new skills and technologies while applying them to real-world
              projects. I enjoy collaborating with other developers, designers, and stakeholders to bring ideas to
              life.
            </p>

            {/* Skills Section */}
            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Skills</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Full-Stack Development (MERN Stack)</li>
              <li>JavaScript, TypeScript, HTML, CSS</li>
              <li>React.js, Node.js, Express.js</li>
              <li>MongoDB, PostgreSQL</li>
              <li>API Design & RESTful APIs</li>
              <li>Version Control (Git & GitHub)</li>
            </ul>
          </div>

          {/* Right Section: Image */}
      
        </div>  
      </div>
    </section>
  );
};

export default About;
    