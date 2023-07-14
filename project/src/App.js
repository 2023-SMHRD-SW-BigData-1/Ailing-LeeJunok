import './App.css';
import { Route, Routes } from 'react-router-dom'
import Main from './Page/Main';
import Header from './Page/Header';
import Footer from './Page/Footer';
import LogInUI from './Page/Login/Login01';
import Join from './Page/Login/Login05';
import ProductBox from './Page/ProductBox';
import Review from './Page/Review';
import Introduce1 from '../src/Page/Introduce1';
import NoticeEdit from './components/Post/NoticePost/NoticeEdit';
import NoticeList from './components/Post/NoticePost/NoticeList';
import NoticeView from './components/Post/NoticePost/NoticeView';
import NoticeWrite from './components/Post/NoticePost/NoticeWrite';
import EventEdit from './components/Post/EventPost/EventEdit';
import EventList from './components/Post/EventPost/EventList';
import EventView01 from './components/Post/EventPost/EventView01';
import EventView02 from './components/Post/EventPost/EventView02';
import EventView03 from './components/Post/EventPost/EventView03';
import EventWrite from './components/Post/EventPost/EventWrite';
import Cart from './Page/Cart'
import { productContext } from './context/ProductContext';
import productjs from './Json/Product';




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
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/review' element={<Review/>}/>
          

          {/* Login */}
          <Route path='/login' element={<LogInUI/>}/>
          <Route path='/login/join' element={<Join/>}/>


        {/* Introduce */}
        <Route path='/introduce1' element={<Introduce1/>}/>

        {/* Post */}
        <Route path='/NoticeEdit' element={<NoticeEdit/>}/>
        <Route path='/NoticeList' element={<NoticeList/>}/>
        <Route path='/NoticeView' element={<NoticeView/>}/>
        <Route path='/NoticeWrite' element={<NoticeWrite/>}/>

        <Route path='/EventEdit' element={<EventEdit/>}/>
        <Route path='/EventList' element={<EventList/>}/>
        <Route path='/EventView01' element={<EventView01/>}/>
        <Route path='/EventView02' element={<EventView02/>}/>
        <Route path='/EventView03' element={<EventView03/>}/>
        <Route path='/EventWrite' element={<EventWrite/>}/>



      </Routes>
      </productContext.Provider>
      </div>


      <Footer/>
    </div>
  );
  
}

export default App;
