
import { Link } from 'react-router-dom'
import React from 'react'

const ProductCard = ({url}) => {
    return (
    
    <Link className='innercard'><img src={url} alt="준비중"/></Link>
    
    )
}

export default ProductCard