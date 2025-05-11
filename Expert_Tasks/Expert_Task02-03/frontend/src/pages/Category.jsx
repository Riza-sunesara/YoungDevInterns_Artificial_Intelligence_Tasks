import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
  "Tshirts", "Shirts", "Handbags", "Watches", "Sports Shoes",
  "Casual Shoes", "Kurtas", "Sunglasses", "Jeans", "Shorts"
];

const Category = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div id="category" className="w-full py-14 px-4 bg-offwhite">
      <h2 className="text-3xl font-bold text-center text-navyblue mb-6">
        Categories Our Model Uses
      </h2>

      {/* Forward Slider */}
      <div className="border-b-0 mb-8">
        <Slider {...settings}>
          {categories.map((cat, index) => (
            <div key={`forward-${index}`} className="px-9">
              <div className="bg-gray-800 text-white text-center py-3 px-4 rounded-full shadow-md cursor-pointer">
                {cat}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Reverse Slider */}
      <div className="border-b-0 mb-1">
        <Slider {...{ ...settings, rtl: true }}>
          {categories.map((cat, index) => (
            <div key={`reverse-${index}`} className="px-9">
              <div className="bg-gray-800 text-white text-center py-3 px-4 rounded-full shadow-md cursor-pointer">
                {cat}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Category;
