import '../css/ProductBox/ProductList.css';
import React, { useContext, useState } from 'react';
import ProductInfo from '../components/ProductList/Productinfo';
import { productContext } from '../context/ProductContext';

const ProductBox = () => {
  const {productjs}= useContext(productContext);  
  const initialProductCount = 9; 
  const [productCount, setProductCount] = useState(initialProductCount);
  
  const handleShowMore = () => {
    setProductCount((prevCount) => prevCount + 9); 
  };



  const showMoreButton =
    productCount < productjs.length ? (
      <div className='watch'>
      <button onClick={handleShowMore}>더 보기</button>
      </div>
      ) : null;

  const productRows = [];
  for (let i = 0; i < productCount; i ++) {
    const rowProducts = productjs.slice(i, i + 1);
    productRows.push(
      <div className="grid-row" key={i}>
        {rowProducts.map((product, index) => (
          <div className="grid-item" key={index}>
            <ProductInfo
              productInfo={product}
            />
          </div>
        ))}
      </div>
    );
  }

  
  return (
    <>
    <div className='mainSec prl'><img src="https://ifh.cc/g/ClL1Az.jpg" alt="" /><h2>제품 리스트</h2></div>
    <div className='contentBox'>
      <div className="grid-container">{productRows}</div>
      {showMoreButton}
    </div>
    </>
  );
};

export default ProductBox;
