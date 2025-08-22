import React from 'react';

const PharmaSlider = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950">

      {/* 🔁 Marquee */}
      <div className="absolute top-0 left-0 w-full z-30 bg-black/30">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="animate-marquee text-cyan-300 text-sm tracking-widest font-semibold py-2">
            {' Agra Pharmaceuticals • Innovation • Quality • Trust '.repeat(10)}
          </div>
        </div>
      </div>

      {/* 🎥 Fixed Fullscreen Video Background */}
      <div className="absolute inset-0 w-full h-full transition-all duration-700 ease-in-out z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-90"
        >
          <source src="/Videos/Header.mp4" type="Video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-white/10 mix-blend-screen pointer-events-none"></div>
      </div>

      {/* 🧥 Overlay Content */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10 flex items-center justify-start">
        <div className="ml-8 md:ml-16 max-w-4xl text-left transition-all duration-700 ease-in-out opacity-100 translate-x-0">
          <p className="text-sm tracking-[1px] text-cyan-300 uppercase mb-3">
            Trusted Healthcare Partner
          </p>

          <h1 className="text-white text-3xl md:text-4xl font-bold leading-snug mb-4">
            Empowering Wellness <br />
            Through Science & <br />
            <span className="text-cyan-300">Compassionate Care</span>
          </h1>

          <div className="w-12 h-[2px] bg-cyan-300 mb-6"></div>

          <a
            href="#about"
            className="inline-block px-6 py-2 border border-white text-white text-sm tracking-wide hover:bg-white hover:text-black transition rounded-md"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default PharmaSlider;