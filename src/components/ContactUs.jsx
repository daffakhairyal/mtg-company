import React from 'react';
import emailjs from 'emailjs-com';
import { useInView } from 'react-intersection-observer';

const ContactUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q45ay77', 'template_jt7eomd', e.target, 'u_jQc62zeKbCz9JBQ')
      .then((result) => {
        alert('Message sent successfully!');
        console.log('Success:', result.text);
      })
      .catch((error) => {
        alert('Failed to send message. Please try again.');
        console.log('Error:', error.text);
      });
  };

  return (
    <section id="contact" className="py-16 bg-gray-600">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Contact Us</h2>
        <div ref={ref} className={`flex flex-col md:flex-row md:space-x-8 transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          {/* Formulir Kontak */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="to_name" className="block text-gray-700">Recipient's Name</label>
                <input
                  type="text"
                  id="to_name"
                  name="to_name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-yellow-300 text-gray-800 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Informasi Kontak */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Contact Information</h3>
            <p className="mb-4">
              <span className="font-bold">Address:</span> Jl. Example No. 123, Jakarta, Indonesia
            </p>
            <p className="mb-4">
              <span className="font-bold">Phone:</span> +62 123 4567 890
            </p>
            <p className="mb-4">
              <span className="font-bold">Email:</span> mtg@gmail.com
            </p>
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Find Us on the Map</h4>
              <div className="w-full h-64">
                <iframe
                  title="Company Location"
                  className="w-full h-full border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126799.6384058068!2d106.61598068192096!3d-6.122935354891185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f88b94f3e10b%3A0x8eaf5d2a847735c!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1608831046802!5m2!1sen!2sus"
                  allowFullScreen
                  aria-hidden="false"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
