import React from "react";
import CourseCard from "./CourseCard";

const courses = [
  {
    title: "Ultimate Gym Guide for Beginners",
    description:
      "Learn proper techniques and build a strong foundation for your fitness journey.",
    image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    price: "4999",
    link: "/course/gym-guide",
    highlights: [
      "Step-by-step tutorials",
      "Beginner-friendly exercises",
      "Weekly progress tracking",
    ],
  },
  {
    title: "Advanced Weight Training Techniques",
    description:
      "Take your strength training to the next level with advanced routines and tips.",
    image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    price: "6999",
    link: "/course/weight-training",
    highlights: [
      "Pro-level guidance",
      "Customized workout plans",
      "Video library access",
    ],
  },
  {
    title: "Nutrition Masterclass",
    description:
      "Understand the fundamentals of nutrition and design your perfect meal plan.",
    image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    price: "5999",
    link: "/course/nutrition",
    highlights: [
      "Calorie and macro guides",
      "Meal prep techniques",
      "Access to recipe library",
    ],
  },
];

const CourseList = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-8 text-center">
          Explore Our Courses
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-center">
          Choose from our range of courses designed to transform your fitness
          journey.
        </p>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              image={course.image}
              price={course.price}
              link={course.link}
              highlights={course.highlights}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
