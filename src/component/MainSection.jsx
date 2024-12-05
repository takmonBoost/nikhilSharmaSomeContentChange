import React from 'react';
import ContactForm from './common/ContactForm';

const MainSection = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-orange-200 to-yellow-300">
      {/* YouTube Thumbnail or Video Container */}
      <div className="flex-1 flex justify-center items-center p-6 lg:p-12 bg-gradient-to-r from-green-500 to-green-300 rounded-lg shadow-lg">
        <div className="w-full lg:w-3/4 h-[50vh] lg:h-auto animate-slideIn">
          <video 
            width="100%" 
            controls 
            className="rounded-lg shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-300"
          >
            <source src="/videos/awardCeremony.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Contact Form for Large Screens */}
      <div className="hidden lg:flex lg:flex-1 items-center p-6 lg:p-12 bg-gray-900 text-white rounded-lg shadow-lg animate-fadeIn">
        <div className="w-full max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">Get in Touch</h2>
          <p className="text-sm text-gray-300 mb-6">
            Reach out to learn more about our services and how we can assist you. We’d love to hear from you!
          </p>
          <ContactForm />
        </div>
      </div>

      {/* Mobile Contact Form */}
      <div className="lg:hidden p-6 bg-gray-900 text-white rounded-lg shadow-lg mt-8 animate-fadeIn">
        <div className="w-full max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">Get in Touch</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
