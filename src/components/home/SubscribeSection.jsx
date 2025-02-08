export default function SubscribeSection() {
    return (
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 py-8 px-4 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Side - Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 leading-tight tracking-wide">
              Subscribe & Get 2 FREE GUIDES!
            </h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed max-w-3xl mx-auto md:mx-0 text-gray-500">
              The Reactance Letter is my weekly newsletter, where I share my best stuff.
              <br />
              <strong>No Spam. No Ads.</strong><br />
              Get the most powerful ideas to build your best life - fitness, lifestyle design & self-management.
              After all, reading is still by far the fastest mode to learn.
            </p>
      
            <p className="text-base md:text-lg mb-4 text-gray-500">Subscribe Now - and I will send 2 guidebooks as a FREE Welcome Gift! (Training/Nutrition guidebooks)</p>
      
            {/* Subscription Form */}
            <form className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-4">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full md:w-1/2 px-3 py-2 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  border: "2px solid #e5e7eb", // Light gray border to match uniform theme
                }}
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-1/2 px-2 py-2 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  border: "2px solid #e5e7eb", // Light gray border to match uniform theme
                }}
              />
              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center rounded-md bg-indigo-400 px-5 py-2 text-base font-semibold text-white shadow-md transform transition-transform hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-offset-2"
              >
                Subscribe
              </button>
            </form>
          </div>
      
          {/* Right Side - Image */}
          <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
            <img
              src="https://img.freepik.com/premium-photo/opened-book-with-flying-pages-butterflies-dark-backgroundgenerative-ai_841229-1656.jpg?w=826" // Replace with your image URL
              alt="Subscription Image"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    );
  }
  