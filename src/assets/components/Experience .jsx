import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'United Group',
      location: 'Dhaka, Bangladesh • On-site',
      duration: '1 yr',
      logo: '/path/to/logo.png', // Add image path here
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
    <section className="w-full bg-gray-50 py-8">
      <div className="max-w-screen-md mx-auto p-6 bg- rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Experience</h2>
        {experiences.map((experience, index) => (
         <div key={index} className="mb-8">
         {/* Company Information */}
         <div className="flex items-start mb-4">
           <img
             src="src\assets\images\UG.png"
             alt={experience.company}
             className="w-10 h-10 rounded-full mr-4"
           />
           <div>
             <h3 className="text-lg font-semibold text-gray-800">{experience.company}</h3>
             <p className="text-sm text-gray-500">{experience.duration}</p>
             <p className="text-sm text-gray-500">{experience.location}</p>
           </div>
         </div>

            {/* Roles Timeline with Vertical Line */}
            <div className="relative ml-16">
              {/* Vertical Line */}
              <div className="absolute left-[7px] w-px bg-gray-300 top-0 bottom-0 h-24"></div>

              {experience.roles.map((role, roleIndex) => (
                <div key={roleIndex} className="flex items-start gap-4 mb-6">
                  {/* Dot */}
                  <div className="w-4 h-4 bg-gray-300 rounded-full border-2 border-white z-10"></div>

                  {/* Role Details */}
                  <div className="ml-4">
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
    </section>
  );
};

export default Experience;
