import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-navyblue text-offwhite py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-semibold ml-2">FitCheck</h1>
          </div>

          {/* Navigation */}
          <div className="space-x-6 mt-4 md:mt-0">
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-lightpink transition"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="category"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-lightpink transition"
            >
              Category
            </ScrollLink>
            <ScrollLink
              to="predict"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-lightpink transition"
            >
              Predict
            </ScrollLink>
          </div>

          {/* Scroll To Top */}
          <div className="mt-4 md:mt-0 text-center">
            <button
              onClick={scrollToTop}
              className="bg-lightpink ml-[10px] text-navyblue rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#dba996] transition"
              title="Go To Top"
            >
              <FaArrowUp />
            </button>
            <p className="text-sm mt-1">Go To Top</p>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="border border-lightgrey rounded-lg p-4 flex flex-col md:flex-row md:justify-between md:items-center text-sm space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 border border-lightgrey px-4 py-2 rounded-md">
              <FaEnvelope className="text-lightpink" />
              <span className='text-offwhite'>riza.zulfiqar34@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 border border-lightgrey px-4 py-2 rounded-md">
              <FaPhone className="text-lightpink" />
              <span className='text-offwhite'>+92 3352961601</span>
            </div>
            <div className="flex items-center space-x-2 border border-lightgrey px-4 py-2 rounded-md">
              <FaMapMarkerAlt className="text-lightpink" />
              <span className='text-offwhite'>Karachi, Pakistan</span>
            </div>
          </div>
          <div className="text-center md:text-right">
            <span className='text-offwhite'>© 2025 FitCheck. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
