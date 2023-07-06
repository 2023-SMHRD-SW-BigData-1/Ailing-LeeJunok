import {  Navigation,A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import React from 'react'
import ProductCard from './ProductCard';

const RcProduct = () => {

    const card = [{name : '약',url : 'https://i.namu.wiki/i/eWcP-Yva8-CYI_CT5iqlfwRL6gteDBFlyJCwckx_pkZUSFTEThv_z71Y4AVe9YUfJCDMdffrqiSVhyKIL2m1JA.webp',text : '아무거나'},
                {name : '약',url : 'https://i.namu.wiki/i/eWcP-Yva8-CYI_CT5iqlfwRL6gteDBFlyJCwckx_pkZUSFTEThv_z71Y4AVe9YUfJCDMdffrqiSVhyKIL2m1JA.webp',text : '아무거나'},
                {name : '약',url : 'https://i.namu.wiki/i/eWcP-Yva8-CYI_CT5iqlfwRL6gteDBFlyJCwckx_pkZUSFTEThv_z71Y4AVe9YUfJCDMdffrqiSVhyKIL2m1JA.webp',text : '아무거나'},
                {name : '약',url : 'https://i.namu.wiki/i/eWcP-Yva8-CYI_CT5iqlfwRL6gteDBFlyJCwckx_pkZUSFTEThv_z71Y4AVe9YUfJCDMdffrqiSVhyKIL2m1JA.webp',text : '아무거나'},
                {name : '약',url : 'https://i.namu.wiki/i/eWcP-Yva8-CYI_CT5iqlfwRL6gteDBFlyJCwckx_pkZUSFTEThv_z71Y4AVe9YUfJCDMdffrqiSVhyKIL2m1JA.webp',text : '아무거나'},
                {name : '약',url : 'https://i.namu.wiki/i/eWcP-Yva8-CYI_CT5iqlfwRL6gteDBFlyJCwckx_pkZUSFTEThv_z71Y4AVe9YUfJCDMdffrqiSVhyKIL2m1JA.webp',text : '아무거나'},
                {name : '약',url : 'https://i.namu.wiki/i/eWcP-Yva8-CYI_CT5iqlfwRL6gteDBFlyJCwckx_pkZUSFTEThv_z71Y4AVe9YUfJCDMdffrqiSVhyKIL2m1JA.webp',text : '아무거나'},]



return (
    <Swiper
    modules={[Navigation,A11y]}
    spaceBetween={50}
    slidesPerView={5}
    navigation
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    style={{height:'340px',marginTop:'30px'}}
    >
    {card.map(item=><SwiperSlide><ProductCard key={item.name} url={item.url} text={item.text}/></SwiperSlide>)}

    </Swiper>
)
}

export default RcProduct