import React from 'react';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const ProjectList = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-black py-4 px-8 border-b border-gray-700">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">MyGameStore</div>
          <nav className="flex items-center gap-6">
            <a href="#" className="text-lg hover:underline">Home</a>
            <a href="#" className="text-lg hover:underline">Store</a>
            <a href="#" className="text-lg hover:underline">Community</a>
            <a href="#" className="text-lg hover:underline">Support</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-black">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="relative"
        >
          {[
            { image: 'https://picsum.photos/1600?random=1', title: 'Epic Adventure', description: 'Join the ultimate quest.' },
            { image: 'https://picsum.photos/1600?random=2', title: 'Battle Royale', description: 'Fight for victory.' },
            { image: 'https://picsum.photos/1600?random=3', title: 'Space Odyssey', description: 'Explore the galaxy.' },
          ].map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <img src={slide.image} alt={slide.title} className="w-full h-screen object-cover" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
                  <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-xl mb-8">{slide.description}</p>
                  <button className="bg-green-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600">
                    <FaPlay className="inline-block mr-2" />
                    Play Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

     
      {/* Featured Games */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Games</h2>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            spaceBetween={20}
            slidesPerView={2}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            {[
              { title: 'Game 1', image: 'https://picsum.photos/300?random=4' },
              { title: 'Game 2', image: 'https://picsum.photos/300?random=5' },
              { title: 'Game 3', image: 'https://picsum.photos/300?random=6' },
              { title: 'Game 4', image: 'https://picsum.photos/300?random=7' },
            ].map((game, index) => (
              <SwiperSlide key={index} className="relative group">
                <img src={game.image} alt={game.title} className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <div className="text-center text-white">
                    <h3 className="text-lg font-semibold mb-2">{game.title}</h3>
                    <button className="bg-green-500 px-4 py-2 rounded-lg text-lg font-semibold hover:bg-green-600">
                      <FaPlay className="inline-block mr-2" />
                      Play
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Latest News and Updates */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest News and Updates</h2>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {[
              { title: 'Update 1', image: 'https://picsum.photos/400?random=8', summary: 'Exciting new features and updates.' },
              { title: 'Update 2', image: 'https://picsum.photos/400?random=9', summary: 'Check out our latest patch notes.' },
              { title: 'Update 3', image: 'https://picsum.photos/400?random=10', summary: 'New events and promotions.' },
            ].map((news, index) => (
              <SwiperSlide key={index} className="relative group">
                <img src={news.image} alt={news.title} className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <div className="text-center text-white p-4">
                    <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
                    <p className="mb-4">{news.summary}</p>
                    <button className="bg-blue-500 px-4 py-2 rounded-lg text-lg font-semibold hover:bg-blue-600">
                      <FaInfoCircle className="inline-block mr-2" />
                      Learn More
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 border-t border-gray-700">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 MyGameStore. All rights reserved.</p>
          <p>
            <a href="#" className="text-gray-500 hover:underline">Privacy Policy</a> | 
            <a href="#" className="text-gray-500 hover:underline"> Terms of Service</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectList;
