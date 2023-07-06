import '../css/Header/index.css'
import HeaderTnb from '../components/Header/HeaderTnb'
import HeaderMenuList from '../components/Header/HeaderMenuList'
import HeaderLnb from '../components/Header/HeaderLnb'
import React from 'react'
import Logo from '../Img/Logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
return (
    <header>
    <div className='contentBox'>
        <div className='headerTnb'>
            <HeaderTnb/>
        </div>
        <div className='headerTop'>
            <Link to='/'>
                <img src={Logo} alt="" />
                <span>Addivision</span>
            </Link>
        </div>
        <div className='headerMenuList'>
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