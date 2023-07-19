import '../css/Review/Review.css';
import React, { useEffect, useState } from 'react';
import ReviewHead from '../components/Review/ReviewHead';
import Paging from '../components/Review/Paging';
import ReviewCard from '../components/Review/ReviewCard';
import axios from 'axios';

const Review = () => {
  const [reviewCount, setReviewCount] = useState(0);
  const [reviewList, setReviewList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bordList, setBordList] = useState([]); 

  useEffect(() => {
    console.log('가져오는 중');
    fetchReviewData();
  }, [page]);

  const fetchReviewData = async () => {
    try {
      setLoading(true);
      setError(null);
  
      const response = await axios.get('http://localhost:8888/review');
      console.log('리뷰 데이터를 불러오는 중...');
      console.log(response.data.review);
  
      if (response.status === 200) {
        console.log('리뷰 데이터 불러오기 성공.');
        
        if (response.data.review) {
          setReviewList(response.data.review);
        } else {
          setReviewList([]); 
          
        }
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

  useEffect(() => {
    //0~4  1  
    //5~9   2  
    //10~14  3 
    console.log(page);
    const cnt = (page - 1) * 5;
    let pos = cnt + 4;
    // 만약 위치가 리뷰 리스트 길이보다 크다면 조정
    if (pos >= reviewList.length) {
      pos = reviewList.length - 1;
    }
    const newList = reviewList && reviewList.map((item, index) => {
      if (cnt <= index && index <= pos) {
        return (
          <ReviewCard
            key={index}
            member={item.user_id}
            name={item.name}
            date={item.review_at}
            text={item.REVIEW_COMMENT}
            url={item.review_img}
          />
        );
      }
      return null;
    });
    setBordList(newList);
  }, [page, reviewList]);

  return (
    <>
      <div className="mainSec Review">
        <h2>Review</h2>
      </div>
      <div className="contentBox">
        <ReviewHead count={reviewCount} />
        {loading ? (
          <p>로딩 중...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>{bordList}</>
        )}
        <Paging count={reviewCount} page={page} setpage={setPage} />
      </div>
    </>
  );
};

export default Review;
