import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "American International University-Bangladesh",
      year: "2020 - 2023",
      description: "Focused on software engineering, data structures, algorithms, and full-stack development.",
      logo: "/src/assets/images/Aiub.png",
    }
  ];

  return (
    <section id="education" className="w-full py-16 ">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-gray-800 text-left mb-12">Education</h2>
        <div className="space-y-12">
          {educationData.map((education, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out flex flex-col lg:flex-row items-center lg:items-start"
            >
              {/* Left Section: Degree Title and Institution */}
              <div className="lg:w-1/2 mb-6 lg:mb-0">
                <h3 className="text-3xl font-semibold text-blue-600 mb-4">{education.degree}</h3>
                <p className="text-lg text-gray-700 font-medium mb-4">{education.institution}</p>
                <p className="text-gray-600 italic mb-4">{education.year}</p>
                <p className="text-gray-600">{education.description}</p>
              </div>

              {/* Right Section: Logo */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center lg:w-1/2">
                <img
                  src={education.logo}
                  alt="Institution Logo"
                  className="w-28 h-28 object-contain mb-6 lg:mb-0 lg:mr-8 transition-transform duration-500 transform hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
