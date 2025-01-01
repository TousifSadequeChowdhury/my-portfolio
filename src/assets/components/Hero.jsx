import React from 'react';

const Hero = () => {
  return (
    <section id="hero"  className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-8 md:px-16 md:py-24 ">
      {/* Left Section - Name and About Me */}
      <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Hi, I'm <span className="text-indigo-600">Tousif Sadeque Chowdhury</span>
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-6">
          I am a passionate software developer with expertise in full-stack web development. I specialize in building
          scalable and performant applications using the latest technologies. I strive to create clean, efficient code
          and deliver great user experiences.
        </p>
        <a
          href="#about"
          className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Learn More
        </a>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="src\assets\images\tousif.jpg" 
          alt="Your Image"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
