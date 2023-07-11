
import React, { useContext, useEffect, useState } from 'react'
import { productContext } from '../../context/ProductContext'
import productjs from '../../Json/Product'


const MainDepth = ({name,url}) => {

    const {setProduct,setProductName} = useContext(productContext)

    

    const changeCard = ()=>{
            switch (name) {
                case '면역':
                    setProductName('면역')                    
                    setProduct([ {url: productjs[0].PROD_IMG, text: '비타민C'},
                    {url : productjs[1].PROD_IMG, text : '남성 복합 비타민'},
                    {url : productjs[2].PROD_IMG, text : '칼슘'},
                    {url : productjs[6].PROD_IMG, text : '칼슘'},
                    {url : 'https://www.nhis.or.kr/magazin/152/html/style/images/sub2_img1.jpg',text : 'ㅇ'},
                    {url : 'https://www.nhis.or.kr/magazin/152/html/style/images/sub2_img1.jpg',text : 'ㅇ'},
                    {url : 'https://www.nhis.or.kr/magazin/152/html/style/images/sub2_img1.jpg',text : 'ㅇ'}])
                    break;
                case '다이어트':
                    setProductName('다이어트')
                    setProduct([{url : 'https://m.young.hyundai.com:444/upload/CMS_NEWS_IMAGE/2019/12/12/CMS_NEWS_IMAGE_2QGznGb3yizOrw9cg2A7.jpg',text : 'ㅋ'},
                    {url : 'https://m.young.hyundai.com:444/upload/CMS_NEWS_IMAGE/2019/12/12/CMS_NEWS_IMAGE_2QGznGb3yizOrw9cg2A7.jpg',text : 'ㅋ'},
                    {url : 'https://m.young.hyundai.com:444/upload/CMS_NEWS_IMAGE/2019/12/12/CMS_NEWS_IMAGE_2QGznGb3yizOrw9cg2A7.jpg',text : 'ㅋ'},
                    {url : 'https://m.young.hyundai.com:444/upload/CMS_NEWS_IMAGE/2019/12/12/CMS_NEWS_IMAGE_2QGznGb3yizOrw9cg2A7.jpg',text : 'ㅋ'},
                    {url : 'https://m.young.hyundai.com:444/upload/CMS_NEWS_IMAGE/2019/12/12/CMS_NEWS_IMAGE_2QGznGb3yizOrw9cg2A7.jpg',text : 'ㅋ'},
                    {url : 'https://m.young.hyundai.com:444/upload/CMS_NEWS_IMAGE/2019/12/12/CMS_NEWS_IMAGE_2QGznGb3yizOrw9cg2A7.jpg',text : 'ㅋ'},
                    {url : 'https://m.young.hyundai.com:444/upload/CMS_NEWS_IMAGE/2019/12/12/CMS_NEWS_IMAGE_2QGznGb3yizOrw9cg2A7.jpg',text : 'ㅋ'},])
                    break;
                case '피부':
                    setProductName('피부')
                    setProduct([{url : 'https://cdn.thedailypost.kr/news/photo/202204/86944_83260_2446.png',text : 'ㅎ'},
                    {url : 'https://cdn.thedailypost.kr/news/photo/202204/86944_83260_2446.png',text : 'ㅎ'},
                    {url : 'https://cdn.thedailypost.kr/news/photo/202204/86944_83260_2446.png',text : 'ㅎ'},
                    {url : 'https://cdn.thedailypost.kr/news/photo/202204/86944_83260_2446.png',text : 'ㅎ'},
                    {url : 'https://cdn.thedailypost.kr/news/photo/202204/86944_83260_2446.png',text : 'ㅎ'},
                    {url : 'https://cdn.thedailypost.kr/news/photo/202204/86944_83260_2446.png',text : 'ㅎ'},
                    {url : 'https://cdn.thedailypost.kr/news/photo/202204/86944_83260_2446.png',text : 'ㅎ'},])
                    break;
                case '스트레스':
                    setProductName('스트레스')
                    setProduct([{url : 'https://cdn.imweb.me/upload/S201905095cd394c038ba5/1601def38d6e6.jpg',text : 'ㅎ'},
                    {url : 'https://cdn.imweb.me/upload/S201905095cd394c038ba5/1601def38d6e6.jpg',text : 'ㅎ'},
                    {url : 'https://cdn.imweb.me/upload/S201905095cd394c038ba5/1601def38d6e6.jpg',text : 'ㅎ'},
                    {url : 'https://cdn.imweb.me/upload/S201905095cd394c038ba5/1601def38d6e6.jpg',text : 'ㅎ'},
                    {url : 'https://cdn.imweb.me/upload/S201905095cd394c038ba5/1601def38d6e6.jpg',text : 'ㅎ'},
                    {url : 'https://cdn.imweb.me/upload/S201905095cd394c038ba5/1601def38d6e6.jpg',text : 'ㅎ'},
                    {url : 'https://cdn.imweb.me/upload/S201905095cd394c038ba5/1601def38d6e6.jpg',text : 'ㅎ'},])
                    break;
                case '피로':
                    setProductName('피로')
                    setProduct([{url : 'https://www.dentin.kr/data/photos/20131044/art_1382928943.jpg',text : 'ㅗ'},
                    {url : 'https://www.dentin.kr/data/photos/20131044/art_1382928943.jpg',text : 'ㅗ'},
                    {url : 'https://www.dentin.kr/data/photos/20131044/art_1382928943.jpg',text : 'ㅗ'},
                    {url : 'https://www.dentin.kr/data/photos/20131044/art_1382928943.jpg',text : 'ㅗ'},
                    {url : 'https://www.dentin.kr/data/photos/20131044/art_1382928943.jpg',text : 'ㅗ'},
                    {url : 'https://www.dentin.kr/data/photos/20131044/art_1382928943.jpg',text : 'ㅗ'},
                    {url : 'https://www.dentin.kr/data/photos/20131044/art_1382928943.jpg',text : 'ㅗ'}])
                    break;
                case '간 건강':
                    setProductName('간 건강')
                    setProduct([{url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZPqz97fr_wh7y4MXupCxhyOLo20ylz-QfQ&usqp=CAU',text : 'ㅂ'},
                    {url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZPqz97fr_wh7y4MXupCxhyOLo20ylz-QfQ&usqp=CAU',text : 'ㅂ'},
                    {url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZPqz97fr_wh7y4MXupCxhyOLo20ylz-QfQ&usqp=CAU',text : 'ㅂ'},
                    {url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZPqz97fr_wh7y4MXupCxhyOLo20ylz-QfQ&usqp=CAU',text : 'ㅂ'},
                    {url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZPqz97fr_wh7y4MXupCxhyOLo20ylz-QfQ&usqp=CAU',text : 'ㅂ'},
                    {url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZPqz97fr_wh7y4MXupCxhyOLo20ylz-QfQ&usqp=CAU',text : 'ㅂ'},
                    {url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZPqz97fr_wh7y4MXupCxhyOLo20ylz-QfQ&usqp=CAU',text : 'ㅂ'},])
                    break;
                case '눈 건강':
                    setProductName('눈 건강')
                    setProduct([{url : 'https://www.econovill.com/news/photo/201704/312463_149532_2517.png',text : ''},
                    {url : 'https://www.econovill.com/news/photo/201704/312463_149532_2517.png',text : ''},
                    {url : 'https://www.econovill.com/news/photo/201704/312463_149532_2517.png',text : ''},
                    {url : 'https://www.econovill.com/news/photo/201704/312463_149532_2517.png',text : ''},
                    {url : 'https://www.econovill.com/news/photo/201704/312463_149532_2517.png',text : ''},
                    {url : 'https://www.econovill.com/news/photo/201704/312463_149532_2517.png',text : ''},
                    {url : 'https://www.econovill.com/news/photo/201704/312463_149532_2517.png',text : ''},])
                    break;
                case '장 건강':
                    setProductName('장 건강')
                    setProduct([{url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEcAOhGqQJkVpMVFrMZLE7ZMGvK95Je0qxQ&usqp=CAU',text : ''},
                    {url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEcAOhGqQJkVpMVFrMZLE7ZMGvK95Je0qxQ&usqp=CAU',text : ''},
                    {url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEcAOhGqQJkVpMVFrMZLE7ZMGvK95Je0qxQ&usqp=CAU',text : ''},
                    {url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEcAOhGqQJkVpMVFrMZLE7ZMGvK95Je0qxQ&usqp=CAU',text : ''},
                    {url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEcAOhGqQJkVpMVFrMZLE7ZMGvK95Je0qxQ&usqp=CAU',text : ''},])
                    break;
                case '수면':
                    setProductName('수면')
                    setProduct([{url : 'https://src.hidoc.co.kr/image/lib/2017/5/30/20170530141011772_0.jpg',text : ''},
                    {url : 'https://src.hidoc.co.kr/image/lib/2017/5/30/20170530141011772_0.jpg',text : ''},
                    {url : 'https://src.hidoc.co.kr/image/lib/2017/5/30/20170530141011772_0.jpg',text : ''},
                    {url : 'https://src.hidoc.co.kr/image/lib/2017/5/30/20170530141011772_0.jpg',text : ''},
                    {url : 'https://src.hidoc.co.kr/image/lib/2017/5/30/20170530141011772_0.jpg',text : ''}])
                    break;
                default:
                
                    break;
            }

        }


    return (
        <>
            <button onClick={changeCard}><img src={url} alt="준비중" /><p>{name}</p></button>
        </>
    )
}

export default MainDepth