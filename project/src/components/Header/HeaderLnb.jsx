

import React from 'react'
import {Link} from 'react-router-dom';

const HeaderLnb = () => {
    return (
    <div className='innerLnb'>
        <ul>
            <li><a href="/introduce1">Pill.Yo 란?</a></li>
            <li><Link>원료이야기</Link></li>
            <li><Link>100%환불제도</Link></li>
        </ul>
        <ul>
            <li><a href="/productList">제품리스트</a></li>
            <li><a href="/review">구매후기</a></li>
        </ul>
        <ul>
            <li><Link to= '/NoticeList'>공지사항</Link></li>
            <li><Link>보도자료</Link></li>
            <li><Link>1:1 문의</Link></li>
            <li><Link>자주찾는질문</Link></li>

        </ul>
        <ul>
            <li><a href="/cart">장바구니</a></li>
            <li><Link>주문내역</Link></li>
            <li><Link>관심상품</Link></li>
            <li><Link>회원정보 수정</Link></li>
            
        </ul>
    </div>
    )
}

export default HeaderLnb