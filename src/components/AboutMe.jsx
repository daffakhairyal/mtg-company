import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { FaJs, FaPython, FaJava } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { SiCplusplus } from "react-icons/si";
import { MdSchool, MdWork } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";

const AboutMe = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white text-gray-900 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Profile Section */}
        <div className="text-center mb-16">
          <img
            src="https://picsum.photos/150"
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full shadow-lg mb-4 ring-4 ring-blue-300"
          />
          <h2 className="text-4xl font-bold text-gray-800 mb-2">John Doe</h2>
          <p className="text-lg text-gray-600 mt-2">Full-Stack Developer | Tech Enthusiast</p>
        </div>

        {/* Section: Programming Languages */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
            <FaJs className="text-yellow-500 text-3xl animate-pulse" />
            Programming Languages
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "JavaScript", icon: <FaJs size={50} className="text-yellow-500" /> },
              { name: "Python", icon: <FaPython size={50} className="text-blue-500" /> },
              { name: "Java", icon: <FaJava size={50} className="text-red-500" /> },
              { name: "C++", icon: <SiCplusplus size={50} className="text-blue-600" /> },
              { name: "Ruby", icon: <DiRuby size={50} className="text-red-600" /> },
            ].map((lang) => (
              <div
                key={lang.name}
                className="bg-white shadow-xl rounded-lg p-6 w-48 text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="mb-4 text-gray-800">{lang.icon}</div>
                <p className="font-medium text-xl">{lang.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Education */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
            <MdSchool className="text-blue-600 text-3xl" />
            Education
          </h3>
          <div className="bg-white shadow-xl rounded-lg p-6 flex items-center space-x-6">
            <img
              src="https://picsum.photos/100?random=1"
              alt="University"
              className="w-20 h-20 rounded-full ring-4 ring-blue-300"
            />
            <div>
              <h4 className="text-2xl font-bold">Bachelor of Computer Science</h4>
              <p className="text-gray-600">University of Example - 2018 - 2022</p>
              <p className="mt-2">
                Graduated with honors, specializing in software development and machine learning.
              </p>
            </div>
          </div>
        </div>

        {/* Section: Work Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
            <MdWork className="text-gray-800 text-3xl" />
            Work Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                position: "Software Engineer",
                company: "Tech Corp",
                duration: "2022 - Present",
                description:
                  "Developing and maintaining web applications, improving system performance, and collaborating with cross-functional teams.",
                image: "https://picsum.photos/150?random=6",
              },
              {
                position: "Junior Developer",
                company: "Web Solutions",
                duration: "2021 - 2022",
                description:
                  "Worked on front-end and back-end development tasks, assisted in database management, and participated in code reviews.",
                image: "https://picsum.photos/150?random=7",
              },
              {
                position: "Intern Developer",
                company: "Start-Up Inc.",
                duration: "2020 - 2021",
                description:
                  "Supported senior developers with various tasks, contributed to project documentation, and learned best practices in a professional environment.",
                image: "https://picsum.photos/150?random=8",
              },
            ].map((job, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
              >
                <img
                  src={job.image}
                  alt={job.company}
                  className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-gray-200"
                />
                <h4 className="text-xl font-bold mb-2">{job.position}</h4>
                <p className="text-gray-600 font-medium">{job.company}</p>
                <p className="text-gray-500 mb-2">{job.duration}</p>
                <p className="text-gray-600">{job.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Project Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
            <AiOutlineProject className="text-green-600 text-3xl" />
            Project Experience
          </h3>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {[
              {
                title: "E-commerce Platform",
                description:
                  "Developed a full-stack e-commerce platform using React, Node.js, and PostgreSQL, handling both front-end and back-end operations.",
                image: "https://picsum.photos/150?random=9",
              },
              {
                title: "Personal Portfolio",
                description:
                  "Created a personal portfolio website to showcase projects, using React and Tailwind CSS.",
                image: "https://picsum.photos/150?random=10",
              },
              {
                title: "Task Management App",
                description:
                  "Built a task management application with a real-time collaboration feature using React, Firebase, and Tailwind CSS.",
                image: "https://picsum.photos/150?random=11",
              },
              {
                title: "Social Media App",
                description:
                  "Designed and developed a social media application using React, Express.js, and MongoDB.",
                image: "https://picsum.photos/150?random=12",
              },
            ].map((project, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-xl rounded-lg p-6">
                  <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4 border-4 border-green-200" />
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Section: Recommendations */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
            <MdWork className="text-gray-800 text-3xl" />
            Recommendations
          </h3>
          <div className="relative bg-gradient-to-r from-indigo-100 to-pink-100 p-8 rounded-xl shadow-lg overflow-hidden">
            <div className="absolute inset-0">
              <svg
                className="absolute bottom-0 left-0 transform translate-x-1/2 translate-y-1/2"
                width="200"
                height="200"
                fill="none"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="100" cy="100" r="100" fill="#f5f5f5" />
              </svg>
            </div>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={3}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="relative z-10"
            >
              {[
                {
                  name: "Jane Smith",
                  role: "Senior Developer at Tech Corp",
                  testimonial:
                    "John's expertise in full-stack development was crucial in our project's success. His ability to adapt and problem-solve made him an invaluable team member.",
                  image: "https://picsum.photos/100?random=13",
                },
                {
                  name: "Mike Johnson",
                  role: "Project Manager at Web Solutions",
                  testimonial:
                    "John's attention to detail and commitment to delivering high-quality code significantly contributed to the success of our projects. Highly recommended!",
                  image: "https://picsum.photos/100?random=14",
                },
                {
                  name: "Emily Davis",
                  role: "Lead Engineer at Start-Up Inc.",
                  testimonial:
                    "John's proactive approach and willingness to learn made him stand out. His contributions to the development team were greatly appreciated.",
                  image: "https://picsum.photos/100?random=15",
                },
                {
                  name: "Alice Green",
                  role: "CTO at Innovate Labs",
                  testimonial:
                    "John's innovative solutions and dedication to his craft were instrumental in achieving our goals. His positive attitude and work ethic are commendable.",
                  image: "https://picsum.photos/100?random=16",
                },
                {
                  name: "Bob Brown",
                  role: "Tech Lead at FutureTech",
                  testimonial:
                    "John's technical skills and collaborative spirit greatly enhanced our project delivery. He consistently goes above and beyond to deliver exceptional results.",
                  image: "https://picsum.photos/100?random=17",
                },
              ].map((recommendation, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center relative z-10">
                    <img
                      src={recommendation.image}
                      alt={recommendation.name}
                      className="w-20 h-20 object-cover rounded-full mb-4 border-4 border-indigo-300"
                    />
                    <h4 className="text-xl font-semibold mb-2">{recommendation.name}</h4>
                    <p className="text-gray-600 italic">{recommendation.role}</p>
                    <p className="text-gray-700 mt-4">{recommendation.testimonial}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
