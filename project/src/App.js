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
import { BrowserRouter, Route } from 'react-router-dom';
import PostMain from './page/post/PostMain';
import PostView from './page/post/PostView';


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
        <Route path='/introduce' element={<Introduce/>}/>
      </Routes>
      </div>


      <Footer/>
    </div>
  );
}

export default App;
