import React from "react";

const testimonials = [
  {
    name: "Tamang",
    age: 23,
    profession: "HR",
    testimonial:
      "Resistance transformed me. I now know how to eat smartly and train effectively.",
    duration: "14 Weeks",
    weightLost: "5 LBS",
  },
  {
    name: "Ankit",
    age: 25,
    profession: "Software Engineer",
    testimonial:
      "The journey was life-changing. The guidance and plans worked wonders.",
    duration: "42 Weeks",
    weightLost: "23 LBS",
  },
];

const CoachingTestimonials = () => {
  return (
    <div className="px-6 py-16 bg-gray-100">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-4xl font-bold text-center text-gray-800">
          Real People, Real Results
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              <p className="mb-4 italic text-gray-600">
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
