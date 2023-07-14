import '../css/Header/index.css'
import HeaderMenuList from '../components/Header/HeaderMenuList'
import HeaderLnb from '../components/Header/HeaderLnb'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

const [scrollPosition, setScrollPosition] = useState(0);

document.querySelectorAll('.button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>'));

const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };

useEffect(() => {
        window.addEventListener("scroll", updateScroll);
    }, []);


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
            <Link to='/login' className='button'>LOGIN</Link>
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

export default Header