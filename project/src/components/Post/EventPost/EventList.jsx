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
    <div className="notice_css">
      <div className="contentBox">
        <div className="board_title">
          <strong>이벤트 게시판</strong>
          <p>Pill.Yo의 이벤트 게시판 입니다.</p>
        </div>
        <div className="board_list_wrap">
          <div className="board_list">
            <div className="top">
              <div className="num">번호</div>
              <div className="title_name">제목</div>
              <div className="writer">작성자</div>
              <div className="date">작성일</div>
              <div className="count">조회수</div>
            </div>
            {events && events.map((event) => (
              <div key={event.EVENT_SEQ}>
                <div className="num">{event.EVENT_SEQ}</div>
                <div className="title_name">
                  <Link to={`/EventView/${event.EVENT_SEQ}`}>{event.EVENT_TITLE}</Link>
                </div>
                <div className="writer">{event.EVENT_NAME}</div>
                <div className="date">{event.EVENT_AT}</div>
                <div className="count">{event.EVENT_VIEWS}</div>
              </div>
            ))}
          </div>
          <div className="board_page">
            <a href="#" className="bt first"></a>
            <a href="#" className="bt prev"></a>
            <a href="#" className="num on">1</a>
            <a href="#" className="num">2</a>
            <a href="#" className="num">3</a>
            <a href="#" className="bt next"></a>
            <a href="#" className="bt last"></a>
          </div>
          <div className="bt_wrap">
            <Link to="/EventWrite" className="on">등록하기</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventList;
