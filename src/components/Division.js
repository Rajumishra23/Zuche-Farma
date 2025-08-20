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
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            Our Divisions
          </h2>
          <img
            src="/images/brush.png"
            alt="decorative"
            className="mx-auto w-24 mb-6 opacity-80"
          />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We operate through specialized business divisions that cater to
            different sectors of healthcare and chemical industries.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((division, index) => (
            <div
              key={index}
              className="relative bg-white border-t-4 border-primary/80 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 text-center group"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="bg-primary/10 rounded-full p-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <division.icon className="h-12 w-12 text-primary group-hover:scale-110 transform transition-transform duration-300" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {division.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed">
                {division.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Divisions;
