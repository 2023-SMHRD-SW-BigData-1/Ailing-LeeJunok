
import { Link } from 'react-router-dom'
import React from 'react'

const ProductCard = ({url,name}) => {
    return (
    
    <Link className='innercard'><img src={url} alt="준비중"/><p>{name}</p></Link>
    
    )
}

export default ProductCard