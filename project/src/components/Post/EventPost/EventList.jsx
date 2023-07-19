import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../Postcss/css.css';

const EventList = () => {
    const [events, setEvents] = useState([]);
  
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
  

  console.log('EventList 컴포넌트 렌더링 중...');

  return (
    <div class ="notice_css">
      <div className='mainSec prl'><img src="https://ifh.cc/g/Sd6TGX.jpg" alt="" /><h2 style={{marginLeft:'30px'}}>이벤트 게시판</h2></div>
    <div class="contentBox">
        <div class="board_list_wrap">
            <div class="board_list">
                <div class="top">
                    <div class="num">번호</div>
                    <div className="title_name">제목</div>
                    <div class="writer">글쓴이</div>
                    <div class="date">작성일</div>
                    <div class="count">조회</div>
                </div>


                <div>
                    <div class="num">3</div>
                    <div class="title_name"><Link to='/EventView03'>제목</Link></div>
                    <div class="writer"><Link to='/EventView03'>이름</Link></div>
                    <div class="date"><Link to='/EventView03'>YYYY.MM.DD</Link></div>
                    <div class="count"><Link to='/EventView03'>12</Link></div>
                </div>
                <div className='write_list'>
                    <div class="num">2</div>
                    <div class="title_name"><Link to='/EventView02'>제목</Link></div>
                    <div class="writer"><Link to='/EventView02'>이름</Link></div>
                    <div class="date"><Link to='/EventView02'>YYYY.MM.DD</Link></div>
                    <div class="count"><Link to='/EventView02'>12</Link></div>
                </div>
                <div>
                    <div class="num">1</div>
                    <div class="title_name"><Link to='/EventView01'>제목</Link></div>
                    <div class="writer"><Link to='/EventView01'>이름</Link></div>
                    <div class="date"><Link to='/EventView01'>YYYY.MM.DD</Link></div>
                    <div class="count"><Link to='/EventView01'>12</Link></div>
                </div>

            </div>
            <div class="board_page">
                <a href="#" class="bt first"></a>
                <a href="#" class="bt prev"></a>
                <a href="#" class="num on">1</a>
                <a href="#" class="num">2</a>
                <a href="#" class="num">3</a>
                <a href="#" class="bt next"></a>
                <a href="#" class="bt last"></a>
            </div>

        </div>
      </div>
    </div>
  )
  }

export default EventList;
