
import './App.css';
import './css/index.css';
import HeaderMenuList from './components/HeaderMenuList';
import HeaderTnb from './components/HeaderTnb';
import MainBan from './components/MainBan';
import MainDepth from './components/MainDepth';
import HeaderLnb from './components/HeaderLnb';

function App() {

  const mainDepth = [{depthName : '포스트바이오틱스',url : '#'},
  {depthName : '오메가3',url : '#'},
  {depthName : '프로바이오틱스\n(유산균)',url : '#'},
  {depthName : '비타민C',url : '#'},
  {depthName : '가르시니아\n캄보지아',url : '#'},
  {depthName : '레시틴',url : '#'},
  {depthName : '코엔자임Q10',url : '#'},
  {depthName : '비타민B1',url : '#'},
  {depthName : '비타민A',url : '#'},
  {depthName : '칼슘',url : '#'},]


  return (
    <div id='wrap'>
      <div id='header'>
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
              <div className='headerLnb '>
                <div className='contentBox'>
                  <HeaderLnb/>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div id='mainContentWrapper'>
        <div className='mainBanner'>
          <MainBan/>
        </div>
        <div className='mainSec'>
            <h2>메인성분이에요</h2>
        </div>
        <div className='contentBox'>
          <div className='innerDepth'>
          {mainDepth.map((item)=><MainDepth key={item.depthName} name={item.depthName} url={item.url}/>)}
          </div>
          
        </div>

      </div>

  

    </div>
  );
}

export default App;
