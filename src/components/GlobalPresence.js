import React from "react";

const GlobalPresence = () => (
  <section className="relative bg-gradient-to-br from-white via-blue-50 to-white py-20">
    <div className="max-w-6xl mx-auto px-4">
      {/* 🔹 Section Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-600 mb-6 tracking-tight">
        Our Global Presence
      </h2>

      {/* 🔹 Description */}
      <p className="text-center max-w-3xl mx-auto text-gray-600 mb-10 leading-relaxed">
        Agra Pharmaceuticals proudly serves clients across multiple continents,
        delivering high-quality products to <span className="font-semibold text-blue-600">Asia, Europe, Africa, and the Americas</span>.
        Our expanding footprint reflects our commitment to global healthcare excellence.
      </p>

      {/* 🔹 Map Image */}
      <div className="relative">
        <img
          src="/images/our-global-presence.jpg"
          alt="Global presence map"
          className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
        />

        {/* 🔹 Optional Overlay Pins (static example) */}
        <div className="absolute top-[30%] left-[40%] w-4 h-4 bg-blue-600 rounded-full shadow-md animate-ping"></div>
        <div className="absolute top-[50%] left-[60%] w-4 h-4 bg-teal-500 rounded-full shadow-md animate-pulse"></div>
        <div className="absolute top-[70%] left-[20%] w-4 h-4 bg-indigo-500 rounded-full shadow-md animate-ping"></div>
      </div>

      {/* 🔹 Legend or CTA */}
      <div className="text-center mt-10">
        <p className="text-sm text-gray-500">
          Presence in <span className="font-semibold text-blue-600">18+ countries</span> and growing.
        </p>
        <a
          href="worldwide.html"
          className="inline-block mt-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-2 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Explore Our Reach
        </a>
      </div>
    </div>
  </section>
);

export default GlobalPresence;