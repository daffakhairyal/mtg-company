import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Data dummy untuk gambar slider
const images = [
  'https://picsum.photos/1200/600?random=1',
  'https://picsum.photos/1200/600?random=2',
  'https://picsum.photos/1200/600?random=3',
];

// Data dummy untuk proyek
const featuredProjects = [
  {
    id: 1,
    title: 'Project Title 1',
    description: 'A short description of the project highlighting key aspects and achievements.',
    imageUrl: 'https://picsum.photos/400/300?random=4',
    detailsUrl: '#'
  },
  {
    id: 2,
    title: 'Project Title 2',
    description: 'A short description of the project highlighting key aspects and achievements.',
    imageUrl: 'https://picsum.photos/400/300?random=5',
    detailsUrl: '#'
  },
  {
    id: 3,
    title: 'Project Title 3',
    description: 'A short description of the project highlighting key aspects and achievements.',
    imageUrl: 'https://picsum.photos/400/300?random=6',
    detailsUrl: '#'
  }
];

const Projects = () => {
  const { ref: sliderRef, inView: sliderInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: projectsRef, inView: projectsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const slider = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="px-4 md:px-12 py-16" id="projects" ref={projectsRef}>
      <header className="text-center mb-12">
        <h1 className={`text-4xl font-bold mb-4 transition-opacity duration-1000 ${sliderInView ? 'opacity-100' : 'opacity-0'}`}>
          Update
        </h1>
        <p className={`text-lg text-gray-700 transition-opacity duration-1000 ${sliderInView ? 'opacity-100' : 'opacity-0'}`}>
          Explore our featured projects and see what we have been working on.
        </p>
      </header>

      <div className="relative mb-12" ref={sliderRef}>
        <Slider {...settings} className={`transition-opacity duration-1000 ${sliderInView ? 'opacity-100' : 'opacity-0'}`} ref={slider}>
          {images.map((src, index) => (
            <div key={index}>
              <img src={src} alt={`Project ${index + 1}`} className="w-full max-h-128 object-cover rounded-lg shadow-md" />
            </div>
          ))}
        </Slider>
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <button
            onClick={() => slider.current.slickPrev()}
            className="bg-gray-800 text-white p-4 rounded-full shadow-md hover:bg-gray-700"
          >
            &lt;
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <button
            onClick={() => slider.current.slickNext()}
            className="bg-gray-800 text-white p-4 rounded-full shadow-md hover:bg-gray-700"
          >
            &gt;
          </button>
        </div>
      </div>

      <section ref={projectsRef} className={`transition-opacity duration-1000 ${projectsInView ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-3xl font-bold mb-6">Latest Update</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
              <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href={project.detailsUrl} className="text-blue-500 hover:underline">View Details</a>
            </div>
          ))}
        </div>
        <button className="my-6 py-4 px-6 rounded-xl bg-gray-800 text-white hover:bg-yellow-600 duration-300 hover:text-gray-800">
          View More Updates
        </button>
      </section>
    </div>
  );
};

export default Projects;
