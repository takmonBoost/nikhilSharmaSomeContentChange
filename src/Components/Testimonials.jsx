import React from 'react';

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 md:p-16 bg-white">
      
      {/* Heading Section */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">Client Experiences</h2>
        <p className="text-gray-600 mt-2 mx-auto">
          Hear from those who have discovered guidance, clarity, and empowerment through Nikhil Sharma’s astrological insights.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start w-full md:justify-between">
        
        {/* Circular Profile Images */}
        <div className="relative flex flex-wrap justify-center md:w-1/2">
          <div className="absolute top-20 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-orange-500 shadow-md">
            <img src="https://kamleshyadav.com/wp/astrologer/demo3/wp-content/uploads/sites/4/2021/08/testimonial2.jpg" alt="Client" />
          </div>
          <div className="absolute top-16 right-1/4 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img src="https://kamleshyadav.com/wp/astrologer/demo3/wp-content/uploads/sites/4/2021/08/astrology-testimonial.jpg" alt="Client" />
          </div>
          <div className="absolute -bottom-16 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img src="https://kamleshyadav.com/wp/astrologer/demo3/wp-content/uploads/sites/4/2021/08/testimonial222.jpg" alt="Client" />
          </div>
          <div className="absolute -bottom-12 right-1/4 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img src="https://kamleshyadav.com/wp/astrologer/demo3/wp-content/uploads/sites/4/2021/08/testimonial333.jpg" alt="Client" />
          </div>
        </div>

        {/* Border between Images and Text */}
        <div className="hidden md:block border-l-2 border-gray-200 h-auto mx-4"></div>

        {/* Testimonial Text */}
        <div className="flex-1 md:ml-8 p-6 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-lg shadow-lg text-white relative w-full md:w-1/2">
          <p className="leading-relaxed text-sm sm:text-base">
            “I felt lost in my career and personal life until I spoke with Nikhil. His insights into my astrological chart helped me understand the phases of my life with clarity and optimism. Now, I feel empowered to embrace each day.”
          </p>
          <div className="mt-4 font-semibold text-sm sm:text-base">
            <p>Rekha. - <span className="italic">Entrepreneur</span></p>
          </div>
          <div className="absolute right-0 bottom-0 opacity-30">
            <svg width="80" height="80" viewBox="0 0 24 24">
              <path fill="white" d="M12 0L15.09 8H24L17.47 13L20.58 21L12 15L3.42 21L6.53 13L0 8H8.91L12 0Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
