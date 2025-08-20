import React from 'react';

const MobileHeader = () => {
  return (
    <div className="bg-white shadow-md px-4 py-2 flex justify-between items-center md:hidden">
      {/* Logo */}
      <a href="/">
        <img src="Agra.png" alt="logo" className="h-8" />
      </a>

      {/* Buttons */}
      <div className="flex gap-2">
        <button className="bg-gray-800 text-white px-3 py-1 rounded">
          Menu
        </button>
        <a href="tel:+919873582118" className="bg-gray-800 text-white px-3 py-1 rounded">
          Call
        </a>
      </div>
    </div>
  );
};

export default MobileHeader;