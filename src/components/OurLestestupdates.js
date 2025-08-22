import React from "react";

const LatestUpdates = () => (
  <section className="relative bg-white py-16">
    <div className="max-w-6xl mx-auto px-4">
      {/* 🔹 Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 leading-snug mb-10">
        Our Latest Updates
      </h2>

      {/* 🔹 Updates Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 🔹 Card 1: Event */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
          <span className="absolute top-3 left-3 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium z-10">
            Event
          </span>
          <a
            href="blog/Upcoming%20Participation%20in%20Medica%202024-Dusseldorf%2C%20Germany%2011%20-%2014%20November%202024.html"
            className="block"
          >
            <img
              src="latest1.png"
              alt="Medica Event"
              className="w-full h-56 object-cover"
            />
          </a>
          <div className="p-4">
            <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
              <span className="flex items-center gap-1">
                <img
                  src="/icons/message-circle.svg"
                  alt="comments"
                  className="w-4 h-4"
                />
                02 Comments
              </span>
              <span className="flex items-center gap-1">
                <img
                  src="/icons/calendar.svg"
                  alt="calendar"
                  className="w-4 h-4"
                />
                Apr 30, 2024
              </span>
            </div>
            <h5 className="text-lg font-semibold leading-snug mt-2">
              <a
                href="blog/Upcoming%20Participation%20in%20Medica%202024-Dusseldorf%2C%20Germany%2011%20-%2014%20November%202024.html"
                className="text-blue-600 hover:underline"
              >
                Upcoming Participation in Medica 2024 – Dusseldorf, Germany
              </a>
            </h5>
            <p className="text-gray-700 mt-2">
              Agra Pharmaceuticals Private Limited, a company incorporate...
            </p>
            <hr className="my-4" />
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <img src="/icons/user.png" alt="user" className="w-4 h-4" />
                Agra Pharmaceuticals Pvt. Ltd.
              </span>
              <a
                href="blog/Upcoming%20Participation%20in%20Medica%202024-Dusseldorf%2C%20Germany%2011%20-%2014%20November%202024.html"
                className="flex items-center gap-1 text-blue-600 hover:underline"
              >
                See More
                <img src="/icons/next.png" alt="next" className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 🔹 Card 2: Product Launch */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
          <span className="absolute top-3 left-3 bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium z-10">
            Product Launch
          </span>
          <a
            href="blog/New%20Launch%20of%20Agra%20Respira%20Inhaler%20for%20COPD%20Patients.html"
            className="block"
          >
            <img
              src="latest.png"
              alt="Respira Inhaler"
              className="w-full h-56 object-cover"
            />
          </a>
          <div className="p-4">
            <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
              <span className="flex items-center gap-1">
                <img
                  src="/icons/message-circle.svg"
                  alt="comments"
                  className="w-4 h-4"
                />
                05 Comments
              </span>
              <span className="flex items-center gap-1">
                <img
                  src="/icons/calendar.svg"
                  alt="calendar"
                  className="w-4 h-4"
                />
                Aug 10, 2024
              </span>
            </div>
            <h5 className="text-lg font-semibold leading-snug mt-2">
              <a
                href="blog/New%20Launch%20of%20Agra%20Respira%20Inhaler%20for%20COPD%20Patients.html"
                className="text-blue-600 hover:underline"
              >
                New Launch: Agra Respira Inhaler for COPD Patients
              </a>
            </h5>
            <p className="text-gray-700 mt-2">
              Designed for enhanced respiratory relief, Respira is now
              available across India...
            </p>
            <hr className="my-4" />
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <img src="/icons/user.png" alt="user" className="w-4 h-4" />
                Agra Pharmaceuticals Pvt. Ltd.
              </span>
              <a
                href="blog/New%20Launch%20of%20Agra%20Respira%20Inhaler%20for%20COPD%20Patients.html"
                className="flex items-center gap-1 text-blue-600 hover:underline"
              >
                See More
                <img src="/icons/next.png" alt="next" className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 🔹 Card 3: CSR Initiative */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
          <span className="absolute top-3 left-3 bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full font-medium z-10">
            CSR
          </span>
          <a
            href="blog/Agra%20Pharma%20CSR%20Health%20Camp%20Rural%20India.html"
            className="block"
          >
            <img
              src="R1.png"
              alt="Health Camp"
              className="w-full h-56 object-cover"
            />
          </a>
          <div className="p-4">
            <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
              <span className="flex items-center gap-1">
                <img
                  src="/icons/message-circle.svg"
                  alt="comments"
                  className="w-4 h-4"
                />
                03 Comments
              </span>
              <span className="flex items-center gap-1">
                <img
                  src="/icons/calendar.svg"
                  alt="calendar"
                  className="w-4 h-4"
                />
                July 18, 2024
              </span>
            </div>
            <h5 className="text-lg font-semibold leading-snug mt-2">
              <a
                href="blog/Agra%20Pharma%20CSR%20Health%20Camp%20Rural%20India.html"
                className="text-blue-600 hover:underline"
              >
                CSR Health Camp Initiative in Rural India
              </a>
            </h5>
            <p className="text-gray-700 mt-2">
              Agra Pharmaceuticals organized a free health camp offering
              checkups and medicines to underserved communities...
            </p>
            <hr className="my-4" />
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <img src="/icons/user.png" alt="user" className="w-4 h-4" />
                Agra Pharmaceuticals Pvt. Ltd.
              </span>
              <a
                href="blog/Agra%20Pharma%20CSR%20Health%20Camp%20Rural%20India.html"
                className="flex items-center gap-1 text-blue-600 hover:underline"
              >
                See More
                <img src="/icons/next.png" alt="next" className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 View All Button */}
      <div className="flex justify-center mt-12">
        <a
          href="/blog"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-full shadow hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
        >
          View All Updates
        </a>
      </div>
    </div>
  </section>
);

export default LatestUpdates;
