import { motion } from "framer-motion";

export default function PharmaServices() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-16">
          Our Services
        </h2>

        {/* Content + Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          
          {/* Left: Content with Hover Animation */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02, boxShadow: "0px 8px 24px rgba(0,0,0,0.1)" }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center bg-white p-4 rounded-xl transition-all"
          >
            <p className="text-gray-600 mb-6">
              At <strong>Agra Pharma,</strong> we deliver precision-driven pharmaceutical solutions
              with global compliance. From formulation to final packaging, our
              services are designed to meet the highest industry standards.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✅ Contract Manufacturing (Tablets, Capsules, Injectables)</li>
              <li>✅ Custom Formulation & R&D</li>
              <li>✅ Regulatory Documentation & Dossier Prep</li>
              <li>✅ Export-Ready Packaging & Labeling</li>
            </ul>
            <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition self-start">
              Explore All Services
            </button>
          </motion.div>

          {/* Right: Image with Hover Animation */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <img
              src="ser1.png" // Replace with actual image path
              alt="Agra Pharma Lab"
              className="w-full h-full object-cover rounded-xl shadow-xl transition-all"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}