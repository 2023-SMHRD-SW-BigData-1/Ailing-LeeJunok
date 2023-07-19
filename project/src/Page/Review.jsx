import '../css/Review/Review.css'
import React, { useContext, useEffect, useState } from 'react'
import ReviewHead from '../components/Review/ReviewHead'
import Paging from '../components/Review/Paging';
import ReviewCard from '../components/Review/ReviewCard';
import swal from 'sweetalert';
import { LoginContext } from '../context/LoginContext';
import { useNavigate } from 'react-router';
import axios from 'axios';



const Review = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    const [reviewCount,setReviewCount] = useState(0);
    const [bordList, setBordList ] = useState([]);
    const [page, setPage] = useState(1);
    const [reviews, setReviews] = useState([]);
    const nav = useNavigate();
    const {isLogin} = useContext(LoginContext);
    const [startNum,setStartNum] = useState(0);
    //const [endNum ,setEndNum] =useState(info.length-1);
    let pos = 0;
    let cnt = 0;



    const loginD=()=>{
        if (isLogin===false) {
            swal ( "죄송합니다" ,  "로그인이 필요한 서비스입니다." ,  "error" )
        }else{
            nav('/review/edit');
        }
    }

    useEffect(()=>{
        console.log('리뷰 가져오는 중.....');
        fetchReviews()
    }, []);

    const fetchReviews = async () => {
        try {
            const response = await axios.get('http://localhost:8888/review');
            console.log('리뷰 : ', response.data.reviews);
            setReviews(response.data.reviews);
        } catch (error) {
            console.log('또 오류다 : ', error);
        }
    }
    
    const info = reviews;
            

    
    useEffect(()=>{
        setReviewCount(info.length);
    },[reviews])

    
    useEffect(()=>{
        //0~4  1  
        //5~9   2  
        //10~14  3 
        console.log(page)
        cnt =(page-1)*5
        pos = cnt+4
        ///let endNum = startNum+4;
        if(pos>info.length){
            pos=info.length-1
        }
        let newList = reviews&&reviews.map((item,index)=>{
        if(cnt<=index && index<=pos){
                return(
                    <ReviewCard key={index} member={item.USER_ID} name={item.REVIEW_NAME} date={item.REVIEW_AT} text={item.REVIEW_COMMENT} url={item.REVIEW_IMG}/>
                )
        }      
        })

        setBordList(newList)
    } ,[page,reviews])
    
    return (
    <>
    <div className='mainSec prl'><img src="https://ifh.cc/g/qmkJwR.jpg" alt="" /><h2 style={{marginLeft:'5px'}}>Review</h2></div>
    <div className='contentBox'>
        <ReviewHead count={reviewCount}/>
        {bordList}
        <button onClick={loginD} className='edit'>리뷰작성</button>
        <Paging count={reviewCount} page={page} setpage={setPage} />
    </div>
    </>
    )
}

export default Review
