import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router';

const CategoryPage = () => {
  const [productCategory, setProductCategory] = useState([]);
  const { singleCategory } = useParams();
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${singleCategory}`
      );
      const result = await response.json();
      console.log(result);
      setProductCategory(result);
    } catch (err) {
      console.log(err, 'err');
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div>
        <h1>{singleCategory}</h1>
        <div>
          {productCategory &&
            productCategory.length > 0 &&
            productCategory.map((category) => {
              return (
                <Link to={`/product/${category?.id}`}>
                  <div key={category?.id} className="sub-container">
                    <img src={category.image} alt="" width="200px" />
                    <h2>{category.title}</h2>
                    <h3>{category.price}</h3>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default CategoryPage;
