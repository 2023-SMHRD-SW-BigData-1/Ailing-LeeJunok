

import React from 'react'

const ReviewHead = ({count}) => {
    return (
    <div className='reviewHead'>
        <span>총 <span className='countNum'>{count}</span>건</span>
        <ul>
            <li><button>최신순</button></li>
            <li className='end'><button>인기순</button></li>
        </ul>
        <hr />
    </div>
    )
}

export default ReviewHead