import React, { useEffect, useState } from 'react';
import Modal from '../Modals/Modal'

const ProductInfo = ({ imageSrc, subtitle, title, price }) => {

  const [modalOpen, setModalOpen] = useState(false);

  
    const openModal = () => {
      setModalOpen(true);
    };
    const closeModal = () => {
      setModalOpen(false);
    };
  



  return (
    
    <div className="product">
        <img src={imageSrc} alt="Product Image" />
        <p className='title-font'>{title}</p>
        <span className="subtitle">{subtitle}</span>
        <p className='price'>{price}원</p>
        <button onClick={ openModal }>구매하기</button>
        <Modal open={modalOpen} close={closeModal} header="Modal heading">
        <p className='title-font'>{title}</p>
        <span className="subtitle">{subtitle}</span>
        <p className='price'>{price}원</p>
        </Modal>
    </div>
  );
};



export default ProductInfo;
