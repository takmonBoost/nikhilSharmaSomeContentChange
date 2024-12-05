import React from "react";
import AstrologyBanner from "../component/core/AstrologyBannerRavindra.jsx";
import AstrologyCounseling from "../component/core/AstrologyCounselingRavindra.jsx";
import CapabilitiesSection from "../component/core/CapabilitiesSectionRavindra.jsx";
import DeclarationsSection from "../component/core/DeclarationsSectionRavindra.jsx";
import Navbar from "../Components/Navbar.jsx";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Footer from "../Components/Footer.jsx";

const WhoIsAstrologerNikhilSharma = () => {
  const expertiseItems = [
    "Astrology",
    "Numerology",
    "Vastu Shastra",
    "Psychic Reading",
    "Positive Vashikaran",
    "Meditation and Natural Healing",
    "And, many other positive and effective sciences and therapies",
  ];

  const lifeSpheresItems = [
    "Progeny",
    "School and College Education",
    "Businesses in various Economic Fields",
    "Romance and Love Affairs",
    "Marital Life and Domesticity",
    "Business/Professional Ventures and Investments",
    "Removal of Black Magics of Evil Persons or Spirits",
    "Health, Well-being, and Diseases",
    "Career Selection and Progress",
    "Marriages of all Types",
    "Relationships with Near and Remote People",
    "National and Foreign Tours & Travels",
    "Construction of and Corrections in all types of Buildings",
  ];

  const contactNumber = "+91-95091-68369";
  const email = "info@AstrologerNikhilSharma.com";

  return (
    <div
      className="bg-gray-100"
      style={{ backgroundImage: `url('/images/bg2.webp')` }}>
      <Navbar />

      <div className="relative bg-cover bg-center text-white py-12 px-4 mx-5">
        <div className="m-2 ">
          {/* Each paragraph in a flex card */}
          <span className="text-black flex items-center justify-center text-3xl font-bold">
            Who is Astrologer Nikhil Sharma
          </span>
          <div className="flex justify-center w-full">
            <div className="md:w-[60vw] w-[90vw] flex flex-col items-center">
              {/* Section 1 */}
              <div className="text-black p-3 rounded-lg  ">
                <p className="text-lg">
                  This well-drafted and exclusive web-page offers answers and
                  explanations for why astrologer Nikhil Sharma is at present
                  one of the most capable, trustworthy, and hence tried and
                  true, astrologers in India and nations all across the globe.
                  During his highly opulent career crossing two decades,
                  including one decade of global career, he helped myriads of
                  troubled people and entities, and thus, made the lives of them
                  highly successful, happy, and progressive, who now reside
                  happily and peacefully in nations worldwide.
                </p>
              </div>

              {/* Section 2 */}
              <div className="text-black bg-opacity-50 p-3 rounded-lg ">
                <p className="text-lg">
                  Here, it is relevant to mention also that, today he is
                  regarded as being one of the most famous and top astrologers
                  in India, in the majority of Asian countries, and in countries
                  worldwide. Consequently, the majority of the aggrieved and
                  suffering people of the world, prefer to receive his astrology
                  and other services, to find the most effective, economical,
                  and permanent solutions to their respective problem,
                  irrespective of the field and nature of problems. Our highly
                  talented, erudite, and righteous astrologer guru ji has been
                  well-bred under intelligent and sophisticated guidance of his
                  father, who was one of the eminent astrologer-cum-vashikaran
                  experts in India and abroad in his times.
                </p>
              </div>

              {/* Section 3 */}
              <div className="text-black bg-opacity-50 p-3 rounded-lg my-5">
                <p className="text-lg">
                  The cherished and ultimate ambition of our righteous and
                  magnanimous guru ji astrologer Nikhil Sharma is to make the
                  best possible uses of his opulent gamut of knowledge and
                  experience in these fields, for making lives of people of the
                  world over better, happier, and optimally prosperous. During
                  last two decades, he soothed and changed the troubled lives of
                  thousands, and propelled and prospered businesses and careers
                  of numerous.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities Section */}
      <section className="bg-white py-12 px-4"
      
      style={{ backgroundImage: `url('/images/bg1.webp')` }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Capabilities & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseItems.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-yellow-300 to-yellow-500 p-6 rounded-lg shadow-md text-center">
                <p className="text-lg font-semibold text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life Spheres Section */}
      <section className="bg-gray-100 py-12 px-4" >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Services for Various Life Spheres
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lifeSpheresItems.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-green-300 to-green-500 p-6 rounded-lg shadow-md text-center">
                <p className="text-lg font-semibold text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg mb-4">
            For consultations and services, reach out to us:
          </p>
          <p className="text-xl font-semibold">{contactNumber}</p>
          <p className="text-xl font-semibold">{email}</p>
        </div>
      </section>

      {/* Declarations Section */}
      <section className="bg-white py-12 px-4">
        <DeclarationsSection />
      </section>
      <Footer />
    </div>
  );
};

export default WhoIsAstrologerNikhilSharma;
