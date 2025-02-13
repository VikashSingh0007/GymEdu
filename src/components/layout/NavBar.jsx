import React from "react";
import { Disclosure, DisclosureButton } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import TopBar from "../../pages/TopBar";

// Navigation Links
const navigation = [
  { name: "HOME", href: "/" },
  // { name: "COURSE", href: "/course" },
  { name: "COACHING", href: "/coaching" },
  { name: "PRICING", href: "/pricing" },
  { name: "TRANSFORMATIONS", href: "/transformations" },
  { name: "BLOG", href: "/blog" },
];
const contactInfo = {
  phone: '+123-456-7890',
  email: 'info@example.com',
};

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/rjram404/',
    icon: <FaInstagram className="w-5 h-5" aria-hidden="true" />,
    hoverColor: 'pink-300',
  },
  {
    name: 'Twitter',
    url: 'https://x.com/RJ_Ram14',
    icon: <FaTwitter className="w-5 h-5" aria-hidden="true" />,
    hoverColor: 'blue-300',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@the_rjram',
    icon: <FaYoutube className="w-5 h-5" aria-hidden="true" />,
    hoverColor: 'red-500',
  },
];

// Utility function for classNames
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function NavBar() {
  const location = useLocation(); // Get the current route

  return (
    <>
      {/* Top Bar */}
      <TopBar contactInfo={contactInfo} socialLinks={socialLinks} />
      {/* Main NavBar */}
      <Disclosure as="nav" className="sticky top-0 z-50 bg-gray-900 shadow-lg">
        {({ open }) => (
          <>
            <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                {/* Mobile Menu Button */}
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <DisclosureButton className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>

                {/* Logo and Links */}
                <div className="flex items-center justify-between flex-1 sm:items-stretch">
                {/* Logo */}
                <div className="flex items-center">
                  <img
                    alt="Your Company"
                    src='public/images/Artboard 1 copy 2.png'
                    className="w-auto h-16"
                  />
                </div>

                {/* Navigation Links */}
                <div className="items-center hidden sm:ml-6 sm:flex sm:space-x-4"> {/* Added items-center here */}
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        location.pathname === item.href
                          ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ease-in-out h-8 flex items-center"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
                {/* Enroll Now Button */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Link
                    to="/enroll"
                    className="px-6 py-3 text-sm font-medium text-white rounded-full shadow-md bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    ENROLL NOW
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Navigation Panel */}
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as={Link}
                    to={item.href}
                    className={classNames(
                      location.pathname === item.href
                        ? "bg-gray-800 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium transition-colors duration-200 ease-in-out"
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
