import React from "react";
import {
  UserIcon,
  BuildingOfficeIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const fields = [
  { label: "Full Name", icon: UserIcon, type: "text", required: true },
  { label: "Company", icon: BuildingOfficeIcon, type: "text", required: true },
  { label: "Phone Number", icon: PhoneIcon, type: "tel", required: true },
  { label: "Email Address", icon: EnvelopeIcon, type: "email", required: true },
];

const Feedback = () => {
  return (
    <section className="relative bg-gradient-to-br from-sky-50 via-white to-sky-100 py-20 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')] bg-cover bg-center"></div>

      {/* Heading */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text4xl md:text-4xl font-bold text-blue-600 tracking-tight">
          Share Your Feedback
        </h2>
        <p className="text-gray-600 mt-3 text-lg max-w-xl mx-auto">
          We value your thoughts and strive to improve. Let us know how we’re doing.
        </p>
      </div>

      {/* 🔹 Centered Form with Premium Background */}
<div className="max-w-3xl mx-auto px-6 relative z-10">
  <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 backdrop-blur-md bg-opacity-70 border border-white/20 rounded-2xl shadow-2xl p-8">
    <form className="space-y-6">
      {fields.map((field, idx) => (
        <div key={idx} className="relative">
          <label className="block text-sm font-medium text-white mb-1">
            {field.label} {field.required && <span className="text-red-400">*</span>}
          </label>
          <div className="relative">
            <field.icon className="h-5 w-5 text-white/60 absolute left-3 top-3" />
            <input
              type={field.type}
              required={field.required}
              placeholder={field.label}
              className="w-full pl-10 pr-4 py-2 rounded-md bg-white/10 text-white placeholder-white/60 border border-white/30 focus:ring-2 focus:ring-cyan-400 focus:outline-none text-sm transition"
            />
          </div>
        </div>
      ))}


          

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
                className="flex gap-4 pt-2"
              >
                Reset
              </button>
            </div>
          </form>

         {/* 🔹 Direct Email */}
<div className="mt-6 text-center text-sm text-white">
  📩 For direct feedback:{" "}
  <a
    href="mailto:feedback@agrapharmaceuticals.com"
    className="text-cyan-300 font-medium hover:underline"
  >
    feedback@agrapharmaceuticals.com
  </a>
</div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;