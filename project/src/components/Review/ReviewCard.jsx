
import { Link } from 'react-router-dom'
import React from 'react'

const ReviewCard = (  {name,date,text,url,member}) => {
    return (
    <div className='reviewCard'>
        <Link className='link_area'>
            <p className='cardName'>
                {name.map(item=><span>{item}</span>)}
            </p>
            <div className='cardTop'>
                <p className='star star50'></p>
                <p className='date'>{date}</p>
            </div>
            <div className='cardInfo'>
                <p className='member'>{member}</p>
            </div>
            <div className='cardContent'>
                <div className='text_area'>
                    <p>{text}</p>
                </div>
                <div className='img_area'>
                    <div className='thumb img_resize reverse'>
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
    )
}

export default ReviewCard