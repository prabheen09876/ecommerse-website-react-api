import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './ProductDetails.css';

const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { productId } = useParams();
  console.log(productId, 'productId');

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const result = await response.json();
      console.log(result);
      setSingleProduct(result);
    } catch (err) {
      console.log(err, 'err');
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="main-single-product-container">
      <div className="product-img-container">
        <div className="product-img">
          <img src={`${singleProduct?.image}`} />
        </div>
      </div>
      <div className="product-details-container">
        <h3>{singleProduct?.title}</h3>
      </div>
    </div>
  );
};
export default ProductDetails;
