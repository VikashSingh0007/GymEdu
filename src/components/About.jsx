export default function About() {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-gray-200 py-24">
      {/* Decorative Circles in Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          
          {/* Left Image Section with Hover Effect */}
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1719937051058-63705ed35502?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Us"
              className="rounded-3xl shadow-md object-cover w-full h-auto max-w-md transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </div>

          {/* Right Content Section */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 sm:mb-8 tracking-wide leading-tight">
              About <span className="text-indigo-600">Us</span>
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Welcome to our platform! We are <span className="text-indigo-600 font-semibold">dedicated</span> to providing high-quality courses, coaching, and resources. Our goal is to help you <span className="underline decoration-pink-500 decoration-wavy">transform</span> your skills and achieve your ambitions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6 sm:mt-8">
              {/* Get Started Button */}
              <a
                href="#enroll"
                className="inline-flex items-center rounded-md bg-gradient-to-r from-indigo-500 to-pink-400 px-6 py-3 text-base sm:text-lg font-medium text-white shadow-lg transform transition-all duration-500 hover:scale-105 hover:from-pink-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                style={{
                  transition: 'transform 0.3s ease-in-out, background-color 0.3s ease',
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Get Started
              </a>
              {/* Learn More Button */}
              <a
                href="#learn-more"
                className="inline-flex items-center rounded-md border-2 border-indigo-600 px-6 py-3 text-base sm:text-lg font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-500 transform hover:scale-105"
                style={{
                  transition: 'transform 0.3s ease-in-out, background-color 0.3s ease',
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
