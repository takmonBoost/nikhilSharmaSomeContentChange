import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Header from "../component/common/Header";
import MainSection from "../component/MainSection";
import ContentSection from "../component/ContentSection";
import Sidebar from "../component/common/Sidebar";
import AwardsSection from "../component/core/AwardsSection";
import VideoSection from "../component/common/VideoSection";
import VedicAstrology from "../component/core/VedicAstrology";
import ContactBanner from "../component/core/ContactBanner";
import Specialization from "../component/core/Specialization";
import ZodiacSlider from "../component/common/ZodiacSlider";
import CaseStudiesSection from "../component/core/CaseStudiesSection";
import TestimonialContact from "../component/core/TestimonialContact";
import Footer from "../Components/Footer.jsx";
import awardCeremony from "../images/gettingAward.jpg";
import awardCeremonySonu from "../images/gettingAwardFromSonu.jpg";
import ServiceSection from "../Components/ServicesSection.jsx";
import AstrologerService from "../Components/AstrologerService.jsx";
import Testimonials from "../Components/Testimonials.jsx";
import HeroSection from "../Components/HeroSection.jsx";
import ZodiacForm from "../Components/ZodiacForm.jsx";
import StatsSection from "../Components/StatsSection.jsx";

const Home = () => {
  const headerData = {
    title:
      "Renowned Sharma Ji - Globally Acclaimed for Exceptional Astrological Expertise",
    description:
      "As the accomplished son of a globally renowned figure, Nikhil Sharma, a distinguished Indian astrologer, has risen to become one of the most sought-after and esteemed astrologers and vashik. Throughout his illustrious career spanning decades, he has skillfully applied his expertise in Vedic astrology and benevolent vashikaran to make a profound impact on life.",
  };

  const sidebarLinks = [
    { label: "Vashikaran Guru" },
    { label: "Vashikaran Specialist India" },
    { label: "Love Vashikaran for Him/Her" },
    { label: "Love Back Specialist" },
    { label: "Love Marriage Vashikaran" },
    { label: "Vashikaran Mantra" },
    { label: "Vashikaran Removal Specialist" },
    { label: "Black Magic Removal Specialist" },
    { label: "Powerful Vashikaran Specialist" },
    { label: "Vashikaran Yantra" },
    { label: "Vashikaran Success Rate" },
    { label: "Vashikaran Success Stories" },
  ];

  return (
    <div className="flex flex-col w-full">
      <header>
        <link rel="canonical" href="https://astrologernikhilsharma.in/" />
      </header>
      
      <Navbar />
      {/* Hero Section */}

      <HeroSection />

      {/* Service Section */}

      <ServiceSection />

      {/* Astrologer Service Section */}

      <AstrologerService />

      {/* Testimonials Section */}

      <Testimonials />

      {/* Zodiac Form Section */}

      <ZodiacForm />

      <StatsSection />

      {/* Footer */}

      <Footer />
    </div>
  );
};

export default Home;
