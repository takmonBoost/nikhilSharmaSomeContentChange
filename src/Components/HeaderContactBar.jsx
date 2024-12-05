import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"; // Import social media icons
import { MdEmail, MdPhone } from "react-icons/md"; // Import email and phone icons
import "../App.css";

const HeaderContactBar = () => {
  return (
    <div className="bg-gray-800 text-white py-2">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Email and Phone */}
        <div className="flex items-center space-x-4 text-sm">
          <a href="mailto:Astrology@Example.Com" className="flex items-center text-orange-500 hover:text-white">
            <MdEmail className="mr-1" />
            Astrology@Example.Com
          </a>
          <a href="tel:+911800124105" className="flex items-center text-orange-500 hover:text-white">
            <MdPhone className="mr-1" />
            +91 1800-124-105
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Mobile View (for screens smaller than 'lg') */}
      <div className="lg:hidden flex flex-col items-center space-y-2 mt-2">
        <div className="flex items-center space-x-2">
          <a href="mailto:Astrology@Example.Com" className="flex items-center text-orange-500 hover:text-white">
            <MdEmail className="mr-1" />
            Astrology@Example.Com
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <a href="tel:+911800124105" className="flex items-center text-orange-500 hover:text-white">
            <MdPhone className="mr-1" />
            +91 1800-124-105
          </a>
        </div>

        {/* Social Media Icons for mobile */}
        <div className="flex items-center space-x-4 mt-2">
          <a
            href="#"
            className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderContactBar;
