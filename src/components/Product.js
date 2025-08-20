import React, { useState } from "react";

const Products = () => {
  const [activeTab, setActiveTab] = useState("Pharmaceuticals");

  const tabs = [
    {
      label: "Pharmaceuticals",
      id: "5",
      token: "H7vUYpDp6bJgtv82BbZnwqiZXnG8Uj4nVffbeDj3",
    },
    {
      label: "Medical Devices",
      id: "4",
      token: "H7vUYpDp6bJgtv82BbZnwqiZXnG8Uj4nVffbeDj3",
    },
  ];

  const products = [
    {
      label: "Derma Care",
      href: "product-portfolio/pharmaceuticals/Pharmaceutical.html",
      img: "/Storage/category-uploads/01J93R3NXAH85X1MA10X8PK85G.jpg",
    },
    {
      label: "Ear Care",
      href: "product-portfolio/pharmaceuticals/ear-care-pharmaceuticals.html",
      img: "/Storage/category-uploads/01J93RASNJ156WQ5PS89FDDSYJ.jpg",
    },
    {
      label: "Eye Care",
      href: "product-portfolio/pharmaceuticals/eye-care-pharmaceuticals.html",
      img: "/Storage/category-uploads/01J93RE4T7H90WD6BERFYGRKHD.jpg",
    },
    {
      label: "Oral Care",
      href: "product-portfolio/pharmaceuticals/oral-care-pharmaceuticals.html",
      img: "/Storage/category-uploads/01J93RMMBHVNHXM7F2R1S5RMQN.jpg",
    },
    {
      label: "Nasal Care",
      href: "product-portfolio/pharmaceuticals/nasal-care-pharma.html",
      img: "/Storage/category-uploads/01J93RSP18KDZY1WGZAWG1QM9N.jpg",
    },
  ];

  return (
    <section className="bg-white text-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-primary">
            Our Products
          </h2>
          <img
            src="/images/brush.png"
            alt="brush"
            className="mx-auto w-24 mb-6 opacity-80"
          />
          <p className="max-w-3xl mx-auto leading-relaxed text-gray-600">
            At Agra Pharmaceutical Laboratories, quality products and sincere
            service define our offerings. Our extensive product portfolio
            includes:
          </p>

          <div className="mt-8 text-left max-w-xl mx-auto">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <span className="font-semibold text-primary">
                  Active Pharmaceutical Ingredients (APIs) –
                </span>{" "}
                Traditional & next-gen APIs.
              </li>
              <li>
                <span className="font-semibold text-primary">Formulations –</span>{" "}
                Tablets, capsules, syrups, injectables.
              </li>
              <li>
                <span className="font-semibold text-primary">
                  Chemicals & Solvents –
                </span>{" "}
                For pharma and industrial use.
              </li>
              <li>
                <span className="font-semibold text-primary">
                  Surgical Products –
                </span>{" "}
                Essential hospital and healthcare supplies.
              </li>
              <li>
                <span className="font-semibold text-primary">
                  Repackaged Materials –
                </span>{" "}
                Customized pack sizes tailored to clients’ needs.
              </li>
            </ul>
            <p className="mt-6 text-gray-600">
              Every product is manufactured under strict quality assurance
              protocols and complies with{" "}
              <span className="font-medium text-primary">IP, BP, USP</span>{" "}
              standards.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.label)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                activeTab === tab.label
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-gray-600 border-gray-300 hover:border-primary hover:text-primary"
              }`}
              data-token={tab.token}
              data-id={tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product List */}
        <h3 className="text-2xl font-bold mb-8 text-center text-primary">
          {activeTab}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={product.img}
                alt={product.label}
                className="w-full h-48 object-cover"
              />
              <a
                href={product.href}
                className="flex items-center justify-between px-4 py-4 text-gray-700 hover:text-primary transition-colors"
              >
                <span className="font-medium">{product.label}</span>
                <img
                  src="/icons/right-arrow.png"
                  alt="arrow"
                  className="w-4 h-4"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
