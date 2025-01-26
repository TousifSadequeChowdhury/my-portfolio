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
    }, 100); // Adjust typing speed (milliseconds per character)

    return () => clearInterval(typeTimer);
  }, []);

  return (
    <div className="h-screen bg-black flex items-center justify-center text-white">
      {!showWebsite && (
        <h1 className="text-4xl text-gray-500">
          {currentText}
        </h1>
      )}
      {showWebsite && (
        <div className="transition-opacity opacity-100">
          Portfolio Website Content
        </div>
      )}
    </div>
  );
};

export default Landing;
