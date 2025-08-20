import React from "react";
import { ShieldCheckIcon, ClipboardDocumentCheckIcon, ChartBarIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

const QualityAssurance = () => {
  return (
    <section className="relative bg-gray-50 py-20 overflow-hidden">
      {/* Watermark Image (subtle background) */}
      <img
        src="/images/mmg.png"
        alt="watermark"
        className="absolute top-20 left-10 w-56 opacity-5 pointer-events-none select-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Quality Assurance
          </h2>
          <img
            src="/images/brush.png"
            alt="brush"
            className="mx-auto w-24 my-4"
          />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quality has been our cornerstone since <strong>1974</strong>. 
            We have implemented a robust <strong>Quality Management System (QMS)</strong> 
            to ensure all products meet the highest standards.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="flex items-center justify-center mb-6">
              <ShieldCheckIcon className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              Rigorous Testing
            </h3>
            <p className="text-gray-600 text-center">
              Rigorous product testing at every stage to ensure safety and consistency.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="flex items-center justify-center mb-6">
              <ClipboardDocumentCheckIcon className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              QC & QA Teams
            </h3>
            <p className="text-gray-600 text-center">
              Dedicated Quality Control & Quality Assurance teams ensure reliability.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="flex items-center justify-center mb-6">
              <CheckCircleIcon className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              Global Standards
            </h3>
            <p className="text-gray-600 text-center">
              Compliance with pharmacopeia standards (IP, BP, USP) for global trust.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="flex items-center justify-center mb-6">
              <ChartBarIcon className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              Continuous Improvement
            </h3>
            <p className="text-gray-600 text-center">
              Continuous process improvement to exceed customer expectations.
            </p>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 font-medium">
            Our focus on <span className="text-primary font-semibold">safety, reliability, and performance</span> 
            has made us a trusted name in the industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;
