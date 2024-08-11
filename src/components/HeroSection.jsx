import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const images = [
    'https://images.unsplash.com/photo-1517849845537-4d257902454a',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setFade(true);
      }, 750); // Waktu fade out
    }, 3000); // Waktu antar gambar

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id='home' className="relative bg-black text-white h-screen flex flex-col justify-center items-center pt-16">
      <div className="absolute inset-0">
        <img
          src={images[currentImage]}
          alt="Background"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${fade ? 'opacity-50' : 'opacity-0'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>
      </div>
      <div className="relative z-10 text-center max-w-2xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          PT. Mulia Timur Global
        </h1>
        <p className="text-lg md:text-xl mb-8">
        Mining Excellence, Refining Brilliance: Gold Crafted to Perfection
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
