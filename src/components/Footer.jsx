import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="py-8 text-gray-800 bg-gray-300">
      <div className="px-4 mx-auto max-w-7xl md:px-8">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-4 md:text-left">
          
          {/* Column 1 - Company Name */}
          <div className="text-center">
            <img
              src='public/images/Artboard 1 copy 3.png'
              alt="GYMEDU Logo"
              className="h-12 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-700">Resistance</h3>
            <p className="mt-2 text-sm text-gray-600">
              &copy; 2025 Resistance. All rights reserved.
            </p>
          </div>

          {/* Column 2 - Site Links */}
          <div className="text-center">
  <h4 className="mb-4 font-semibold text-gray-700">Explore</h4>
  <ul className="space-y-2 text-gray-600">
    <li><Link to="/" className="hover:text-indigo-500">Home</Link></li>
    {/* <li><Link to="/courses" className="hover:text-indigo-500">Course</Link></li> */}
    <li><Link to="/coaching" className="hover:text-indigo-500">Coaching</Link></li>
    <li><Link to="/pricing" className="hover:text-indigo-500">Pricing</Link></li>
    {/* <li><Link to="/blog" className="hover:text-indigo-500">Blog</Link></li> */}
    <li><Link to="/transformations" className="hover:text-indigo-500">Transformations</Link></li>
  </ul>
</div>

          {/* Column 3 - Legal Links */}
          {/* <div className="text-center">
            <h4 className="mb-4 font-semibold text-gray-700">Legal</h4>
            <ul className="space-y-2 text-gray-600">
              <li><span className="cursor-default hover:text-indigo-500">Terms and Conditions</span></li>
              <li><span className="cursor-default hover:text-indigo-500">Privacy Policy</span></li>
              <li><span className="cursor-default hover:text-indigo-500">Careers</span></li>
            </ul>
          </div> */}

          {/* Column 4 - Social Links */}
          <div className="text-center">
            <h4 className="mb-4 font-semibold text-gray-700">Follow Us</h4>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-2 text-gray-600 hover:text-indigo-500">
                <i className="fab fa-youtube"></i>
                <span className="cursor-default hover:text-indigo-500">YouTube</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 hover:text-indigo-500">
                <i className="fab fa-instagram"></i>
                <span className="cursor-default hover:text-indigo-500">Instagram</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 hover:text-indigo-500">
                <i className="fab fa-twitter"></i>
                <span className="cursor-default hover:text-indigo-500">Twitter</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
