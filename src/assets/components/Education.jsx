import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "American International University-Bangladesh",
      year: "2020 - 2023",
      description: "Focused on software engineering, data structures, algorithms, and full-stack development.",
      logo: "/src/assets/images/Aiub.png",
      achievements: [
        "Graduated with honors",
        "President of the Coding Club",
        "Participated in inter-university programming contests"
      ]
    }
  ];

  return (
    <section id="education" className="w-full py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Education</h2>
        <div className="space-y-12">
          {educationData.map((education, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md flex flex-col lg:flex-row items-center lg:items-start"
            >
              {/* Institution Logo */}
              <img
                src={education.logo}
                alt=""
                className="w-16 h-16 object-contain mb-6 lg:mb-0 lg:mr-8"
              />

              {/* Education Details */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{education.degree}</h3>
                <p className="text-lg text-gray-700 font-medium">{education.institution}</p>
                <p className="text-gray-600 italic mb-4">{education.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;