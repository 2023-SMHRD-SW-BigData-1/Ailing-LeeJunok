import {  Navigation,A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import React, { useContext } from 'react'
import ProductCard from './ProductCard';
import { productContext } from '../../context/ProductContext';

const RcProduct = () => {

    const {product} = useContext(productContext)


return (
    <div className='nvbg'>
    <Swiper
    modules={[Navigation,A11y]}
    spaceBetween={50}
    slidesPerView={5}
    navigation
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    style={{height:'340px',marginTop:'30px'}}
    >
    {product.map(item=><SwiperSlide><ProductCard key={item.url} url={item.url} text={item.text}/></SwiperSlide>)}

    </Swiper>
    </div>
)
}

export default RcProduct