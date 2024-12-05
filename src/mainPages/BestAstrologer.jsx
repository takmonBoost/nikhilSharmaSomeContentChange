import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import YtQuery from "../Components/YtQuery";
import PlacesNames from "../Data/bestAstrologer/PlacesNames.js";
import Footer from "../Components/Footer.jsx";
import gettingAward from "../images/gettingAward.jpg";
import { Link } from "react-router-dom";

const BestAstrologer = () => {
  // State to track the active FAQ item
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to handle the click on a FAQ item
  const handleItemClick = (index) => {
    // Toggle the visibility of the selected FAQ answer
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <Navbar />

      <div className="contentSection p-4">
        {/* Desktop View */}
        <div className="hidden custom-md:grid grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl font-bold mb-4 underline pb-1">
              Meet Astrologer Nikhil Sharma: A Legacy of Excellence
            </h1>
            <div className="grid gap-4">
              <div className="p-4 border border-gray-300 bg-neutral-300 rounded-md shadow-sm">
                <h2 className="font-semibold">A Third-Generation Astrologer</h2>
                <p>
                  I am Nikhil Sharma, carrying forward a rich legacy of
                  astrology that began with my grandfather in 1970. Astrology
                  has been my passion since childhood, and I’ve honed my skills
                  through years of practice and study, including degrees in
                  Vedic Astrology, Palm Reading, Jyotish Shastra, and expertise
                  in the Lal Kitab.
                </p>
              </div>
              <div className="p-4 border border-gray-300 bg-orange-300 rounded-md shadow-sm">
                <h2 className="font-semibold">A Global Presence</h2>
                <p>
                  With branches across the globe, including Malaysia, Mauritius,
                  Singapore, Europe, and Dubai, I’ve served countless clients,
                  including politicians, actors, and business leaders. My
                  offices are rooted in Shree Santan Dharam Sanskrit College,
                  Ujjain, Kashi, Haridwar, and Hoshiarpur, Punjab.
                </p>
              </div>
              <div className="p-4 border border-gray-300 bg-yellow-300 rounded-md shadow-sm">
                <h2 className="font-semibold">Recognized by Icons</h2>
                <p>
                  I’ve been honored with prestigious awards, including
                  recognition from Bollywood celebrities like Nora Fatehi
                  (2021), Malaika Arora (2022), and Sonu Sood (2023), showcasing
                  the impact and trust my work has earned over decades.
                </p>
              </div>
              <div className="p-4 border border-gray-300 bg-emerald-300 rounded-md shadow-sm">
                <h2 className="font-semibold">Your Trusted Guide</h2>
                <p>
                  My astrology services are designed to provide clarity and
                  guidance for individuals seeking solutions to life's
                  challenges. As a third-generation astrologer, I combine
                  tradition with deep insight, offering support to clients
                  worldwide.
                </p>
              </div>
            </div>
          </div>
          <div className="animate-slideInRight">
            <YtQuery />
          </div>
        </div>

        {/* Mobile View */}
        <div className="block custom-md:hidden">
          <div>
            <h1 className="text-3xl font-bold mb-4 underline pb-1">
              Meet Astrologer Nikhil Sharma: A Legacy of Excellence
            </h1>
            <div className="grid gap-4">
              <div className="p-4 border border-gray-300 bg-neutral-300 rounded-md shadow-md">
                <h2 className="font-semibold">A Third-Generation Astrologer</h2>
                <p>
                  I am Nikhil Sharma, carrying forward a rich legacy of
                  astrology that began with my grandfather in 1970. Astrology
                  has been my passion since childhood, and I’ve honed my skills
                  through years of practice and study, including degrees in
                  Vedic Astrology, Palm Reading, Jyotish Shastra, and expertise
                  in the Lal Kitab.
                </p>
              </div>
              <div className="p-4 border border-gray-300 bg-orange-200 rounded-md shadow-md">
                <h2 className="font-semibold">A Global Presence</h2>
                <p>
                  With branches across the globe, including Malaysia, Mauritius,
                  Singapore, Europe, and Dubai, I’ve served countless clients,
                  including politicians, actors, and business leaders. My
                  offices are rooted in Shree Santan Dharam Sanskrit College,
                  Ujjain, Kashi, Haridwar, and Hoshiarpur, Punjab.
                </p>
              </div>
              <div className="p-4 border border-gray-300 bg-yellow-200 rounded-md shadow-md">
                <h2 className="font-semibold">Recognized by Icons</h2>
                <p>
                  I’ve been honored with prestigious awards, including
                  recognition from Bollywood celebrities like Nora Fatehi
                  (2021), Malaika Arora (2022), and Sonu Sood (2023), showcasing
                  the impact and trust my work has earned over decades.
                </p>
              </div>
              <div className="p-4 border border-gray-300 bg-green-200 rounded-md shadow-md">
                <h2 className="font-semibold">Your Trusted Guide</h2>
                <p>
                  My astrology services are designed to provide clarity and
                  guidance for individuals seeking solutions to life's
                  challenges. As a third-generation astrologer, I combine
                  tradition with deep insight, offering support to clients
                  worldwide.
                </p>
              </div>
            </div>
            <div className="animate-slideIn mt-4">
              <YtQuery />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="midContentBox bg-gradient-to-r from-green-700 to-teal-600 p-6 my-6 text-white text-center flex items-center justify-center shadow-lg rounded-md">
          <p className="text-lg">
            Seeking expert solutions in{" "}
            <strong>Vedic Astrology, Palm Reading, Joytish Shastra</strong>, or{" "}
            <strong>Lal Kitab remedies</strong>? Connect with{" "}
            <i>Astrologer Nikhil Sharma</i>, a globally recognized
            3rd-generation astrologer with expertise dating back to 1970.
            <br />
            Contact us via
            <span>
              <a
                href="tel:+91-95091-68369"
                className="text-yellow-300 hover:underline font-semibold">
                {" "}
                +91-95091-68369
              </a>
            </span>
            or email
            <a
              href="mailto:info@astrologerNikhilsharma.com"
              className="text-yellow-300 hover:underline font-semibold">
              info@AstrologerNikhilSharma.com
            </a>
            .
          </p>
        </div>

        {/* Desktop Services Section */}
        <div className="hidden custom-md:flex gap-8">
          <div className="w-[70vw]">
            <h2 className="text-4xl font-bold mb-6 text-teal-900 leading-tight underline decoration-wavy">
              Personalized Astrology and Healing Services by Astrologer Nikhil
              Sharma
            </h2>
            <p className="mb-6 text-gray-800 text-lg">
              <i>"Astrology reveals the will of God."</i> As a 3rd-generation
              astrologer, I combine tradition, expertise, and modern insights to
              bring clarity and resolution to life's challenges. Recognized
              globally, my clientele includes renowned{" "}
              <strong>politicians, businessmen, and Bollywood actors</strong>.
            </p>
            <p className="mb-6 text-gray-800 text-lg">
              Having branches in{" "}
              <strong>Malaysia, Mauritius, Singapore, Europe, and Dubai</strong>
              , I have been honored with prestigious awards from{" "}
              <strong>Nora Fatehi (2021)</strong>,{" "}
              <strong>Malaika Arora (2022)</strong>, and{" "}
              <strong>Sonu Sood (2023)</strong>.
            </p>

            {/* Service Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg shadow-lg bg-gradient-to-r from-yellow-100 to-orange-200">
                <h3 className="font-semibold text-xl text-teal-900">
                  Education & Studies Abroad
                </h3>
                <p>
                  Guidance for academic and overseas education opportunities.
                </p>
              </div>
              <div className="p-4 border rounded-lg shadow-lg bg-gradient-to-r from-orange-100 to-red-200">
                <h3 className="font-semibold text-xl text-teal-900">
                  Career & Business
                </h3>
                <p>
                  Insights on career growth, business opportunities, and more.
                </p>
              </div>
              <div className="p-4 border rounded-lg shadow-lg bg-gradient-to-r from-pink-100 to-purple-200">
                <h3 className="font-semibold text-xl text-teal-900">
                  Love & Relationships
                </h3>
                <p>Solutions for love affairs, relationships, and harmony.</p>
              </div>
              <div className="p-4 border rounded-lg shadow-lg bg-gradient-to-r from-blue-100 to-indigo-200">
                <h3 className="font-semibold text-xl text-teal-900">
                  Marriage Compatibility
                </h3>
                <p>
                  Assistance with love, arranged, and inter-caste marriages.
                </p>
              </div>
              <div className="p-4 border rounded-lg shadow-lg bg-gradient-to-r from-green-100 to-teal-200">
                <h3 className="font-semibold text-xl text-teal-900">
                  Financial Stability
                </h3>
                <p>Strategies for wealth management and financial security.</p>
              </div>
              <div className="p-4 border rounded-lg shadow-lg bg-gradient-to-r from-purple-100 to-blue-200">
                <h3 className="font-semibold text-xl text-teal-900">
                  Health & Wellness
                </h3>
                <p>Guidance for mental and physical well-being.</p>
              </div>
              <div className="p-4 border rounded-lg shadow-lg bg-gradient-to-r from-red-100 to-yellow-200">
                <h3 className="font-semibold text-xl text-teal-900">
                  Political Influences
                </h3>
                <p>Insights into political guidance and public influence.</p>
              </div>
              <div className="p-4 border rounded-lg shadow-lg bg-gradient-to-r from-indigo-100 to-teal-200">
                <h3 className="font-semibold text-xl text-teal-900">
                  Foreign Travels
                </h3>
                <p>Assistance with travel, tours, and overseas aspirations.</p>
              </div>
            </div>
          </div>
          <div className="contentImage ml-4 w-[40vw]">
            <img
              src={gettingAward}
              alt="Astrologer receiving an award"
              className="rounded-lg shadow-lg border border-gray-200"
            />
          </div>
        </div>

        {/* Mobile Services Section */}
        <div className="block custom-md:hidden px-4 py-6 bg-gradient-to-t from-teal-50 to-white rounded-lg shadow-lg">
  <div className="contentImage mb-6 flex justify-center">
    <img
      src={gettingAward}
      alt="Astrologer receiving an award"
      className="rounded-lg shadow-md w-full max-w-[400px]"
    />
  </div>
  <div>
    <h2 className="text-3xl font-bold mb-6 text-teal-900 leading-tight text-center">
      Expert Astrology & Healing Services  
      <br /> By Astrologer Nikhil Sharma  
    </h2>
    <p className="mb-6 text-gray-700 text-lg text-center">
      Unlock the secrets of your life with the guidance of  
      <strong className="text-teal-900"> Nikhil Sharma</strong>, the  
      <i>most sought-after astrologer</i> in India, USA, UK, Canada, and Australia.  
      Renowned for personalized remedies and solutions based on detailed birth chart analysis.
    </p>
    <p className="mb-6 text-gray-700 text-lg text-center">
      Discover how <strong>astrology and healing</strong> can transform these key areas of your life:
    </p>

    {/* Mobile Service Grid */}
    <div className="grid grid-cols-1 gap-6">
      <div className="p-4 border rounded-lg shadow-lg bg-gradient-to-r from-yellow-100 to-orange-200">
        <h3 className="font-semibold text-xl text-teal-900">
          Education & Studies Abroad
        </h3>
        <p className="text-gray-800">
          Guidance for academic and overseas education opportunities.
        </p>
      </div>
      <div className="p-4 border rounded-lg shadow-lg bg-gradient-to-r from-orange-100 to-red-200">
        <h3 className="font-semibold text-xl text-teal-900">
          Career & Business
        </h3>
        <p className="text-gray-800">
          Insights on career growth, business opportunities, and more.
        </p>
      </div>
      <div className="p-4 border rounded-lg shadow-lg bg-gradient-to-r from-pink-100 to-purple-200">
        <h3 className="font-semibold text-xl text-teal-900">
          Love & Relationships
        </h3>
        <p className="text-gray-800">
          Solutions for love affairs, relationship dynamics, and harmony.
        </p>
      </div>
      <div className="p-4 border rounded-lg shadow-lg bg-gradient-to-r from-blue-100 to-indigo-200">
        <h3 className="font-semibold text-xl text-teal-900">
          Marriage Compatibility
        </h3>
        <p className="text-gray-800">
          Assistance with love, arranged, and inter-caste marriages.
        </p>
      </div>
      <div className="p-4 border rounded-lg shadow-lg bg-gradient-to-r from-green-100 to-teal-200">
        <h3 className="font-semibold text-xl text-teal-900">
          Financial Stability
        </h3>
        <p className="text-gray-800">
          Strategies for wealth management and financial security.
        </p>
      </div>
      <div className="p-4 border rounded-lg shadow-lg bg-gradient-to-r from-purple-100 to-blue-200">
        <h3 className="font-semibold text-xl text-teal-900">
          Health & Wellness
        </h3>
        <p className="text-gray-800">
          Guidance for mental and physical well-being.
        </p>
      </div>
    </div>
  </div>
</div>


        {/* FAQ Section */}
        {/* Call to Action Section */}
        <div className="bg-yellow-200 p-4 rounded-md mt-2">
          <p className="text-gray-700">
            To benefit from his globally acclaimed and effective astrology
            solutions for various life challenges, troubled or distressed
            individuals are encouraged to:
            <strong>
              <a
                href="tel:+91-95091-68369"
                className="text-blue-600 underline ml-1">
                +91-95091-68369
              </a>
            </strong>
            ; or share their concerns confidentially via email at:
            <strong>
              <a
                href="mailto:info@astrologerNikhilsharma.com"
                className="text-blue-600 underline ml-1">
                info@AstrologerNikhilSharma.com
              </a>
            </strong>
            .
          </p>
        </div>

        {/* Places Section */}
        <div className="bg-red-400 p-4 border-2 border-black m-2 rounded-lg">
          <ul className="grid custom-md:grid-cols-3 gap-4 text-center">
            {PlacesNames.map((item, index) => (
              <li
                key={index}
                className="p-2 bg-white shadow-lg rounded-lg hover:bg-red-300">
                <Link to={item.pathName} className="text-black hover:underline">
                  {item.placeTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BestAstrologer;
