import React from 'react';

const Video = () => {
  return (
    <section className="pt-0 bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
          Innovating for a Healthier Future
        </h2>
        <p className="text-gray-700 mb-8 leading-relaxed">
          At Zuche Pharmaceuticals, we are dedicated to advancing healthcare solutions globally. Watch our corporate video to learn more about our commitment to innovation, quality, and the well-being of communities worldwide.
        </p>

        <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/dLd3GkPNEt0"
            title="Zuche Corporate Video"
            frameBorder="0"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Video;