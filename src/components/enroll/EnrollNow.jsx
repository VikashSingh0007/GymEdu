import React, { useState } from "react";

const EnrollNow = () => {
  const [isEnroll, setIsEnroll] = useState(true); // Default to Enroll Now

  const toggleView = () => {
    setIsEnroll(!isEnroll); // Toggle between Enroll Now and Login
  };

  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-8">
          {/* Toggle Buttons */}
          <button
            className={`px-6 py-3 rounded-t-lg font-medium ${
              isEnroll
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => setIsEnroll(true)}
          >
            Enroll Now
          </button>
          <button
            className={`px-6 py-3 rounded-t-lg font-medium ${
              !isEnroll
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => setIsEnroll(false)}
          >
            Login
          </button>
        </div>

        {/* Content Section */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          {isEnroll ? <EnrollNowForm /> : <LoginForm />}
        </div>
      </div>
    </div>
  );
};

const EnrollNowForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enroll Now Data:", formData);
    alert("Thank you for enrolling! Redirecting to login...");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Enroll Now
      </h1>
      {/* Name */}
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          placeholder="Enter your full name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Email */}
      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Phone */}
      <div className="mb-6">
        <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
          placeholder="Enter your phone number"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Plan */}
      <div className="mb-6">
        <label htmlFor="plan" className="block text-gray-700 text-sm font-medium mb-2">
          Select Your Plan
        </label>
        <select
          id="plan"
          name="plan"
          value={formData.plan}
          onChange={handleInputChange}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="" disabled>
            Choose your plan
          </option>
          <option value="Coaching - 6 Months">Coaching - 6 Months</option>
          <option value="Coaching - 3 Months">Coaching - 3 Months</option>
          <option value="Individual Plan - 1 Month">Individual Plan - 1 Month</option>
          <option value="Buddy Plan - 6 Months">Buddy Plan - 6 Months</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-indigo-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", credentials);
    alert("Logged in successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Login</h1>
      {/* Email */}
      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={credentials.email}
          onChange={handleInputChange}
          required
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Password */}
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleInputChange}
          required
          placeholder="Enter your password"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-indigo-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default EnrollNow;
