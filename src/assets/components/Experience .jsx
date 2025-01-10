import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'; // Icons for location and duration

const Experience = () => {
  const experiences = [
    {
      company: 'United Group',
      location: 'Dhaka, Bangladesh • On-site',
      duration: '1 yr',
      logo: 'src/assets/images/UG.png', // Add image path here
      roles: [
        {
          title: 'Software Engineer',
          type: 'Full-time',
          dates: 'Jan 2024 - Aug 2024',
          duration: '8 mos',
        },
        {
          title: 'Software Developer',
          type: 'Internship',
          dates: 'Sep 2023 - Dec 2023',
          duration: '4 mos',
        },
      ],
    },
  ];

  return (
    <section id="experience" className="w-full bg-gray-50 py-12">
      <div className="max-w-screen-lg mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 relative"
            >
              {/* Company Header */}
              <div className="flex items-center mb-4">
                <img
                  src={experience.logo}
                  alt={experience.company}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{experience.company}</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-gray-400" /> {experience.location}
                  </p>
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    <FaCalendarAlt className="text-gray-400" /> {experience.duration}
                  </p>
                </div>
              </div>

              {/* Roles Timeline */}
              <div className="relative pl-6">
                {/* Vertical Line */}
                <div className="absolute left-[14px] w-px bg-gray-300 top-0 bottom-0"></div>

                {experience.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="flex items-start gap-4 mb-6 relative">
                    {/* Dot */}
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white z-10"></div>
                    {/* Role Details */}
                    <div>
                      <h4 className="text-md font-semibold text-gray-800">{role.title}</h4>
                      <p className="text-sm text-gray-500">{role.type}</p>
                      <p className="text-sm text-gray-500">
                        {role.dates} • {role.duration}
                      </p>
                    </div>
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

export default Experience;
