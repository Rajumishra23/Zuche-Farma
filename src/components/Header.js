import React from 'react';

const Header = () => {
  const menuItems = [
    {
      label: 'About Us',
      href: 'about-us.html',
      subItems: [
        { label: 'About Zuche', href: 'about-us.html#about' },
        { label: 'Mission & Vision', href: 'about-us.html#mission' },
        { label: 'Board of Directors', href: 'about-us.html#board' },
        { label: 'Business Model', href: 'about-us.html#business' },
      ],
    },
    {
      label: 'Product Portfolio',
      href: '#',
      subItems: [
        { label: 'Medical Devices', href: 'product-portfolio/medical-devices.html' },
        { label: 'Pharmaceuticals', href: 'product-portfolio/pharmaceuticals.html' },
      ],
    },
    {
      label: 'Quality',
      href: '#',
      subItems: [
        { label: 'Quality Policy', href: 'quality-policy.html' },
        { label: 'Certifications & Approvals', href: 'certificates-awards.html' },
      ],
    },
    { label: 'Our Presence', href: 'worldwide.html' },
    { label: 'Events', href: 'events.html' },
    { label: 'Manufacturing Unit', href: 'manufactures.html' },
    {
      label: 'Career',
      href: 'career.html',
      subItems: [
        { label: 'Growing with Zuche', href: 'career.html#Grow2' },
        { label: 'Openings', href: 'openings.html' },
      ],
    },
    { label: 'Contact Us', href: 'contact-us.html' },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <a href="index.htm" className="flex items-center">
          <img src="Agra1.png" className="h-16 object-contain" alt="logo" />
        </a>

        {/* Right: Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-800">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <a href={item.href} className="hover:text-primary flex items-center gap-1 group">
                {item.label}
                {item.subItems && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 text-gray-500 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>

              {/* Dropdown */}
              {item.subItems && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48 hidden group-hover:block z-50">
                  {item.subItems.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Search Icon */}
          <a href="#" className="ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 17a6 6 0 100-12 6 6 0 000 12z" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;