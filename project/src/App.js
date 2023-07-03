
import './App.css';
import HeaderMenuList from './components/HeaderMenuList';
import HeaderTnb from './components/HeaderTnb';
import MainBan from './components/MainBan';

function App() {
  return (
    <div id='wrap'>
      <div className='header'>
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
          </div>
        </div>
      </div>
      <div id='mainContentWrapper'>
        <div className='mainBanner'>
          <MainBan/>
        </div>

      </div>

  

    </div>
  );
}

export default App;
