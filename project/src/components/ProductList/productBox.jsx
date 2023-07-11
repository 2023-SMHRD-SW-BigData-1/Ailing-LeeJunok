import React, { useState } from 'react';

function ProductBox({ imageUrl, productName, productDescription }) {
  const [folded, setFolded] = useState(true);

  const toggleFold = () => {
    setFolded(!folded);
  };

  return (
    <div className="product-box">
      <img className="product-image" src={imageUrl} alt="제품 사진" />
      <div className={`note ${folded ? 'folded' : ''}`} onClick={toggleFold}>
        <h2>{productName}</h2>
        <div className="note-content">
          <h3>{productDescription}</h3>
        </div>
      </div>
    </div>
  );
}



export default ProductBox;
