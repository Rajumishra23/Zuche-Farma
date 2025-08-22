import { motion } from "framer-motion";

const certificates = [
  {
    title: "ISO 9001:2015",
    image: "car.png", // Replace with actual image path
  },
  {
    title: "GMP Certified",
    image: "car1.png",
  },
  {
    title: "FDA Approved",
    image: "car2.png",
  },
  {
    title: "WHO Compliance",
    image: "car3.png",
  },
];

export default function Certificates() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-12">
          Our Certifications
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-4 rounded-xl shadow-md"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-32 object-contain mb-4"
              />
              <p className="text-gray-800 font-semibold">{cert.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}