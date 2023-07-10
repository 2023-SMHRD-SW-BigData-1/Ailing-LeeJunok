import '../css/Main/main.css'
import MainBan from '../components/Main/MainBan'
import MainDepth from '../components/Main/MainDepth'
import { Link } from 'react-router-dom'
import RcProduct from '../components/Main/RcProduct'
import { productContext } from '../context/ProductContext'
import { useState } from 'react'
import Atom from '../components/Main/Atom'
import BenText from '../components/Main/BenText'
import GrideBox from '../components/Main/GrideBox'
import Review from '../components/Main/Review'




const Main = () => {

    const mainDepth = [{depthName : '면역',url : 'https://ifh.cc/g/WY6MCG.png'},
    {depthName : '다이어트',url : 'https://ifh.cc/g/p53C74.png'},
    {depthName : '피부',url : 'https://ifh.cc/g/YWHF6X.png'},
    {depthName : '스트레스',url : 'https://ifh.cc/g/bcaSps.png'},
    {depthName : '피로',url : 'https://ifh.cc/g/Jm0qLo.png'},
    {depthName : '간 건강',url : 'https://ifh.cc/g/2c2ozT.png'},
    {depthName : '눈 건강',url : 'https://ifh.cc/g/OlklZ4.png'},
    {depthName : '장 건강',url : 'https://ifh.cc/g/N9VPZT.png'},
    {depthName : '수면',url : 'https://ifh.cc/g/P8kxch.png'},]

    
    const [product,setProduct] = useState([]);
    const [productName,setProductName] = useState('');

    
    return (

    
        <div id='mainContentWrapper'>
            <div className='mainBanner'>
            <MainBan/>
            </div>
            <productContext.Provider value={{product,setProduct,setProductName}}>
            <div className='mainSec ingredient'>
                <h2><strong>{productName == ""? '어떤 고민이 있으신가요?' : productName+'에 대한 고민이 있으신가요?'}</strong></h2>
            </div>
            <div className='contentBox'>
                <div className='innerDepth'>
                    {mainDepth.map((item)=><MainDepth key={item.depthName} name={item.depthName} url={item.url}/>)}
                </div>
                {productName == ""? <Atom/> : <RcProduct/>}
            </div>
            </productContext.Provider>
            <div className='contentBox'>
            <div className='hanpo top'><BenText/></div>
            </div>
            <div className='mainSec ingredient'>
                <h3><strong>하루 한 팩, 입에 톡톡 내게 꼭 맞춘 한 팩 영양제</strong></h3>
            </div>
            <div className='contentBox'>
                <div className='maingridWarpper'>
                    <GrideBox/>
                </div>
            </div>
            <div className='mainSec review'>
                <h4><strong>'필요' 한 사람들의 후기</strong></h4>
            </div>
            <div className='contentBox'>
                <Review/>
            </div>
            
        </div>

    


    )
}

export default Main