import React from "react";
import {
  BeakerIcon,
  Cog8ToothIcon,
  ShieldCheckIcon,
  MegaphoneIcon,
  BriefcaseIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const career = [
  {
    title: "Research & Development",
    description: "Innovate and develop next-generation pharmaceutical solutions.",
    icon: BeakerIcon,
  },
  {
    title: "Production & Manufacturing",
    description: "Ensure world-class standards in pharmaceutical manufacturing.",
    icon: Cog8ToothIcon,
  },
  {
    title: "Quality Control & Assurance",
    description: "Maintain safety, compliance, and excellence in all products.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Sales & Marketing",
    description: "Expand our reach and ensure accessibility of products nationwide.",
    icon: MegaphoneIcon,
  },
  {
    title: "Business Operations",
    description: "Drive efficiency and strategic growth across all departments.",
    icon: BriefcaseIcon,
  },
];

const Career = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5 bg-[url('/images/pattern.png')] bg-cover bg-center"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 tracking-tight mb-4">
            Career
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We believe people are the foundation of our success. Explore opportunities across diverse domains.
          </p>
        </motion.div>

        {/* Career Banner Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <img
            src="career1.png"
            alt="Career Opportunities"
            className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* Careers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {career.map((role, index) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl hover:border hover:border-blue-500 transition text-center group"
              >
                <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600">
                  {role.title}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-800">
                  {role.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mt-20 rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="relative z-10 text-center text-white bg-indigo-400 px-6 py-16 md:py-24">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h3>
            <p className="max-w-2xl mx-auto text-lg mb-8 opacity-90">
              At Agra Pharmaceutical Laboratories, you’ll join a team that values innovation, quality, and customer satisfaction. Let’s shape the future of healthcare together.
            </p>
            <a
              href="mailto:careers@agrapharmaceuticals.com"
              className="inline-flex items-center gap-3 bg-white text-blue-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition text-lg"
            >
              <EnvelopeIcon className="h-6 w-6" />
              Apply Now – careers@agrapharmaceuticals.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Career;