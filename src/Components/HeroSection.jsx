import React from 'react';
import Navbar from './Navbar';

const HeroSection = () => {
  return (
    <>
    <div className="relative w-full h-screen ">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/1851190/1851190-uhd_2560_1440_25fps.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative  flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4">
          Astrology Revels The Will Of God
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6">
          Horoscopes • Gemstones • Numerology
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
          MAKE IT NOW!
        </button>
      </div>
    </div>
    </>
  );
};

export default HeroSection;
