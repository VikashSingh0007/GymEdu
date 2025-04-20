import React from "react";
import { Link } from 'react-router-dom';

const coachingPlans = [
  {
    title: "Coaching - 6 Months",
    price: "$6,600/mo",
    description: "The best timeframe for complete body transformation.",
    features: [
      "Lifetime Access to Course",
      "Customised Training Plan",
      "Customised Diet Plan",
      "Weekly/Monthly Check-Ins",
      "Exercise Form Correction",
      "1-to-1 Coaching Support (Chat)",
    ],
    cta: "Enroll Now",
  },
  {
    title: "Coaching - 3 Months",
    price: "$8,833/mo",
    description: "Minimum time needed for meaningful results.",
    features: [
      "Lifetime Access to Course",
      "Customised Training Plan",
      "Customised Diet Plan",
      "Weekly/Monthly Check-Ins",
      "Exercise Form Correction",
      "1-to-1 Coaching Support (Chat)",
    ],
    cta: "Enroll Now",
  },
];

const CoachingPlans = () => {
  return (
    <div id="coaching-plans" className="px-6 py-16 bg-gray-100">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-4xl font-bold text-center text-gray-800">
          Coaching Plans
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {coachingPlans.map((plan, index) => (
            <div
              key={index}
              className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              <h3 className="mb-2 text-2xl font-bold text-gray-800">
                {plan.title}
              </h3>
              <p className="mb-4 text-lg font-semibold text-indigo-600">
                {plan.price}
              </p>
              <p className="mb-4 text-gray-600">{plan.description}</p>
              <ul className="mb-4 space-y-2 text-gray-600">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2 text-green-500">✔️</span> {feature}
                  </li>
                ))}
              </ul>
              <Link
                 to="/enroll"
                className="block px-6 py-3 font-medium text-center text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoachingPlans;
