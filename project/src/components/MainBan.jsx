import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

const MainBan = () => {
    return (
        <Carousel className='innerBan' style={{
            overflow : 'hidden'
        }}>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/32E9/image/BA2Qyx3O2oTyEOsXe2ZtE8cRqGk.JPG"
            alt="First slide"
            style={{
                width : "100%",
                height : '600px'
            }}
            />
            <Carousel.Caption>
            <h3>슬라이드1</h3>
            <p>아무거나</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://cdn.eyesmag.com/content/uploads/posts/2023/03/22/national-puppy-day-naver-maps-0a95d167-c69a-41f2-8981-630f9f39f99b.jpg"
            alt="Second slide"
            style={{
                width : "100%",
                height : '600px'
            }}
            />

            <Carousel.Caption>
            <h3>슬라이드2</h3>
            <p>아무거나</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://images.mypetlife.co.kr/content/uploads/2022/06/28123435/KakaoTalk_20220602_090443576-1-1-edited-scaled.jpg"
            alt="Third slide"
            style={{
                width : "100%",
                height : '600px'
            }}
            />

            <Carousel.Caption>
            <h3>슬라이드3</h3>
            <p>
                아무거나
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    )
}

export default MainBan