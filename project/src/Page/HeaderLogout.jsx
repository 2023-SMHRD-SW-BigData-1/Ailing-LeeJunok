
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HeaderMenuList from '../components/Header/HeaderMenuList'
import HeaderLnb from '../components/Header/HeaderLnb'
import { useCookies } from 'react-cookie';

const HeaderLogout = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['user_id']);
    const [scrollPosition, setScrollPosition] = useState(0);
    const navigate = useNavigate();

    document.querySelectorAll('.button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>'));

    const updateScroll = () => {
            setScrollPosition(window.scrollY || document.documentElement.scrollTop);
        };

    useEffect(() => {
            window.addEventListener("scroll", updateScroll);
        }, []);

        const onLogout = () => {
            // 세션 데이터를 제거합니다.
            removeCookie('user_id');
            removeCookie('cart');
            // App 으로 이동(새로고침)
            document.location.href = '/'
        }

    return (
    <header className={scrollPosition > 100 ? "scroll-bag" : "scrolled-bag"}>
        <div className='contentBox'>
            <div className='headerMenuList'>
            <div className='logo'>
            <a href="/"><h1>Pill.Yo</h1></a>
            </div>
            <div className='login'>
                <Link onClick={onLogout} className='button'>Logout</Link>
            </div>

            <div className='headerGnb'>
                <HeaderMenuList/>
            </div>
            <div className='headerLnb '>
                <HeaderLnb/>
            </div>
            </div>
        </div>
    </header>
    )
}

export default HeaderLogout