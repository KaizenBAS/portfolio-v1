import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Hero = () => {
  const words = ["Frontend Developer", "JavaScript Developer", "React Enthusiast"];
  const colors = ["text-red-500", "text-blue-500", "text-green-500"]; // Different colors for each word
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimeout = setTimeout(() => {
      setFadeOut(true); // Start fading out the word
      setTimeout(() => {
        setFadeOut(false); // Stop fading out
        setCurrentWordIndex((prev) => (prev + 1) % words.length); // Move to the next word
      }, 500); // Wait for the fade-out duration before switching to the next word
    }, 2000); // Show each word for 2 seconds before fading out

    return () => clearTimeout(fadeTimeout); // Cleanup timeout on component unmount
  }, [currentWordIndex]);

  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-[url(/bas.png)] bg-cover"
      style={{ backgroundSize: '35%', backgroundPosition: 'left 100px top 100px' }}
    >
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-600px)]">
        <div className="hidden lg:block"></div>
        <div className="text-[50px] sm:text-[80px] mt-1 font-bold leading-tight flex justify-center items-center">
          <div className="mt-56 text-center">
            <p className="inline">I am a </p>
            <span
              className={`inline transition-opacity duration-500 ${
                fadeOut ? 'opacity-0' : 'opacity-100'
              } ${colors[currentWordIndex]}`} // Apply dynamic color based on the current word
            >
              {words[currentWordIndex]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
