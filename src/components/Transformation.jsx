import React from "react";

const transformations = [
  {
    name: "Tamang",
    age: 23,
    profession: "HR",
    weightLost: "5.0 KG",
    duration: "14 Weeks",
    testimonial:
      "Thank You Coach for everything. The journey was not only about physical transformation but also about becoming more disciplined and organized. I now live my best life in my best shape.",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Ankit",
    age: 25,
    profession: "Software Engineer",
    weightLost: "23.0 KG",
    duration: "42 Weeks",
    testimonial:
      "Siddharth treated me with utmost patience and gave personalized solutions. My journey with Hypertroph helped me reinvent myself completely.",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Priyanka",
    age: 28,
    profession: "Software Engineer",
    weightLost: "8.0 KG",
    duration: "24 Weeks",
    testimonial:
      "Hypertroph helped me balance my busy schedule in Silicon Valley while achieving my dream physique. Fitness has now become my lifestyle.",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Ritu",
    age: 32,
    profession: "Entrepreneur",
    weightLost: "13.0 KG",
    duration: "32 Weeks",
    testimonial:
      "Hypertroph's methods are simple, sustainable, and life-changing. I feel fitter, stronger, and more confident than ever.",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
];

const Transformation = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 text-center mb-8">
          Real People, Real Results
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Witness the incredible transformations achieved by our clients. Let
          their stories inspire your fitness journey.
        </p>

        {/* Transformation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6"
            >
              {/* Image */}
              <img
                src={client.image}
                alt={client.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />

              {/* Name and Details */}
              <h2 className="text-xl font-bold text-gray-800 text-center">
                {client.name}
              </h2>
              <p className="text-gray-600 text-center">
                Age: {client.age} | {client.profession}
              </p>

              {/* Testimonial */}
              <p className="text-gray-700 text-sm italic mt-4 mb-6 text-center">
                "{client.testimonial}"
              </p>

              {/* Stats */}
              <div className="flex justify-between text-center text-sm text-gray-800 font-medium">
                <div>
                  <p className="text-indigo-600 text-lg font-bold">
                    {client.weightLost}
                  </p>
                  <p>Weight Lost</p>
                </div>
                <div>
                  <p className="text-indigo-600 text-lg font-bold">
                    {client.duration}
                  </p>
                  <p>Duration</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Transform?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Join the thousands of individuals who have achieved their fitness
            goals with Hypertroph. Start your transformation today!
          </p>
          <a
            href="#enroll"
            className="inline-block bg-indigo-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Transformation;
