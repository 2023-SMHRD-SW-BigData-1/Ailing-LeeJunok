
import React from 'react'
import { Link } from 'react-router-dom'

const HeaderTnb = () => {
    return (
    <div className='tnbRight'>
        <ul>
            <li><a href="#">로그인</a></li>
            <li><a href="#">회원가입</a></li>
            <li><Link to='/cart'>주문조회</Link></li>
            <li><a href="#">고객센터</a></li>
            <li><a href="#">마이페이지</a></li>
            <li><a href="#">장바구니</a></li>
        </ul>
    </div>
    )
}

export default HeaderTnb