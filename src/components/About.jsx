import React from 'react';

// Data Dummy
const aboutData = {
  hero: {
    backgroundImage: 'https://picsum.photos/1600/900?random=2',
    title: 'Introducing PT. Mulia Timur Global',
    description: 'Learn more about our company, vision, mission, and the team behind our success.',
  },
  companyInfo: {
    profile: 'We are a pioneering company dedicated to delivering innovative solutions and exceptional services. With a strong commitment to excellence, we strive to create value and make a positive impact in our industry and community.',
    vision: 'To be the most trusted and innovative company in our industry, continuously improving and evolving to meet the needs of our customers.',
    mission: 'To provide top-notch products and services while fostering a culture of integrity, teamwork, and customer satisfaction.',
    description: [
        "PT. Mulya Timur Global is a company that manages business units engaged in gold mining.",
        "PT. Mulya Timur Global has undergone several changes. The last change is the Declaration Deed Resolution of Shareholders No. 08 dated 13 November 2023 made in Notary Asep Dudi Suwardi, S.H, SPN and approved based on Acceptance Notification of Company Data Changes Number: AHU-0071866.AH.01.02 dated 21 November 2023.",
        "We started a business in mining, trading, and gold refining in eastern Indonesia, especially the Papua region, Nabire, because as we all know, Papua is an Indonesian region that has the potential to be the biggest gold producer.",
        "Our gold mining is located in Nabire, Papua, with a land area of 100,000 ha and we are processing a 5,000 ha IUP concession. At the beginning of next year, we will be doing exploration mapping with world-class companies so that the mining we have produces large gold and can contribute to the nation and the country. Our refining factory is in Tangerang, and our Gold Dore Logistic Centers are in Banda Aceh, Pangkalan Bun, Manado, Halmahera, and Nabire.",
      ],
    descriptionImage: 'https://picsum.photos/600/400?random=1'
  },
  history: [
    { year: '2000', event: 'Company founded with a vision to revolutionize the industry.' },
    { year: '2005', event: 'Launched our first major product, setting new standards in the market.' },
    { year: '2010', event: 'Expanded operations internationally and opened new offices in key markets.' },
    { year: '2015', event: 'Achieved significant milestones with industry awards and recognitions.' },
    { year: '2020', event: 'Transitioned to a fully digital platform to enhance customer experience.' },
    { year: '2023', event: 'Celebrated 20 years of excellence and continued growth.' },
  ],
  team: [
    {
      name: 'John Doe',
      role: 'CEO',
      image: 'https://picsum.photos/100?random=3',
      bio: 'John is a visionary leader with over 20 years of experience in the industry. His expertise in strategic planning and business development drives the company’s growth and innovation.'
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      image: 'https://picsum.photos/100?random=4',
      bio: 'Jane is a tech enthusiast with a passion for emerging technologies. She oversees our tech initiatives and ensures that we stay ahead of the curve in software development and IT solutions.'
    },
    {
      name: 'Michael Brown',
      role: 'COO',
      image: 'https://picsum.photos/100?random=5',
      bio: 'Michael excels in operational management and efficiency. He ensures smooth day-to-day operations and oversees the implementation of best practices across all departments.'
    },
    {
      name: 'Emily Davis',
      role: 'CMO',
      image: 'https://picsum.photos/100?random=6',
      bio: 'Emily is a marketing strategist with a flair for creative campaigns. She drives our marketing efforts and builds our brand presence in the industry through innovative and impactful strategies.'
    },
  ],
  achievements: [
    { title: '10+ Awards', description: 'Industry recognition for excellence in our field.' },
    { title: '500+ Projects', description: 'Successfully completed projects across various sectors.' },
    { title: '200+ Clients', description: 'Satisfying the needs of clients worldwide.' },
    { title: '50+ Team Members', description: 'A growing team of dedicated professionals.' },
  ],
};

const About = () => {
  return (
    <div id='about' className=''>
      {/* Hero Section */}
      <section  className="py-20 relative h-80 bg-blue-800 text-white flex items-center justify-center overflow-hidden pt-16">
        <img
          src={aboutData.hero.backgroundImage}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{aboutData.hero.title}</h1>
          <p className="text-lg md:text-xl">{aboutData.hero.description}</p>
        </div>
      </section>

      {/* Tentang Kami */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Deskripsi Perusahaan */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 pr-4">
                        <div className="flex-1">
            {aboutData.companyInfo.description.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 mb-6 text-justify">
                {paragraph}
              </p>
            ))}
          </div>
            </div>
            {/* Gambar Deskripsi Perusahaan */}
            <div className="w-full md:w-1/2 mx-4">
              <img
                src={aboutData.companyInfo.descriptionImage}
                alt="Company Description"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-5">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p>{aboutData.companyInfo.vision}</p>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p>{aboutData.companyInfo.mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sejarah Perusahaan */}
      {/* <section className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Company History</h2>
            <p className="text-lg md:text-xl">
              Our journey through the years has been filled with milestones and achievements that have shaped our success.
            </p>
          </div>
          <div className="space-y-8">
            {aboutData.history.map((event, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-2">{event.year}</h4>
                <p>{event.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Tim Kami */}
      <section className="py-12 bg-gray-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
            <p className="text-lg md:text-xl">
              Our team is comprised of experienced professionals who are passionate about what they do.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            {aboutData.team.map((member, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
                  <p className="text-gray-600">{member.role}</p>
                  <p className="text-gray-500 mt-2">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pencapaian */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Our Achievements</h2>
            <p className="text-lg md:text-xl">
              We take pride in our accomplishments and the impact we've made in our industry.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            {aboutData.achievements.map((achievement, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
