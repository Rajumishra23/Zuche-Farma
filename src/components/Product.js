import React, { useState } from 'react';

const Products = () => {
  const [activeTab, setActiveTab] = useState('Pharmaceuticals');

  const tabs = [
    { label: 'Pharmaceuticals', id: '5', token: 'H7vUYpDp6bJgtv82BbZnwqiZXnG8Uj4nVffbeDj3' },
    { label: 'Medical Devices', id: '4', token: 'H7vUYpDp6bJgtv82BbZnwqiZXnG8Uj4nVffbeDj3' },
  ];

  const products = [
    { label: 'Derma Care', href: 'product-portfolio/pharmaceuticals/Pharmaceutical.html', img: '/storage/category-uploads/01J93R3NXAH85X1MA10X8PK85G.jpg' },
    { label: 'Ear Care', href: 'product-portfolio/pharmaceuticals/ear-care-pharmaceuticals.html', img: '/storage/category-uploads/01J93RASNJ156WQ5PS89FDDSYJ.jpg' },
    { label: 'Eye Care', href: 'product-portfolio/pharmaceuticals/eye-care-pharmaceuticals.html', img: '/storage/category-uploads/01J93RE4T7H90WD6BERFYGRKHD.jpg' },
    { label: 'Oral Care', href: 'product-portfolio/pharmaceuticals/oral-care-pharmaceuticals.html', img: '/storage/category-uploads/01J93RMMBHVNHXM7F2R1S5RMQN.jpg' },
    { label: 'Nasal Care', href: 'product-portfolio/pharmaceuticals/nasal-care-pharma.html', img: '/storage/category-uploads/01J93RSP18KDZY1WGZAWG1QM9N.jpg' },
    { label: 'Hair Care', href: 'product-portfolio/pharmaceuticals/hair-care%20pharmaceuticals.html', img: '/images/default-thumb.jpg' },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Products</h2>
          <img src="/images/brush.png" alt="brush" className="mx-auto w-24 mb-4" />
          <p className="max-w-2xl mx-auto">
            At Zuche Pharma, we specialize in a diverse range of Medical Devices and pharmaceutical products.
          </p>
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