import React from 'react';

const Slider = () => {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Desktop Video */}
      <video
        className="hidden md:block absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/front-1-video.mp4" type="video/mp4" />
      </video>

      {/* Mobile Video */}
      <video
        className="block md:hidden absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/front-1-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 bg-black/40">
        <h1 className="text-white text-2xl md:text-4xl font-semibold text-center max-w-3xl leading-snug">
          <span className="text-primary block mb-2">Providing safe and affordable</span>
          healthcare products for a better quality of life.
        </h1>
      </div>
    </section>
  );
};

export default Slider;