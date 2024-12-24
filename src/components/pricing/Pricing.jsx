import React from "react";

const pricingPlans = [
  {
    title: "Coaching - 6 Months",
    price: "₹6,600/mo",
    discount: "34% OFF",
    description:
      "The best timeframe for a complete body transformation. Includes lifetime access to the course.",
    features: [
      "Lifetime Access to Course",
      "Customized Training Plan",
      "Customized Diet Plan",
      "Weekly/Monthly Check-Ins",
      "Exercise Form Correction",
      "1-to-1 Coaching Support",
    ],
    cta: "Enroll Now",
    popular: true,
    badge: "Best Value",
  },
  {
    title: "Coaching - 3 Months",
    price: "₹8,833/mo",
    discount: "10% OFF",
    description:
      "The minimum time required for meaningful results. Includes lifetime access to the course.",
    features: [
      "Lifetime Access to Course",
      "Customized Training Plan",
      "Customized Diet Plan",
      "Weekly/Monthly Check-Ins",
      "Exercise Form Correction",
      "1-to-1 Coaching Support",
    ],
    cta: "Enroll Now",
    badge: "Recommended",
  },
  {
    title: "Premium Coaching - 12 Months",
    price: "₹5,500/mo",
    discount: "40% OFF",
    description:
      "For those serious about long-term results and sustainable fitness. Includes priority support.",
    features: [
      "Lifetime Access to Course",
      "Priority Coaching Support",
      "Advanced Diet Plan",
      "Monthly Progress Reports",
      "Video Form Analysis",
      "Personalized Supplement Guide",
    ],
    cta: "Enroll Now",
    popular: true,
    badge: "Most Comprehensive",
  },
  {
    title: "Individual Plan - 1 Month",
    price: "₹10,000",
    discount: "No Discount",
    description:
      "For those who prefer short-term guidance and flexibility in their fitness plans.",
    features: [
      "Custom Training Plan",
      "Custom Diet Plan",
      "Daily Support via Chat",
      "Exercise Feedback",
    ],
    cta: "Enroll Now",
    badge: "Short Term",
  },
  {
    title: "Buddy Plan - 6 Months",
    price: "₹5,500/mo (per person)",
    discount: "Save ₹2,000/mo",
    description:
      "Transform together with a friend or partner. Shared progress tracking and joint workouts.",
    features: [
      "Lifetime Access to Course",
      "Shared Coaching Sessions",
      "Custom Plans for Each Buddy",
      "Joint Progress Tracking",
      "Exercise Form Correction",
    ],
    cta: "Enroll Now",
    badge: "Transform Together",
  },
];

const Pricing = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 text-center mb-8">
          Choose Your Fitness Journey
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12">
          Explore plans tailored for every fitness goal, from short-term
          challenges to lifelong transformations.
        </p>

        {/* Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`${
                plan.popular
                  ? "bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100"
                  : "bg-white"
              } rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="text-white bg-indigo-600 px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
                  {plan.badge}
                </div>
              )}

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {plan.title}
              </h2>

              {/* Price */}
              <p className="text-indigo-600 text-3xl font-semibold mb-2">
                {plan.price}
              </p>
              <p className="text-green-600 text-sm font-medium mb-4">
                {plan.discount}
              </p>

              {/* Description */}
              <p className="text-gray-600 mb-6">{plan.description}</p>

              {/* Features */}
              <ul className="text-sm text-gray-700 space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-green-500 mr-2">✔️</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Call to Action */}
              <a
                href="#enroll"
                className="block text-center bg-indigo-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Additional Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Why Choose Our Plans?
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8">
            With years of experience and a proven track record of success, we
            provide scientifically backed fitness solutions. Whether you're a
            beginner or a seasoned athlete, we have something for everyone.
          </p>
          <a
            href="#contact"
            className="inline-block bg-indigo-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Contact Us for More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
    