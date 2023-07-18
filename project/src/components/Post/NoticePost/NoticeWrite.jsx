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
        let body = {
            title: title,
            name: name,
            text: text
        };

        const response = await axios.post('http://localhost:8888/NoticeWrite', body);
        const newNotice = response.data.notice;

        if (newNotice) {
            newNotice.body.noti_seq += 1;
            newNotice.doby.noti_views = 0;

            // 서버에 수정된 값을 가진 공지 업데이트
            
            // NoticeView 경로로 이동하거나 적절한 조치를 취합니다.
            navigate('/NoticeView');
        }
    };

    const handleCancel = () => {
        // 이동하기 전에 필요한 작업 수행

        // NoticeList로 이동합니다.
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
                    <p>Pill.Yo의 공지사항</p>
                </div>
                <div className="board_write_wrap">
                    <div className="board_write">
                        <div className="title_name">
                            <dl>
                                <dt>Title</dt>
                                <dd>
                                    <input type="text" placeholder="Enter a title" onChange={titleHandler} />
                                </dd>
                            </dl>
                        </div>
                        <div className="info">
                            <dl>
                                <dt>Created by</dt>
                                <dd>
                                    <input type="text" placeholder="insert author" onChange={nameHandler} />
                                </dd>
                            </dl>
                        </div>
                        <div className="cont">
                            <textarea placeholder="Enter your text" onChange={textHandler}></textarea>
                        </div>
                    </div>
                    <div className="bt_wrap">
                        <Link to={'/NoticeView'} onClick={handleRegister} className="on">
                            registration
                        </Link>
                        <Link to={'/NoticeList'} onClick={handleCancel}>
                            cancel
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoticeWrite;
