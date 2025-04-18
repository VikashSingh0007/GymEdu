import React from "react";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    title: "Coaching - 6 Months",
    price: "$6,600/mo",
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
    price: "$8,833/mo",
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
    price: "$5,500/mo",
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
    price: "$10,000",
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
    price: "$5,500/mo (per person)",
    discount: "Save $2,000/mo",
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
    <div className="px-6 py-16 bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-5xl font-bold text-center text-gray-800">
          Choose Your Fitness Journey
        </h1>
        <p className="mb-12 text-lg text-center text-gray-700">
          Explore plans tailored for every fitness goal, from short-term
          challenges to lifelong transformations.
        </p>

        {/* Plans */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-white bg-indigo-600 rounded-full">
                  {plan.badge}
                </div>
              )}

              {/* Title */}
              <h2 className="mb-4 text-2xl font-bold text-gray-800">
                {plan.title}
              </h2>

              {/* Price */}
              <p className="mb-2 text-3xl font-semibold text-indigo-600">
                {plan.price}
              </p>
              <p className="mb-4 text-sm font-medium text-green-600">
                {plan.discount}
              </p>

              {/* Description */}
              <p className="mb-6 text-gray-600">{plan.description}</p>

              {/* Features */}
              <ul className="mb-6 space-y-2 text-sm text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2 text-green-500">✔️</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Call to Action */}

              <Link
                to="/enroll"
                className="block px-6 py-3 font-medium text-center text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Section */}
        <div className="mt-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">
            Annu
          </h2>
          <p className="max-w-3xl mx-auto mb-8 text-gray-700">
            With years of experience and a proven track record of success, we
            provide scientifically backed fitness solutions. Whether you're a
            beginner or a seasoned athlete, we have something for everyone.
          </p>
         
          <a
                href="#details"
                className="inline-block px-6 py-3 font-medium text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
              >
                Contact Us for More Info
              </a>

              <div>
              <ul id="#details" className="mb-6 space-y-2 text-sm text-gray-700">
                
                  <li  className="flex items-center">
                    <span className="mr-2 text-green-500">✔️</span>
                   Email: annudev626@gmail.com 
                  </li>
                  <li  className="flex items-center">
                    <span className="mr-2 text-green-500">✔️</span>
                   Phone: +1 720-401-8646
                  </li>
                  <li  className="flex items-center">
                    <span className="mr-2 text-green-500">✔️</span>
                   GitHub: <a href="https://github.com/annu-6">Git</a>
                  </li>

              </ul>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
