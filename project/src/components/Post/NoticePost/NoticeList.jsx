import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../Postcss/css.css';
import Paging from '../../Review/Paging';

const NoticeList = () => {
  const [notices, setNotices] = useState([]);
  const [notCount,setNotCount] = useState(0);
  const [page, setPage] = useState(1);
  const [bordList, setBordList ] = useState([]);
  let cnt = 0;
  let pos = 0;
  

  useEffect(() => {
    console.log('공지사항을 가져오는 중...');
    fetchNotices();
  }, []);
  
  const fetchNotices = async () => {
    try {
      const response = await axios.get('http://localhost:8888/NoticeList');
      console.log('공지사항:', response.data.notices);
      setNotices(response.data.notices);
    } catch (error) {
      console.log('오류가 발생했습니다:', error);
    }
  };
  
  console.log('NoticeList 컴포넌트 렌더링 중...');
  
        useEffect(()=>{
          setNotCount(notices.length);
        },[notices])
  
  
        useEffect(()=>{
        
          //0~4  1  
          //5~9   2  
          //10~14  3 
          console.log(page)
          cnt =(page-1)*5
          pos = cnt+4
          ///let endNum = startNum+4;
          if(pos>notices.length){
              pos=notices.length-1
          }
          let newList = notices.map((item,index)=>{
          if(cnt<=index && index<=pos){
                  return(
                  <div key={item.NOTI_SEQ}>
                  <div className="num">{item.NOTI_SEQ}</div>
                  <div className="title_name">
                    <Link to={`/NoticeView/${item.NOTI_SEQ}`}>{item.NOTI_TITLE}</Link>
                  </div>
                  <div className="writer">{item.NOTI_NAME}</div>
                  <div className="date">{item.NOTI_AT}</div>
                  <div className="count">{item.NOTI_VIEWS}</div>
                </div>
                  )
          }      
          })
          setBordList(newList)
      } ,[page,notices])

  return (
    <div className="notice_css">
      <div className='mainSec prl'><img src="https://ifh.cc/g/Sd6TGX.jpg" alt="" /><h2 style={{marginLeft:'30px'}}>공지사항</h2></div>
      <div className="contentBox">
        <div className="board_list_wrap">
          <div className="board_list">
            <div className="top">
              <div className="num">번호</div>
              <div className="title_name">제목</div>
              <div className="writer">작성자</div>
              <div className="date">작성일</div>
              <div className="count">조회수</div>
            </div>
            {bordList}
          </div>
              <Paging count={notCount} page={page} setpage={setPage}/>
        </div>
      </div>
    </div>
  );
};

export default NoticeList;
