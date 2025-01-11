import React from 'react';
import { PiReadCvLogo } from "react-icons/pi";

const Hero = () => {
  return (
<section id="hero" className="flex flex-col md:flex-row items-center justify-between glass-effect p-8 md:px-16 md:py-24">
  {/* Left Section - Name and About Me */}
  <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
    <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
      Hi, I'm <span className="text-[#0d3776ce]">Tousif Sadeque Chowdhury</span>
    </h1>
    <p className="text-base md:text-lg text-gray-600 mb-6">
    I am a passionate developer who loves taking on new challenges and constantly strives to learn new things. I enjoy exploring new technologies and improving my skills to stay ahead of the curve. I thrive in collaborative environments and enjoy working with teams to create innovative solutions. Additionally, I am always looking for opportunities to take the lead on projects, guiding teams towards successful outcomes while ensuring high-quality, maintainable code and great user experiences.
   
    </p>
    <a
      href="#about"
      className="inline-block bg-gray-900 text-white py-1 px-3 rounded-lg hover:bg-[#0d37761f] transition duration-300 flex max-w-[120px] w-auto"
    >
      <PiReadCvLogo className="text-sm" />
      Resume
    </a>
  </div>

  {/* Right Section - Image */}
  <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
    <img
      src="src/assets/images/tousif.jpg"
      alt="Your Image"
      className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover border-2 border-black-300 p-1" />
  </div>
</section>


  );
};

export default Hero;
