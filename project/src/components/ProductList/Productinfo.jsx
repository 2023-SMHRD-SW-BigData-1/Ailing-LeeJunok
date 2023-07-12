import React from 'react';

const ProductInfo = ({ imageSrc, subtitle, title, price }) => {
  return (
    
    <div className="product">
        <img src={imageSrc} alt="Product Image" />
        <p className='title-font'>{title}</p>
        <span className="subtitle">{subtitle}</span>
        <p className='price'>{price}원</p>
        <button>구매하기</button>
    </div>
  );
};



export default ProductInfo;
