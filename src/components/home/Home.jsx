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
    <div className="home-container">
      <div className=''>
        <Categories />
      </div>
      <div className="image-carousel-container">
        <div className="carousel relative w-full h-[300px] overflow-hidden">
          <div className="carousel-inner flex transition-transform duration-500">
            {[1, 2, 3].map((index) => (
              <div key={index} className="carousel-item min-w-full">
                <img
                  src={
                    index === 1
                      ? "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Xiaomi/Note14/sale/new/D183640088_IN_WLD_RedmiNote14_NewLaunch_PC_Hero_3000x1200._CB539525795_.jpg"
                      : index === 2
                        ? "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/dharshini/BFCM24_GW_PC_Hero_LA_2x-20th._CB553566261_.jpg"
                        : "https://images-eu.ssl-images-amazon.com/images/G/31/img24/PCA/GW/3000x1200-2x._CB541346743_.jpg"
                  }
                  alt={`Product ${index}`}
                  className="w-full h-[300px] object-cover"
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
      <div className="main-product-container bg-zinc-400 d-flex align-center justify-center">
        <h1 className='text-4xl mb-10 ' >Products</h1>
        <div className="container">
          {products &&
            products.length > 0 &&
            products.map((product) => {
              return (
                <Link to={`/product/${product?.id}`}>
                  <div key={product?.id} className="sub-container">
                    <img src={product.image} alt="" width="200px" />
                    <h2>{product.title}</h2>
                    <h3>{product.price}</h3>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
