import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          About Agra Pharmaceutical
        </h2>
        <img src="/images/brush.png" alt="brush" className="w-24 mb-8" />

        {/* Grid Section — Doctor Image + Primary Text */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-16">
          {/* Left Content */}
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Agra Pharmaceutical Laboratories is a leading manufacturer and supplier of traditional and new generational API to the national pharmaceutical & chemical industry. We offer high-quality products at the best and most reasonable prices.
            </p>
            <p>
              Founded in 1974, our company was built on the pillars of service, quality, and punctuality. Today, Agra Pharmaceutical Laboratories operates through four specialized divisions:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Pharmaceutical Repacking Division</li>
              <li>Marketing Division</li>
              <li>Chemical Division</li>
              <li>Formulation Division</li>
            </ul>
            <a
              href="#"
              className="inline-block bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-primary-dark transition-all"
            >
              Read More
            </a>
          </div>

          {/* Right Image — Doctor */}
          <div>
            <img
              src="/images/doctor-1.webp"
              alt="doctor-1"
              className="w-full h-[500px] rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Bottom Section — Remaining Text */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-inner">
          <div className="max-w-3xl mx-auto space-y-6 text-gray-700 leading-relaxed">
            <p>
              Doing business with Agra Pharmaceutical Laboratories means gaining a reliable partner who offers knowledge, technical support, and consistent quality.
            </p>
            <p>
              We are committed to producing and delivering products and services that exceed customer expectations. Our goal is accelerated growth through effective implementation of Quality Management Systems and delivering best value to our customers.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Ensure quality & reliability at all times</li>
              <li>Monitor product performance and customer satisfaction</li>
              <li>Continuously improve product quality to uphold our global identity</li>
            </ul>

            <div>
              <h3 className="text-xl font-bold text-red-600 mb-2">Vision</h3>
              <p>
                Our vision is to lead the Pharma and Chemical industry to every small and large company worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-2">Mission</h3>
              <p>
                Our mission is to avail the product to every consumer through dealers in trade who require quality at the best price.
              </p>
            </div>

            <a
              href="#"
              className="inline-block bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-primary-dark transition-all"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;