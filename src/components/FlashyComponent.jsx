export default function FullScreenHeaderImage() {
  return (
    <div className="relative h-screen bg-gradient-to-br from-gray-50 to-gray-200 overflow-hidden">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 opacity-40 animate-pulse"></div>

      {/* Full-Screen Image */}
      <div className="absolute inset-0">
        <img
          src="https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg?t=st=1732371738~exp=1732375338~hmac=e0f0084f7482b3808a04085d5cab50e722efe291c3024cb37b6fd0dac45ab8d4&w=826"
          alt="GymEdu - Transform Your Fitness"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 backdrop-blur-sm">
        <h1 className="text-6xl font-extrabold text-white mb-4 text-center tracking-wider drop-shadow-md">
          Welcome to <span className="text-pink-400">GymEdu</span>
        </h1>
        <p className="text-white text-lg text-center leading-relaxed drop-shadow-md">
          Elevate your fitness with our expert resources and guidance.
        </p>
        <div className="flex items-center mt-8 space-x-4">
          <a
            href="#about"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 px-8 py-3 text-lg font-medium text-white shadow-lg hover:from-pink-500 hover:to-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-offset-2 transition-transform transform hover:scale-105"
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            className="inline-flex items-center rounded-full border-2 border-white px-8 py-3 text-lg font-medium text-white hover:bg-white hover:text-indigo-600 transition-transform transform hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
