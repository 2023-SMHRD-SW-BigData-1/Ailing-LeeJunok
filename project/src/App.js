
import './css/index.css'
import './App.css';
import { Route, Routes } from 'react-router-dom'
import HeaderTnb from './components/Main/HeaderTnb'
import HeaderMenuList from './components/Main/HeaderMenuList'
import HeaderLnb from './components/Main/HeaderLnb'
import Main from './Page/Main';
import Cart from './Page/Cart';

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
      </Routes>
    </div>
  );
}

export default App;
