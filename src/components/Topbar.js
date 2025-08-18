import React from 'react';

const Topbar = () => {
  return (
    <div className="bg-gray-100 border-b border-gray-200 text-sm">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Contact Info */}
        <div className="flex items-center gap-2 text-gray-700">
          <img src="/icons/email.png" alt="email" className="w-4 h-4" />
          <span>business@zuchepharma.com</span>
        </div>

        {/* Language Selector */}
        <div className="flex items-center gap-2 text-gray-700">
          <img src="/icons/united-kingdom.png" alt="flag" className="w-5 h-5" />
          <span>English</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;