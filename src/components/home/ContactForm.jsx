import { useState } from 'react';
import { FiMessageCircle } from 'react-icons/fi'; // Importing React icon from react-icons
import { FiUser, FiPhone, FiMail } from 'react-icons/fi'; // Additional icons

export default function ContactForm() {
  // State to handle form visibility
  const [showForm, setShowForm] = useState(false);

  // Toggle the form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 my-8">
      {/* Conditional rendering: Show query message or form based on showForm state */}
      {!showForm ? (
        // Message Area with an Icon and Right Button
        <div
          className="flex items-center justify-center p-6 bg-gray-200 rounded-lg shadow-lg cursor-pointer hover:bg-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          {/* Icon and Text */}
          <div className="flex items-center">
            <FiMessageCircle className="text-indigo-500 mr-2 h-6 w-6" />
            <span className="text-gray-700 text-lg font-medium">
              Have queries about coaching? Fill this form and we will contact you.
            </span>
          </div>

          {/* Button on the Right */}
          <button
            onClick={toggleForm}
            className="ml-auto bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300 ease-in-out"
          >
            Open Form
          </button>
        </div>
      ) : (
        // Contact Form Area with new color scheme
        <div className="mt-6 p-6 bg-indigo-50 rounded-lg shadow-lg relative">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-indigo-700">
              Have Queries about Coaching?
            </h2>
            {/* Close Button */}
            <button
              onClick={toggleForm}
              className="text-indigo-500 hover:text-indigo-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <form className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6">
            {/* Name Field with Icon */}
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-indigo-700">
                Name<span className="text-red-500">*</span>
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FiUser className="text-indigo-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  className="block w-full pl-10 py-2 rounded-md border border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500 bg-indigo-100 text-indigo-800"
                  placeholder="Enter your name"
                  required
                />
              </div>
            </div>

            {/* WhatsApp Number Field with Icon */}
            <div className="sm:col-span-2">
              <label htmlFor="whatsapp" className="block text-sm font-medium text-indigo-700">
                WhatsApp Number<span className="text-red-500">*</span>
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FiPhone className="text-indigo-400" />
                </div>
                <input
                  type="tel"
                  id="whatsapp"
                  className="block w-full pl-10 py-2 rounded-md border border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500 bg-indigo-100 text-indigo-800"
                  placeholder="Enter your WhatsApp number with country code"
                  required
                />
              </div>
            </div>

            {/* Email Field with Icon */}
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-indigo-700">
                Email<span className="text-red-500">*</span>
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FiMail className="text-indigo-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  className="block w-full pl-10 py-2 rounded-md border border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500 bg-indigo-100 text-indigo-800"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Submit Button at Right Bottom */}
            <div className="flex justify-end sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center rounded-md px-4 py-2 font-medium focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 shadow-sm sm:text-sm transition-colors duration-75 text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800"
              >
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
