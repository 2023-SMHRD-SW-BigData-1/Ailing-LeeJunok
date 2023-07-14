

import React from 'react'

const ReviewCard = ({em,emt,name,text,url}) => {
    return (
    <div className='reviewInnerCard'>
    <div className='cardTop_sec'>
        <div className='topImg_sec'>
        <img src={em} alt="" />
        <span>{emt}</span>
        </div>
        <div className='memberName_sec'>{name}</div>
    </div>
    <div className='reviewImg_sec'>
        <img src={url} alt="" />
    </div>
    <div className='reviewText_sec'>
        {text}
    </div>
    </div>
    )
}

export default ReviewCard