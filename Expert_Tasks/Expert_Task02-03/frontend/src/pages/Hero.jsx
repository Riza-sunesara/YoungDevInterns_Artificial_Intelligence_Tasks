import React from 'react';
import placeholderImg from '../assets/image.png'; 
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <>
      <div id='hero'></div>
      <section className="bg-offwhite py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left - Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={placeholderImg}
              alt="Fashion Model"
              className="w-[900px] h-auto object-contain"
            />
          </div>

          {/* Right - Content */}
          <div className="flex-1">
            <p className="text-semibold border-b-lightpink border-b-4 text-gray-600 mb-2">Your Wardrobe’s Got a 🧠 Now</p>

            <h1 className="text-4xl md:text-5xl font-bold text-navyblue mt-8 mb-6 leading-tight">
              FitCheck: Forecast-Driven Outfit Insights
            </h1>

            <p className="text-navyblue text-lg mb-8">
              Tired of guessing what to wear every season? FitCheck takes the weather and your clothing
              choices into account to predict if your outfit suits the conditions—and your personal style.
              Whether it’s sunny, rainy, or chilly outside, we’ll let you know if your pick is on point or needs
              a tweak. If it’s a good match, we’ll suggest more styles to explore. If not, no worries—we’ll guide
              you to better alternatives. Dress smart, stay comfortable, and explore fashion the intelligent way.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 mb-6">
              <ScrollLink to="predict" smooth={true} duration={500} offset={-60}>
                <button className="bg-lightpink hover:bg-rose-300 text-black px-6 py-3 rounded font-semibold transition duration-300">
                  Get Started Today
                </button>
              </ScrollLink>
              <button className="border-yellow-100 border-2 hover:bg-lightgrey text-navyblue px-6 py-3 rounded font-medium">
                Watch a Demo
              </button>
            </div>

            {/* Happy Users Badge */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <img className="w-14 h-14 rounded-full border-2 border-white" src="https://i.pravatar.cc/40?img=1" alt="User 1" />
                <img className="w-14 h-14 rounded-full border-2 border-white" src="https://i.pravatar.cc/40?img=2" alt="User 2" />
                <img className="w-14 h-14 rounded-full border-2 border-white" src="https://i.pravatar.cc/40?img=3" alt="User 3" />
              </div>
              <p className="text-navyblue text-sm font-medium">430+ Happy Users</p>
            </div>
          </div>
        </div>
      </section>
    </>

  );
};

export default Hero;
