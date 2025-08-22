import React, { useRef, useState, useEffect } from "react";
import {
  UserIcon,
  BuildingOfficeIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const fields = [
  { label: "Full Name", icon: UserIcon, type: "text", required: true },
  { label: "Company", icon: BuildingOfficeIcon, type: "text", required: true },
  { label: "Phone Number", icon: PhoneIcon, type: "tel", required: true },
  { label: "Email Address", icon: EnvelopeIcon, type: "email", required: true },
];

const Feedback = () => {
  const formRef = useRef(null);
  const [formHeight, setFormHeight] = useState(400); // fallback height

  useEffect(() => {
    if (formRef.current) {
      setFormHeight(formRef.current.offsetHeight);
    }
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-sky-50 via-white to-sky-100 py-20 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')] bg-cover bg-center"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 tracking-tight">
          Contact Us
        </h2>
        <p className="text-gray-600 mt-3 text-lg max-w-xl mx-auto">
          We value your thoughts and strive to improve. Let us know how we’re doing.
        </p>
      </motion.div>

      {/* Two-Column Layout */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start relative z-10">
        {/* Left: Form */}
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 backdrop-blur-md bg-opacity-70 border border-white/20 rounded-2xl shadow-2xl p-6"
        >
          <form className="space-y-5">
            {fields.map((field, idx) => {
              const Icon = field.icon;
              return (
                <div key={idx} className="relative">
                  <label className="block text-sm font-medium text-white mb-1">
                    {field.label} {field.required && <span className="text-red-400">*</span>}
                  </label>
                  <div className="relative">
                    <Icon className="h-5 w-5 text-white/60 absolute left-3 top-3" />
                    <input
                      type={field.type}
                      required={field.required}
                      placeholder={field.label}
                      className="w-full pl-10 pr-4 py-2 rounded-md bg-white/10 text-white placeholder-white/60 border border-white/30 focus:ring-2 focus:ring-cyan-400 focus:outline-none text-sm transition"
                    />
                  </div>
                </div>
              );
            })}

            {/* Buttons */}
            <div className="flex gap-4 pt-2">
              <button
                type="submit"
                className="flex-1 bg-sky-600 text-white py-2 rounded-md shadow hover:bg-sky-700 transition text-sm font-semibold"
              >
                Submit
              </button>
              <button
                type="reset"
                className="flex-1 bg-white/10 text-white py-2 rounded-md shadow hover:bg-white/20 transition text-sm font-semibold"
              >
                Reset
              </button>
            </div>

            {/* Direct Email */}
            <div className="mt-6 text-center text-sm text-white">
              📩 For direct feedback:{" "}
              <a
                href="mailto:feedback@agrapharmaceuticals.com"
                className="text-cyan-300 font-medium hover:underline"
              >
                feedback@agrapharmaceuticals.com
              </a>
            </div>
          </form>
        </motion.div>

        {/* Right: Map */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-xl"
          style={{ height: formHeight }}
        >
          <iframe
            title="Agra Pharma Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.9999999999995!2d78.008!3d27.1767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397477f5d5d5d5d5%3A0xabcdef123456789!2sAgra%20Pharmaceuticals!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Feedback;