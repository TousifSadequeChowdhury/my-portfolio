import React, { useState, useEffect } from 'react';

const Landing = ({ onComplete }) => {
  const [showWebsite, setShowWebsite] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWebsite(true);
      onComplete(); // Notify parent component when transition is complete
    }, 3000); // 3-second delay for your name display

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen bg-black flex items-center justify-center text-white">
      {!showWebsite && <h1 className="text-4xl">Tousif Sadeque Chowdhury</h1>}
      {showWebsite && <div className="transition-opacity opacity-100">Portfolio Website Content</div>}
    </div>
  );
};

export default Landing;
