import { ChevronUpIcon } from '@heroicons/react/20/solid';

export default function FullScreenHeaderImage() {
  return (
    <div
      className="relative h-screen bg-gradient-to-br from-gray-50 to-gray-200 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom right, #f8fafc, #e5e7eb)',
      }}
    >
      {/* Background Gradient Animation */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 opacity-40 animate-pulse"
        style={{
          animation: 'pulse 2s infinite',
        }}
      ></div>

      {/* Full-Screen Image */}
      <div className="absolute inset-0">
        <img
          src="https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg?t=st=1732371738~exp=1732375338~hmac=e0f0084f7482b3808a04085d5cab50e722efe291c3024cb37b6fd0dac45ab8d4&w=826"
          alt="GymEdu - Transform Your Fitness"
          className="object-cover w-full h-full opacity-70 hover:opacity-100 transition-opacity duration-500 transform hover:scale-110"
        />
      </div>

      {/* Overlay Content */}
      <div
        className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 backdrop-blur-sm text-center px-6 md:px-12"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Main Title */}
        <h1
          className="text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-wider text-shadow-lg drop-shadow-2xl animate__animated animate__fadeInUp animate__delay-1s"
          style={{
            textShadow: '0 6px 12px rgba(0, 0, 0, 0.5), 0 3px 6px rgba(0, 0, 0, 0.3)',
            lineHeight: '1.2',
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Welcome to <span className="text-pink-400">GymEdu</span>
        </h1>

        {/* Description */}
        <p
          className="text-white text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto drop-shadow-md animate__animated animate__fadeInUp animate__delay-2s"
          style={{
            textShadow: '0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.1)',
            maxWidth: '800px',
            fontFamily: "'Roboto', sans-serif",
            letterSpacing: '1px',
          }}
        >
          Elevate your fitness with our expert resources and guidance. Join the GymEdu community and unlock your full potential.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex items-center justify-center space-x-6 mt-8 animate__animated animate__fadeInUp animate__delay-3s">
          <a
            href="#about"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transform transition-transform hover:scale-110 hover:from-pink-500 hover:to-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-offset-2"
            style={{
              transition: 'transform 0.3s ease-in-out, background-color 0.3s ease',
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            className="inline-flex items-center rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-indigo-600 transition-transform transform hover:scale-110"
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
  );
}
