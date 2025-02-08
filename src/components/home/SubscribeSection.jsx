export default function SubscribeSection() {
    return (
      <div className="px-4 py-8 text-gray-900 bg-gradient-to-br from-gray-50 to-gray-100 md:px-8">
        <div className="flex flex-col items-center justify-between max-w-5xl mx-auto md:flex-row">
          {/* Left Side - Content */}
          <div className="text-center md:w-1/2 md:text-left">
            <h2 className="mb-4 text-2xl font-bold leading-tight tracking-wide text-gray-900 md:text-3xl">
              Subscribe & Get 2 FREE GUIDES!
            </h2>
            <p className="max-w-3xl mx-auto mb-6 text-base leading-relaxed text-gray-500 md:text-lg md:mx-0">
              The Resistance Letter is my weekly newsletter, where I share my best stuff.
              <br />
              <strong>No Spam. No Ads.</strong><br />
              Get the most powerful ideas to build your best life - fitness, lifestyle design & self-management.
              After all, reading is still by far the fastest mode to learn.
            </p>
      
            <p className="mb-4 text-base text-gray-500 md:text-lg">Subscribe Now - and I will send 2 guidebooks as a FREE Welcome Gift! (Training/Nutrition guidebooks)</p>
      
            {/* Subscription Form */}
            <form className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-4">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-3 py-2 text-gray-800 placeholder-gray-400 rounded-lg md:w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  border: "2px solid #e5e7eb", // Light gray border to match uniform theme
                }}
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-2 py-2 text-gray-800 placeholder-gray-400 rounded-lg md:w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  border: "2px solid #e5e7eb", // Light gray border to match uniform theme
                }}
              />
              <button
                type="submit"
                className="inline-flex items-center w-full px-5 py-2 text-base font-semibold text-white transition-transform transform bg-indigo-400 rounded-md shadow-md md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-offset-2"
              >
                Subscribe
              </button>
            </form>
          </div>
      
          {/* Right Side - Image */}
          <div className="mt-6 md:w-1/2 md:mt-0 md:ml-6">
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
  