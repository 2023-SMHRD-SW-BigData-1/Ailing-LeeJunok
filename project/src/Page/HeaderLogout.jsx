

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderMenuList from '../components/Header/HeaderMenuList'
import HeaderLnb from '../components/Header/HeaderLnb'

const HeaderLogout = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    document.querySelectorAll('.button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>'));

    const updateScroll = () => {
            setScrollPosition(window.scrollY || document.documentElement.scrollTop);
        };

    useEffect(() => {
            window.addEventListener("scroll", updateScroll);
        }, []);

        const onLogout = () => {
            // sessionStorage 에 user_id 로 저장되어있는 아이템을 삭제한다.
            sessionStorage.removeItem('user_id')
            
            // App 으로 이동(새로고침)
            document.location.href = '/'
        }

    return (
    <header className={scrollPosition > 100 ? "scroll-bag" : "scrolled-bag"}>
        <div className='contentBox'>
            <div className='headerMenuList'>
            <div className='logo'>
                <Link to='/'>
                    <h1>Pill.Yo</h1>
                </Link>
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