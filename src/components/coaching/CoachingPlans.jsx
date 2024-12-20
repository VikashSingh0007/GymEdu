import React from "react";

const coachingPlans = [
  {
    title: "Coaching - 6 Months",
    price: "₹6,600/mo",
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
    price: "₹8,833/mo",
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
    <div id="coaching-plans" className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Coaching Plans
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {coachingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {plan.title}
              </h3>
              <p className="text-indigo-600 text-lg font-semibold mb-4">
                {plan.price}
              </p>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <ul className="text-gray-600 mb-4 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-green-500 mr-2">✔️</span> {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="block text-center bg-indigo-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoachingPlans;
