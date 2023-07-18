import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../Postcss/css.css';

const NoticeView = () => {
  const { noticeSeq } = useParams();
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    console.log(`NOTI_SEQ ${noticeSeq}에 해당하는 공지사항 상세정보를 가져오는 중...`);
    fetchNoticeDetails();
  }, [noticeSeq]);

  const fetchNoticeDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8888/NoticeView/${noticeSeq}`);
      const noticeData = response.data.notice;
      console.log('공지사항 상세정보:', noticeData);
      setNotice(noticeData);
    } catch (error) {
      console.log('오류가 발생했습니다:', error);
    }
  };

  return (
    <div className="Notice_css">
      <div className="board_wrap">
        <div className="board_title">
          <strong>공지사항</strong>
          <p>Pill.Yo의 공지사항</p>
        </div>
        <div className="board_view_wrap">
          <div className="board_view">
            <div className="title_name">{notice?.NOTI_TITLE}</div>
            <div className="info">
              <dl>
                <dt>번호</dt>
                <dd>{notice?.NOTI_SEQ}</dd>
              </dl>
              <dl>
                <dt>작성자</dt>
                <dd>{notice?.NOTI_NAME}</dd>
              </dl>
              <dl>
                <dt>작성일</dt>
                <dd>{notice?.NOTI_AT}</dd>
              </dl>
              <dl>
                <dt>조회수</dt>
                <dd>{notice?.NOTI_VIEWS}</dd>
              </dl>
            </div>
            <div className="cont">{notice?.NOTI_TEXT}</div>
          </div>
          <div className="bt_wrap">
            <Link to="/NoticeList" className="on">
              목록
            </Link>
            {/* <Link to="/NoticeEdit">수정</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeView;
