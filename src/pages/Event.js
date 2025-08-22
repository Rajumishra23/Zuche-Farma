import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    title: "PharmaTech Expo 2025",
    date: "March 12–14, 2025",
    location: "Mumbai, India",
    image: "event.png",
    description:
      "Showcased our latest APIs and formulations to over 10,000 industry professionals.",
  },
  {
    title: "Global GMP Summit",
    date: "June 5, 2025",
    location: "Berlin, Germany",
    image: "event1.png",
    description:
      "Panel discussion on quality assurance and regulatory compliance in emerging markets.",
  },
];

const PharmaEvents = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
         <h2 className="text-4xl font-bold text-blue-600">Events</h2>
<p className="text-gray-600 mt-4">
  We actively participate in global pharma expos, summits, and technical conferences. 
  Our recent presence at <span className="font-medium text-black-800">AgraPharma Conclave</span> highlighted our commitment to formulation innovation, regulatory excellence, and regional outreach.
</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-blue-700">{event.title}</h3>
                <p className="text-sm text-gray-500">
                  {event.date} • {event.location}
                </p>
                <p className="text-gray-700">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PharmaEvents;