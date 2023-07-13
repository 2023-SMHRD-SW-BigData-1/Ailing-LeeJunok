
import { Link } from 'react-router-dom'
import React from 'react'

const ProductCard = ({url,name,price,category,maker}) => {
    return (
    
    <a href="/productList">
    <img src={url} alt="준비중"/>
    <p className='name'><strong>{name}</strong></p>
    <p className='maker'>{'('+maker+')'}</p>
    <span className='categorytext'>{category}</span>
    <p className='price'>{price+' 원'}</p>
    </a>
    
    )
}

export default ProductCard