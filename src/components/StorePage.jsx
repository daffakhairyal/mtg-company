import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const StorePage = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Header */}
      <header className="p-4 bg-gray-800 flex justify-between items-center">
        <div className="text-2xl font-bold">Steam</div>
        <nav className="flex space-x-4">
          <a href="#" className="hover:underline">Store</a>
          <a href="#" className="hover:underline">Library</a>
          <a href="#" className="hover:underline">Community</a>
          <a href="#" className="hover:underline">News</a>
          <a href="#" className="hover:underline">Support</a>
          <a href="#" className="hover:underline">Profile</a>
        </nav>
        <input
          type="text"
          placeholder="Search the store"
          className="w-1/3 p-2 bg-gray-700 rounded"
        />
        <div className="relative">
          <svg className="w-6 h-6" fill="currentColor">
            {/* Cart Icon */}
          </svg>
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
        </div>
      </header>

      {/* Featured Banner */}
      <div className="mt-4">
        <Swiper modules={[Navigation, Autoplay]} navigation autoplay={{ delay: 3000 }} loop>
          <SwiperSlide>
            <div className="relative bg-black">
              <img
                src="https://picsum.photos/1600/500"
                alt="Featured Game"
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-8">
                <h2 className="text-4xl font-bold">Featured Game</h2>
                <p className="mt-4 text-lg">Description of the featured game.</p>
                <div className="mt-4 space-x-4">
                  <button className="bg-blue-600 px-4 py-2 rounded">Learn More</button>
                  <button className="bg-green-600 px-4 py-2 rounded">Add to Cart</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* More Slides */}
        </Swiper>
      </div>

      {/* Promotions & Deals */}
      <div className="mt-8 p-4">
        <h3 className="text-3xl font-bold mb-4">Special Promotions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* Promotion Card */}
          <div className="bg-gray-800 p-4 rounded hover:bg-gray-700">
            <img
              src="https://picsum.photos/200"
              alt="Game Title"
              className="w-full h-32 object-cover rounded"
            />
            <div className="mt-4">
              <h4 className="text-xl font-bold">Game Title</h4>
              <div className="text-yellow-500">50% OFF</div>
              <div className="mt-2 text-lg font-semibold">$9.99</div>
            </div>
          </div>
          {/* More Promotion Cards */}
        </div>
      </div>

      {/* Game Grid */}
      <div className="mt-8 p-4">
        <h3 className="text-3xl font-bold mb-4">All Games</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* Game Card */}
          <div className="bg-gray-800 p-4 rounded hover:bg-gray-700">
            <img
              src="https://picsum.photos/200"
              alt="Game Title"
              className="w-full h-32 object-cover rounded"
            />
            <div className="mt-4">
              <h4 className="text-xl font-bold">Game Title</h4>
              <div className="text-yellow-500">★★★★☆</div>
              <div className="mt-2 text-lg font-semibold">$19.99</div>
            </div>
          </div>
          {/* More Game Cards */}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 p-4 mt-8">
        <div className="max-w-6xl mx-auto flex justify-between">
          <div className="text-sm">
            <p>&copy; 2024 Steam. All Rights Reserved.</p>
            <p className="mt-2">
              <a href="#" className="hover:underline">About</a> | <a href="#" className="hover:underline">Support</a> | <a href="#" className="hover:underline">Terms of Service</a> | <a href="#" className="hover:underline">Privacy Policy</a>
            </p>
          </div>
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <svg className="w-6 h-6" fill="currentColor">
              {/* Facebook Icon */}
            </svg>
            <svg className="w-6 h-6" fill="currentColor">
              {/* Twitter Icon */}
            </svg>
            <svg className="w-6 h-6" fill="currentColor">
              {/* Instagram Icon */}
            </svg>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StorePage;
