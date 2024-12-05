import React from 'react';
import "../App.css";

const AstrologySection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-12 bg-[#fbf7f2]">
      
      {/* Text Content Section */}
      <div className="text-center md:text-left md:w-1/2 p-6 m-12">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-orange-700 mb-3">Discover Astrology</h1>
        <div className="w-16 sm:w-20 h-1 bg-orange-600 mb-8 mx-auto md:mx-0"></div>
        <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-5 tracking-wide">
          Dive into the ancient wisdom of astrology to uncover the secrets of the universe and your soul’s path.
        </p>
        <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-8 tracking-wide">
          Experience the insights of planetary movements, energies, and alignments to find balance, strength, and direction.
        </p>
        <button className="bg-orange-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-orange-700 transition duration-300 shadow-lg">
          DISCOVER MORE
        </button>
      </div>
      
      {/* Image and Visual Section */}
      <div className="relative md:w-1/2 flex justify-center p-6">
        
        {/* Rotating Background Layer */}
        <div 
          className="absolute w-[24rem] sm:w-[28rem] h-[24rem] sm:h-[28rem] rounded-full overflow-hidden bg-cover bg-center animate-spin-slow"
          style={{ backgroundImage: "url('https://kamleshyadav.com/wp/astrologer/demo3/wp-content/uploads/sites/4/2021/09/download.png')" }}
        ></div>
        
        {/* Main Image - Fixed Position */}
        <img
          src="https://kamleshyadav.com/wp/astrologer/demo3/wp-content/uploads/sites/4/2021/09/download-removebg-preview.png"
          alt="Astrology"
          className="w-72 sm:w-96 h-72 sm:h-96 object-cover rounded-full relative shadow-md" 
        />

        {/* Circular Borders */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[20rem] sm:w-[24rem] h-[20rem] sm:h-[24rem] rounded-full border-2 border-orange-400"></div>
          <div className="absolute w-[22rem] sm:w-[26rem] h-[22rem] sm:h-[26rem] border border-dashed border-orange-400 rounded-full opacity-40"></div>
          <div className="absolute w-[24rem] sm:w-[28rem] h-[24rem] sm:h-[28rem] border border-dashed border-orange-400 rounded-full opacity-20"></div>
        </div>
      </div>
    </section>
  );
};

export default AstrologySection;
