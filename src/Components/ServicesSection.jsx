import React from "react";
import { FaFire, FaHeadset, FaUsers } from "react-icons/fa"; // Import icons for services

const ServicesSection = () => {
  const services = [
    {
      icon: <FaFire size={36} className="text-orange-500" />,
      title: "Vedic Astrology",
      description:
        "Uncover the mysteries of Vedic astrology with Nikhil Sharma to reveal your life’s path and harmonize with the cosmic order.",
      link: "/Astrology-Specialist",
    },
    {
      icon: <FaHeadset size={36} className="text-orange-500" />,
      title: "Astrological Consultations",
      description:
        "Receive expert, personalized advice from Nikhil Sharma for clarity and solutions to life’s most pressing challenges.",
      link: "/Contact",
    },
    {
      icon: <FaUsers size={36} className="text-orange-500" />,
      title: "Relationship Guidance",
      description:
        "Gain astrological insight into your relationships to create stronger bonds and achieve harmony with loved ones.",
      link: "/Love-Vashikaran-Specialist",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Daily Astrology Services
          </h2>
          <p className="text-gray-600 mt-4 mx-auto text-lg sm:text-xl">
            Discover daily guidance tailored to help you find balance, growth, and alignment in every area of life, from career to love, with renowned astrologer Nikhil Sharma, based in Chandigarh and Dubai.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition-shadow transform hover:-translate-y-1">
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-orange-100 shadow-md relative group">
                  {service.icon}
                  <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full border-4 border-dotted border-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <div className="border-b-2 border-orange-500 w-12 mx-auto mt-3 mb-6"></div>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                {service.description}
              </p>
              <a
                href={service.link}
                className="text-orange-500 font-semibold hover:text-black hover:text-sm transition-colors duration-300">
                LEARN MORE
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
