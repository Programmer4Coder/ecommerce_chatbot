// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/product/')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="product-list">
      <h2>All Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image_url} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p><strong>₹{product.price}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
