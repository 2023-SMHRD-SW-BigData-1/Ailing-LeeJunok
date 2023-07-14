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
import React, { useEffect, useState } from 'react';
import Cart from './Page/Cart'
import productjs from './Json/Product';
import { productContext } from './context/ProductContext';
import HeaderLogout from './Page/HeaderLogout';
import { LoginContext } from './context/LoginContext';



function App() {
  
    const [isLogin, setIsLogin] = useState(false)
    const [distinction,setDistinction] = useState();
    useEffect(() => {
        if(sessionStorage.getItem('user_id') === null){
        // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면
          console.log('isLogin ?? :: ', isLogin)
          
        } else {
        // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
        // 로그인 상태 변경
          setIsLogin(true)
          console.log('isLogin ?? :: ', isLogin)
        }
    },[])

    useEffect(()=>{
      let pageLogin = ()=>{ 
        if (isLogin===false) {
          return(
            <Header/>
          )
        }else{
          return(
            <HeaderLogout/>
          )
        }
      }
      setDistinction(pageLogin)
    },[])


  return (
    <div id='wrap'>
      <LoginContext.Provider value={{isLogin}}>
      {distinction}
      
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
      </productContext.Provider>
      </div>


      <Footer/>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
