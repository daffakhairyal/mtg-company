import React from 'react';
import { useInView } from 'react-intersection-observer';

// Dummy data
const productsData = [
  {
    id: "refining",
    title: "Pure Gold Bars",
    description: "Our pure gold bars offer the highest quality with a purity level of 99.99%. Ideal for investment and long-term storage.",
    image: "https://picsum.photos/800/600?random=3", // Product image
    features: [
      "99.99% purity",
      "Various sizes available",
      "Secure and high-quality packaging",
      "Official certification"
    ],
    bgColor: "bg-black" // Background color for this product
  },
  {
    id: "mining",
    title: "Mining Gold",
    description: "Our mining operations focus on high-yield gold mining in Papua, Indonesia. We ensure the highest quality extraction processes and environmental compliance.",
    image: "https://picsum.photos/800/600?random=4", // Mining gold image
    features: [
      "High-yield mining operations",
      "State-of-the-art equipment",
      "Environmentally compliant practices",
      "Expert team"
    ],
    bgColor: "bg-gray-800" // Background color for this product
  }
];

const Products = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className={`py-16 ${inView ? 'fade-in' : ''} ${inView ? 'bg-gray-900' : ''}`} // Background color when in view
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Products</h2>
          <p className="text-lg md:text-xl text-gray-300">
            Discover our premium quality products and mining operations that meet the highest standards.
          </p>
        </div>
        {productsData.map((product) => (
          <div
            key={product.id}
            id={product.id}
            className={`flex flex-col md:flex-row items-center justify-center md:justify-start mb-12 ${product.bgColor} p-8 rounded-lg shadow-lg`}
          >
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-cover rounded-lg border-4 border-yellow-300"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-3xl font-semibold mb-4 text-white">{product.title}</h3>
              <p className="text-base text-gray-300 mb-6">{product.description}</p>
              <ul className="list-disc list-inside mb-6">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-300 mb-2">{feature}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className="bg-yellow-500 text-gray-800 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
