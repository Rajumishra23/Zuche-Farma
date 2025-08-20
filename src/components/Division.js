import React from "react";
import {
  BeakerIcon,
  BriefcaseIcon,
  CubeIcon,
  ScissorsIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";

const divisions = [
  {
    title: "Pharmaceutical Repacking Division",
    description:
      "Custom repackaging solutions for pharma companies with strict compliance and safety standards.",
    icon: BeakerIcon,
  },
  {
    title: "Marketing Division",
    description:
      "Nationwide distribution network ensuring accessibility of products across regions.",
    icon: BriefcaseIcon,
  },
  {
    title: "Chemical Division",
    description:
      "Bulk chemicals, solvents, and intermediates tailored for pharmaceutical & chemical industries.",
    icon: CubeIcon,
  },
  {
    title: "Formulation Division",
    description:
      "Finished dosage forms including tablets, capsules, syrups, and injectables with global standards.",
    icon: PresentationChartLineIcon,
  },
  {
    title: "Surgical Division",
    description:
      "Expanding range of surgical and hospital products designed for precision and reliability.",
    icon: ScissorsIcon,
  },
];

const Divisions = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-stretch">
        {/* Left Text Block */}
        <div className="flex flex-col justify-between space-y-8 animate-fade-up">
          <div>
            <h2 className="text-4xl font-bold text-center text-slate-800 mb-6">
              Our <span className="text-sky-600 text-center ">Divisions</span>
            </h2>

            {divisions.map((division, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 mb-6 group transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-sky-100 text-sky-600 rounded-xl group-hover:animate-pulse">
                  <division.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-700 group-hover:text-sky-600 transition-colors duration-300">
                    {division.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {division.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Block */}
        <div className="h-full animate-slide-in">
          <img
            src="1.png" 
            alt="Our Divisions"
            className="rounded-xl shadow-xl object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Divisions;