import React from 'react';
import { IoCloudDownload } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa';

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
    name : 'Daffa Khairy Almayrizq',
    phone : '0858-4140-0449',
    email: 'almayrizqd@gmail.com',
    fb: 'https://www.facebook.com/daffakhairy.almayrizq.35',
    wa:'https://wa.me/6285841400449',
    linkedin:'https://linkedin.com/in/daffakhairyalmayrizq',
    ig:'https://instagram.com/daffakhairyal',
    github:'https://github.com/daffakhairyal'
  }

  const handleScrollToHome = () => {
    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <button onClick={handleScrollToHome} className="font-bold text-4xl text-yellow-600">ALMAYRIZQ</button>
          <button className="flex items-center border border-yellow-600 p-3 mt-6 md:mt-0">
            <IoCloudDownload className="text-3xl text-yellow-600 mr-4" />
            <h1 className="font-semibold text-xl text-yellow-600">DOWNLOAD MY RESUME</h1>
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 py-6">
          {/* Personal Info */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">{name.name}</h2>
            <p className="text-gray-400">Phone: {name.phone}</p>
            <p className="text-gray-400">Email: {name.email}</p>
          </div>
          {/* Navigation Links */}
          <div className="flex flex-col mb-8 md:mb-0">
            <a href="#home" className="text-gray-400 hover:text-yellow-300 mx-2 mb-2 md:mb-0">Home</a>
            <a href="#about" className="text-gray-400 hover:text-yellow-300 mx-2 mb-2 md:mb-0">About</a>
            <a href="#services" className="text-gray-400 hover:text-yellow-300 mx-2 mb-2 md:mb-0">Services</a>
            <a href="#projects" className="text-gray-400 hover:text-yellow-300 mx-2 mb-2 md:mb-0">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-yellow-300 mx-2 mb-2 md:mb-0">Contact</a>
          </div>
          {/* Social Media */}
          <div className="flex space-x-4">
            <a href={name.fb} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300">
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a href={name.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300">
              <FaLinkedinIn className="w-6 h-6" />
            </a>
            <a href={name.ig} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href={name.wa} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300">
              <FaWhatsapp className="w-6 h-6" />
            </a>
            <a href={name.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300">
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
          {/* Visitor Stats */}
          <div className="text-gray-400 text-sm mt-8 md:mt-0 md:w-[200px] px-4 py-6 border border-gray-700 rounded-md">
            <p className="font-semibold mb-2">Visitor Stats:</p>
            <hr className="mb-4" />
            <div className="flex flex-col space-y-1">
              <div className="flex justify-between">
                <p>Today:</p> <p><span className="font-bold text-yellow-300">{visitorStats.today}</span></p>
              </div>
              <div className="flex justify-between">
                <p>Yesterday:</p> <p><span className="font-bold text-yellow-300">{visitorStats.yesterday}</span></p>
              </div>
              <div className="flex justify-between">
                <p>This Week:</p> <p><span className="font-bold text-yellow-300">{visitorStats.thisWeek}</span></p>
              </div>
              <div className="flex justify-between">
                <p>Last Week:</p> <p><span className="font-bold text-yellow-300">{visitorStats.lastWeek}</span></p>
              </div>
              <div className="flex justify-between">
                <p>This Month:</p> <p><span className="font-bold text-yellow-300">{visitorStats.thisMonth}</span></p>
              </div>
              <div className="flex justify-between">
                <p>Last Month:</p> <p><span className="font-bold text-yellow-300">{visitorStats.lastMonth}</span></p>
              </div>
              <div className="flex justify-between">
                <p>This Year:</p> <p><span className="font-bold text-yellow-300">{visitorStats.thisYear}</span></p>
              </div>
              <div className="flex justify-between">
                <p>Last Year:</p> <p><span className="font-bold text-yellow-300">{visitorStats.lastYear}</span></p>
              </div>
              <hr className="mt-3" />
              <div className="flex justify-between">
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
