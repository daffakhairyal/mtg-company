import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const NavbarOther = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState('bg-gray-800');
  const [textColor, setTextColor] = useState('text-yellow-600');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let found = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0 && !found) {
          const bgColor = window.getComputedStyle(section).backgroundColor;
          const newNavbarBg = bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'rgb(255, 255, 255)' ? 'bg-gray-800' : 'bg-blur';
          setNavbarBg(newNavbarBg);
          setTextColor(newNavbarBg === 'bg-white' ? 'text-yellow-700' : 'text-yellow-700');
          found = true;
        }
      });

      if (!found) {
        setNavbarBg('bg-gray-800');
        setTextColor('text-yellow-700');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToHome = () => {
    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContactUs = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToRefining = () => {
    const element = document.getElementById('refining');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToMining = () => {
    const element = document.getElementById('mining');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToCareer = () => {
    const element = document.getElementById('career');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Fixed section for working hours and button */}
      {/* Add padding to main content to avoid overlap */}
      <div className='pt-16 bg-gray-800'>
        <div className={`fixed top-0  z-50 transition-colors duration-500 ${navbarBg}`}>
          {/* <div className='hidden md:block '>
        <div className={`flex justify-around  w-screen text-center px-2 pt-6 pb-4  z-40 ${navbarBg === 'bg-blur' ? 'backdrop-blur-md' : ''}`}>
        <span className={`${textColor}`}>Working Hours: 09.00 - 17.00 WIB</span>
        <a href="/career" className="ml-4 bg-yellow-600 text-gray-800 py-1 px-3 rounded hover:bg-yellow-700">JOIN OPPORTUNITY</a>
      </div>
      </div> */}
          <nav className={`flex w-screen justify-around items-center shadow-lg py-6 px-4 ${navbarBg === 'bg-blur' ? 'backdrop-blur-md' : ''}`}>
            <NavLink to="/home"  className={`font-bold text-3xl ${textColor}`}>MTG GOLD</NavLink>
            <div className="hidden md:flex items-center gap-8">
              <NavLink to="/home" className={`hover:text-yellow-300 duration-300 ${textColor}`}>
                Home
              </NavLink>
              <NavLink to="/home" className={`hover:text-yellow-300 duration-300 ${textColor}`}>
                About
              </NavLink>
              <div className="relative group">
                <button className={`hover:text-yellow-300 duration-300 ${textColor}`}>
                  Products
                </button>
                <div className="absolute left-0 mt-2 p-4 bg-white shadow-lg rounded-lg w-64 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="grid grid-cols-2 gap-4">
                    <NavLink to="/home" className={`hover:text-yellow-300 duration-300`}>
                      Mining Gold
                    </NavLink>
                    <NavLink to="/home" className={`hover:text-yellow-300 duration-300 `}>
                      Refining Gold
                    </NavLink>
                  </div>
                </div>
              </div>
              <NavLink to="/home" className={`hover:text-yellow-300 duration-300 ${textColor}`}>
                Update
              </NavLink>
              <NavLink to="/home" className={`hover:text-yellow-300 duration-300 ${textColor}`}>
                Contact Us
              </NavLink>
              <button onClick={handleScrollToCareer} className={`hover:text-yellow-300 duration-300 ${textColor}`}>
                Career
              </button>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className={`focus:outline-none ${textColor}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </nav>
          <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <div className="p-4">
              <NavLink to="/home" className={`block mb-2 hover:text-blue-500`}>
                Home
              </NavLink>
              <NavLink to="/home" className={`block mb-2 hover:text-blue-500`}>
                About
              </NavLink>
              <button onClick={toggleServices} className={`block mb-2 hover:text-blue-500`}>
                Products
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isServicesOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="p-4 bg-gray-100 rounded-lg">
                  <NavLink to="/home" className={`block mb-2 hover:text-blue-500`}>
                    Mining Gold
                  </NavLink>
                  <NavLink to="/home" className={`block mb-2 hover:text-blue-500`}>
                    Refining Gold
                  </NavLink>
                </div>
              </div>
              <NavLink to="/home" className={`block mb-2 hover:text-blue-500`}>
                Update
              </NavLink>
              <NavLink to="/home" className={`block mb-2 hover:text-blue-500`}>
                Contact Us
              </NavLink>
              <button onClick={handleScrollToCareer} className={`block mb-2 hover:text-blue-500`}>
                Career
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarOther;
