import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import ProductDetails from './components/productDetails/ProductDetails';
import CategoryPage from './components/categoryPage/CategoryPage';

function App() {
  const [count, setCount] = useState(0);
  // const fetchData = async () => {
  //   const response = await fetch(
  //     'https://fakestoreapi.com/products/categories'
  //   );
  //   const result = await response.json();
  //   console.log(result);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product/:productId" element={<ProductDetails />} />
            <Route path="category/:singleCategory" element={<CategoryPage />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
