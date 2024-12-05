import React from "react";
import Navbar from "../Components/Navbar";
import YtQuery from "../Components/YtQuery";
import Footer from "../Components/Footer.jsx";
import PlacesNames from "../Data/VashikaranSpecialist/PlacesNames.js";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import awardCeremony from "../images/gettingAward.jpg";
import image1 from "../../public/images/bg4.webp";

const VashikaranSpecialist = () => {
  // State to track the active list item
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to handle the click on a list item
  const handleItemClick = (index) => {
    // Toggle visibility of the paragraph
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleSlug = () => {
    const { slug } = useParams();
  };
  return (
    <>
      <Navbar />
      <div className="contentSection animate-fadeIn">
        {/* Hero Section */}
        <div
          className="relative bg-cover bg-center bg-no-repeat text-black animate-fadeIn py-16 lg:py-24 px-6 lg:px-8"
          style={{ backgroundImage: `url(${image1})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto text-center lg:text-left">
            <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-white border-b-4 border-indigo-400 pb-3 mb-8 animate-slideInUp">
              Astrology Services by Nikhil Sharma
            </h1>
            <p className="text-lg leading-relaxed mb-6 animate-fadeInLeft text-gray-100">
              When traditional methods fail, the ancient practices of Vashikaran
              and Astrology offer profound solutions. I,{" "}
              <strong>Nikhil Sharma</strong>, am here to guide you with decades
              of experience and expertise.
            </p>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="py-12 lg:py-16 px-6 lg:px-8 bg-gradient-to-b from-indigo-800 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Personal Introduction */}
            <div className="bg-white/10 p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-4">Who is Nikhil Sharma?</h2>
              <ul className="list-disc pl-6 space-y-3 text-lg">
                <li>
                  <strong>Educational Expertise:</strong> Degrees in{" "}
                  <em>Vedic Astrology</em>, <em>Palmistry</em>,{" "}
                  <em>Jyotish Shastra</em>, and specialization in{" "}
                  <em>Lal Kitab</em>.
                </li>
                <li>
                  <strong>Recognitions:</strong>
                  <ul className="pl-6 list-disc space-y-2">
                    <li>2021: Honored by Bollywood actress Nora Fatehi.</li>
                    <li>2022: Awarded by actress Malaika Arora.</li>
                    <li>2023: Recognized by Bollywood actor Sonu Sood.</li>
                  </ul>
                </li>
                <li>
                  <strong>Global Presence:</strong> Offices in Ujjain, Kashi,
                  Haridwar, Hoshiarpur (Punjab), and branches in Malaysia,
                  Mauritius, Singapore, Europe, and Dubai.
                </li>
                <li>
                  <strong>Clientele:</strong> Trusted by politicians, actors,
                  and business professionals.
                </li>
              </ul>
            </div>

            {/* Vashikaran Section */}
            <div className="bg-indigo-700 p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6">What is Vashikaran?</h2>
              <p className="text-lg mb-4">
                Vashikaran is an ancient spiritual practice rooted in Vedic
                astrology and sacred science. It derives its name from the
                Sanskrit words <strong>Vashi</strong> (to attract or control)
                and <strong>Karan</strong> (the process). This method is used to
                influence and harmonize relationships and life situations.
              </p>
              <p className="text-lg">
                With my knowledge of <em>Vedic astrology</em>,{" "}
                <em>Palmistry</em>, and <em>Lal Kitab</em>, I offer tailored
                solutions to life’s toughest challenges, bringing positivity,
                balance, and peace.
              </p>
            </div>

            {/* Services Section */}
            <div className="bg-white/10 p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6">Services Offered</h2>
              <ul className="space-y-4 text-lg">
                <li>
                  <strong>Love Problem Solutions:</strong> Guidance to overcome
                  misunderstandings, breakups, and restore harmony in
                  relationships.
                </li>
                <li>
                  <strong>Relationship and Marital Problems:</strong> Resolving
                  issues in marriages and family relationships through
                  Vashikaran remedies.
                </li>
                <li>
                  <strong>Career and Financial Issues:</strong> Assistance in
                  achieving success and financial stability through personalized
                  strategies.
                </li>
                <li>
                  <strong>Reunion with Lost Love:</strong> Remedies to help
                  reconnect and rebuild lost relationships.
                </li>
                <li>
                  <strong>
                    Positive Energy and Negative Influence Removal:
                  </strong>{" "}
                  Techniques to attract positivity and remove negativity for a
                  harmonious life.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center py-8 bg-indigo-800 text-gray-200">
          <p className="text-lg">
            Contact:{" "}
            <strong className="text-indigo-300">+91-95091-68369</strong> |
            Trusted by thousands worldwide.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default VashikaranSpecialist;
