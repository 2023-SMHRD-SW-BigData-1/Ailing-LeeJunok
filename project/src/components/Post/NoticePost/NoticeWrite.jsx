import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../Postcss/css.css";

const NoticeWrite = () => {
    const navigate = useNavigate();
  
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [pw, setPw] = useState("");
    const [text, setText] = useState("");
  
    const handleRegister = async () => {
      try {
        const response = await axios.post('/login', {
          user_id: name,
          user_pw: pw,
        });
  
        const result = response.data.result;
  
        if (result === 'Success!!') {
          // 비밀번호가 유효한 경우 등록 과정을 진행합니다.
          console.log('비밀번호가 유효합니다.');
          const response = await axios.post('/NoticeWrite', {
            title: title,
            name: name,
            pw: pw,
            text: text,
          });
  
          console.log(response.data);
        // NoticeView 경로로 이동하거나 적절한 조치를 취합니다.
        navigate('/NoticeView');
      } else {
        // 비밀번호가 유효하지 않은 경우 에러 메시지 표시 또는 적절한 조치를 취합니다.
        console.log('유효하지 않은 비밀번호입니다.');
      }
    } catch (error) {
      console.log('에러:', error);
    }
  };
  

  const handleCancel = () => {
    // 이동하기 전에 필요한 작업 수행

    // NoticeList로 이동
    navigate('/NoticeList');
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const pwHandler = (e) => {
    setPw(e.target.value);
  };

  const textHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="notice_css">
      <div className="contentBox">
        <div className="board_title">
          <strong>공지사항</strong>
          <p>Pill. Yo의 공지사항입니다.</p>
        </div>
        <div className="board_write_wrap">
          <div className="board_write">
            <div className="title_name">
              <dl>
                <dt>제목</dt>
                <dd>
                  <input type="text" placeholder="제목을 입력하세요" onChange={titleHandler} />
                </dd>
              </dl>
            </div>
            <div className="info">
              <dl>
                <dt>작성자</dt>
                <dd>
                  <input type="text" placeholder="작성자를 입력하세요" onChange={nameHandler} />
                </dd>
              </dl>
              <dl>
                <dt>비밀번호</dt>
                <dd>
                  <input type="password" placeholder="비밀번호를 입력하세요" onChange={pwHandler} />
                </dd>
              </dl>
            </div>
            <div className="cont">
              <textarea placeholder="내용을 입력하세요" onChange={textHandler}></textarea>
            </div>
          </div>
          <div className="bt_wrap">
            <button onClick={handleRegister} className="on">
              등록하기
            </button>
            <button onClick={handleCancel}>
              취소하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeWrite;
