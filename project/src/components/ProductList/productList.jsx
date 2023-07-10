import React, { useState } from 'react';
import ProductBox from './ProductBox';
// 여기를 사용하면 보여요 productBox는 비유하자면 하나의 html 겸 div
function ProductList() {
  const products = [
    { productId: 1 },
    { productId: 2 },
    { productId: 3 },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductBox key={product.productId} productId={product.productId} />
      ))}
    </div>
  );
}


export default ProductList;