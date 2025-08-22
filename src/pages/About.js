import React from "react";
import { motion } from "framer-motion";

const fadeVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <motion.section
      variants={fadeVariant}
      initial="hidden"
      animate="visible"
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div variants={fadeVariant} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            <span className="text-blue-600">About Us</span>
          </h2>
        </motion.div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          {/* Left Content */}
<motion.div
  variants={fadeVariant}
  className="bg-white/90 backdrop-blur-md p-7 rounded-xl shadow-lg"
>
  <div className="space-y-6 text-gray-700 leading-relaxed">
    <h3 className="text-2xl font-bold text-gray-800">
      About <span className="text-red-600">Agra Pharmaceuticals</span>
    </h3>
    <p>
      Established in 2010, Agra Pharmaceuticals Private Limited is among the most admired healthcare
      companies dedicated to improving lives through a wide range of products in the pharmaceutical,
      medical device, and services sectors that span the continuum of care.
    </p>
    <p>
      One of the fastest-growing healthcare companies, we take pride in offering high-quality trusted
      products that treat pervasive and persistent health conditions around the world. We have a robust
      quality assurance department which ensures that all the products developed and offered by us meet
      highest standards and international guidelines.
    </p>
    <a
      href="#"
      className="inline-block bg-red-600 text-white px-6 py-2 rounded-md font-medium shadow-md hover:shadow-lg hover:bg-red-700 transition-all"
    >
      Read More
    </a>
  </div>
</motion.div>


          {/* Right Image */}
          <motion.div variants={fadeVariant} className="relative group">
            <img
              src="A.png"
              alt="doctor"
              className="w-full h-[600px] md:h-[600px] object-cover rounded-xl shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:brightness-105"
            />
            <div className="absolute inset-0 rounded-xl bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={fadeVariant}
          className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-lg hover:shadow-xl"
        >
          <div className="max-w-3xl mx-auto space-y-6 text-gray-700 leading-relaxed">
            <p>
              Partnering with Agra Pharmaceutical Laboratories means gaining a{" "}
              <span className="font-semibold text-primary">reliable ally</span>{" "}
              who offers knowledge, technical support, and consistent quality.
            </p>
            <p>
              We are committed to delivering products and services that{" "}
              <span className="font-semibold">exceed customer expectations</span>.
              Our goal is sustainable growth through effective Quality Management
              Systems and delivering the best value to our customers.
            </p>
            <ul className="list-disc pl-5 space-y-1 marker:text-primary">
              <li>Ensure quality & reliability at all times</li>
              <li>Monitor product performance and customer satisfaction</li>
              <li>
                Continuously improve product quality to uphold global standards
              </li>
            </ul>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-8 pt-6">
              <div>
                <h3 className="text-xl font-bold text-red-600 mb-2">Vision</h3>
                <p>
                  To lead the Pharma and Chemical industry, reaching every company
                  worldwide, big or small.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-600 mb-2">Mission</h3>
                <p>
                  To provide high-quality products to every consumer through trusted
                  trade dealers at the best price.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#"
                className="inline-block bg-primary text-white px-6 py-2 rounded-md font-medium shadow-md hover:shadow-lg hover:bg-primary-dark transition-all"
              >
                Read More
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;