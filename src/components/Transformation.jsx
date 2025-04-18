import React from "react";
import { Link } from 'react-router-dom';

const transformations = [
  {
    name: "Olivia",
    age: 23,
    profession: "HR",
    weightLost: "50 LBS",
    duration: "14 Weeks",
    testimonial:
      "Thank You Coach for everything. The journey was not only about physical transformation but also about becoming more disciplined and organized. I now live my best life in my best shape.",
    image: "public/images/Browse Free HD Images of Fitness Model Rests Against Foam Roller_files/arms-reach-up-with-a-smart-watch-on.jpg", 
  },
  {
    name: "Erica",
    age: 25,
    profession: "Software Engineer",
    weightLost: "60 LBS",
    duration: "42 Weeks",
    testimonial:
      "Annu treated me with utmost patience and gave personalized solutions. My journey with Resistance helped me reinvent myself completely.",
    image: "public/images/Browse Free HD Images of Fitness Model Rests Against Foam Roller_files/woman-works-on-her-laptop-outdoors-in-green-lawn-chair.jpg", 
  },
  {
    name: "Gabriella",
    age: 28,
    profession: "Software Engineer",
    weightLost: "80 LBS",
    duration: "24 Weeks",
    testimonial:
      "Resistance helped me balance my busy schedule in Silicon Valley while achieving my dream physique. Fitness has now become my lifestyle.",
    image: "public/images/Browse Free HD Images of Fitness Model Rests Against Foam Roller_files/woman-wears-headphones-with-one-hand-up-smiling.jpg", 
  },
  {
    name: "Amy",
    age: 32,
    profession: "Entrepreneur",
    weightLost: "86 LBS",
    duration: "32 Weeks",
    testimonial:
      "Resistance's methods are simple, sustainable, and life-changing. I feel fitter, stronger, and more confident than ever.",
    image: "public/images/Browse Free HD Images of Fitness Model Rests Against Foam Roller_files/woman-holds-a-large-musical-instrument.jpg", 
  },
];

const Transformation = () => {
  
  return (
    <div className="px-6 py-16 bg-gray-100">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-5xl font-bold text-center text-gray-800">
          Real People, Real Results
        </h1>
        <p className="mb-12 text-lg text-center text-gray-600">
          Witness the incredible transformations achieved by our clients. Let
          their stories inspire your fitness journey.
        </p>

        {/* Transformation Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {transformations.map((client, index) => (
            <div
              key={index}
              className="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl"
            >
              {/* Image */}
              <img
                src={client.image}
                alt={client.name}
                className="w-24 h-24 mx-auto mb-4 rounded-full"
              />

              {/* Name and Details */}
              <h2 className="text-xl font-bold text-center text-gray-800">
                {client.name}
              </h2>
              <p className="text-center text-gray-600">
                Age: {client.age} | {client.profession}
              </p>

              {/* Testimonial */}
              <p className="mt-4 mb-6 text-sm italic text-center text-gray-700">
                "{client.testimonial}"
              </p>

              {/* Stats */}
              <div className="flex justify-between text-sm font-medium text-center text-gray-800">
                <div>
                  <p className="text-lg font-bold text-indigo-600">
                    {client.weightLost}
                  </p>
                  <p>Weight Lost</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-indigo-600">
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
          <h2 className="mb-4 text-3xl font-bold text-gray-800">
            Ready to Transform?
          </h2>
          <p className="max-w-3xl mx-auto mb-8 text-gray-600">
            Join the thousands of individuals who have achieved their fitness
            goals with Resistance. Start your transformation today!
          </p>
          {/* <a
            href="#enroll"
            className="inline-block px-6 py-3 font-medium text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            Enroll Now
          </a> */}
       <Link
        to="/enroll"
        className="inline-block px-6 py-3 font-medium text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
      >
        Enroll Now
      </Link>
        </div>
      </div>
    </div>
  );
};

export default Transformation;
