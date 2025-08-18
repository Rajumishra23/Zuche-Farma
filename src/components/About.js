import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          About Zuche Pharmaceuticals
        </h2>
        <img
          src="/images/brush.png"
          alt="brush"
          className="w-24 mb-8"
        />

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Content */}
          <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Established in 2010, Zuche Pharmaceuticals Private Limited is a most admired healthcare company dedicated to improving lives through a wide range of products in the pharmaceutical and medical device sectors that span the continuum of care.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              One of the fastest-growing healthcare companies, we take pride in offering high-quality, trusted products that treat pervasive and persistent health conditions around the world. Our robust quality assurance department ensures that all products meet the highest standards and international guidelines.
            </p>
            <a
              href="#"
              className="inline-block bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-primary-dark transition-all"
            >
              Read More
            </a>
          </div>

          {/* Right Images */}
          <div className="relative">
            <img
              src="/images/about-1.webp"
              alt="about-1"
              className="w-full rounded-lg shadow-lg mb-4"
            />
            <img
              src="/images/doctor-1.webp"
              alt="doctor-1"
              className="w-3/4 rounded-lg shadow-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;