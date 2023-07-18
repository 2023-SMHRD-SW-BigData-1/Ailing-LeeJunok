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
      <div className='porInnerImg'>
        <img src={productInfo.PROD_IMG} alt="Product Image" />
      </div>
      <div className='porTextarea'>
        <p className='title-font'>{productInfo.PROS_NAME}</p>
        <p className='maker'>{'('+productInfo.PROD_MAKER+')'}</p>
        <span className="subtitle">{productInfo.PROD_CATEGORY}</span>
        <p className='price'>{productInfo.PROD_PRICE.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}<span> 원</span></p>
        <button className='porBtn' onClick={ openModal }>자세히보기</button>
        <Modal open={modalOpen} close={closeModal} info={productInfo} />
      </div>
    </div>
  );
};



export default ProductInfo;
