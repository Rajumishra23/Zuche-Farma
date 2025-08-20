import React from "react";
import {
  BeakerIcon,
  Cog8ToothIcon,
  ShieldCheckIcon,
  MegaphoneIcon,
  BriefcaseIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

const Careers = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5 bg-[url('/images/pattern.png')] bg-cover bg-center"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Careers
          </h2>
          <img
            src="/images/brush.png"
            alt="divider"
            className="mx-auto w-24 my-4"
          />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We believe that people are the foundation of our success. Explore
            opportunities across diverse domains.
          </p>
        </div>

        {/* Careers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* R&D */}
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition text-center">
            <BeakerIcon className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Research & Development
            </h3>
            <p className="text-sm text-gray-600">
              Innovate and develop next-generation pharmaceutical solutions.
            </p>
          </div>

          {/* Production */}
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition text-center">
            <Cog8ToothIcon className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Production & Manufacturing
            </h3>
            <p className="text-sm text-gray-600">
              Ensure world-class standards in pharmaceutical manufacturing.
            </p>
          </div>

          {/* Quality Control */}
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition text-center">
            <ShieldCheckIcon className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Quality Control & Assurance
            </h3>
            <p className="text-sm text-gray-600">
              Maintain safety, compliance, and excellence in all products.
            </p>
          </div>

          {/* Sales & Marketing */}
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition text-center">
            <MegaphoneIcon className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Sales & Marketing
            </h3>
            <p className="text-sm text-gray-600">
              Expand our reach and ensure accessibility of products nationwide.
            </p>
          </div>

          {/* Business Operations */}
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition text-center">
            <BriefcaseIcon className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Business Operations
            </h3>
            <p className="text-sm text-gray-600">
              Drive efficiency and strategic growth across all departments.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative mt-20 rounded-2xl overflow-hidden shadow-2xl">
          {/* Background Image + Overlay */}
          <div className="absolute inset-0">
            <img
              src="/images/team.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center text-white bg-blue px-6 py-16 md:py-24">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Team
            </h3>
            <p className="max-w-2xl mx-auto text-lg mb-8 opacity-90">
              At Agra Pharmaceutical Laboratories, you’ll join a team that values
              innovation, quality, and customer satisfaction. Let’s shape the
              future of healthcare together.
            </p>
            <a
              href="mailto:careers@agrapharmaceuticals.com"
              className="inline-flex items-center gap-3 bg-white text-primary font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition text-lg"
            >
              <EnvelopeIcon className="h-6 w-6" />
              Apply Now – careers@agrapharmaceuticals.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
