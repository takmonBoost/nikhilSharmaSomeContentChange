import React, { useState } from "react";
import { Link } from "react-router-dom";
import navItems from "../data/navItems";
import logo from "../images/logo.png";
import HeaderContactBar from "./HeaderContactBar";
import { IoReorderThreeOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubTopics = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="flex ">
        <div className="w-[15vw]">
          <div className="bg-[#f97316] try-middle mb-1">
            <div className="bg-[#353535] w-[14vw] try-inner flex justify-center items-center p-2">
              <Link to="/">
                <img src={logo} alt="" className="w-20 " />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[68vw] justify-center items-center flex">
          {/* Laptop Screen */}
          <div className="space-x-[5vw] hidden lg:flex justify-center items-center font-bold">
            {navItems.map((item, index) => (
              <div key={index} className="group">
                <Link to={item.path} className="text-black">
                  {item.title}
                </Link>
                {item.subTopics && (
                  <div className="absolute hidden group-hover:flex flex-col pt-2 w-48 bg-white shadow-xl border border-gray-200 rounded-lg z-10">
                    {item.subTopics.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#00bfae] hover:text-white transition duration-200 ">
                        {subItem.subTitle}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Screen */}
          <div className="flex lg:hidden font-bold">
            Astrologer Nikhil Sharma
          </div>

          <div className="absolute right-0 w-[15vw] h-[14vh] mb-4 ">
            <div className="bg-[#f97316] w-[15vw] h-full try-middle-down ">
              <div className="bg-[#353535] w-11/12 absolute right-0 h-full flex items-center justify-center try-inner-down">
                <button className="bg-white hidden lg:flex text-sm p-0.5 mt-3 rounded-md border-2 border-blue-400 text-green-700 ">
                  Contact Us
                </button>

                <button
                  onClick={toggleMenu}
                  className="bg-white flex lg:hidden text-sm p-0.5 mt-3 rounded-md border-2 border-blue-400 text-green-700 ">
                  {isMenuOpen ? <MdOutlineCancel /> : <IoReorderThreeOutline />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Menu */}
      {isMenuOpen && (
        <div className="flex flex-col items-center justify-center bg-white shadow-lg p-4 absolute w-full z-20">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="mb-2 flex flex-col justify-center items-start w-full"
            >
              <div className="flex items-center justify-between w-full">
                <Link to={item.path} className="text-black block mb-1">
                  {item.title}
                </Link>
                {item.subTopics && (
                  <button
                    onClick={() => toggleSubTopics(index)}
                    className="ml-2 text-gray-600"
                  >
                    {expandedItem === index ? (
                      <IoChevronUp size={16} />
                    ) : (
                      <IoChevronDown size={16} />
                    )}
                  </button>
                )}
              </div>
              {expandedItem === index && item.subTopics && (
                <div className="flex flex-col pt-2 pl-4 w-full bg-gray-100 rounded-lg">
                  {item.subTopics.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#00bfae] hover:text-white transition duration-200"
                    >
                      {subItem.subTitle}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;

{
  /* <div className="absolute right-0 w-[15vw] h-full">
  <div className="bg-[#f97316] w-[15vw] h-full try-middle-down ">
    <div className="bg-[#353535] flex items-center justify-center w-11/12 try-inner-down  h-[14vh] absolute right-0 ">
      <button className="bg-white px-4 py-2 rounded-xl border-2 text-xs border-gray-500 z-10 ">
        Contact Us
      </button>
    </div>
  </div>
</div> */
}

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import navItems from "../data/navItems";
// import logo from "../images/logo.png";
// import HeaderContactBar from "./HeaderContactBar";
// import { IoReorderThreeOutline } from "react-icons/io5";
// import { MdOutlineCancel } from "react-icons/md";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="bg-white shadow-lg">
//       {/* Optional HeaderContactBar */}
//       {/* <HeaderContactBar /> */}

//       <div className="container flex flex-wrap items-center justify-between">
//         <div className="hidden lg:flex relative w-full">
//           {/* Logo */}
//           <div className="bg-[#f97316] mb-2 try-middle  w-[21vw]  ">
//             <div className="bg-[#353535] p-2  flex items-center justify-center try-inner w-[16vw] ">
//               <div className="flex  items-center space-x-4 relative right-5">
//                 <Link
//                   to="https://astrologernikhilsharma.in/"
//                   className="flex items-center">
//                   <img
//                     src={logo}
//                     alt="Logo"
//                     className="w-24 h-20 transition-transform duration-300 transform hover:scale-110"
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Navbar Links for large screens */}

//           <nav className="  w-full flex items-center justify-center space-x-8 text-black">
//             {navItems.map((item, index) => (
//               <div key={index} className="relative group">
//                 <Link
//                   to={item.path}
//                   className="text-lg font-semibold transition duration-200 hover:text-[#00bfae] transform hover:scale-105">
//                   {item.title}
//                 </Link>

//                 {/* Dropdown for Subtopics */}
//                 {item.subTopics && (
//                   <div className="absolute hidden group-hover:flex flex-col pt-2 w-48 bg-white shadow-xl border border-gray-200 rounded-lg z-10">
//                     {item.subTopics.map((subItem, subIndex) => (
//                       <Link
//                         key={subIndex}
//                         to={subItem.path}
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#00bfae] hover:text-white transition duration-200">
//                         {subItem.subTitle}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </nav>
//           <div className="absolute right-0 ">
//             <div className="bg-[#f97316] mb-2 h-24 w-[22vw]  try-middle-down  ">
//               <div className="bg-[#353535] w-[21vw] h-24 flex items-center justify-center try-inner-down absolute -right-[1vw] ">
//                 <button className="text-[#FF0606] bg-white p-1.5 rounded-xl border-2 border-green-300">
//                   Contact Us
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="lg:hidden flex justify-center items-center  ">
//           <div className="bg-[#f97316] mb-2  try-middle w-[21vw]  ">
//             <div className="bg-[#353535] p-2  flex items-center justify-center try-inner w-[19vw] ">
//               <div className="flex items-center justify-center space-x-4 relative right-5">
//                 <Link
//                   to="https://astrologernikhilsharma.in/"
//                   className="flex items-center">
//                   <img
//                     src={logo}
//                     alt="Logo"
//                     className="w-24 h-12 relative right-0 transition-transform duration-300 transform hover:scale-110"
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="lg:hidden text-green-900 font-serif font-bold ">
//             Astrologer Nikhil Sharma
//           </div>

//           {/* Mobile Menu Button for small screens */}
//           <div className="absolute right-5 flex justify-center items-center">
// <button className="lg:hidden text-gray-700" onClick={toggleMenu}>
//   {isMenuOpen ? <MdOutlineCancel /> : <IoReorderThreeOutline />}
// </button>
//           </div>
//         </div>

// //         {/* Mobile Menu for small screens */}
//         {isMenuOpen && (
//           <nav className="lg:hidden flex justify-center items-center  bg-white shadow-md border-t border-gray-200">
//             <ul className="flex justify-center  flex-col items-center space-y-4 py-4">
//               {navItems.map((item, index) => (
//                 <li key={index} className="w-full text-center">
//                   <Link
//                     to={item.path}
//                     className="text-gray-700 hover:text-orange-500 block py-2"
//                     onClick={toggleMenu}>
//                     {item.title}
//                   </Link>

//                   {/* Dropdown for Subtopics */}
//                   {item.subTopics && (
//                     <ul className="bg-gray-100 rounded-md mt-1">
//                       {item.subTopics.map((subItem, subIndex) => (
//                         <li key={subIndex} className="py-1">
//                           <Link
//                             to={subItem.path}
//                             className="text-sm text-gray-600 block py-1"
//                             onClick={toggleMenu}>
//                             {subItem.subTitle}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Navbar;
