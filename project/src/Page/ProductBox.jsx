import '../css/ProductBox/ProductList.css';
import React, { useState } from 'react';
import ProductInfo from '../components/ProductList/Productinfo';
import productjs from '../Json/Product';

const ProductBox = () => {
  const initialProductCount = 9; // number of products to be initially exposed
  const [productCount, setProductCount] = useState(initialProductCount);
  const products = productjs.map((product) => ({
    imageSrc: product.PROD_IMG,
    subtitle: product.PROD_CATEGORY,
    title: product.PROD_NAME,
    price: product.PROD_PRICE
  }));

  const handleShowMore = () => {
    setProductCount((prevCount) => prevCount + 9); // Add 9 items from the number of previously exposed products
  };



  const showMoreButton =
    productCount < products.length ? (
      <button onClick={handleShowMore} className='watch'>더 보기</button>
      ) : null;

  const productRows = [];
  for (let i = 0; i < productCount; i ++) {
    const rowProducts = products.slice(i, i + 1);
    productRows.push(
      <div className="grid-row" key={i}>
        {rowProducts.map((product, index) => (
          <div className="grid-item" key={index}>
            <ProductInfo
              imageSrc={product.imageSrc}
              subtitle={product.subtitle}
              title={product.title}
              price={product.price}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className='contentBox'>
      <div className="grid-container">{productRows}</div>
      {showMoreButton}
    </div>
  );
};

export default ProductBox;
