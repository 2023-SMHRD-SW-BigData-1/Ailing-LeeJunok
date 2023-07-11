import '../css/ProductBox/ProductList.css'
import React, { useState } from 'react';
import ProductInfo from '../components/ProductList/Productinfo';


const ProductBox = () => {
  const initialProductCount = 9; // 초기에 노출할 상품 개수
  const [productCount, setProductCount] = useState(initialProductCount);

  const products = [
    {
      imageSrc: 'https://tgzzmmgvheix1905536.cdn.ntruss.com/2020/02/73d71a9a19234194bed8f823657dbe2b' , //이미지 
      subtitle: '목감기에는 역시', // 부제
      title: '프로바이오텍스지', //상품명
      price: '금액' // 금액 이 이후 똑같은 방식으로 이어 붙이면 됨
    },
    {
        imageSrc: 'https://tgzzmmgvheix1905536.cdn.ntruss.com/2020/02/73d71a9a19234194bed8f823657dbe2b' , //이미지 
        subtitle: '목감기에는 역시', // 부제
        title: '프로바이오텍스지', //상품명
        price: '금액' // 금액 이 이후 똑같은 방식으로 이어 붙이면 됨
      },
      {
        imageSrc: 'https://tgzzmmgvheix1905536.cdn.ntruss.com/2020/02/73d71a9a19234194bed8f823657dbe2b' , //이미지 
        subtitle: '목감기에는 역시', // 부제
        title: '프로바이오텍스지', //상품명
        price: '금액' // 금액 이 이후 똑같은 방식으로 이어 붙이면 됨
      },
      {
        imageSrc: 'https://tgzzmmgvheix1905536.cdn.ntruss.com/2020/02/73d71a9a19234194bed8f823657dbe2b' , //이미지 
        subtitle: '목감기에는 역시', // 부제
        title: '프로바이오텍스지', //상품명
        price: '금액' // 금액 이 이후 똑같은 방식으로 이어 붙이면 됨
      },
      {
        imageSrc: 'https://tgzzmmgvheix1905536.cdn.ntruss.com/2020/02/73d71a9a19234194bed8f823657dbe2b' , //이미지 
        subtitle: '목감기에는 역시', // 부제
        title: '프로바이오텍스지', //상품명
        price: '금액' // 금액 이 이후 똑같은 방식으로 이어 붙이면 됨
      },
      {
        imageSrc: 'https://tgzzmmgvheix1905536.cdn.ntruss.com/2020/02/73d71a9a19234194bed8f823657dbe2b' , //이미지 
        subtitle: '목감기에는 역시', // 부제
        title: '프로바이오텍스지', //상품명
        price: '금액' // 금액 이 이후 똑같은 방식으로 이어 붙이면 됨
      },
      {
        imageSrc: 'https://tgzzmmgvheix1905536.cdn.ntruss.com/2020/02/73d71a9a19234194bed8f823657dbe2b' , //이미지 
        subtitle: '목감기에는 역시', // 부제
        title: '프로바이오텍스지', //상품명
        price: '금액' // 금액 이 이후 똑같은 방식으로 이어 붙이면 됨
      },
      {
        imageSrc: 'https://tgzzmmgvheix1905536.cdn.ntruss.com/2020/02/73d71a9a19234194bed8f823657dbe2b' , //이미지 
        subtitle: '목감기에는 역시', // 부제
        title: '프로바이오텍스지', //상품명
        price: '금액' // 금액 이 이후 똑같은 방식으로 이어 붙이면 됨
      },
      {
        imageSrc: 'https://tgzzmmgvheix1905536.cdn.ntruss.com/2020/02/73d71a9a19234194bed8f823657dbe2b' , //이미지 
        subtitle: '목감기에는 역시', // 부제
        title: '프로바이오텍스지', //상품명
        price: '금액' // 금액 이 이후 똑같은 방식으로 이어 붙이면 됨
      },
      {
        imageSrc: 'https://tgzzmmgvheix1905536.cdn.ntruss.com/2020/02/73d71a9a19234194bed8f823657dbe2b' , //이미지 
        subtitle: '목감기에는 역시', // 부제
        title: '프로바이오텍스지', //상품명
        price: '금액' // 금액 이 이후 똑같은 방식으로 이어 붙이면 됨
      },
      {
        imageSrc: 'https://tgzzmmgvheix1905536.cdn.ntruss.com/2020/02/73d71a9a19234194bed8f823657dbe2b' , //이미지 
        subtitle: '목감기에는 역시', // 부제
        title: '프로바이오텍스지', //상품명
        price: '금액' // 금액 이 이후 똑같은 방식으로 이어 붙이면 됨
      },
      {
        imageSrc: 'https://tgzzmmgvheix1905536.cdn.ntruss.com/2020/02/73d71a9a19234194bed8f823657dbe2b' , //이미지 
        subtitle: '목감기에는 역시', // 부제
        title: '프로바이오텍스지', //상품명
        price: '금액' // 금액 이 이후 똑같은 방식으로 이어 붙이면 됨
      },
      {
        imageSrc: 'https://tgzzmmgvheix1905536.cdn.ntruss.com/2020/02/73d71a9a19234194bed8f823657dbe2b' , //이미지 
        subtitle: '목감기에는 역시', // 부제
        title: '프로바이오텍스지', //상품명
        price: '금액' // 금액 이 이후 똑같은 방식으로 이어 붙이면 됨
      },
      {
        imageSrc: 'https://tgzzmmgvheix1905536.cdn.ntruss.com/2020/02/73d71a9a19234194bed8f823657dbe2b' , //이미지 
        subtitle: '목감기에는 역시', // 부제
        title: '프로바이오텍스지', //상품명
        price: '금액' // 금액 이 이후 똑같은 방식으로 이어 붙이면 됨
      },
      {
        imageSrc: 'https://tgzzmmgvheix1905536.cdn.ntruss.com/2020/02/73d71a9a19234194bed8f823657dbe2b' , //이미지 
        subtitle: '목감기에는 역시', // 부제
        title: '프로바이오텍스지', //상품명
        price: '금액' // 금액 이 이후 똑같은 방식으로 이어 붙이면 됨
      },
      {
        imageSrc: 'https://tgzzmmgvheix1905536.cdn.ntruss.com/2020/02/73d71a9a19234194bed8f823657dbe2b' , //이미지 
        subtitle: '목감기에는 역시', // 부제
        title: '프로바이오텍스지', //상품명
        price: '금액' // 금액 이 이후 똑같은 방식으로 이어 붙이면 됨
      },
      
    
    // 나머지 상품 데이터 추가
  ];

  const handleShowMore = () => {
    setProductCount((prevCount) => prevCount + 9); // 이전에 노출된 상품 개수에서 9개씩 추가
  };

  const showMoreButton =
    productCount < products.length ? (
      <button onClick={handleShowMore}>▼</button>
    ) : null;

  const productRows = [];
  for (let i = 0; i < productCount; i += 3) {
    const rowProducts = products.slice(i, i + 3);
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
