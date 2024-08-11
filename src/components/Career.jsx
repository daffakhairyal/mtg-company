import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const jobListings = [
  { id: 1, title: 'Software Engineer', location: 'Jakarta, Indonesia', type: 'Full-Time', description: 'Responsible for developing and maintaining web applications. Experience with JavaScript frameworks is required.', requirements: ['Bachelor\'s degree in Computer Science or related field', '3+ years of experience in software development', 'Proficiency in JavaScript, React, and Node.js'], applyUrl: '#' },
  { id: 2, title: 'UI/UX Designer', location: 'Bandung, Indonesia', type: 'Full-Time', description: 'Create intuitive and visually appealing user interfaces and user experiences for our web and mobile applications.', requirements: ['Bachelor\'s degree in Design or related field', '2+ years of experience in UI/UX design', 'Strong portfolio of design projects'], applyUrl: '#' },
  { id: 3, title: 'Project Manager', location: 'Surabaya, Indonesia', type: 'Full-Time', description: 'Manage and oversee projects from inception to completion, ensuring they are completed on time and within budget.', requirements: ['Bachelor\'s degree in Business Administration or related field', '5+ years of project management experience', 'Strong leadership and communication skills'], applyUrl: '#' },
  { id: 4, title: 'Backend Developer', location: 'Yogyakarta, Indonesia', type: 'Part-Time', description: 'Develop server-side logic, definition, and maintenance of the central database and ensure high performance and responsiveness.', requirements: ['Bachelor\'s degree in Computer Science or related field', '3+ years of experience in backend development', 'Experience with Node.js, Express.js, and MongoDB'], applyUrl: '#' },
  { id: 5, title: 'Marketing Specialist', location: 'Medan, Indonesia', type: 'Full-Time', description: 'Develop and execute marketing strategies to increase brand awareness and drive sales.', requirements: ['Bachelor\'s degree in Marketing or related field', '2+ years of experience in marketing', 'Strong analytical and creative skills'], applyUrl: '#' },
  { id: 6, title: 'Data Analyst', location: 'Jakarta, Indonesia', type: 'Full-Time', description: 'Analyze data to provide insights and support decision-making processes within the company.', requirements: ['Bachelor\'s degree in Data Science, Statistics, or related field', '2+ years of experience in data analysis', 'Proficiency in SQL and Excel'], applyUrl: '#' },
  { id: 7, title: 'Content Writer', location: 'Bandung, Indonesia', type: 'Freelance', description: 'Create engaging and informative content for our website, blog, and social media platforms.', requirements: ['Bachelor\'s degree in English, Journalism, or related field', '1+ years of experience in content writing', 'Excellent writing and editing skills'], applyUrl: '#' },
  { id: 8, title: 'Graphic Designer', location: 'Surabaya, Indonesia', type: 'Part-Time', description: 'Design visual content for marketing materials, website, and social media platforms.', requirements: ['Bachelor\'s degree in Graphic Design or related field', '2+ years of experience in graphic design', 'Strong portfolio showcasing design skills'], applyUrl: '#' },
  { id: 9, title: 'HR Manager', location: 'Yogyakarta, Indonesia', type: 'Full-Time', description: 'Oversee HR functions including recruitment, employee relations, and compliance with labor laws.', requirements: ['Bachelor\'s degree in Human Resources or related field', '4+ years of experience in HR management', 'Strong interpersonal and organizational skills'], applyUrl: '#' },
  { id: 10, title: 'Front-End Developer', location: 'Medan, Indonesia', type: 'Full-Time', description: 'Develop and maintain the user interface of web applications with a focus on user experience and performance.', requirements: ['Bachelor\'s degree in Computer Science or related field', '3+ years of experience in front-end development', 'Proficiency in HTML, CSS, and JavaScript'], applyUrl: '#' },
  { id: 11, title: 'Sales Executive', location: 'Jakarta, Indonesia', type: 'Full-Time', description: 'Develop and implement sales strategies to achieve revenue targets and build customer relationships.', requirements: ['Bachelor\'s degree in Business or related field', '2+ years of experience in sales', 'Strong negotiation and communication skills'], applyUrl: '#' },
  { id: 12, title: 'Customer Support Specialist', location: 'Bandung, Indonesia', type: 'Part-Time', description: 'Provide support to customers by addressing their inquiries, resolving issues, and ensuring a positive experience.', requirements: ['High school diploma or equivalent', '1+ years of experience in customer support', 'Excellent communication and problem-solving skills'], applyUrl: '#' },
  { id: 13, title: 'Software Tester', location: 'Surabaya, Indonesia', type: 'Full-Time', description: 'Test software applications to ensure they meet quality standards and are free of bugs.', requirements: ['Bachelor\'s degree in Computer Science or related field', '2+ years of experience in software testing', 'Experience with automated testing tools'], applyUrl: '#' },
  { id: 14, title: 'SEO Specialist', location: 'Yogyakarta, Indonesia', type: 'Freelance', description: 'Optimize website content for search engines to improve visibility and drive organic traffic.', requirements: ['Bachelor\'s degree in Marketing or related field', '2+ years of experience in SEO', 'Proficiency in SEO tools and analytics'], applyUrl: '#' },
  { id: 15, title: 'Network Administrator', location: 'Medan, Indonesia', type: 'Full-Time', description: 'Manage and maintain network infrastructure to ensure reliable and secure network operations.', requirements: ['Bachelor\'s degree in Information Technology or related field', '3+ years of experience in network administration', 'Experience with network security and troubleshooting'], applyUrl: '#' },
  { id: 16, title: 'Database Administrator', location: 'Jakarta, Indonesia', type: 'Full-Time', description: 'Maintain and manage database systems to ensure data integrity, security, and availability.', requirements: ['Bachelor\'s degree in Computer Science or related field', '3+ years of experience in database administration', 'Proficiency in SQL and database management systems'], applyUrl: '#' },
  { id: 17, title: 'DevOps Engineer', location: 'Bandung, Indonesia', type: 'Full-Time', description: 'Implement and manage DevOps practices to streamline software development and deployment processes.', requirements: ['Bachelor\'s degree in Computer Science or related field', '2+ years of experience in DevOps', 'Experience with CI/CD tools and cloud platforms'], applyUrl: '#' },
  { id: 18, title: 'Business Analyst', location: 'Surabaya, Indonesia', type: 'Part-Time', description: 'Analyze business processes and requirements to provide actionable insights and recommendations.', requirements: ['Bachelor\'s degree in Business Administration or related field', '3+ years of experience in business analysis', 'Strong analytical and problem-solving skills'], applyUrl: '#' },
  { id: 19, title: 'Product Manager', location: 'Yogyakarta, Indonesia', type: 'Full-Time', description: 'Oversee the development and lifecycle of products, from conception to launch and beyond.', requirements: ['Bachelor\'s degree in Business or related field', '4+ years of experience in product management', 'Strong leadership and project management skills'], applyUrl: '#' },
  { id: 20, title: 'IT Support Specialist', location: 'Medan, Indonesia', type: 'Full-Time', description: 'Provide technical support and assistance to ensure smooth IT operations and resolve technical issues.', requirements: ['Bachelor\'s degree in Information Technology or related field', '2+ years of experience in IT support', 'Strong troubleshooting and customer service skills'], applyUrl: '#' }
];

