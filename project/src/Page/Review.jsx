import '../css/Review/Review.css';
import React, { useContext, useEffect, useState } from 'react'
import ReviewHead from '../components/Review/ReviewHead';
import Paging from '../components/Review/Paging';
import ReviewCard from '../components/Review/ReviewCard';
import axios from 'axios';
import swal from 'sweetalert';
import { LoginContext } from '../context/LoginContext';
import { useNavigate } from 'react-router';

const Review = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    const [reviewCount,setReviewCount] = useState(0);
    const [bordList, setBordList ] = useState([]);
    const [page, setPage] = useState(1);
    let cnt = 0;

     const fetchReviewData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get('http://localhost:8888/review');
      console.log('리뷰 데이터를 불러오는 중...');

      if (response.status === 200) {
        console.log('리뷰 데이터 불러오기 성공.');
        const reviews = response.data.review || [];

        setReviewCount(reviews.length);
        setReviewList(reviews);
      } else {
        console.log('리뷰 데이터 불러오기 실패.');
        throw new Error('리뷰 데이터를 불러오는데 실패했습니다.');
      }
    } catch (error) {
      console.log('오류 발생: ', error);
      setError('리뷰 데이터를 불러오는데 실패했습니다. 나중에 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };
      

    
            const [startNum,setStartNum] = useState(0);
            //const [endNum ,setEndNum] =useState(info.length-1);
            let pos = 0;
    
    useEffect(()=>{
        setReviewCount(info.length);
    },[reviewCount])

    
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
        let newList = info.map((item,index)=>{
        if(cnt<=index && index<=pos){
                return(
                    <ReviewCard key={index} member={item.member} name={item.name} date={item.date} text={item.text} url={item.url}/>
                )
        }      
        })
        setBordList(newList)
    } ,[page])
    
    
    return (
    <>
    <div className='mainSec prl'><img src="https://ifh.cc/g/qmkJwR.jpg" alt="" /><h2 style={{marginLeft:'40px'}}>Review</h2></div>
    <div className='contentBox'>
        <ReviewHead count={reviewCount}/>
        {bordList}
        <button onClick={loginD} className='edit'>리뷰작성</button>
        <Paging count={reviewCount} page={page} setpage={setPage} />
      </div>
    </>
  );
};

export default Review;
