import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../Postcss/css.css";

const NoticeWrite = () => {
    const navigate = useNavigate();
  
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [text, setText] = useState("");
  
    const handleRegister = async () => {

       
        let body ={
        
            title: title,
            name: name,
            text: text
        }

          const response = await axios.post('http://localhost:8888/NoticeWrite', body) 
              
              console.log(response.data);
        // NoticeView 경로로 이동하거나 적절한 조치를 취합니다.
        // navigate('/NoticeView');
      }
  

  const handleCancel = () => {
    // 이동하기 전에 필요한 작업 수행

    // NoticeList로 이동
    // navigate('/NoticeList');
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const nameHandler = (e) => {
    setName(e.target.value);
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
            </div>
            <div className="cont">
              <textarea placeholder="내용을 입력하세요" onChange={textHandler}></textarea>
            </div>
          </div>
          <div className="bt_wrap">
            <Link to={'/NoticeView'} onClick={handleRegister} className="on">
              등록하기
            </Link>
            <Link to={'/NoticeList'} onClick={handleCancel}>
              취소하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeWrite;