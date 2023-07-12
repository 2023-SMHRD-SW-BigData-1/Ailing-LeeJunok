import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

const MainBan = () => {

    const ban =[{name:'1',url : 'https://ifh.cc/g/8NOYJw.jpg',text:''},
                {name:'2',url : 'https://ifh.cc/g/Wg2A9j.jpg',text:''},
                {name:'3',url : 'https://ifh.cc/g/xLJJ7x.jpg',text:''},
                {name:'4',url : 'https://ifh.cc/g/VRjT4R.jpg',text:''},]



    return (
        <Carousel className='innerBan' style={{
            overflow : 'hidden'
        }}>
            {ban.map(item=><Carousel.Item key={item.name}><img src={item.url} alt="준비중" style={{width:'100%',height:'600px'}}/><Carousel.Caption><h3>{item.text}</h3></Carousel.Caption></Carousel.Item>)}
        </Carousel>
    )
}

export default MainBan