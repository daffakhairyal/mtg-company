import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';

const HeroSection = () => {
  const heroData = {
    title: 'Hi! I am Almayrizq',
    subtitles: [
      'Fullstack Web Developer',
      'UI / UX Web Designer',
      'Frontend Developer',
      'Backend Developer',
      'Public Relation',
      'Or Anything that I can!'
    ],
    images: [
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0', // Laptop coding
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085', // Coding workspace
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c', // Code on a screen
    ],
  };

  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % heroData.images.length);
        setFade(true);
      }, 750); // Waktu fade out
    }, 3000); // Waktu antar gambar

    return () => clearInterval(interval);
  }, [heroData.images.length]);

  return (
    <div id='home' className="relative bg-black text-white h-screen flex flex-col justify-center items-center pt-16">
      <div className="absolute inset-0">
        <img
          src={heroData.images[currentImage]}
          alt="Background"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${fade ? 'opacity-50' : 'opacity-0'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>
      </div>
      <div className="relative z-10 text-center max-w-2xl px-6">
        {/* Profile Picture */}
        <div className="relative mb-6">
          <img
            src="https://picsum.photos/150" // Replace with your actual photo URL
            alt="Profile"
            className="w-64 h-auto rounded-full mx-auto mb-4 ring-4 ring-blue-300 shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {heroData.title}
        </h1>
        <TypeAnimation
          sequence={heroData.subtitles.flatMap(subtitle => [
            subtitle, 
            3000 // Waktu tampil sebelum beralih ke subtitle berikutnya
          ])}
          speed={50} // Kecepatan ketikan
          wrapper="p"
          className="text-lg md:text-xl mb-4"
          repeat={Infinity} // Ulangi animasi secara terus-menerus
        />
        <Link
          to="about-me"
          smooth={true}
          duration={500}
          className="cursor-pointer inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          About Me
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
