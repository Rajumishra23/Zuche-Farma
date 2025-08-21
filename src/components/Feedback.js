import React from "react";
import {
  UserIcon,
  BuildingOfficeIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const fields = [
  { label: "Full Name", icon: UserIcon, type: "text", required: true },
  { label: "Company", icon: BuildingOfficeIcon, type: "text", required: false },
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
        <h2 className="text3xl md:text-5xl font-extrabold text-blue-600 tracking-tight">
          Share Your Feedback
        </h2>
        <p className="text-gray-600 mt-3 text-lg max-w-xl mx-auto">
          We value your thoughts and strive to improve. Let us know how we’re doing.
        </p>
      </div>

      {/* Centered Form */}
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl shadow-xl p-8">
          <form className="space-y-6">
            {fields.map((field, idx) => (
              <div key={idx} className="relative">
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  {field.label} {field.required && <span className="text-red-500">*</span>}
                </label>
                <div className="relative">
                  <field.icon className="h-5 w-5 text-slate-400 absolute left-3 top-3" />
                  <input
                    type={field.type}
                    required={field.required}
                    placeholder={field.label}
                    className="w-full pl-10 pr-4 py-2 rounded-md border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:outline-none text-sm transition"
                  />
                </div>
              </div>
            ))}

            {/* Message Box */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Your feedback..."
                className="w-full px-4 py-2 rounded-md border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:outline-none text-sm transition resize-none"
              ></textarea>
            </div>

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
                className="flex-1 bg-white-200 text-slate-700 py-2 rounded-md shadow hover:bg-slate-300 transition text-sm font-semibold"
              >
                Reset
              </button>
            </div>
          </form>

          {/* Direct Email */}
          <div className="mt-6 text-center text-sm text-slate-600">
            📩 For direct feedback:{" "}
            <a
              href="mailto:feedback@agrapharmaceuticals.com"
              className="text-sky-600 font-medium hover:underline"
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