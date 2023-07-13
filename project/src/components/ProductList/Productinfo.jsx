import React, { useEffect, useState } from 'react';
import Modal from '../Modals/Modal'

const ProductInfo = ({productInfo}) => {

  const [modalOpen, setModalOpen] = useState(false);

  
    const openModal = () => {
      setModalOpen(true);  
      document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;

    };
    const closeModal = () => {
      setModalOpen(false);
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  



  return (
    
    <div className="product">
        <img src={productInfo.PROD_IMG} alt="Product Image" />
        <p className='title-font'>{productInfo.PROS_NAME}</p>
        <span className="subtitle">{productInfo.PROD_CATEGORY}</span>
        <p className='price'>{productInfo.PROD_PRICE}원</p>
        <button onClick={ openModal }>구매하기</button>
        <Modal open={modalOpen} close={closeModal} info={productInfo} />
    </div>
  );
};



export default ProductInfo;
