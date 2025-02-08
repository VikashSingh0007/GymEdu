import React from 'react';

const Spinner = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="w-10 h-10 border-4 border-gray-200 rounded-full border-t-blue-500 animate-spin"></div>
  </div>
);

export default Spinner;