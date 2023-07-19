import { Link } from 'react-router-dom'
import React from 'react'

const ReviewCard = ({ name, date, text, url, member }) => {
  return (
    <div className='reviewCard'>
      <Link className='link_area'>
        <p className='cardName'>
          {/* 리뷰어의 이름이 배열 형태로 전달되므로 각 이름을 span으로 렌더링 */}
          {name && name.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </p>
        <div className='cardTop'>
          <p className='star star50'></p>
          <p className='date'>{date}</p>
        </div>
        <div className='cardInfo'>
          {/* 리뷰어의 아이디를 표시 */}
          <p className='member'>{member}</p>
        </div>
        <div className='cardContent'>
          <div className='text_area'>
            {/* 리뷰 내용을 표시 */}
            <p>{text}</p>
          </div>
          <div className='img_area'>
            <div className='thumb img_resize reverse'>
              {/* 리뷰 이미지 표시 */}
              <img src={url} alt="" />
            </div>
          </div>
        </div>
        <div className='cardEtc'>
          <span className='heart'>1</span>
          <span className='rvw'>1</span>
        </div>
      </Link>
    </div>
  );
}

export default ReviewCard;
