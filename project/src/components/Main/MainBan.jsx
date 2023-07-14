import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import {Link} from 'react-router-dom';

const MainBan = () => {

    const ban =[
                {name:'2',imgUrl : 'https://ifh.cc/g/Wg2A9j.jpg',serverUrl:'/EventView01'},
                {name:'3',imgUrl : 'https://ifh.cc/g/xLJJ7x.jpg',serverUrl:'/EventView02'},
                {name:'4',imgUrl : 'https://ifh.cc/g/VRjT4R.jpg',serverUrl:'/EventView03'},]



    return (
        <Carousel className='innerBan' style={{
            overflow : 'hidden'
        }}>
            {ban.map(item=><Carousel.Item key={item.name}><Link to={item.serverUrl}><img src={item.imgUrl} alt="준비중" style={{width:'100%',height:'600px'}}/></Link><Carousel.Caption></Carousel.Caption></Carousel.Item>)}
        </Carousel>
    )
}

export default MainBan