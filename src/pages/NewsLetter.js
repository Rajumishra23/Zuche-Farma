import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    console.log('Subscribing with email:', email);
    alert('Subscribed with email: ' + email);
    setEmail('');
  };

  return (
    <section className="bg-primary py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <img
            src="/icons/emaill.png"
            alt="email"
            className="w-12 h-12 object-contain"
          />
          <div className="text-white">
            <h4 className="text-xl md:text-2xl font-bold mb-1">Our Newsletter</h4>
            <p className="text-sm md:text-base">
              Stay informed with the latest updates and innovations from Agra Pharmaceuticals!
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-auto flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            onClick={handleSubscribe}
            className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;