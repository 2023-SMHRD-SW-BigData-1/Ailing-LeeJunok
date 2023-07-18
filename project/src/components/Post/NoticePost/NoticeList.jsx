import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../Postcss/css.css';

const NoticeList = () => {
  const [notices, setNotices] = useState([]);

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

  return (
    <div className="notice_css">
      <div className="contentBox">
        <div className="board_title">
          <strong>공지사항</strong>
          <p>Pill.Yo의 공지사항</p>
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
            {notices.map((notice) => (
              <div key={notice.NOTI_SEQ}>
                <div className="num">{notice.NOTI_SEQ}</div>
                <div className="title_name">
                  <Link to={`/NoticeView/${notice.NOTI_SEQ}`}>{notice.NOTI_TITLE}</Link>
                </div>
                <div className="writer">{notice.NOTI_NAME}</div>
                <div className="date">{notice.NOTI_AT}</div>
                <div className="count">{notice.NOTI_VIEWS}</div>
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
            <Link to="/NoticeWrite" className="on">등록하기</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeList;
