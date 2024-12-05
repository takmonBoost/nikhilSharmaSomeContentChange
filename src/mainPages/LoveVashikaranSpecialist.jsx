import React from "react";
import Navbar from "../Components/Navbar";
import YtQuery from "../Components/YtQuery";
import Footer from "../Components/Footer.jsx";
import PlacesNames from "../Data/VashikaranSpecialist/PlacesNames.js";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import awardCeremony from "../images/gettingAwardFromSonu.jpg";
import image1 from "../../public/images/bg4.webp";
const LoveVashikaranSpecialist = () => {
  // State to track the active list item
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to handle the click on a list item
  const handleItemClick = (index) => {
    // Toggle visibility of the paragraph
    setActiveIndex(index === activeIndex ? null : index);
  };

  const { slug } = useParams();
  return (
    <>
      <Navbar />

      <div className="contentSection p-4">
        <h1 className="relative font-extrabold text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-6 p-2">
          <span className="relative text-black">
            Love Vashikaran Specialist
          </span>
          <span className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-yellow-500 to-red-500"></span>
        </h1>

        <div
          className="relative flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 p-6 md:p-10 bg-gray-50 bg-cover bg-center"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          {/* Gradient Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

          {/* Content Section */}
          <div className="relative z-10 text-white flex-1 space-y-6 md:space-y-8 p-4">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Explore the Power of{" "}
              <span className="text-yellow-400">Love Vashikaran</span> with
              Expert Guidance
            </h2>

            <p className="text-base md:text-lg leading-relaxed">
              <span className="font-semibold">"Love"</span> and{" "}
              <span className="font-semibold">"Vashikaran"</span> are intricate
              matters that require utmost care and proper handling. A love
              vashikaran expert should be a knowledgeable and experienced
              individual. This page provides valuable insights on love
              vashikaran, its nuances, and effective solutions offered by our
              renowned Indian love vashikaran astrologer,{" "}
              <span className="font-semibold">Baba Ji Nikhil Sharma</span>.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              Discover detailed information about our esteemed guru ji, known
              worldwide for his expertise. He is one of India's leading
              astrologers and the most skilled love vashikaran specialist in
              Asia.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              True love is a delicate aspect of human experience. Issues in love
              require careful, effective, and discreet solutions. Guru ji's
              exceptional vashikaran services promise to foster genuine, safe
              love and help clients reunite with lost loves swiftly.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              Renowned Pandit Ji offers powerful vashikaran solutions, helping
              many people globally. Known for his healing abilities, he aids
              individuals in rekindling love through effective vashikaran.
            </p>
          </div>

          {/* Animated YtQuery Component */}
          <div className="relative z-10 animate-slideInRight flex-shrink-0 w-full md:w-1/3">
            <YtQuery />
          </div>
        </div>

        <div
          className="block custom-md:hidden relative px-6 py-8 bg-cover bg-center rounded-lg shadow-2xl text-gray-50"
          style={{
            backgroundImage: `url('${image1}')`,
          }}>
          {/* Background Overlay for better contrast */}
          <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>

          {/* Content Section */}
          <div className="relative z-10 space-y-8">
            {/* Heading */}
            <h2 className="text-3xl font-extrabold text-center mb-6">
              Love Vashikaran Specialist{" "}
              <span className="text-red-400">Nikhil Sharma Ji</span>
            </h2>

            {/* Paragraph 1 */}
            <p className="text-lg leading-relaxed tracking-wide">
              Both <span className="font-semibold text-yellow-400">"Love"</span>{" "}
              and
              <span className="font-semibold text-yellow-400">
                {" "}
                "Vashikaran"
              </span>{" "}
              are intricate matters requiring utmost care. A love vashikaran
              expert must be highly skilled and knowledgeable. Our renowned
              Indian love vashikaran astrologer,
              <span className="font-semibold text-blue-400">
                {" "}
                Baba Ji Nikhil Sharma
              </span>
              , provides effective solutions for love-related issues.
            </p>

            {/* Paragraph 2 */}
            <p className="text-lg leading-relaxed tracking-wide">
              Discover more about our highly esteemed Guru Ji, globally
              recognized for his expertise in love vashikaran. Known as one of
              the leading astrologers in India and Asia, he excels at resolving
              love and relationship challenges with great success.
            </p>

            {/* Paragraph 3 */}
            <p className="text-lg leading-relaxed tracking-wide">
              True, profound love is a delicate part of life. Any issues in love
              require discreet and effective solutions. Guru Ji’s vashikaran
              services promise to foster genuine, safe love and help clients
              reunite with lost love swiftly.
            </p>

            {/* Paragraph 4 */}
            <p className="text-lg leading-relaxed tracking-wide">
              Renowned Pandit Ji offers powerful vashikaran solutions, helping
              many globally. His healing abilities assist individuals in
              rekindling love through simple yet effective vashikaran.
              Recognized with prestigious awards, he efficiently resolves love
              and inter-caste marriage challenges.
            </p>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-lg shadow-lg text-center backdrop-blur-sm">
              <p className="text-lg font-medium mb-3">
                Reach out for sovereign, swift, and harmless vashikaran services
                by contacting:
              </p>
              <a
                href="tel:+91-95091-68369"
                className="text-2xl font-bold text-green-300 hover:text-green-400 transition-transform transform hover:scale-110">
                +91-95091-68369
              </a>
              <br />
              <a
                href="mailto:info@astrologerNikhilSharma.com"
                className="text-blue-300 hover:text-blue-400 underline mt-4 block transition-transform transform hover:scale-110">
                info@AstrologerNikhilSharma.com
              </a>
            </div>
          </div>
        </div>

        {/* Highlighted Mid Content Box */}
        <div className="midContentBox bg-gradient-to-r from-green-600 to-teal-500 p-6 my-8 rounded-xl text-white text-center shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <p className="text-lg md:text-xl font-semibold">
            Swift and Effective Solution Through{" "}
            <strong>Healing & Meditation</strong> by
            <i> Astrologer Nikhil Sharma</i>
            <br />
            <span className="block mt-4">
              <a
                href="tel:+91-95091-68369"
                className="text-yellow-300 hover:text-yellow-400 underline transition-colors duration-200">
                +91-95091-68369
              </a>
              <span className="mx-2">|</span>
              <a
                href="mailto:info@astrologerNikhilsharma.com"
                className="text-yellow-300 hover:text-yellow-400 underline transition-colors duration-200">
                info@AstrologerNikhilSharma.com
              </a>
            </span>
          </p>
        </div>

        <div
          className="hidden custom-md:flex bg-cover bg-center relative p-8 rounded-lg shadow-xl space-x-8"
          style={{
            backgroundImage: `url('${
              image1 ||
              "https://source.unsplash.com/1600x900/?astrology,spiritual"
            }')`,
          }}>
          {/* ssssssss */}
          {/* Background Overlay for better contrast */}
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

          {/* Main Content Container */}
          <div className="relative flex w-full z-10 text-white space-x-8">
            {/* Left Content Section */}
            <div className="w-2/3">
              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 border-b-4 border-indigo-400 pb-2">
                About Love Vashikaran Specialist Pandit Astrologer Nikhil Sharma
                Ji
              </h2>

              {/* Paragraph 1 */}
              <p className="leading-relaxed mb-6 text-lg">
                Our esteemed guru ji is widely recognized as a leading authority
                on{" "}
                <span className="text-yellow-300 font-semibold">
                  Love Vashikaran
                </span>{" "}
                and astrology in India and globally. He offers expert solutions
                to alleviate problems faced by individuals. With over two
                decades of experience, including a decade of international
                practice, he has established himself as a trusted name. His
                expertise spans various aspects of vashikaran, including love,
                business, and relationships, making him sought after by clients
                worldwide.
              </p>

              {/* Paragraph 2 */}
              <p className="leading-relaxed mb-6 text-lg">
                Love relationships can encounter numerous obstacles. Our skilled
                love specialist resolves all types of love issues through
                effective and genuine vashikaran techniques. His mantras are
                potent yet safe, ensuring optimal results without negative
                repercussions. Countless individuals have benefited from his
                affordable and effective solutions.
              </p>
            </div>

            {/* Right Service Section */}
            <div className="w-1/3 bg-gradient-to-r from-purple-700 to-indigo-500 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-white">
                Common Love Problems Solved:
              </h3>
              <ul className="space-y-3 text-white">
                {[
                  "Stagnancy or Slow Pace of Concerted Love Affairs",
                  "Objections from Family or Society",
                  "Diminishing Allure and Love between Lovers",
                  "Triangular Love Affairs",
                  "Love Betrayals",
                  "Rising Discrepancies between Lovers",
                  "Scarcity of Understanding and Compatibility",
                  "Adverse Astrological Factors Discouraging Marriage",
                  "Differences in Attitude, Ambition, and Lifestyle",
                  "Difficulties in Getting Back Lost Love",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fa fa-heart text-yellow-300 mr-3"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className="block custom-md:hidden relative bg-cover bg-center rounded-xl shadow-xl p-6 space-y-8 text-white"
          style={{
            backgroundImage: `url(${image1})`,
          }}>
          {/* Background Overlay for Better Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black opacity-70 rounded-xl"></div>

          {/* Content Section */}
          <div className="relative z-10 space-y-8">
            {/* Top Image */}
            <div className="flex justify-center">
              <img
                src={awardCeremony}
                alt="Award Ceremony"
                className="w-full max-w-[200px] rounded-lg shadow-lg"
              />
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold text-center">
              About Love Vashikaran Specialist Pandit Astrologer{" "}
              <span className="text-yellow-400">Nikhil Sharma Ji</span>
            </h2>

            {/* Paragraph 1 */}
            <p className="text-lg leading-relaxed tracking-wide">
              Our esteemed guru ji is widely recognized as a leading authority
              on{" "}
              <span className="font-semibold text-red-400">
                Love Vashikaran
              </span>{" "}
              and astrology, both in India and globally. With over two decades
              of experience, including a decade of international practice, he
              has established himself as a trusted name. His expertise spans
              various aspects of vashikaran, helping clients resolve complex
              love, business, and relationship issues.
            </p>

            {/* Paragraph 2 */}
            <p className="text-lg leading-relaxed tracking-wide">
              Guru Ji has inherited profound knowledge from his renowned father,
              a veteran vashikaran specialist. Based in Chandigarh, Punjab, his
              organization has a global presence, offering top-notch services in
              major cities worldwide. Countless individuals have benefited from
              his potent yet safe vashikaran solutions, helping them overcome
              obstacles in love and relationships.
            </p>

            {/* Detailed List of Services */}
            <div className="bg-gradient-to-r from-purple-800 to-indigo-600 p-6 rounded-lg shadow-md backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-center">
                Common Love Problems Solved:
              </h3>
              <ul className="list-none space-y-4">
                {[
                  "Stagnancy or Slow Pace of Concerted Love Affairs",
                  "Objections from Family or Society",
                  "Diminishing Allure and Love between Lovers",
                  "Triangular Love Affairs",
                  "Love Betrayals",
                  "Rising Discrepancies between Lovers",
                  "Lack of Understanding and Compatibility",
                  "Astrological Factors Discouraging Marriage",
                  "Differences in Attitude and Lifestyle",
                  "Challenges in Rekindling Lost Love",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <i className="fa fa-heart text-red-400 mr-3"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to Action */}
            <div className="text-center space-y-4">
              <span className="block text-lg">
                To avail sovereign, swift, and harmless vashikaran services from
                our gold medalist specialist Nikhil Sharma, please call:
              </span>
              <a
                href="tel:+91-95091-68369"
                className="text-2xl font-bold text-green-300 hover:text-green-400 transition-transform transform hover:scale-105">
                +91-95091-68369
              </a>
              <a
                href="mailto:info@AstrologerNikhilSharma.com"
                className="text-blue-300 hover:text-blue-400 underline transition-transform transform hover:scale-105 block">
                info@AstrologerNikhilSharma.com
              </a>
            </div>

            {/* Bottom Image */}
            <div className="flex justify-center">
              <img
                src={awardCeremony}
                alt="Award Ceremony"
                className="w-full max-w-[200px] rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* 
        <div className="faq mt-8">
          <h3 className="text-xl font-bold mb-4  ">
            <span className="bg-neutral-600 p-1 text-white">FAQs</span>
          </h3>

          <div>
            <ul className="bg-green-300 p-2">
              <li className="border-green-500 border-b-2">
                <div
                  onClick={() => handleItemClick(0)}
                  className="cursor-pointer pl-2 p-3">
                  💖 What Love vashikaran Specialist Actually Do for Solving
                  Love Problems? Problems?
                </div>
                {activeIndex === 0 && (
                  <p className="mt-2 pl-2 bg-white">
                    If you want lost love back in life, in very short span of
                    time then the best solution is consulting Love vashikaran
                    specialist. No matter any problem in love like arguments,
                    ego, anger, communication gap, etc. vashikaran mantra
                    provided by the vashikaran specialist, is the one-stop
                    solution for all those issues to make the lovers united with
                    future of love marriage.
                  </p>
                )}
              </li>

              <li className="border-green-500 border-b-2">
                <div
                  onClick={() => handleItemClick(1)}
                  className="cursor-pointer pl-2 p-3">
                  💖 Is There any Side Effects if I Take Vashikaran Services?
                </div>
                {activeIndex === 1 && (
                  <p className="mt-2 pl-1 bg-white">
                    The vashikaran tantra and mantra offers by our esteemed baba
                    ji are complete safe and harmless to the chanter or the
                    person compelled. But it is very essential to use the
                    mantras with positive intentions. The mantras have to be
                    chanted with complete sincerity and with consultation of
                    baba ji, for swiftly removing problems in love life.
                  </p>
                )}
              </li>

              <li className="border-green-500 border-b-2">
                <div
                  onClick={() => handleItemClick(2)}
                  className="cursor-pointer pl-2 p-3">
                  💖 Who is Best Positive Love Vashikaran Specialist?
                </div>
                {activeIndex === 2 && (
                  <p className="mt-2 pl-1 bg-white">
                    Vashikaran solutions are very powerful, therefore, it is
                    essential to consult an experienced and highly skilful
                    vashikaran specialist like Pt. Nikhil Sharma, to obtain the
                    most effective and swift result. With expertise of more than
                    20 years, his fame has spread all over the world. Based in
                    the humble town of Chandigarh, this learned and wise
                    vashikaran specialist has deep insight and knowledge of
                    vedic literature and other occult sciences. Ask a Free
                    Question to Love Vashikaran Specialist Astrologer Nikhil
                    Sharma Ji at :
                    <br />
                    <strong>Direct Call/WhatsApp (India):</strong>{" "}
                    <a
                      href="tel:+91-95091-68369"
                      className="text-blue-500 hover:underline">
                      +91-95091-68369
                    </a>
                    <br />
                    <strong>Mail Id:</strong>{" "}
                    <a
                      href="mailto:info@astrologerNikhilsharma.com"
                      className="text-blue-500 hover:underline">
                      info@astrologerNikhilsharma.com
                    </a>
                    <br />
                    <strong>Skype Id:</strong> Nikhil.sharma9295
                  </p>
                )}
              </li>

              <li className="border-green-500 border-b-2">
                <div
                  onClick={() => handleItemClick(3)}
                  className="cursor-pointer pl-2 p-3">
                  💖 How Love Vashikaran Specialist Astrologer Nikhil Sharma
                  Resolve Love and Relationship Problems?
                </div>
                {activeIndex === 3 && (
                  <p className="mt-2 pl-1 bg-white">
                    Love relationship and love marriage issues solving is the
                    speciality of Pt. Nikhil Sharma. His years of experience has
                    helped him device powerful mantras, that can compel the mind
                    of lover to fall back in love or convince parents to agree
                    for marriage. His divine powers can easily resolve the
                    following issues:
                    <ul>
                      <li>Lost Love</li>
                      <li>Breakup Problems</li>
                      <li>Misunderstandings</li>
                      <li>Trust Issues</li>
                      <li>Get Ex Back</li>
                      <li>Convincing GF for marriage</li>
                      <li>Convincing BF for marriage</li>
                      <li>Love Marriage Problems</li>
                      <li>Compatibility Issues</li>
                      <li>Other Love-related Problems</li>
                    </ul>
                  </p>
                )}
              </li>
            </ul>
          </div>
        </div> */}

        <div className="bg-yellow-200 p-4 rounded-md mt-2">
          <p className="text-gray-700">
            To make your love and relationship with your lover trouble-free and
            maximally promising, or to get ex back, you just need to phone up
            over:
            <strong>
              <a
                href="tel:+91-95091-68369"
                className="text-blue-600 underline ml-1">
                +91-95091-68369
              </a>
            </strong>
            ; or share their problems confidentially at:
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
        <div className="bg-red-400 p-4 border-2 border-black m-2">
          <h1 className="text-white text-2xl font-bold flex justify-center mb-4">
            Vashikaran Services
          </h1>
          <ul className="grid custom-md:grid-cols-3 gap-4">
            {PlacesNames.map((items) => (
              <li className="p-1 border-b-slate-500 border-2">
                <Link to={`/Love-Vashikaran-Specialist/${items.pathName}`}>
                  {" "}
                  {items.placeTitle}{" "}
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

export default LoveVashikaranSpecialist;
