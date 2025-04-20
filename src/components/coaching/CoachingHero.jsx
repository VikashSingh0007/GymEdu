import React from "react";
import { Link } from "react-router-dom";
const CoachingHero = () => {
  return (
    <div className="px-6 py-16 text-center text-white bg-gradient-to-r from-purple-600 to-indigo-600">
      <h1 className="mb-4 text-5xl font-bold">Ready to Transform?</h1>
      <p className="mb-6 text-lg">
        If your heart answered "YES", then let's not waste time. <br />
        "6 months" of commitment is all it takes. <br />
        Start Your Transformation Journey Today!
      </p>
      <Link
        to="/enroll"
        className="inline-block px-6 py-3 font-medium text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
      >
        Enroll Now
      </Link>
    </div>
  );
};

export default CoachingHero;
