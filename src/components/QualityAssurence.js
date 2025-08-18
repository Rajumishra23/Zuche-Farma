import React from 'react';

const QualityAssurance = () => {
  return (
    <section className="relative bg-white py-16 overflow-hidden">
      {/* Watermark Image */}
      <img
        src="/images/mmg.png"
        alt="watermark"
        className="absolute top-1 left-2  opacity-80 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">Quality Assurance</h2>
        <img src="/images/brush.png" alt="brush" className="w-24 mb-6" />
        <p className="text-lg text-gray-700 mb-10 leading-relaxed text-center">
          Key Element of Quality Assurance in the <br /> Pharma Industry
        </p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              We remain committed to the highest levels of quality and will ensure that all our manufacturing facilities continue to meet the exemplary standards of a global pharmaceutical company.
            </p>
            <p>
              Our Quality management team therefore uses quality assurance and control of processes as well as products to achieve the most consistent quality possible.
            </p>
            <p>
              Our operations are driven by superior technology and processes, abiding by all major stringent regulatory approvals. Our motto for quality goes beyond business and statutory requirements. Our commitment to implementing a robust global quality management system is based on our determination to sustain a culture of operational excellence, meeting and exceeding the expectations of all stakeholders, including patients, customers and regulators.
            </p>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-xl font-semibold text-red mb-4">Certified by</h3>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/GMP.jpg"
                alt="GMP"
                className="rounded-lg shadow-md w-full object-cover"
              />
              <img
                src="/images/mhra-sym.jpg"
                alt="MHRA"
                className="rounded-lg shadow-md w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;