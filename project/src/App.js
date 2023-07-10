import './App.css';
import { Route, Routes } from 'react-router-dom'
import Main from './Page/Main';
import Cart from './Page/Cart';

import Header from './Page/Header';
import Footer from './Page/Footer';
import LogInUI from './Page/Login/Login01';
import Join from './Page/Login/Login05';



function App() {
  return (
    <div id='wrap'>
      <Header/>

      <div id='body-warpper'>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/cart' element={<Cart/>}/>
        {/* Login */}
        <Route path='/login' element={<LogInUI/>}/>
        <Route path='/login/join' element={<Join/>}/>
      </Routes>
      </div>


      <Footer/>
    </div>
  );
}

export default App;