const ITEMS_PER_PAGE = 9;

const Career = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1
    });
  
    // Hitung indeks awal dan akhir untuk data yang ditampilkan
    const indexOfLastJob = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstJob = indexOfLastJob - ITEMS_PER_PAGE;
    const currentJobs = jobListings.slice(indexOfFirstJob, indexOfLastJob);
  
    // Menghitung jumlah halaman
    const totalPages = Math.ceil(jobListings.length / ITEMS_PER_PAGE);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    return (
      <section id="career" className="py-12 bg-charcoal-gray">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-8 text-white transition-opacity duration-1000 `}>
            Career Opportunities
          </h2>
          <p className={`text-lg text-center mb-12 text-white transition-opacity duration-1000 `}>
            Join our team and help us shape the future. Explore our current job openings and apply to the ones that match your skills and interests.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentJobs.map((job) => (
              <div key={job.id} className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-gray-700 mb-2"><strong>Location:</strong> {job.location}</p>
                <p className="text-gray-700 mb-2"><strong>Type:</strong> {job.type}</p>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <h4 className="font-semibold mb-2">Requirements:</h4>
                <ul className="list-disc list-inside mb-4">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="text-gray-700">{req}</li>
                  ))}
                </ul>
                <a href={job.applyUrl} className="bg-yellow-300 text-gray-800 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300">Apply Now</a>
              </div>
            ))}
          </div>
          <div ref={ref} className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white'}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Career;
