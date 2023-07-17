import {  Navigation,A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar'
import ProductCard from './ProductCard';
import { useState } from 'react';
import Modal from '../Modals/Modal';


const RcProduct = ({productInfo}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [prin,setPrin] = useState([]);
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
    <>
    <Swiper
    modules={[Navigation,A11y]}
    spaceBetween={50}
    slidesPerView={4}
    navigation
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    style={{height:'200px',marginTop:'100px'}}
    
    >
    {productInfo.map(item=><SwiperSlide className='innercard' style={{height:"200px",width:"400px"}} onClick={openModal} ><ProductCard key={item.ROD_SEQ} productInfo={item} setPrin={setPrin}/></SwiperSlide>)}
    </Swiper>
    <Modal open={modalOpen} close={closeModal} info={prin} />
    </>
)
}

export default RcProduct