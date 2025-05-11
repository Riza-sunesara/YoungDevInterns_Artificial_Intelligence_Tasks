import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  const menuVariants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-navyblue text-offwhite shadow-sm z-50">
      {/* Top Banner */}
      <div className="bg-navyblue text-offwhite text-sm text-center py-2 px-4">
        Experience Our Personalized Outfit Checker's Demo For Free
      </div>

      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 h-16">
        {/* Logo */}
        <a href="#" className="font-bold text-2xl text-offwhite">FitCheck</a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <ScrollLink 
              to="hero" 
              smooth 
              duration={500}
              className="text-offwhite hover:text-lightpink transition-colors cursor-pointer"
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink 
              to="category" 
              smooth 
              duration={500}
              className="text-offwhite hover:text-lightpink transition-colors cursor-pointer"
            >
              Category
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="predict" smooth duration={500}>
              <button className="bg-offwhite hover:bg-lightpink text-navyblue hover:text-offwhite px-6 py-2 rounded-full transition-colors">
                Predict Now
              </button>
            </ScrollLink>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div onClick={toggleNav} className="md:hidden cursor-pointer z-50">
          {nav ? <AiOutlineClose size={30} className='text-navyblue'/> : <AiOutlineMenu size={30} className='text-offwhite'/>}
        </div>

        {/* Motion-animated Mobile Menu */}
        <motion.div
          initial={false}
          animate={nav ? 'open' : 'closed'}
          variants={menuVariants}
          transition={{ stiffness: 20, damping: 15 }}
          className="fixed left-0 top-0 w-full h-screen bg-offwhite z-40 flex flex-col items-center justify-center"
        >
          <ul className="text-2xl space-y-8 text-center">
            <li>
              <ScrollLink 
                to="hero" 
                onClick={closeNav} 
                smooth 
                duration={500}
                className="text-navyblue hover:text-offwhite transition-colors"
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink 
                to="category" 
                onClick={closeNav} 
                smooth 
                duration={500}
                className="text-navyblue hover:text-offwhite transition-colors"
              >
                Category
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="predict" onClick={closeNav} smooth duration={500}>
                <button className="bg-navyblue hover:bg-lightpink text-offwhite px-8 py-3 rounded-full">
                  Predict Now
                </button>
              </ScrollLink>
            </li>
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
