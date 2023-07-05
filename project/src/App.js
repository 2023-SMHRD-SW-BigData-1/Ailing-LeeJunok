
import './css/index.css'
import './App.css';
import { Route, Routes } from 'react-router-dom'
import HeaderTnb from './components/Header/HeaderTnb'
import HeaderMenuList from './components/Header/HeaderMenuList'
import HeaderLnb from './components/Header/HeaderLnb'
import Main from './Page/Main';
import Cart from './Page/Cart';
import Login from './Page/Login';
import MyInfo from './Page/MyInfo';

function App() {
  return (
    <div id='wrap'>
        <div id='header'>
            <div className='contentBox'>
            <div className='headerTnb'>
                <HeaderTnb/>
            </div>
            <div className='headerTop'>
                <h1>LOGO/LOGO</h1>
            </div>
            <div className='headerMenuList'>
                <div className='headerGnb'>
                    <HeaderMenuList/>
                </div>
                <div className='headerLnb '>
                    <div className='contentBox'>
                    <HeaderLnb/>
                    </div>
                </div>
            </div>
            </div>
        </div>

      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/myinfo' element={<MyInfo/>}/>
      </Routes>


    </div>
  );
}

export default App;
