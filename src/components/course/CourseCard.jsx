import React from "react";
import { Link } from 'react-router-dom';

const CourseCard = ({ title, description, image, price, link, highlights }) => {
  return (
    <div className="relative overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
      {/* Card Badge */}
      <div className="absolute top-0 right-0 px-3 py-1 text-xs font-bold text-white bg-indigo-500 rounded-bl-lg">
        Featured
      </div>

      {/* Course Image */}
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-48"
      />

      {/* Course Content */}
      <div className="p-6">
        <h3 className="mb-2 text-2xl font-bold text-gray-800">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>

        {/* Highlights */}
        <ul className="mb-4 space-y-2 text-sm text-gray-500">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2 text-green-500">✔️</span> {highlight}
            </li>
          ))}
        </ul>

        {/* Pricing */}
        <div className="mb-4 text-lg font-semibold text-indigo-500">
          ${price}
        </div>

        {/* Action Button */}
       
        <Link
        to="/enroll"
        className="block px-6 py-2 font-medium text-center text-white transition-colors bg-indigo-600 rounded-lg hover:bg-indigo-700"
      >
        Enroll Now
      </Link>
      </div>
    </div>
  );
};

export default CourseCard;
