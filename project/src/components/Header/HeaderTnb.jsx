
import React from 'react'
import { Link } from 'react-router-dom'

const HeaderTnb = () => {
    return (
    <div className='tnbRight'>
        <ul className='innerTnb'>
            <li><Link to='/login'>로그인</Link></li>
            <li><a href="#">회원가입</a></li>
            <li><Link to='/cart'>주문조회</Link></li>
            <li><Link to='/cutomer'>고객센터</Link></li>
            <li><a href="#">마이페이지</a></li>
            <li><a href="#">장바구니</a></li>
        </ul>
    </div>
    )
}

export default HeaderTnb