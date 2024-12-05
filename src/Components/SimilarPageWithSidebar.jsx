import React from "react";
import Navbar from "../Components/Navbar";
import { MdOutlineArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer.jsx";
import YtQuery from "./YtQuery.jsx";
import image1 from "../../public/images/bg1.webp"
import "../App.css"
const SimilarPageWithSidebar = ({ Content }) => {
  return (
    <>
      <Navbar />
      <div className="p-4">
        {/* Sidebar (if you want it, else can be removed) */}
        <aside className="mb-8 w-full lg:w-1/4">
          {/* Sidebar content here */}
        </aside>

        {/* Main Content */}
        <section className="w-full space-y-8">
          {/* Header with Background Image */}
          <header
            className="bg-cover bg-center p-8 sm:p-12 rounded-lg shadow-lg relative text-white w-full"
            style={{
              backgroundImage: `url(${image1})`, // Replace with your image URL
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Background Overlay for Contrast */}
            <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>

            <div className="relative flex flex-col sm:flex-row justify-between items-center">
              {/* Left Side: Text Section */}
              <div className="text-left w-full sm:w-2/3 mb-6 sm:mb-0">
                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-yellow-300 leading-tight">
                  {Content[0].heading}
                </h1>

                {/* Paragraphs */}
                <div className="grid gap-3 sm:gap-5 text-sm sm:text-lg leading-relaxed text-left mx-auto max-w-3xl">
                  {Content[0].para.map((paragraph, index) => (
                    <p
                      key={index}
                      className="hover:text-yellow-300 transition-colors duration-300 ease-in-out"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Right Side: Video Query Section */}
              <div className="w-full sm:w-1/3 text-right">
                {/* Move YtQuery component to top */}
                <div className="mb-6 sm:mb-0">
                  <YtQuery />
                </div>
              </div>
            </div>
          </header>





          {/* Mid Content Box */}
          <div
            className="bg-cover bg-center p-8 sm:p-12 rounded-lg text-white text-center relative shadow-lg w-full"
            style={{
              backgroundImage: `url(${image1})`, // Use your image URL here
            }}
          >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

            <div className="relative  space-y-6">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed">
                Swift and Effective Solutions Through <strong>Healing & Meditation</strong> by{" "}
                <i className="text-yellow-300">Astrologer Nikhil Sharma</i>
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                {/* Phone Link */}
                <a
                  href="tel:+91-95091-68369"
                  className="text-lg sm:text-xl text-blue-300 hover:text-blue-500 transition-colors duration-300 hover:underline font-semibold"
                >
                  +91-95091-68369
                </a>

                {/* Email Link */}
                <a
                  href="mailto:info@astrologerNikhilSharma.com"
                  className="text-lg sm:text-xl text-blue-300 hover:text-blue-500 transition-colors duration-300 hover:underline font-semibold"
                >
                  info@AstrologerNikhilSharma.com
                </a>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div
            className="bg-cover bg-center p-8 sm:p-12 rounded-lg text-white relative shadow-lg w-full"
            style={{
              backgroundImage: `url(${image1})`, // Use your image URL here
            }}
          >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

            <div className="relative z-10 space-y-6">
              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-yellow-300">
                {Content[0].heading2}
              </h2>

              {/* Paragraphs and List */}
              <div className="grid gap-4 mt-6 text-gray-300">
                {Content[0].para2.map((paragraph, index) => (
                  <p key={index} className="text-lg sm:text-xl leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {/* Unordered List */}
                <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                  {Content[0].ul2.map((item, index) => (
                    <li
                      key={index}
                      className="text-lg sm:text-xl hover:text-yellow-300 transition-colors duration-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Final Highlight Section */}
          <div className="bg-yellow-200 p-6 rounded-lg shadow-lg mt-8 text-center w-full">
            <p className="text-lg sm:text-xl font-semibold">
              Get reliable astrological solutions by contacting{" "}
              <strong>
                <a href="tel:+91-95091-68369" className="text-blue-500 hover:underline">
                  +91-95091-68369
                </a>
              </strong>
              , or by emailing at{" "}
              <a href="mailto:info@astrologerNikhilSharma.com" className="text-blue-500 hover:underline">
                info@AstrologerNikhilSharma.com
              </a>.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default SimilarPageWithSidebar;