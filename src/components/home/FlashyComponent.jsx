

import React, { useEffect } from 'react';
import {headerData} from './HomeData';

const FullScreenHeaderImage = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  const {
    backgroundImage,
    title,
    subtitle,
    ctaButtons,
    overlayStyles,
    gradientAnimationStyles,
  } = headerData

  return (
    <div
      className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-gray-200"
      style={{
        background: 'linear-gradient(to bottom right, #f8fafc, #e5e7eb)',
      }}
    >
      {/* Background Gradient Animation */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 opacity-40 animate-pulse"
        style={gradientAnimationStyles}
      ></div>

      {/* Full-Screen Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Resistance - Transform Your Fitness"
          className="object-cover w-full h-full transition-opacity duration-500 transform opacity-70 hover:opacity-100 hover:scale-110"
        />
      </div>

      {/* Overlay Content */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center bg-black bg-opacity-40 backdrop-blur-sm md:px-8"
        style={overlayStyles}
      >
        {/* Main Title */}
        <h1
          className="mb-6 text-4xl font-extrabold leading-tight tracking-wider text-white md:text-5xl lg:text-6xl text-shadow-lg drop-shadow-2xl animate__animated animate__fadeInUp animate__delay-1s"
          style={{
            textShadow: '0 6px 12px rgba(0, 0, 0, 0.5), 0 3px 6px rgba(0, 0, 0, 0.3)',
            lineHeight: '1.2',
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {title}
        </h1>

        {/* Description */}
        <p
          className="max-w-3xl mx-auto mb-6 text-sm leading-relaxed text-white md:text-base lg:text-lg md:mb-8 drop-shadow-md animate__animated animate__fadeInUp animate__delay-2s"
          style={{
            textShadow: '0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.1)',
            maxWidth: '800px',
            fontFamily: "'Roboto', sans-serif",
            letterSpacing: '0.5px',
          }}
        >
          {subtitle}
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col items-center justify-center mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:mt-8 animate__animated animate__fadeInUp animate__delay-3s">
          {ctaButtons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className={`inline-flex items-center rounded-md ${
                button.isPrimary
                  ? 'bg-gradient-to-r from-indigo-500 to-pink-400 hover:from-pink-500 hover:to-indigo-500 text-white shadow-lg'
                  : 'border-2 border-white hover:bg-white hover:text-indigo-600'
              } px-5 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2`}
              style={{
                transition: 'transform 0.3s ease-in-out, background-color 0.3s ease',
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              {button.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullScreenHeaderImage;