import React from 'react';
import { aboutData } from './HomeAboutData'; 

const About = ({ data = aboutData }) => {
  const { title, highlight, description, image, buttons } = data;

  return (
    <div className="relative py-24 bg-gradient-to-br from-gray-50 to-gray-200">
      {/* Decorative Circles in Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 bg-indigo-100 rounded-full left-1/4 w-72 h-72 mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 bg-pink-100 rounded-full right-1/4 w-72 h-72 mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div className="relative px-6 mx-auto max-w-7xl sm:px-8 lg:px-10">
        <div className="grid items-center grid-cols-1 gap-5 md:grid-cols-2">
          {/* Left Image Section with Hover Effect */}
          <div className="relative group">
            <img
              src={image}
              alt="About Us"
              className="object-cover w-full h-auto max-w-md rounded-3xl"
            />
            {/* <div className="absolute inset-0 transition-opacity duration-500 opacity-0 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 group-hover:opacity-20"></div> */}
          </div>

          {/* Right Content Section */}
          <div>
            <h2 className="mb-6 text-4xl font-extrabold leading-tight tracking-wide text-gray-900 md:text-5xl lg:text-6xl sm:mb-8">
              {title} <span className="text-indigo-600">{highlight}</span>
            </h2>
            <p className="max-w-xl mx-auto mb-8 text-base leading-relaxed text-gray-700 sm:text-lg">
              {description}
            </p>
            <div className="flex flex-col items-center justify-start mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:mt-8">
              {/* Dynamic Buttons */}
              {buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  className={button.className}
                  style={{
                    transition: 'transform 0.3s ease-in-out, background-color 0.3s ease',
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {button.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;