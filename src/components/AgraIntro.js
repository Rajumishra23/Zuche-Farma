import React from 'react';
import { motion } from 'framer-motion';

const AgraIntro = () => {
  return (
    <section className="bg-white py-16 px-6 text-gray-800">
      {/* Text Content with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02, boxShadow: "0px 8px 24px rgba(0,0,0,0.1)" }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center mb-12 bg-white p-4 rounded-xl transition-all"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6 leading-tight">
          Trusted Pharmaceutical
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-6">
          <strong className="font-semibold text-gray-800">Agra Pharmaceutical Laboratories</strong> is one of India’s oldest and most trusted names in the pharmaceutical and chemical industry. Since 1974, we’ve built a legacy of quality, punctuality, and service.
        </p>

        <div className="text-left md:text-center">
          <ul className="list-disc list-inside text-base md:text-lg text-gray-700 space-y-3">
            <li>Specialized in Active Pharmaceutical Ingredients (APIs)</li>
            <li>Repackaging, chemicals, formulations & surgical supplies</li>
            <li>Serving both large enterprises and small-scale companies</li>
            <li>Driven by affordability, reliability, and innovation</li>
          </ul>
        </div>

        <p className="text-base md:text-lg text-gray-700 mt-6">
          Our journey began with a simple vision — to deliver high-quality products with integrity and care. Today, we continue that mission with dedication and innovation.
        </p>
      </motion.div>

      {/* Image Section with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, rotate: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <img
          src="about-1.webp"
          alt="Agra Pharma Facility"
          className="w-full h-auto rounded-lg shadow-md object-cover transition-all"
        />
      </motion.div>
    </section>
  );
};

export default AgraIntro;