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
    <div className="main-category-container d-flex align-center justify-center">
      <h1 className='text-4xl text-transform: uppercase '>Categories</h1>
      <div className="category-container">
        {categories &&
          categories.length > 0 &&
          categories.map((category) => {
            return (
              <Link to={`/category/${category}`}>
                <div className="sub-category">
                  <h1 className='font-semibold 	text-transform: uppercase'>{category}</h1>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};
export default Categories;
