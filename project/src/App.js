import './App.css';
import { Route, Routes } from 'react-router-dom'
import Main from './Page/Main';
import Cart from './Page/Cart';
import Login from './Page/Login';

function App() {
  return (
    <div id='wrap'>
      <Header/>

      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>


      <Footer/>
    </div>
  );
}

export default App;
