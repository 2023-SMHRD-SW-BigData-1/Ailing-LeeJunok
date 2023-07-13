import './App.css';
import { Route, Routes } from 'react-router-dom'
import Main from './Page/Main';
import Header from './Page/Header';
import Footer from './Page/Footer';
import LogInUI from './Page/Login/Login01';
import Join from './Page/Login/Login05';
import ProductBox from './Page/ProductBox';
import Review from './Page/Review';
import Introduce1 from './Page/Introduce1'
import React from 'react';

function App() {
  
  return (
    <div id='wrap'>
      <Header/>
      
      <div id='body-warpper'>
      <productContext.Provider value={{productjs}}>
        <Routes>
          <Route path='/' element={<Main/>}/>
          

          {/* ProductList */}
          <Route path='/productList' element={<ProductBox/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/review' element={<Review/>}/>
          

          {/* Login */}
          <Route path='/login' element={<LogInUI/>}/>
          <Route path='/login/join' element={<Join/>}/>


        {/* Introduce */}
        <Route path='/introduce' element={<Introduce1/>}/>
      </Routes>
      </div>


      <Footer/>
    </div>
  );
}

export default App;
