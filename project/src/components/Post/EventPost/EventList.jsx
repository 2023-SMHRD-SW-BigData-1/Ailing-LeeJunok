import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../Postcss/css.css';
import Paging from '../../Review/Paging';

const EventList = () => {
    const [events, setEvents] = useState([]);
    const [eveCount,setEveCount] = useState(0);
    const [page, setPage] = useState(1);
    const [bordList, setBordList ] = useState([]);
    let cnt = 0;
    let pos = 0;
  
    useEffect(() => {
      console.log('이벤트를 가져오는 중...');
      fetchEvents();
    }, []);
  
    const fetchEvents = async() => {
      try {
        const response = await axios.get('http://localhost:8888/EventList');
        console.log('이벤트:', response.data.event);
        console.log('이벤트? : ', response.data);
        setEvents(response.data.event);
      } catch (error) {
        console.log('오류가 발생했습니다:', error);
      }
    };

    useEffect(()=>{
      setEveCount(events.length);
    },[events])


    useEffect(()=>{
    
      //0~4  1  
      //5~9   2  
      //10~14  3 
      console.log(page)
      cnt =(page-1)*5
      pos = cnt+4
      ///let endNum = startNum+4;
      if(pos>events.length){
          pos=events.length-1
      }
      let newList = events.map((item,index)=>{
      if(cnt<=index && index<=pos){
              return(
              <div key={item.EVENT_SEQ}>
              <div className="num">{item.EVENT_SEQ}</div>
              <div className="title_name">
                <Link to={`/NoticeView/${item.EVENT_SEQ}`}>{item.NOTI_TITLE}</Link>
              </div>
              <div className="writer">{item.EVENT_NAME}</div>
              <div className="date">{item.EVENT_AT}</div>
              <div className="count">{item.EVENT_VIEWS}</div>
            </div>
              )
      }      
      })
      setBordList(newList)
  } ,[page,events])

  

  console.log('EventList 컴포넌트 렌더링 중...');

  return (
    <div class ="notice_css">
      <div className='mainSec prl'><img src="https://ifh.cc/g/HfaqVS.jpg" alt="" /><h2 style={{marginLeft:'20px'}}>이벤트 게시판</h2></div>
    <div class="contentBox">
        <div class="board_list_wrap">
            <div class="board_list">
                <div class="top">
                    <div class="num">번호</div>
                    <div className="title_name">제목</div>
                    <div class="writer">작성자</div>
                    <div class="date">작성일</div>
                    <div class="count">조회수</div>
                </div>
                {bordList}
            </div>
            <Paging count={eveCount} page={page} setpage={setPage}/>
        </div>
      </div>
    </div>
  )
  }

export default EventList;
