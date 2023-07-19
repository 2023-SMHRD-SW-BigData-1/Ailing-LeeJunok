import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../Postcss/css.css';

const EventView = () => {
  const { eventSeq } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    console.log(`EVENT_SEQ ${eventSeq}에 해당하는 공지사항 상세정보를 가져오는 중...`);
    fetchEventDetails();
  }, [eventSeq]);

  const fetchEventDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8888/EventView/${eventSeq}`);
      const eventData = response.data.event;
      console.log('공지사항 상세정보:', eventData);
      setEvent(eventData);
    } catch (error) {
      console.log('오류가 발생했습니다:', error);
    }
  };

  return (
    <div className="notice_css">
      <div className='mainSec prl'><img src="https://ifh.cc/g/HfaqVS.jpg" alt="" /><h2 style={{marginLeft:'20px'}}>이벤트 게시판</h2></div>
      <div className="contentBox">
        <div className="board_view_wrap">
          <div className="board_view">
            <div className="title_name">{event?.EVENT_TITLE}</div>
            <div className="info">
              <dl>
                <dt>번호</dt>
                <dd>{event?.EVENT_SEQ}</dd>
              </dl>
              <dl>
                <dt>작성자</dt>
                <dd>{event?.EVENT_NAME}</dd>
              </dl>
              <dl>
                <dt>작성일</dt>
                <dd>{event?.EVENT_AT}</dd>
              </dl>
              <dl>
                <dt>조회수</dt>
                <dd>{event?.EVENT_VIEWS}</dd>
              </dl>
            </div>
            <div className="cont">{event?.EVENT_TEXT}</div>
          </div>
          <div className="bt_wrap">
            <Link to="/EventList" className="on">
              목록
            </Link>
            {/* <Link to="/NoticeEdit">수정</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventView;
