import React from 'react';
import '../css/ProductBox/design.css'

const ProductInfo = ({ imageSrc, subtitle, title, price }) => {
  return (
    <div className="product">
      <div className="image">
        <img src={imageSrc} alt="Product Image" />
      </div>
      <div className="text">
        <span className="subtitle">{subtitle}</span>
        <h2>{title}</h2>
        <p>{price}</p>
      </div>
    </div>
  );
};



export default ProductInfo;
