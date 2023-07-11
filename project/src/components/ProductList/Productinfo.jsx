import React from 'react';

const ProductInfo = ({ imageSrc, subtitle, title, price }) => {
  return (
    <div className="product">
      
        <img src={imageSrc} alt="Product Image" />
        <span className="subtitle">{subtitle}</span>
        <p>{title}</p>
        <p>{price}</p>

    </div>
  );
};



export default ProductInfo;
