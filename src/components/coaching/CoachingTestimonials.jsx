import React from "react";

const testimonials = [
  {
    name: "Tamang",
    age: 23,
    profession: "HR",
    testimonial:
      "Hypertroph transformed me. I now know how to eat smartly and train effectively.",
    duration: "14 Weeks",
    weightLost: "5 KG",
  },
  {
    name: "Ankit",
    age: 25,
    profession: "Software Engineer",
    testimonial:
      "The journey was life-changing. The guidance and plans worked wonders.",
    duration: "42 Weeks",
    weightLost: "23 KG",
  },
];

const CoachingTestimonials = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Real People, Real Results
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <p className="italic text-gray-600 mb-4">
                "{testimonial.testimonial}"
              </p>
              <div className="text-sm text-gray-500">
                <p>
                  <strong>Name:</strong> {testimonial.name}, {testimonial.age}
                </p>
                <p>
                  <strong>Profession:</strong> {testimonial.profession}
                </p>
                <p>
                  <strong>Duration:</strong> {testimonial.duration}
                </p>
                <p>
                  <strong>Weight Lost:</strong> {testimonial.weightLost}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoachingTestimonials;
