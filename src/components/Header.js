import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    {
      label: "About",
      href: "about-us.html",
      subItems: [
        { label: "About Agra", href: "about-us.html#about" },
        { label: "Mission & Vision", href: "about-us.html#mission" },
        { label: "Board of Directors", href: "about-us.html#board" },
        { label: "Business Model", href: "about-us.html#business" },
      ],
    },
    {
      label: "Product",
      href: "#",
      subItems: [
        { label: "Medical Devices", href: "product-portfolio/medical-devices.html" },
        { label: "Pharmaceuticals", href: "product-portfolio/pharmaceuticals.html" },
      ],
    },
    {
      label: "Quality",
      href: "#",
      subItems: [
        { label: "Quality Policy", href: "quality-policy.html" },
        { label: "Certifications & Approvals", href: "certificates-awards.html" },
      ],
    },
    { label: "Presence", href: "worldwide.html" },
    { label: "Events", href: "events.html" },
    { label: "Manufacturing", href: "manufactures.html" },
    {
      label: "Career",
      href: "career.html",
      subItems: [
        { label: "Growing with Agra", href: "career.html#Grow2" },
        { label: "Openings", href: "openings.html" },
      ],
    },
  ];

  return (
    <header className="w-full fixed top-0 z-50 bg-gradient-to-r from-gray-100 via-white to-gray-100 shadow-md">
      {/* 🔹 Top Bar */}
      <div className="bg-gray-200 text-gray-800 text-xs sm:text-sm py-1 px-6 flex justify-between font-medium">
        <p>📞 +91 9876543210</p>
        <p>✉️ agrapharma@live.com</p>
      </div>

      {/* 🔹 Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="index.htm" className="flex items-center">
          <img src="Agra1.png" className="h-10 object-contain" alt="logo" />
        </a>

        {/* 🔹 Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-700">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <a
                href={item.href}
                className="flex items-center gap-1 hover:text-blue-600 transition duration-200"
              >
                {item.label}
                {item.subItems && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 text-gray-500 group-hover:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>
              {item.subItems && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-52 hidden group-hover:block z-50">
                  {item.subItems.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* 🔹 Contact Button */}
          <a
            href="contact-us.html"
            className="block w-full text-center px-4 py-2 bg-teal-600 text-white font-semibold rounded-full shadow hover:bg-teal-700 transition"

          >
            Contact
          </a>
        </nav>

        {/* 🔹 Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* 🔹 Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-300 shadow-lg">
          <ul className="flex flex-col">
            {menuItems.map((item, index) => (
              <li key={index} className="border-b border-gray-200">
                <button
                  onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                  className="w-full flex justify-between items-center px-4 py-3 text-gray-700 font-semibold"
                >
                  {item.label}
                  {item.subItems && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-4 h-4 transform transition-transform ${openDropdown === index ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>

                {/* Mobile Submenu */}
                {item.subItems && openDropdown === index && (
                  <ul className="bg-gray-100">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={subItem.href}
                          className="block px-8 py-2 text-sm text-gray-600 hover:bg-gray-200 transition"
                        >
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            {/* 🔹 Mobile Contact Button */}
            <li className="border-b border-gray-200 px-4 py-3">
              <a
                href="contact-us.html"
                className="block w-full text-center px-4 py-2 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white font-semibold rounded-md shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"

              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;