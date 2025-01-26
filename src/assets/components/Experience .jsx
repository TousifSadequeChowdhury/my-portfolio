import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaLaptopCode, FaUserGraduate } from 'react-icons/fa';
import UGImage from '../images/UG.png'

const Experience = () => {
  return (
    <section id="experience" className="w-full bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">Experience</h2>

        <VerticalTimeline>
          {/* Jr. Software Engineer */}
          <VerticalTimelineElement
            date="Jan 2024 - Jul 2024"
            icon={<FaLaptopCode />}
            iconStyle={{ background: 'blue', color: 'white' }}
            className="timeline-element"
          >
            <div className="flex items-center">
              {/* Company Logo */}
              <img
                src={UGImage}// Update with the correct path to the logo image
                alt="United Group Logo"
                className="w-10 h-10 rounded-full mr-4"
              />
              {/* Company Name */}
              <h3 className="text-xl font-bold text-gray-800">United Group</h3>
            </div>
            {/* Role Title */}
            <h4 className="text-xl font-bold">Jr. Software Engineer</h4>
            <p className="text-sm text-gray-600">
              Developed and maintained software applications using JavaScript, MS SQL, and customized company frameworks.
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-600 text-sm">
              <li>Collaborated with cross-functional teams to deliver scalable and efficient solutions.</li>
              <li>Optimized database queries to improve system performance.</li>
            </ul>
          </VerticalTimelineElement>

          {/* Software Developer Intern */}
          <VerticalTimelineElement
            date="Sep 2023 - Dec 2023"
            icon={<FaUserGraduate />}
            iconStyle={{ background: 'green', color: 'white' }}
            className="timeline-element"
          >
            <div className="flex items-center">
              {/* Company Logo */}
              <img
                src={UGImage} 
                alt="United Group Logo"
                className="w-10 h-10 rounded-full mr-4"
              />
              {/* Company Name */}
              <h3 className="text-xl font-bold text-gray-800">United Group</h3>
            </div>
            {/* Role Title */}
            <h4 className="text-xl font-bold">Software Developer Intern</h4>
            <p className="text-sm text-gray-600">
              Assisted in building and enhancing applications with JavaScript and MS SQL.
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-600 text-sm">
              <li>Gained hands-on experience in working with the company’s customized framework.</li>
              <li>Supported senior developers in debugging and resolving issues in production.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
