import React from 'react';

const ProductInfo = ({ imageSrc, subtitle, title, price }) => {
  return (
    <div className="product">
        <img src={imageSrc} alt="Product Image" />
        <span className="subtitle">{subtitle}</span>
        <p className='title-font'>{title}</p>
        <p className='price'>{price}</p>
        <button>구매하기</button>
    </div>
  );
};



export default ProductInfo;
