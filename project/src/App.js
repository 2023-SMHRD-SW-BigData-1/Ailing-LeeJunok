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
import { useCookies } from 'react-cookie';

import NoticeEdit from './components/Post/NoticePost/NoticeEdit';
import NoticeList from './components/Post/NoticePost/NoticeList';
import NoticeWrite from './components/Post/NoticePost/NoticeWrite';
import EventEdit from './components/Post/EventPost/EventEdit';
import EventList from './components/Post/EventPost/EventList';
import EventView from './components/Post/EventPost/EventView';
import EventView02 from './components/Post/EventPost/EventView02';
import EventView03 from './components/Post/EventPost/EventView03';
import EventWrite from './components/Post/EventPost/EventWrite';
import NoticeView from './components/Post/NoticePost/NoticeView';
import NoticeView02 from './components/Post/NoticePost/NoticeView02';
import NoticeView03 from './components/Post/NoticePost/NoticeView03';
import NoticeView04 from './components/Post/NoticePost/NoticeView04';
import NoticeView05 from './components/Post/NoticePost/NoticeView05';

import ReviewWrite from './Page/ReviewWrite';
import { Switch } from '@mui/material';

function App() {
  const [cookies] = useCookies(['user_id']);

  const [isLogin, setIsLogin] = useState(false);
  const [distinction, setDistinction] = useState();

  useEffect(() => {
    if (cookies.user_id === undefined) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [cookies]);

  useEffect(() => {
    if (isLogin === false) {
      console.log('isLogin ?? :: ', isLogin);
    } else {
      setIsLogin(true);
      console.log('isLogin ?? :: ', isLogin);
    }
  }, [isLogin]);

  useEffect(() => {
    let pageLogin = () => {
      if (isLogin === false) {
        return <Header />;
      } else if (isLogin === true) {
        return <HeaderLogout />;
      }
    };
    setDistinction(pageLogin);
  }, [isLogin]);

  useEffect(() => {
    let pageLogin = () => {
      if (isLogin === false) {
        return <Header />;
      } else if (isLogin === true) {
        return <HeaderLogout />;
      }
    };
    setDistinction(pageLogin);
  }, []);

  return (
    <div id='wrap'>
      <LoginContext.Provider value={{ isLogin }}>
        {distinction}

        <div id='body-warpper'>
          <productContext.Provider value={{ productjs }}>
            <Routes>
              <Route path='/' element={<Main />} />

              {/* ProductList */}
              <Route path='/productList' element={<ProductBox />} />
              <Route path='/Cart' element={<Cart />} />

              {/* Review */}
              <Route path='/review' element={<Review />} />
              <Route path='/review/edit' element={<ReviewWrite/>}/>

              {/* Login */}
              <Route path='/login' element={<LogInUI />} />
              <Route path='/login/join' element={<Join />} />

              {/* Introduce */}
              <Route path='/introduce1' element={<Introduce1 />} />

              <Route path='/NoticeEdit' element={<NoticeEdit />} />
              <Route path='/NoticeList'  element={<NoticeList />} />
              <Route path='/NoticeView/:noticeSeq' element={<NoticeView />} />
              {/* <Route path='/NoticeView02' element={<NoticeView02 />} />
              <Route path='/NoticeView03' element={<NoticeView03 />} />
              <Route path='/NoticeView04' element={<NoticeView04 />} />
              <Route path='/NoticeView05' element={<NoticeView05 />} /> */}
              <Route path='/NoticeWrite' element={<NoticeWrite />} />

              <Route path='/EventEdit' element={<EventEdit />} />
              <Route path='/EventList' element={<EventList />} />
              <Route path='`/EventView/:eventSeq' element={<EventView />} />
              <Route path='/EventView02' element={<EventView02 />} />
              <Route path='/EventView03' element={<EventView03 />} />
              <Route path='/EventWrite' element={<EventWrite />} />

=======

            </Routes>
          </productContext.Provider>
        </div>

        <Footer />
      </LoginContext.Provider>
    </div>
  );
}

export default App;
