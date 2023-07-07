import '../css/Main/main.css'
import MainBan from '../components/Main/MainBan'
import MainDepth from '../components/Main/MainDepth'
import { Link } from 'react-router-dom'
import RcProduct from '../components/Main/RcProduct'
import { productContext } from '../context/ProductContext'
import { useState } from 'react'
import Atom from '../components/Main/Atom'


const Main = () => {

    const mainDepth = [{depthName : '면역'},
    {depthName : '다이어트'},
    {depthName : '피부'},
    {depthName : '스트레스'},
    {depthName : '피로'},
    {depthName : '간 건강'},
    {depthName : '눈 건강'},
    {depthName : '장 건강'},
    {depthName : '수면'},]

    
    const [product,setProduct] = useState([{url : 'https://src.hidoc.co.kr/image/lib/2017/5/30/20170530141011772_0.jpg',text : ''},
    {url : 'https://src.hidoc.co.kr/image/lib/2017/5/30/20170530141011772_0.jpg',text : ''},
    {url : 'https://src.hidoc.co.kr/image/lib/2017/5/30/20170530141011772_0.jpg',text : ''},
    {url : 'https://src.hidoc.co.kr/image/lib/2017/5/30/20170530141011772_0.jpg',text : ''},
    {url : 'https://src.hidoc.co.kr/image/lib/2017/5/30/20170530141011772_0.jpg',text : ''}]);
    const [productName,setProductName] = useState('');

    
    return (

    
        <div id='mainContentWrapper'>
            <div className='mainBanner'>
            <MainBan/>
            </div>
            <div className='mainSec ingredient'>
                <h2>메인성분이에요</h2>
            </div>
            <div className='contentBox'>
            <productContext.Provider value={{product,setProduct,setProductName}}>
                <div className='innerDepth'>
                    {mainDepth.map((item)=><MainDepth key={item.depthName} name={item.depthName}/>)}
                </div>
                <div className='runtext'>
                <p>{productName == ""? '- 어떤 고민이 있으신가요? -' : '- '+productName+'에 대한 고민이 있으신가요? -'}</p>
                </div>
                {productName == ""? <Atom/> : <RcProduct/>}
            </productContext.Provider>
            </div>
            <div className='mainSec board'>
                <h4>Addivision 후기</h4>
            </div>
        </div>

    


    )
}

export default Main