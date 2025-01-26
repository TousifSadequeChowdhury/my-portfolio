import React from 'react';
import aiublogo from '../images/Aiub.png';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "American International University-Bangladesh",
      year: "2020 - 2024",
      major: "Software Engineering",
      cgpa: "3.29 out of 4",
      description: "Focused on software engineering, data structures, algorithms, and full-stack development."
    }
  ];

  return (
    <section id="education" className="w-full py-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-gray-900 text-center mb-14">
          Education
        </h2>
        <div className="space-y-16">
          {educationData.map((education, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-10 shadow-xl flex flex-col lg:flex-row items-center lg:items-start"
              aria-labelledby={`education-title-${index}`}
            >
              {/* Institution Logo */}
              <img
                src={aiublogo}
                alt={`${education.institution} logo`}
                className="w-24 h-24 object-contain mb-6 lg:mb-0 lg:mr-10"
              />

              {/* Education Details */}
              <div className="text-center lg:text-left">
                <h3
                  id={`education-title-${index}`}
                  className="text-3xl font-semibold text-gray-800 mb-3"
                >
                  {education.degree}
                </h3>
                <p className="text-lg text-gray-700 font-medium mb-2">
                  {education.institution}
                </p>
                <p className="text-gray-600 italic mb-2">{education.year}</p>
                <p className="text-gray-600 italic mb-4">Major: {education.major}</p>
                <p className="text-gray-800 font-medium text-sm mb-4">CGPA: {education.cgpa}</p>
                <p className="text-gray-700">{education.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
