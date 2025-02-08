import 'font-awesome/css/font-awesome.min.css';
export default function Footer() {
  return (
    <footer className="py-8 text-gray-800 bg-gray-300"> {/* Changed bg-gray-800 to bg-gray-200 */}
      <div className="px-4 mx-auto max-w-7xl md:px-8">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-4 md:text-left">
          {/* Column 1 - Company Name */}
          <div className="text-center">
            <img
              src='/assets/Artboard 1 copy 3.png'
              alt="GYMEDU Logo"
              className="h-12 mx-auto mb-4"  // Adjust logo size here (h-12 is an example size)
            />
            <h3 className="text-2xl font-bold text-gray-700">Resistance</h3> {/* Adjusted text color to gray-700 for better contrast */}
            <p className="mt-2 text-sm text-gray-600">
              &copy; 2024 Resistance. All rights reserved.
            </p>
          </div>

          {/* Column 2 - Site Links */}
          <div className="text-center">
            <h4 className="mb-4 font-semibold text-gray-700">Explore</h4> {/* Adjusted text color to gray-700 */}
            <ul className="space-y-2 text-gray-600"> {/* Adjusted text color to gray-600 */}
              <li><a href="/home" className="hover:text-indigo-500">Home</a></li>
              <li><a href="/course" className="hover:text-indigo-500">Course</a></li>
              <li><a href="/coaching" className="hover:text-indigo-500">Coaching</a></li>
              <li><a href="/pricing" className="hover:text-indigo-500">Pricing</a></li>
              <li><a href="/blog" className="hover:text-indigo-500">Blog</a></li>
              <li><a href="/transformations" className="hover:text-indigo-500">Transformations</a></li>
            </ul>
          </div>

          {/* Column 3 - Legal Links */}
          <div className="text-center">
            <h4 className="mb-4 font-semibold text-gray-700">Legal</h4> {/* Adjusted text color to gray-700 */}
            <ul className="space-y-2 text-gray-600"> {/* Adjusted text color to gray-600 */}
              <li><a href="/terms" className="hover:text-indigo-500">Terms and Conditions</a></li>
              <li><a href="/privacy-policy" className="hover:text-indigo-500">Privacy Policy</a></li>
              <li><a href="/careers" className="hover:text-indigo-500">Careers</a></li>
            </ul>
          </div>

          {/* Column 4 - Social Links */}
          <div className="text-center">
            <h4 className="mb-4 font-semibold text-gray-700">Follow Us</h4> {/* Adjusted text color to gray-700 */}
            <div className="flex flex-col items-center space-y-4">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-indigo-500"> {/* Adjusted text color to gray-600 */}
                <i className="fab fa-youtube"></i>
                <span className="text-gray-600 hover:text-indigo-500">YouTube</span> {/* Adjusted text color to gray-600 */}
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-indigo-500"> {/* Adjusted text color to gray-600 */}
                <i className="fab fa-instagram"></i>
                <span className="text-gray-600 hover:text-indigo-500">Instagram</span> {/* Adjusted text color to gray-600 */}
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-indigo-500"> {/* Adjusted text color to gray-600 */}
                <i className="fab fa-twitter"></i>
                <span className="text-gray-600 hover:text-indigo-500">Twitter</span> {/* Adjusted text color to gray-600 */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
