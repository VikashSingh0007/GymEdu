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
              <h2 className="text-5xl font-extrabold text-gray-900 mb-8 tracking-wide leading-tight">
                About <span className="text-indigo-600">Us</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Welcome to our platform! We are <span className="text-indigo-600 font-semibold">dedicated</span> to providing high-quality courses, coaching, and resources. Our goal is to help you <span className="underline decoration-pink-500 decoration-wavy">transform</span> your skills and achieve your ambitions.
              </p>
              <div className="flex items-center mt-8 space-x-4">
                <a
                  href="#enroll"
                  className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 px-8 py-3 text-lg font-medium text-white shadow-lg hover:from-pink-500 hover:to-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-offset-2 transition-transform transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="#learn-more"
                  className="inline-flex items-center rounded-full border-2 border-indigo-600 px-8 py-3 text-lg font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white transition-transform transform hover:scale-105"
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
  