import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useInView } from 'react-intersection-observer';

const galleryImages = [
  'https://picsum.photos/800/400?random=1',
  'https://picsum.photos/800/400?random=2',
  'https://picsum.photos/800/400?random=3',
  'https://picsum.photos/800/400?random=4',
  'https://picsum.photos/800/400?random=5',
  'https://picsum.photos/800/400?random=6',
];

const Gallery = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section ref={ref} id="gallery" className={`py-12 bg-black text-white ${inView ? 'fade-in' : ''}`}>
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-8">Watch Our Latest Projects</h2>
        <Slider {...settings} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          {galleryImages.map((src, index) => (
            <div key={index} className="px-2">
              <div className="relative">
                <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-64 object-cover rounded-lg shadow-lg" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button className="text-white bg-red-600 py-2 px-4 rounded-full text-xl">Watch Now</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;
