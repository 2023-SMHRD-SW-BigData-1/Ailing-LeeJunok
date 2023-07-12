import React, { useState, useEffect } from 'react';
import ProductInfo from '../components/ProductList/Productinfo';
import axios from 'axios';

const ProductBox = () => {
  const initialProductCount = 9; // 초기에 노출될 제품 수
  const [productCount, setProductCount] = useState(initialProductCount);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/products'); // 제품 데이터를 검색하는 API 엔드포인트로 교체하세요
        setProducts(response.data);
      } catch (error) {
        console.error('제품 데이터를 가져오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, []);

  const handleShowMore = () => {
    setProductCount((prevCount) => prevCount + 9); // 이전에 노출된 제품 수에 9개를 추가합니다
  };

  const showMoreButton =
    productCount < products.length ? (
      <div className='watch'>
        <button onClick={handleShowMore}>더 보기</button>
      </div>
    ) : null;

  const productRows = [];
  for (let i = 0; i < productCount; i++) {
    const rowProducts = products.slice(i, i + 1);
    productRows.push(
      <div className="grid-row" key={i}>
        {rowProducts.map((product, index) => (
          <div className="grid-item" key={index}>
            <ProductInfo
              imageSrc={product.prodImg}
              subtitle={product.prodCategory}
              title={product.prodName}
              price={product.prodPrice}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className='mainSec'><h2>제품 목록</h2></div>
      <div className='contentBox'>
        <div className="grid-container">{productRows}</div>
        {showMoreButton}
      </div>
    </>
  );
};

export default ProductBox;
