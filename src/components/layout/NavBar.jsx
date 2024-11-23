import { Disclosure, DisclosureButton } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaInstagram, FaTwitter, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const navigation = [
  { name: 'HOME', href: '', current: true },
  { name: 'COURSE', href: '#', current: false },
  { name: 'COACHING', href: '#', current: false },
  { name: 'PRICING', href: '#', current: false },
  { name: 'TRANSFORMATIONS', href: '#', current: false },
  { name: 'BLOG', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
  return (
    <>
      {/* Top Bar with a Dark Gradient and White Text */}
      <div className="bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 text-white py-2 text-sm shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <FaPhoneAlt className="h-4 w-4 text-white" aria-hidden="true" />
              <span className="font-medium">+123-456-7890</span>
            </div>
            <div className="hidden sm:flex items-center space-x-1">
              <MdEmail className="h-5 w-5 text-white" aria-hidden="true" />
              <span className="font-medium">info@example.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-300 transition-transform transform hover:scale-110 duration-200 ease-in-out"
            >
              <FaInstagram className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-transform transform hover:scale-110 duration-200 ease-in-out"
            >
              <FaTwitter className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Bar with a Sleek Look */}
      <Disclosure as="nav" className="bg-gray-900 sticky top-0 z-50 shadow-lg">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                {/* Mobile menu button */}
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>

                <div className="flex flex-1 items-center justify-between sm:items-stretch">
                  {/* Logo */}
                  <div className="flex items-center">
                    <img
                      alt="Your Company"
                      src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                      className="h-8 w-auto"
                    />
                  </div>
                  {/* Navigation options */}
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current
                            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ease-in-out'
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Enroll Now Button with Rounded Corners and Hover Effects */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <a
                    href="#enroll"
                    className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 text-sm font-medium text-white hover:from-purple-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-md"
                  >
                    ENROLL NOW
                  </a>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium transition-colors duration-200 ease-in-out'
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
