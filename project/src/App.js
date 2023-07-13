import './App.css';
import { Route, Routes } from 'react-router-dom'
import Main from './Page/Main';
import Cart from './Page/Cart';
import Header from './Page/Header';
import Footer from './Page/Footer';
import LogInUI from './Page/Login/Login01';
import Join from './Page/Login/Login05';
import ProductBox from './Page/ProductBox';
import Review from './Page/Review';
import Introduce1 from './Page/Introduce1';
import React from 'react';
import NoticeList from './components/NoticePost/NoticeList';
import NoticeWrite from './components/NoticePost/NoticeWrite';
import NoticeEdit from './components/NoticePost/NoticeEdit';
import NoticeView from './components/NoticePost/NoticeView';




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

        {/* ProductList */}
        <Route path='/productList' element={<ProductBox/>}/>
        <Route path='/review' element={<Review/>}/>

        {/* Introduce */}
        <Route path='/introduce' element={<Introduce1/>}/>

        {/* Notice */}
        <Route path='/NoticeList' element={<NoticeList/>}/>
        <Route path='/NoticeWrite' element={<NoticeWrite/>}/>
        <Route path='/NoticeEdit' element={<NoticeEdit/>}/>
        <Route path='/NoticeView' element={<NoticeView/>}/>



      </Routes>
      </div>


      <Footer/>
    </div>
  );
}

export default App;
