import '../css/main.css'
import MainBan from '../components/Main/MainBan'
import MainDepth from '../components/Main/MainDepth'



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
            <div className='mainSec'>
                <h2>메인성분이에요</h2>
            </div>
            <div className='contentBox'>
            <div className='innerDepth'>
            {mainDepth.map((item)=><MainDepth key={item.depthName} name={item.depthName} url={item.url}/>)}
            </div>
            </div>
            <div className='mainSec'>
                <h2>추천 상품</h2>
            </div>

            

        </div>

    


    )
}

export default Main