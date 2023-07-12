

import React from 'react'
import {Link} from 'react-router-dom';

const HeaderLnb = () => {
    return (
    <div className='innerLnb'>
        <ul>
            <li><Link to={'/introduce'}>Pill.Yo 란?</Link></li>
            <li><Link>원료이야기</Link></li>
            <li><Link>100%환불제도</Link></li>
        </ul>
        <ul>
            <li><Link to='/productList'>제품리스트</Link></li>
            <li><Link to='/review'>구매후기</Link></li>
        </ul>
        <ul>
            <li><Link>공지사항</Link></li>
            <li><Link>보도자료</Link></li>
            <li><Link>1:1 문의</Link></li>
            <li><Link>자주찾는질문</Link></li>

        </ul>
        <ul>
            <li><Link>장바구니</Link></li>
            <li><Link>주문내역</Link></li>
            <li><Link>관심상품</Link></li>
            <li><Link>회원정보 수정</Link></li>
            
        </ul>
    </div>
    )
}

export default HeaderLnb