import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

const MainBan = () => {

    const ban =[{name:'1',url : 'https://ifh.cc/g/WwxxCa.jpg',text:'눈'},
                {name:'2',url : 'https://ifh.cc/g/d8dVx3.jpg',text:'사람'}]


    return (
        <Carousel className='innerBan' style={{
            overflow : 'hidden'
        }}>
            {ban.map(item=><Carousel.Item key={item.name}><img src={item.url} alt="준비중" style={{width:'100%',height:'600px'}}/><Carousel.Caption><h3>{item.text}</h3></Carousel.Caption></Carousel.Item>)}
        </Carousel>
    )
}

export default MainBan