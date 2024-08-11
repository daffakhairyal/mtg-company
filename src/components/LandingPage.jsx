import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const movies = [
  {
    id: 1,
    title: 'Movie Title 1',
    imageUrl: 'https://picsum.photos/400/600?random=1',
  },
  {
    id: 2,
    title: 'Movie Title 2',
    imageUrl: 'https://picsum.photos/400/600?random=2',
  },
  {
    id: 3,
    title: 'Movie Title 3',
    imageUrl: 'https://picsum.photos/400/600?random=3',
  },
  // Tambahkan lebih banyak film sesuai kebutuhan
];

const LandingPages = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <header className="px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Netflix Clone</h1>
        <button className="bg-red-600 py-2 px-4 rounded">Logout</button>
      </header>

      <section className="px-6">
        <h2 className="text-2xl font-bold my-6">Trending Now</h2>
        <Slider {...settings}>
          {movies.map((movie) => (
            <div key={movie.id} className="px-2">
              <img
                src={movie.imageUrl}
                alt={movie.title}
                className="rounded-lg object-cover w-full"
              />
            </div>
          ))}
        </Slider>
      </section>

      <section className="px-6 my-12">
        <h2 className="text-2xl font-bold mb-6">Continue Watching</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <div key={movie.id}>
              <img
                src={movie.imageUrl}
                alt={movie.title}
                className="rounded-lg object-cover w-full"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 my-12">
        <h2 className="text-2xl font-bold mb-6">Watch Again</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <div key={movie.id}>
              <img
                src={movie.imageUrl}
                alt={movie.title}
                className="rounded-lg object-cover w-full"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPages;
