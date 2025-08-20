import React from "react";
import {
  UserIcon,
  BuildingOfficeIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const Feedback = () => {
  return (
    <section className="relative bg-gradient-to-br from-sky-50 via-white to-sky-100 py-16 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')] bg-cover bg-center"></div>
      <h1 className='font-bold text-center text-primary text-5xl'>Feedback</h1>
      <br></br>

      <div className="max-w-6xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="flex justify-center items-center">
          <img
            src="feeback.png" // ✅ Make sure this path is correct
            alt="Feedback illustration"
            className="w-[500px] max-w-sm md:max-w-md object-contain drop-shadow-2xl"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="flex flex-col justify-center">
          {/* Heading */}
          <div className="mb-4 text-center md:text-left">
            
          </div>

          {/* Feedback Form */}
          <form className="bg-white/95 backdrop-blur-md border border-slate-200 rounded-lg shadow-lg p-5 space-y-4 w-full max-w-md mx-auto">
            {[
              {
                label: "Name of Person",
                icon: UserIcon,
                type: "text",
                required: true,
              },
              {
                label: "Company Name",
                icon: BuildingOfficeIcon,
                type: "text",
                required: true,
              },
              {
                label: "Phone No",
                icon: PhoneIcon,
                type: "tel",
                required: true,
              },
              {
                label: "Email",
                icon: EnvelopeIcon,
                type: "email",
                required: true,
              },
            ].map((field, idx) => (
              <div key={idx}>
                <label className="block font-medium text-slate-700 text-sm mb-1">
                  {field.label}{" "}
                  {field.required && <span className="text-red-500">*</span>}
                </label>
                <div className="relative">
                  <field.icon className="h-5 w-5 text-slate-400 absolute left-3 top-3" />
                  <input
                    type={field.type}
                    required={field.required}
                    className="w-full pl-10 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-sky-400 focus:border-sky-400 text-sm"
                  />
                </div>
              </div>
            ))}

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 bg-sky-500 text-white py-2 rounded-md shadow hover:bg-sky-600 transition text-sm font-semibold"
              >
                Submit
              </button>
              <button
                type="reset"
                className="flex-1 bg-slate-200 text-slate-700 py-2 rounded-md shadow hover:bg-slate-300 transition text-sm font-semibold"
              >
                Reset
              </button>
            </div>
          </form>

          {/* Direct Feedback */}
          <div className="mt-4 text-center md:text-left">
            <p className="text-slate-600 text-sm">
              📩 Prefer email? Write to{" "}
              <a
                href="mailto:feedback@agrapharmaceuticals.com"
                className="text-sky-600 font-medium hover:underline"
              >
                feedback@agrapharmaceuticals.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;