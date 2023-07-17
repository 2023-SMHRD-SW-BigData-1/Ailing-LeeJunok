import React from 'react'



const ProductCard = ({productInfo,setPrin}) => {

    const cha = ()=>{
        setPrin(productInfo);
    }  



    return (
    <a onClick={cha}>
    <img src={productInfo.PROD_IMG} alt="준비중"/>
    <p className='name'><strong>{productInfo.PROS_NAME}</strong></p>
    <p className='maker'>{'('+productInfo.PROD_MAKER+')'}</p>
    <span className='categorytext'>{productInfo.PROD_CATEGORY}</span>
    <p className='price'>{productInfo.PROD_PRICE.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}<span> 원</span></p>
    
    </a>
    
    
    )
}

export default ProductCard