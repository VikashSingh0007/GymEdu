import React from "react";

const CoachingHero = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-16 px-6">
      <h1 className="text-5xl font-bold mb-4">Ready to Transform?</h1>
      <p className="text-lg mb-6">
        If your heart answered "YES", then let's not waste time. <br />
        "6 months" of commitment is all it takes. <br />
        Start Your Transformation Journey Today!
      </p>
      <a
        href="#coaching-plans"
        className="bg-white text-indigo-600 font-medium px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
      >
        Enroll Now
      </a>
    </div>
  );
};

export default CoachingHero;
