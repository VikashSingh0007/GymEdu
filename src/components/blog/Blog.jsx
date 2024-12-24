import React from "react";

const blogPosts = [
  {
    title: "10 Myths About Weight Loss Debunked",
    description:
      "Explore the most common weight loss myths and learn the science behind sustainable fat loss.",
    date: "Dec 20, 2023",
    author: "Siddharth Tiwari",
    image: "https://via.placeholder.com/300x200", // Replace with your blog image URL
    link: "/blog/weight-loss-myths", // Replace with actual blog links
  },
  {
    title: "Top 5 Exercises for Building Strength",
    description:
      "Discover the best strength-training exercises and how to execute them with proper form.",
    date: "Nov 15, 2023",
    author: "Hypertroph Team",
    image: "https://via.placeholder.com/300x200", // Replace with your blog image URL
    link: "/blog/strength-training",
  },
  {
    title: "The Art of Meal Planning for Fitness Goals",
    description:
      "Learn how to create a meal plan that aligns with your fitness goals and busy schedule.",
    date: "Oct 10, 2023",
    author: "Siddharth Tiwari",
    image: "https://via.placeholder.com/300x200", // Replace with your blog image URL
    link: "/blog/meal-planning",
  },
  {
    title: "How to Stay Motivated During Your Fitness Journey",
    description:
      "Tips and tricks to keep your motivation high and achieve your fitness goals.",
    date: "Sep 5, 2023",
    author: "Hypertroph Team",
    image: "https://via.placeholder.com/300x200", // Replace with your blog image URL
    link: "/blog/staying-motivated",
  },
];

const Blog = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 text-center mb-8">
          Latest Articles
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Explore our latest insights, tips, and guides to help you achieve your
          fitness goals.
        </p>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 overflow-hidden"
            >
              {/* Blog Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />

              {/* Blog Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                <div className="flex justify-between items-center text-gray-500 text-sm">
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>

              {/* Read More */}
              <div className="p-6 bg-gray-50 text-center">
                <a
                  href={post.link}
                  className="text-indigo-600 font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Want More Tips and Guides?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Subscribe to our newsletter and never miss an update. Get weekly
            insights on fitness, diet, and lifestyle delivered straight to your
            inbox.
          </p>
          <a
            href="#subscribe"
            className="inline-block bg-indigo-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Subscribe Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
