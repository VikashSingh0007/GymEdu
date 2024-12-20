import React from "react";

const CourseCard = ({ title, description, image, price, link, highlights }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Card Badge */}
      <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
        Featured
      </div>

      {/* Course Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Course Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Highlights */}
        <ul className="text-sm text-gray-500 mb-4 space-y-2">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2 text-green-500">✔️</span> {highlight}
            </li>
          ))}
        </ul>

        {/* Pricing */}
        <div className="text-lg font-semibold text-indigo-500 mb-4">
          ₹{price}
        </div>

        {/* Action Button */}
        <a
          href={link}
          className="block text-center bg-indigo-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Enroll Now
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
