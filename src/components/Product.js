import React, { useState } from 'react';

const Products = () => {
  const [activeTab, setActiveTab] = useState('Pharmaceuticals');

  const tabs = [
    { label: 'Pharmaceuticals', id: '5', token: 'H7vUYpDp6bJgtv82BbZnwqiZXnG8Uj4nVffbeDj3' },
    { label: 'Medical Devices', id: '4', token: 'H7vUYpDp6bJgtv82BbZnwqiZXnG8Uj4nVffbeDj3' },
  ];

  const products = [
    { label: 'Derma Care', href: 'product-portfolio/pharmaceuticals/Pharmaceutical.html', img: '/Storage/category-uploads/01J93R3NXAH85X1MA10X8PK85G.jpg' },
    { label: 'Ear Care', href: 'product-portfolio/pharmaceuticals/ear-care-pharmaceuticals.html', img: '/Storage/category-uploads/01J93RASNJ156WQ5PS89FDDSYJ.jpg' },
    { label: 'Eye Care', href: 'product-portfolio/pharmaceuticals/eye-care-pharmaceuticals.html', img: '/Storage/category-uploads/01J93RE4T7H90WD6BERFYGRKHD.jpg' },
    { label: 'Oral Care', href: 'product-portfolio/pharmaceuticals/oral-care-pharmaceuticals.html', img: '/Storage/category-uploads/01J93RMMBHVNHXM7F2R1S5RMQN.jpg' },
    { label: 'Nasal Care', href: 'product-portfolio/pharmaceuticals/nasal-care-pharma.html', img: '/Storage/category-uploads/01J93RSP18KDZY1WGZAWG1QM9N.jpg' },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Products</h2>
          <img src="/images/brush.png" alt="brush" className="mx-auto w-24 mb-4" />
          <p className="max-w-2xl mx-auto leading-relaxed">
            At Agra Pharmaceutical Laboratories, you are always assured of the best quality products.
            We are committed to providing quality products with sincere service. We comply with the requirements of our quality standards, and every member of our team works toward continually improving processes to enhance customer satisfaction.
          </p>
          <div className="mt-6 text-left max-w-xl mx-auto">
            <h3 className="text-lg font-semibold mb-2">Our Divisions:</h3>
            <ul className="list-disc pl-5 space-y-1 text-white">
              <li>Pharmaceutical Repacking Division</li>
              <li>Marketing Division</li>
              <li>Chemical Division</li>
              <li>Formulation Division</li>
              <li>Surgical Division</li>
            </ul>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.label)}
              className={`px-6 py-2 rounded-full border ${
                activeTab === tab.label ? 'bg-white text-primary font-semibold' : 'border-white text-white'
              } transition-all`}
              data-token={tab.token}
              data-id={tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product List */}
        <h3 className="text-2xl font-semibold mb-6 text-center">{activeTab}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-md">
              <img src={product.img} alt={product.label} className="w-full h-48 object-cover" />
              <a
                href={product.href}
                className="flex items-center justify-between px-4 py-3 hover:text-primary transition-all"
              >
                <span className="font-medium">{product.label}</span>
                <img src="/icons/right-arrow.png" alt="arrow" className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;