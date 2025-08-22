import { motion } from "framer-motion";

// ⭐ Reusable Star Rating Component
function StarRating({ rating }) {
  return (
    <div className="flex justify-center mb-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z" />
        </svg>
      ))}
    </div>
  );
}

const testimonials = [
  {
    name: "Dr. Mehta, Sunrise Hospital",
    quote:
      "Agra Pharma’s formulations are consistently reliable and meet our strict quality standards. Their delivery timelines are unmatched.",
    logo: "pc1.png",
    rating: 5,
  },
  {
    name: "GlobalMed Exports",
    quote:
      "Their regulatory support helped us expand into 3 new markets. Truly a partner in growth.",
    logo: "client1.png",
    rating: 4,
  },
  {
    name: "PharmaLink Distributors",
    quote:
      "From APIs to packaging, Agra Pharma delivers excellence at every step. We trust them with our most critical supplies.",
    logo: "client3.png",
    rating: 5,
  },
];

export default function PharmaTestimonials() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-12">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-blue-500 shadow-sm"
                />
              </div>

              <StarRating rating={item.rating} />

              <p className="text-gray-900 font-semibold mb-2">{item.name}</p>
              <p className="text-gray-700 italic text-sm">“{item.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}