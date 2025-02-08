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
          alt="Reactance - Transform Your Fitness"
          className="object-cover w-full h-full opacity-70 hover:opacity-100 transition-opacity duration-500 transform hover:scale-110"
        />
      </div>

      {/* Overlay Content */}
      <div
        className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 backdrop-blur-sm text-center px-4 md:px-8"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Main Title */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-wider text-shadow-lg drop-shadow-2xl animate__animated animate__fadeInUp animate__delay-1s"
          style={{
            textShadow: '0 6px 12px rgba(0, 0, 0, 0.5), 0 3px 6px rgba(0, 0, 0, 0.3)',
            lineHeight: '1.2',
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Welcome to <span className="text-pink-400">Reactance</span>
        </h1>

        {/* Description */}
        <p
          className="text-white text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8 max-w-3xl mx-auto drop-shadow-md animate__animated animate__fadeInUp animate__delay-2s"
          style={{
            textShadow: '0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.1)',
            maxWidth: '800px',
            fontFamily: "'Roboto', sans-serif",
            letterSpacing: '0.5px',
          }}
        >
          Elevate your fitness with our expert resources and guidance. Join the Reactance community and unlock your full potential.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6 md:mt-8 animate__animated animate__fadeInUp animate__delay-3s">
          <a
            href="#about"
            className="inline-flex items-center rounded-md bg-gradient-to-r from-indigo-500 to-pink-400 px-5 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium text-white shadow-lg transform transition-transform hover:scale-105 hover:from-pink-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
            style={{
              transition: 'transform 0.3s ease-in-out, background-color 0.3s ease',
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            className="inline-flex items-center rounded-md border-2 border-white px-5 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium text-white hover:bg-white hover:text-indigo-600 transition-transform transform hover:scale-105"
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
