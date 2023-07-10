import './App.css';
import { Route, Routes } from 'react-router-dom'
import Main from './Page/Main';
import Cart from './Page/Cart';

import Header from './Page/Header';
import Footer from './Page/Footer';
import LogInUI from './components/Login/Login01';
import Product from './Page/product';


function App() {
  return (
    <div id='wrap'>
      <Header/>

      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LogInUI/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>


      <Footer/>
    </div>
  );
}

export default App;
