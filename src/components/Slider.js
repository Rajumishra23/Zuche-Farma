import React, { useState, useEffect } from 'react';

const images = [
  'front.png',
  'front2.png',
  'front3.png',
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Sliding Images */}
      <div className="absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-[800px] object-cover brightness-90" 
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent z-10 flex items-center justify-start">
        <div className="ml-8 md:ml-16 max-w-sm text-left">
          {/* Small Top Text */}
          <p className="text-sm tracking-[2px] text-yellow-400 uppercase mb-3">
            Luxury Healthcare
          </p>

          {/* Heading */}
          <h1 className="text-white text-2xl md:text-3xl font-medium leading-snug mb-4">
            Advancing Healthcare <br />
            Faster, Smarter and <br />
            <span className="text-yellow-400">Safer for Lives</span>
          </h1>

          {/* Yellow Underline */}
          <div className="w-12 h-[2px] bg-yellow-400 mb-6"></div>

          {/* CTA Button */}
          <a
            href="#products"
            className="inline-block px-6 py-2 border border-white text-white text-sm tracking-wide hover:bg-white hover:text-black transition rounded-md"
          >
            Explore Medicines
          </a>
        </div>
      </div>
    </section>
  );
};

export default Slider;
