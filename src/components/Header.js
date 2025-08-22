import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    {
      label: "About Us",
      href: "/about",
      subItems: [
        { label: "About Agra", href: "/about#about" },
        { label: "Mission & Vision", href: "/about#mission" },
        { label: "Board of Directors", href: "/about#board" },
        { label: "Business Model", href: "/about#business" },
      ],
    },
    {
      label: "Product Portfolio",
      href: "/product",
      subItems: [
        { label: "Medical Devices", href: "/product/medical-devices" },
        { label: "Pharmaceuticals", href: "/product/pharmaceuticals" },
      ],
    },
    {
      label: "Quality",
      href: "/quality",
      subItems: [
        { label: "Quality Policy", href: "/quality/policy" },
        { label: "Certifications & Approvals", href: "/quality/certificates" },
      ],
    },
    { label: "Our Presence", href: "/worldwide" },
    { label: "Events", href: "/event" },
    { label: "Manufacturing Unit", href: "/manufactures" },
    {
      label: "Career",
      href: "/career",
      subItems: [
        { label: "Growing with Agra", href: "/career#Grow2" },
        { label: "Openings", href: "/career/openings" },
      ],
    },
  ];

  const renderLink = (href, label, className = "") => {
    const isHash = href.includes("#");
    const Component = isHash ? HashLink : NavLink;
    return (
      <Component
        to={href}
        className={(props) => {
          const isActive = props?.isActive;
          return `${className} transition duration-200 ${
            isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
          }`;
        }}
        smooth
        aria-label={label}
      >
        {label}
      </Component>
    );
  };

  return (
    <header className="w-full fixed top-0 z-50 bg-gradient-to-r from-gray-100 via-white to-gray-100 shadow-md">
      {/* 🔹 Top Bar */}
      <div className="bg-gray-200 text-gray-800 text-xs sm:text-sm py-1 px-6 flex justify-between font-medium">
        <p>📞123346767</p>
        <p>✉️ agrapharma@live.com</p>
      </div>
<div className="max-w-7xl mx-auto px-4 py-1 flex items-center justify-between">
  {/* Left: Logo */}
  <NavLink to="/" className="flex items-center" aria-label="Agra Pharma Home">
    <div className="h-14 w-auto flex items-center">
      <img
        src="AL.webp"
        className="h-30 w-auto object-contain"
        alt="Agra Pharma logo"
      />
    </div>
  </NavLink>


        {/* Center: NavLinks */}
        <nav className="hidden md:flex flex-1 justify-center gap-8 text-sm font-semibold text-gray-700">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <div className="flex items-end gap-1">
                {renderLink(item.href, item.label, "inline-block")}
                {item.subItems && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 text-gray-500 mb-[2px] group-hover:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </div>

              {/* Submenu (Desktop) */}
              {item.subItems && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {item.subItems.map((subItem, subIndex) => (
                    <div key={subIndex}>
                      {renderLink(
                        subItem.href,
                        subItem.label,
                        "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right: Contact Button */}
        <NavLink
          to="/contact"
          className="hidden md:block px-5 py-2 bg-teal-600 text-white font-semibold rounded-full shadow hover:bg-teal-700 transition"
        >
          Contact
        </NavLink>

        {/* Mobile Menu Button */}
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
                  aria-haspopup="true"
                  aria-expanded={openDropdown === index}
                >
                  {item.label}
                  {item.subItems && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-4 h-4 transform transition-transform ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
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
                  <ul className="bg-gray-100 transition-all duration-300 ease-in-out">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        {renderLink(
                          subItem.href,
                          subItem.label,
                          "block px-8 py-2 text-sm text-gray-600 hover:bg-gray-200"
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            {/* Mobile Contact Button */}
            <li className="border-b border-gray-200 px-4 py-3">
              <NavLink
                to="/contact"
                className="block w-full text-center px-4 py-2 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white font-semibold rounded-md shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
