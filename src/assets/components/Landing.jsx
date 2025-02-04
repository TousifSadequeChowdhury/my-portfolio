import React, { useState, useEffect } from 'react';

const Landing = ({ onComplete }) => {
  const [showWebsite, setShowWebsite] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const name = 'Toousif Sadeque Chowdhury'; 

  useEffect(() => {
    let charIndex = 0;

    // Typing effect
    const typeTimer = setInterval(() => {
      setCurrentText((prev) => prev + name[charIndex]);
      charIndex++;
      if (charIndex >= name.length) {
        clearInterval(typeTimer);
        setShowWebsite(true); // Show website content immediately after typing finishes
        onComplete(); // Notify parent component
      }
    }, 100); 

    return () => clearInterval(typeTimer);
  }, []);

  return (
    <div className="h-screen bg-gray-900 flex items-center justify-center text-white px-4">
  {!showWebsite && (
    <h1 className="text-2xl md:text-5xl lg:text-6xl text-gray-400 font-semibold transition-all duration-300 ease-in-out">
      {currentText}
    </h1>
  )}
  {showWebsite && (
    <div className="transition-opacity opacity-100 text-lg md:text-xl lg:text-2xl font-medium">
      Portfolio Website Content
    </div>
  )}
</div>

  );
};

export default Landing;
