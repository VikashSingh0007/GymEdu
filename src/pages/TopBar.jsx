import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const TopBar = ({ contactInfo, socialLinks }) => {
  return (
    <div className="py-2 text-sm text-white shadow-md bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800">
      <div className="container flex items-center justify-between px-4 mx-auto sm:px-6 lg:px-8">
        {/* Contact Info */}
        <div className="flex items-center space-x-4">
          {/* Phone */}
          <div className="flex items-center space-x-1">
            <FaPhoneAlt className="w-4 h-4 text-white" aria-hidden="true" />
            <span className="font-medium">{contactInfo.phone}</span>
          </div>
          {/* Email */}
          <div className="items-center hidden space-x-1 sm:flex">
            <MdEmail className="w-5 h-5 text-white" aria-hidden="true" />
            <span className="font-medium">{contactInfo.email}</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-transform duration-200 ease-in-out transform hover:scale-110 hover:text-${social.hoverColor}`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;