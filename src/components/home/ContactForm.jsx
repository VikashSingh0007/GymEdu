import { useState } from 'react';
import { FiMessageCircle } from 'react-icons/fi'; // Importing React icon from react-icons
import { FiUser, FiPhone, FiMail } from 'react-icons/fi'; // Additional icons
import InquiryForm from '../../common/InquiryForm';

export default function ContactForm() {
  // State to handle form visibility
  const [showForm, setShowForm] = useState(false);

  // Toggle the form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="px-4 mx-auto my-8 max-w-7xl md:px-8">
      {/* Conditional rendering: Show query message or form based on showForm state */}
      {!showForm ? (
        // Message Area with an Icon and Right Button
        <div
          className="flex items-center justify-center p-6 transition-all duration-300 ease-in-out transform bg-gray-200 rounded-lg shadow-lg cursor-pointer hover:bg-gray-300 hover:scale-105"
        >
          {/* Icon and Text */}
          <div className="flex items-center">
            <FiMessageCircle className="w-6 h-6 mr-2 text-indigo-500" />
            <span className="text-lg font-medium text-gray-700">
              Have queries about coaching? Fill this form and we will contact you.
            </span>
          </div>

          {/* Button on the Right */}
          <button
            onClick={toggleForm}
            className="px-4 py-2 ml-auto text-white transition-all duration-300 ease-in-out rounded-lg shadow-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:shadow-xl hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            Open Form
          </button>
        </div>
      ) : (
        // Contact Form Area with new color scheme
        <div className="relative p-6 mt-6 rounded-lg shadow-lg bg-indigo-50">
          <div className="flex items-center justify-between mb-6">
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
                className="w-6 h-6"
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
          <InquiryForm />
        </div>
      )}
    </div>
  );
}
