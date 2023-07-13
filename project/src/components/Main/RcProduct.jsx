import {  Navigation,A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar'
import ProductCard from './ProductCard';


const RcProduct = ({product}) => {

return (
    
    <Swiper
    modules={[Navigation,A11y]}
    spaceBetween={50}
    slidesPerView={4}
    navigation
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    style={{height:'200px',marginTop:'100px'}}
    
    >
    {product.map(item=><SwiperSlide className='innercard' style={{height:"200px",width:"400px"}} ><ProductCard key={item.ROD_SEQ} url={item.PROD_IMG} name={item.PROS_NAME} price={item.PROD_PRICE} category={item.PROD_CATEGORY} maker={item.PROD_MAKER}/></SwiperSlide>)}

    </Swiper>
    
)
}

export default RcProduct