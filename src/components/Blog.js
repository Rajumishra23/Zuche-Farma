import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Revolutionizing Medical Devices in India",
    summary: "Agra Pharma is setting new benchmarks with precision-engineered devices that meet global standards.",
    image: "blog1.png",
    link: "/blog/medical-devices",
    date: "August 20, 2025",
  },
  {
    title: "Inside Our Quality Lab: Certifications That Matter",
    summary: "Explore how Agra Pharma maintains world-class quality through rigorous testing and international approvals.",
    image: "blog2.png",
    link: "/blog/quality-lab",
    date: "August 15, 2025",
  },
  {
    title: "Global Presence, Local Impact",
    summary: "From Agra to Africa, our products are making a difference. Here's how we scale with purpose.",
    image: "blog3.png",
    link: "/blog/global-impact",
    date: "August 10, 2025",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Agra Pharma Insights

</h2>
        <p className="text-gray-600 mb-10">
          Discover how innovation, quality, and global reach define our journey.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{post.summary}</p>
                <p className="text-xs text-gray-400 mb-2">{post.date}</p>
                <Link
                  to={post.link}
                  className="inline-block text-blue-600 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;