import '../css/Main/main.css'
import MainBan from '../components/Main/MainBan'
import MainDepth from '../components/Main/MainDepth'
import { Link } from 'react-router-dom'
import RcProduct from '../components/Main/RcProduct'


const Main = () => {

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

    const im = [{name : '공룡',url:"C:\Users\smhrd\OneDrive\바탕 화면\Main\Ailing-LeeJunok\project\src\img\..png"}] 

    
    return (


        <div id='mainContentWrapper'>
            <div className='mainBanner'>
            <MainBan/>
            </div>
            <div className='mainSec ingredient'>
                <h2>메인성분이에요</h2>
            </div>
            <div className='contentBox'>
            <div className='innerDepth'>
            {mainDepth.map((item)=><MainDepth key={item.depthName} name={item.depthName} url={item.url}/>)}
            </div>
            <Link to="#" className='plus'>+더보기</Link>
            </div>
            <div className='mainSec product'>
                <h3>추천 상품</h3>
            </div>
            <div className='contentBox'>
            <RcProduct/>
            <br />
            <RcProduct/>
            </div>
            <div className='mainSec board'>
                <h4>게시판</h4>
            </div>
        </div>

    


    )
}

export default Main