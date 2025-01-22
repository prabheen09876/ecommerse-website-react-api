import React, { useState, useEffect } from 'react';
import './Home.css';
import Categories from '../categories/Categories';
import { Link } from 'react-router';
const Home = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const result = await response.json();
      console.log(result);
      setProducts(result);
    } catch (err) {
      console.log(err, 'err');
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="home-container bg-[#F9F6E6]">
      <div className=''>
        <Categories />
      </div>

      <div className="main-product-container d-flex align-center justify-center">
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

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 relative z-10">
            <h1 className='text-4xl font-bold text-transform: uppercase tracking-[1.5rem] text-center text-[#131842] mb-8'>Products</h1>
            <div className="container">
              {products &&
                products.length > 0 &&
                products.map((product) => {
                  return (
                    <Link to={`/product/${product?.id}`}>
                      <div key={product?.id} className="bg-white/10 backdrop-blur-md rounded-xl p-4 hover:bg-white/20 transition-all">
                        <img src={product.image} alt="" className="w-full h-[200px] object-contain mb-4" />
                        <h2 className="text-[#131842] font-semibold text-lg mb-2 line-clamp-2">{product.title}</h2>
                        <h3 className="text-[#131842] font-bold">${product.price}</h3>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
