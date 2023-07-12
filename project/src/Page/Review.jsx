
import '../css/Review/Review.css'
import React, { useState } from 'react'
import ReviewHead from '../components/Review/ReviewHead'
import Paging from '../components/Review/Paging';

const Review = () => {

    const [reviewCount,setReviewCount] = useState(0);

    return (
    <>
    <div className='mainSec Review'>
        <h2>Review</h2>
    </div>
    <div className='contentBox'>
        <ReviewHead count={reviewCount}/>
        <Paging count={reviewCount}/>
    </div>
    </>
    )
}

export default Review