import React from "react";

const features = [
  {
    title: "Custom Training Plan",
    description:
      "Step-by-step workout videos tailored to your goals and lifestyle.",
  },
  {
    title: "Custom Diet Plan",
    description:
      "Simple, Indian-style diet plans with access to our recipe library.",
  },
  {
    title: "Progress Monitoring",
    description:
      "Weekly and monthly check-ins with detailed feedback on your progress.",
  },
  {
    title: "Daily Support",
    description:
      "1-to-1 chat support for all your queries related to training and nutrition.",
  },
];

const CoachingFeatures = () => {
  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          What’s Included in the Coaching?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoachingFeatures;
