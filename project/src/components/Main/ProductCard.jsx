

import React from 'react'

const ProductCard = ({url,text}) => {
    return (
    <div className='innercard'>
        <img src={url} alt="준비중"/>
        <p>{text}</p>
    </div>
    )
}

export default ProductCard