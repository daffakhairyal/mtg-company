import React from 'react';
import { IoCloudDownload } from "react-icons/io5";

const Footer = () => {
  // Dummy data for visitor counts
  const visitorStats = {
    today: 150,
    yesterday: 120,
    thisWeek: 900,
    lastWeek: 800,
    thisMonth: 4000,
    lastMonth: 3500,
    thisYear: 50000,
    lastYear: 45000,
    total: 100000
  };

  const name = {
    name : 'PT. Mulia Timur Global',
    phone : '0858-4140-0449',
    email: 'almayrizqd@gmail.com'
  }

  const handleScrollToHome = () => {
    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className='flex flex-col md:flex-row  justify-between items-center m-5'>
        <button onClick={handleScrollToHome} className={`font-bold text-3xl text-yellow-600`}>MTG GOLD</button>
        <div className='flex flex-row items-center border border-yellow-600 p-4 my-3'>
        <IoCloudDownload className='font-bold text-3xl text-yellow-600 mr-4' />
        <h1 className={`font-semibold text-xl text-yellow-600`}>DOWNLOAD COMPANY PROFILE</h1>
        </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center border-t border-gray-700">
          {/* Logo and Info */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">{name.name}</h2>
            <p className="text-gray-400 text-sm">Phone: {name.phone}</p>
            <p className="text-gray-400 text-sm">Email: {name.email}</p>
          </div>
          {/* Navigation Links */}
          <div className="flex flex-col md:flex-col mb-6 md:mb-0">
            <a href="#home" className="text-gray-400 hover:text-yellow-300 mx-2 mb-2 md:mb-0">Home</a>
            <a href="#about" className="text-gray-400 hover:text-yellow-300 mx-2 mb-2 md:mb-0">About</a>
            <a href="#services" className="text-gray-400 hover:text-yellow-300 mx-2 mb-2 md:mb-0">Services</a>
            <a href="#projects" className="text-gray-400 hover:text-yellow-300 mx-2 mb-2 md:mb-0">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-yellow-300 mx-2 mb-2 md:mb-0">Contact</a>
          </div>
          {/* Social Media */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12.1c0-5.5-4.5-10-10-10S2 6.6 2 12.1c0 4.7 3.2 8.6 7.5 9.9v-7h-2.3V12.1H9v-2.2c0-2.3 1.4-3.5 3.4-3.5.9 0 1.8.1 2.7.2v3h-1.5c-1.5 0-1.8.7-1.8 1.7v2.1h3.6l-.5 3.3h-3.1v7c4.3-1.3 7.5-5.2 7.5-9.9z"></path>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6.003c-.803.356-1.67.596-2.58.703a4.51 4.51 0 0 0 1.977-2.484 9.035 9.035 0 0 1-2.868 1.095A4.493 4.493 0 0 0 15.3 5a4.44 4.44 0 0 0-4.448 4.448c0 .348.04.686.113 1.014a12.788 12.788 0 0 1-9.284-4.686 4.457 4.457 0 0 0 1.376 5.93 4.496 4.496 0 0 1-2.032-.56v.056a4.448 4.448 0 0 0 3.577 4.38 4.507 4.507 0 0 1-2.028.078 4.45 4.45 0 0 0 4.17 3.1 8.993 8.993 0 0 1-5.563 1.917c-.363 0-.723-.021-1.078-.062a12.654 12.654 0 0 0 6.86 2.013c8.236 0 12.739-6.818 12.739-12.739 0-.195-.004-.39-.013-.583A9.094 9.094 0 0 0 22.46 6.003z"></path>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.451 20.451h-3.874v-5.432c0-1.295-.023-2.962-1.803-2.962-1.803 0-2.081 1.408-2.081 2.863v5.531H8.822v-11.44h3.724v1.554h.052c.516-.978 1.779-2.014 3.676-2.014 3.929 0 4.646 2.585 4.646 5.964v6.671zM6.968 8.693c-1.313 0-2.375-.838-2.375-1.926 0-1.088 1.049-1.926 2.358-1.926 1.333 0 2.375.838 2.375 1.926 0 1.088-1.042 1.926-2.375 1.926zm1.867 11.758H5.101v-11.44h3.734v11.44zM4.934 4.02c-1.285 0-2.32 1.026-2.32 2.292 0 1.267 1.035 2.293 2.32 2.293 1.265 0 2.295-1.026 2.295-2.292 0-1.266-1.03-2.292-2.295-2.292z"></path>
              </svg>
            </a>
          </div>
          <div className="text-gray-400 text-sm w-[200px] px-4 py-6">
            <p>Visitor Stats:</p>
            <hr />
            <div className="flex flex-col py-3">
                <div className='flex flex-row justify-between'>
                    <p>Today:</p> <p><span className="font-bold text-yellow-300">{visitorStats.today}</span></p>
                </div>
                <div className='flex flex-row justify-between'>
                    <p>Yesterday:</p> <p><span className="font-bold text-yellow-300">{visitorStats.yesterday}</span></p>
                </div>
                <div className='flex flex-row justify-between'>
                    <p>This Week:</p> <p><span className="font-bold text-yellow-300">{visitorStats.thisWeek}</span></p>
                </div>
                <div className='flex flex-row justify-between'>
                    <p>Last Week:</p> <p><span className="font-bold text-yellow-300">{visitorStats.lastWeek}</span></p>
                </div>
                <div className='flex flex-row justify-between'>
                    <p>This Month:</p> <p><span className="font-bold text-yellow-300">{visitorStats.thisMonth}</span></p>
                </div>
                <div className='flex flex-row justify-between'>
                    <p>Last Month:</p> <p><span className="font-bold text-yellow-300">{visitorStats.lastMonth}</span></p>
                </div>
                <div className='flex flex-row justify-between'>
                    <p>This Year:</p> <p><span className="font-bold text-yellow-300">{visitorStats.thisYear}</span></p>
                </div>
                <div className='flex flex-row justify-between'>
                    <p>Last Year:</p> <p><span className="font-bold text-yellow-300">{visitorStats.lastYear}</span></p>
                </div>
                <hr className='mt-3' />
                <div className='flex flex-row justify-between'>
                    <p>Total:</p> <p><span className="font-bold text-yellow-300">{visitorStats.total}</span></p>
                </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm mb-2">
            &copy; {new Date().getFullYear()} {name.name}. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
