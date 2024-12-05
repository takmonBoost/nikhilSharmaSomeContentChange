import React from "react";
import Navbar from "../Components/Navbar";
import YtQuery from "../Components/YtQuery";
import Footer from "../Components/Footer.jsx";
import { useState } from "react";
import gettingAward from "../images/gettingAward.jpg";
import { Link, useParams } from "react-router-dom";

const SimilarPage = ({ Content, Title }) => {
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
      <div className="contentSection p-4">
        <div
          className=""
          style={{ backgroundImage: `url('/images/bg2.webp')` }}>
          <h1 className="border-b-2 w-[70vw] m-auto  border-black font-bold text-2xl flex items-center justify-center">
            {Content[0].Page1heading1}
          </h1>
          <div className="">
            <div className="hidden custom-md:flex text-justify mt-2 ">
              <div className=" w-[70vw]  flex m-auto items-center justify-center">
                <div className="p-5">
                  {Content[0].Page1para1.map((item, index) => (
                    <p key={index}> {item} </p>
                  ))}
                  {Content[0].Page1heading2 && (
                    <h1 className="border-b-2 border-black font-bold text-2xl">
                      {Content[0].Page1heading2}
                    </h1>
                  )}

                  {Content[0].Page1para2 &&
                    Content[0].Page1para2.map((item, index) => (
                      <p key={index}> {item} </p>
                    ))}
                </div>
              </div>

              {/* <div className="ml-5 animate-slideInRight ">
              <YtQuery />
            </div> */}
            </div>
            <div className="block custom-md:hidden text-justify animate-slideInRight">
              {/* <div>
              <YtQuery />
            </div> */}
              <div>
                {Content[0].Page1para1.map((item, index) => (
                  <p key={index}> {item} </p>
                ))}
                {Content[0].Page1heading2 && (
                  <h1 className="border-b-2 border-black font-bold text-2xl">
                    {Content[0].Page1heading2}
                  </h1>
                )}
                {Content[0].Page1para2 &&
                  Content[0].Page1para2.map((item, index) => (
                    <p key={index}> {item} </p>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="midContentBox bg-green-900 p-4 my-4 text-white flex text-center items-center justify-center">
          <p>
            Swift And Effective Solution Through{" "}
            <strong>Healing & Meditation</strong> By{" "}
            <i>Astrologer Nikhil Sharma</i>{" "}
            <span>
              <a
                href="tel:+91-95091-68369"
                className="text-blue-300 hover:underline">
                +91-95091-68369
              </a>
            </span>{" "}
            <a
              href="mailto:info@astrologerNikhilsharma.com"
              className="text-blue-300 hover:underline">
              info@AstrologerNikhilSharma.com
            </a>
          </p>
        </div>

        {/* Middle Section */}

        <div className="bg-green-200">
          <h2 className="text-2xl font-bold mb-4">{Content[0].heading2}</h2>
          <div className="hidden custom-md:flex">
            <div className="w-[70vw] items-center justify-center">
              <>
                {Content[0].para2.map((item, index) => (
                  <p className="mb-4" key={index}>
                    {item}
                  </p>
                ))}
              </>

              <ul className="list-disc pl-5 mb-6 space-y-2">
                {Content[0].ul2.map((item, index) => (
                  <li key={index}> {item}</li>
                ))}
              </ul>
            </div>

            <div className="contentImage ml-4 w-[40vw]">
              <img
                src={gettingAward}
                alt="Best Astrology Services | Call at +91-9509168369"
                title="Best Astrology Services | Call at +91-9509168369"
                className="w-full object-cover"
              />
            </div>
          </div>
          <div className="block custom-md:hidden">
            <div className="contentImage ml-4 ">
              <img
                src={gettingAward}
                alt="Best Astrology Services | Call at +91-95091-68369"
                title="Best Astrology Services | Call at +91-95091-68369"
                className="w-full object-cover"
              />
            </div>
            <div className=" items-center justify-center">
              <>
                {Content[0].para2.map((item, index) => (
                  <p className="mb-4" key={index}>
                    {item}
                  </p>
                ))}
              </>

              <ul className="list-disc pl-5 mb-6 space-y-2">
                {Content[0].ul2.map((item, index) => (
                  <li key={index}> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
<div className="space-y-5 " style={{backgroundImage: `url('/images/bg2.webp')`}}>

        {Content[0].heading3 && (
          <h2 className="text-2xl font-bold mb-4">{Content[0].heading3}</h2>
        )}
        {Content[0].para3 && (
          <>
            {Content[0].para3.map((item, index) => (
              <p key={index} className="mb-4">
                {item}
              </p>
            ))}
          </>
        )}

        {Content[0].ul3 && (
          <ul className="list-disc pl-5 mb-6 space-y-2">
            {Content[0].ul3.map((item, index) => (
              <li key={index}> {item}</li>
            ))}
          </ul>
        )}

        {Content[0].heading4 && (
          <h2 className="text-2xl font-bold mb-4">{Content[0].heading4}</h2>
        )}
        {Content[0].para4 && (
          <>
            {Content[0].para4.map((item, index) => (
              <p key={index} className="mb-4">
                {item}
              </p>
            ))}
          </>
        )}

        {Content[0].heading5 && (
          <h2 className="text-2xl font-bold mb-4">{Content[0].heading5}</h2>
        )}
        {Content[0].para5 && (
          <>
            {Content[0].para5.map((item, index) => (
              <p key={index} className="mb-4">
                {item}
              </p>
            ))}
          </>
        )}
</div>


        <div className="bg-yellow-200 p-4 rounded-md mt-2">
          <p className="text-gray-700">
            For harnessing his globally-acclaimed and marvelous astrology
            solutions for various problems of life, frustrated or failed people
            may readily call over:
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
          <ul className="grid custom-md:grid-cols-3 gap-4">
            {Content[0].placesNames.map((item, index) => (
              <li className="p-1 border-b-slate-500 border-2 ">
                <Link to={`${Title}${item.pathName}`} key={index}>
                  {" "}
                  {Content[0].placesNames[index].placeTitle}
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

export default SimilarPage;
