import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
// import "../../Postcss/css.css"
import axios from 'axios';
import "../Postcss/css.css"

const NoticeList = () => {
    const [notices, setNotices] = useState([]);
  
    useEffect(() => {
      fetchNotices();
    }, []);
  
    const fetchNotices = async () => {
      try {
        const response = await axios.get('/NoticeList');
        setNotices(response.data.notices);
      } catch (error) {
        console.log('에러가 발생했습니다:', error);
      }
    };
  
    const handleNoticeView = async (notice) => {
      try {
        await axios.post('/NoticeView', { noti_seq: notice.noti_seq });
        // 조회수를 로컬에서 증가시킴
        const updatedNotices = notices.map((n) => {
          if (n.noti_seq === notice.noti_seq) {
            return { ...n, noti_views: n.noti_views + 1 };
          }
          return n;
        });
        setNotices(updatedNotices);
      } catch (error) {
        console.log('에러가 발생했습니다:', error);
      }
    };
  
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
                <div key={notice.body.noti_seq} onClick={() => handleNoticeView(notice)}>
                  <div className="num">{notice.body.noti_seq}</div>
                  <div className="title_name">
                    <Link to={`/NoticeView${notice.body.noti_seq}`}>{notice.body.noti_title}</Link>
                  </div>
                  <div className="writer">{notice.body.noti_name}</div>
                  <div className="date">{notice.body.noti_date}</div>
                  <div className="count">{notice.body.noti_views}</div>
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
              {/* <Link to='/NoticeEdit'>수정하기</Link> */}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default NoticeList;