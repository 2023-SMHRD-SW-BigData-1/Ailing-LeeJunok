import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../Postcss/css.css";

const EventWrite = () => {
    const navigate = useNavigate();
  
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [text, setText] = useState("");
  
    const handleRegister = async () => {
        let body = {
            title: title,
            name: name,
            text: text
        };

        const response = await axios.post('http://localhost:8888/EventWrite', body);
        const newEvent = response.data.event;

        if (newEvent) {
            // 서버에 수정된 값을 가진 공지 업데이트
            
            // EventLis 경로로 이동하거나 적절한 조치를 취합니다.
            navigate(`/EventLis`);
        }
    };

    const handleCancel = () => {
        // 이동하기 전에 필요한 작업 수행

        // EventList로 이동합니다.
        // navigate('/EventLis');
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
                    <strong>이벤트 게시판</strong>
                    <p>Pill.Yo의 이벤트 게시판 입니다.</p>
                </div>
                <div className="board_write_wrap">
                    <div className="board_write">
                        <div className="title_name">
                            <dl>
                                <dt>제목</dt>
                                <dd>
                                    <input type="text" placeholder="제목을 작성해주세요" onChange={titleHandler} />
                                </dd>
                            </dl>
                        </div>
                        <div className="info">
                            <dl>
                                <dt>글쓴이</dt>
                                <dd>
                                    <input type="text" placeholder="이름을 작성해주세요" onChange={nameHandler} />
                                </dd>
                            </dl>
                        </div>
                        <div className="cont">
                            <textarea placeholder="들어갈 내용을 작성해주세요" onChange={textHandler}></textarea>
                        </div>
                    </div>
                    <div className="bt_wrap">
                        <Link to={'/EventList'} onClick={handleRegister} className="on">
                            등록
                        </Link>
                        <Link to={'/EventList'} onClick={handleCancel}>
                            취소
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventWrite;
