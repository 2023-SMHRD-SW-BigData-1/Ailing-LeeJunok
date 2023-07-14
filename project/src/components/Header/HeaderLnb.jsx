

import React, { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import swal from 'sweetalert';
import { LoginContext } from '../../context/LoginContext';

const HeaderLnb = () => {

    const nav = useNavigate();
    const {isLogin} = useContext(LoginContext);

    const loginD=()=>{
        if (isLogin===false) {
            swal ( "죄송합니다" ,  "로그인이 필요한 서비스입니다." ,  "error" )
        }else{
            nav('/cart');
        }
    }


    return (
    <div className='innerLnb'>
        <ul>
            <li><a href="/introduce1">Pill.Yo 란?</a></li>
            <li><Link>준비중...</Link></li>
            <li><Link>준비중...</Link></li>
        </ul>
        <ul>
            <li><a href="/productList">제품리스트</a></li>
            <li><a href="/review">구매후기</a></li>
        </ul>
        <ul>
            <li><Link to= '/NoticeList'>공지사항</Link></li>
            <li><Link to= '/EventList'>이벤트</Link></li>
            <li><Link>준비중...</Link></li>
            <li><Link>준비중...</Link></li>

        </ul>
        <ul>
            <li><a onClick={loginD}>장바구니</a></li>
            <li><Link>준비중...</Link></li>
            <li><Link>준비중...</Link></li>
            <li><Link>준비중...</Link></li>    
        </ul>
    </div>
    )
}

export default HeaderLnb