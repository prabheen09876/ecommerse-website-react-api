import React, { useState, useEffect } from 'react';
import './Categories.css';
import { Link } from 'react-router';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://fakestoreapi.com/products/categories'
      );
      const result = await response.json();
      console.log(result);
      setCategories(result);
    } catch (err) {
      console.log(err, 'err');
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main-category-container d-flex align-center justify-center mt-[16vh]">
      <div className="bg-gradient-to-br from-[#E68369] via-[#ECCEAE] to-[#010106] p-8 rounded-xl relative">

        {/* Noise overlay */}
        <div className="absolute inset-0 opacity-50">
          <svg className="w-full h-full">
            <filter id="noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="3"
                stitchTiles="stitch"
                seed="5"
              />
              <feColorMatrix type="saturate" values="0" />
              <feComponentTransfer>
                <feFuncA type="discrete" tableValues="0 0.5 1 1" />
              </feComponentTransfer>
              <feDiffuseLighting surfaceScale="2" diffuseConstant="1">
                <feDistantLight azimuth="45" elevation="60" />
              </feDiffuseLighting>
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" opacity="0.5" />
          </svg>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-16 relative z-10">
          <div className="image-carousel-container">
            <div className="carousel relative w-full h-[300px] overflow-hidden rounded-xl">
              <div className="carousel-inner flex transition-transform duration-500">
                {[1, 2, 3].map((index) => (
                  <div key={index} className="carousel-item min-w-full">
                    <img
                      src={
                        index === 1
                          ? "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/Samsung/Jan25Launch/Teaser/GW/21stJan/Rv1/Update_DesktopHeroTemplate_1500x600._CB553504176_.jpg"
                          : index === 2
                            ? "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/dharshini/BFCM24_GW_PC_Hero_LA_2x-20th._CB553566261_.jpg"
                            : "https://images-eu.ssl-images-amazon.com/images/G/31/img24/PCA/GW/3000x1200-2x._CB541346743_.jpg"
                      }
                      alt={`Product ${index}`}
                      className="w-full h-[600px] object-cover"
                    />
                  </div>
                ))}
              </div>

              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-75 transition-all"
                onClick={() => {
                  const carousel = document.querySelector('.carousel-inner');
                  const items = document.querySelectorAll('.carousel-item');
                  const currentTransform = carousel.style.transform || 'translateX(0%)';
                  const currentPosition = parseInt(currentTransform.match(/-?\d+/)[0]);

                  if (currentPosition === -200) {
                    carousel.style.transform = 'translateX(0%)';
                  } else {
                    carousel.style.transform = `translateX(${currentPosition - 100}%)`;
                  }
                }}
              >
                &#8249;
              </button>

              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-75 transition-all"
                onClick={() => {
                  const carousel = document.querySelector('.carousel-inner');
                  const items = document.querySelectorAll('.carousel-item');
                  const currentTransform = carousel.style.transform || 'translateX(0%)';
                  const currentPosition = parseInt(currentTransform.match(/-?\d+/)[0]);

                  if (currentPosition === 0) {
                    carousel.style.transform = 'translateX(-200%)';
                  } else {
                    carousel.style.transform = `translateX(${currentPosition + 100}%)`;
                  }
                }}
              >
                &#8250;
              </button>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {[1, 2, 3].map((index) => (
                  <button
                    key={`indicator-${index}`}
                    className="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition-all"
                    onClick={() => {
                      const carousel = document.querySelector('.carousel-inner');
                      carousel.style.transform = `translateX(-${(index - 1) * 100}%)`;
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          <h1 className='text-4xl font-bold text-transform: uppercase tracking-[1.5rem] text-center text-[#131842] mb-8 mt-8'>
            Categories
          </h1>
          <div className="category-container relative z-10">
            {categories &&
              categories.length > 0 &&
              categories.map((category) => {
                return (
                  <Link to={`/category/${category}`}>
                    <div className="sub-category">
                      <h1 className='font-semibold text-transform: uppercase'>{category}</h1>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>




      </div>
    </div>
  );
};
export default Categories;
