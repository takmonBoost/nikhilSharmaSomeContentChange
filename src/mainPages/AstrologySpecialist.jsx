import React from "react";
import Navbar from "../Components/Navbar";
import { MdOutlineArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import astrologyLinks from "../Data/astrologySpecialist/astrologyLinks.js";
import astrologyCountry from "../Data/astrologySpecialist/astrologyCountry.js";
import astrologyIndia from "../Data/astrologySpecialist/astrologyIndia.js";
import Footer from "../Components/Footer.jsx";
import YtQuery from "../Components/YtQuery.jsx";

const AstrologySpecialist = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col lg:flex-row p-6 lg:p-10 gap-6">
        {/* Sidebar */}
        {/* Main Content */}
        <main className="flex-1 space-y-10">
          <section className="bg-gray-100 p-8 rounded-lg shadow">
            <h1 className="text-3xl font-bold mb-4">Astrology Specialist</h1>
            <p className="text-gray-700 leading-relaxed mb-4">
              Astrology is more than just a science—it's an ancient art that has
              fascinated and guided individuals for centuries. At its core,
              astrology reveals the intricate relationship between the cosmos
              and human life, offering insights into personality, relationships,
              and future possibilities. As a third-generation astrologer, my
              name is Nikhil Sharma, and I bring decades of experience and
              expertise to my work. Having been immersed in astrology since
              childhood, I have been honored to guide individuals from all walks
              of life—whether they are seeking answers to personal dilemmas or
              simply wish to understand what the stars have in store.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With my extensive background in{" "}
              <strong>
                Vedic astrology, palmistry, and the mystical teachings of
                Jyotish Shastra
              </strong>{" "}
              . I offer a personalized approach that combines ancient wisdom
              with modern techniques. Over the years, I have earned the trust of
              many notable figures, including Bollywood celebrities like{" "}
              <strong>Nora Fatehi, Malaika Arora, and Sonu Sood,</strong> as
              well as <strong>politicians, business magnates</strong> , and
              people from all around the world.
            </p>
          </section>

          <section className="bg-yellow-100 p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Awards and Recognitions</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li> Awarded the 'Champion of Change' Award 2023.</li>
              <li>Gold Medal in Astrology</li>
              <li>Lalkitab Rattan</li>
              <li>Jyotish Visharad</li>
              <li>Jyotish Samrat</li>
              <li>Jyotish Shiromani, etc.</li>
            </ul>
          </section>
          <section className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">
              Explore Astrology Services by Nikhil Sharma – A Trusted Name in
              Vedic Astrology
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              I am <strong>Nikhil Sharma</strong>, a 3rd-generation astrologer
              with expertise in{" "}
              <strong>Vedic Astrology, Palm Reading, Jyotish Shastra</strong>,
              and as a <strong>Lal Kitab Specialist</strong>. My journey into
              astrology began in childhood, inspired by my grandfather, who has
              been practicing astrology since 1970. With a legacy rooted in
              tradition and a modern approach, I have guided countless lives,
              including renowned politicians, actors, and business leaders.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Over the years, I have received accolades, such as the{" "}
              <strong>2021 award from Bollywood actress Nora Fatehi</strong>,{" "}
              <strong>2022 recognition from Malaika Arora</strong>, and{" "}
              <strong>2023 honor by actor Sonu Sood</strong>. My offices are
              located in iconic cities like{" "}
              <strong>Ujjain, Kashi, Haridwar, and Hoshiarpur, Punjab</strong>,
              with branches across the globe in{" "}
              <strong>Malaysia, Mauritius, Singapore, Europe, and Dubai</strong>
              .
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              My services are personalized and grounded in honesty, ethics, and
              a deep commitment to my clients' well-being. Whether you're
              seeking guidance for personal growth, relationship harmony, or
              professional success, I am here to provide profound insights
              through astrology.
            </p>
            <h3 className="text-xl font-bold mb-2">Areas of Expertise</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
              <li>Businesses and Professions</li>
              <li>Love and Romance</li>
              <li>Arranged, Love, and Inter-caste Marriages</li>
              <li>Familial or Domestic Life</li>
              <li>Progeny</li>
              <li>Health Problems</li>
              <li>Education and Career</li>
              <li>Progress and Growth in Careers</li>
              <li>Compatibility and Harmony in Relationships</li>
              <li>Investments in Stock Market or Real Estate</li>
              <li>Money and Finances</li>
              <li>Many other life aspects</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              With clients worldwide, I am committed to bringing clarity and
              solutions to every individual's unique concerns. My expertise has
              touched lives from all walks of life, making me one of the most
              sought-after astrologers globally.
            </p>
          </section>

          {/* Video and Contact Section */}
          <section className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="relative">
                <video className="rounded-lg shadow-lg w-full" controls>
                  <source src="/videos/awardCeremony.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow p-6 md:w-1/2">
              <h2 className="text-xl font-bold text-gray-700 mb-4">
                Contact Us for Solutions
              </h2>
              <p className="italic text-sm mb-2">
                "Quit Sadness, Catch Happiness!"
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  className="w-full border p-3 rounded"
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  className="w-full border p-3 rounded"
                  placeholder="E-mail Id"
                  required
                />
                <input
                  type="tel"
                  className="w-full border p-3 rounded"
                  placeholder="Phone Number"
                  required
                />
                <input
                  type="text"
                  className="w-full border p-3 rounded"
                  placeholder="City"
                  required
                />
                <textarea
                  className="w-full border p-3 rounded"
                  placeholder="Your Query"
                  rows="4"
                  required></textarea>
                <button
                  type="submit"
                  className="bg-red-600 text-white font-bold py-2 px-4 w-full rounded">
                  Submit
                </button>
              </form>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default AstrologySpecialist;
