import React from 'react'
import {Link} from 'react-router-dom';
// import "../../Postcss/css.css"
import "../Postcss/css.css"

const NoticeWrite = () => {
  return (

    <div class ="notice_css">
    <div class="contentBox">
    <div class="board_title">
    <strong>공지사항</strong>
            <p> Pill. Yo 의 공지사항 입니다. </p>
    </div>
    <div class="board_write_wrap">
        <div class="board_write">
            <div class="title_name">
                <dl>
                    <dt>제목</dt>
                    <dd><input type="text" placeholder="제목 입력"/></dd>
                </dl>
            </div>
            <div class="info">
                <dl>
                    <dt>글쓴이</dt>
                    <dd><input type="text" placeholder="글쓴이 입력"/></dd>
                </dl>
                <dl>
                    <dt>비밀번호</dt>
                    <dd><input type="password" placeholder="비밀번호 입력"/></dd>
                </dl>
            </div>
            <div class="cont">
                <textarea placeholder="내용 입력"></textarea>
            </div>
        </div>
        <div class="bt_wrap">
            <Link to='/NoticeView' class="on">등록</Link>
            <Link to='/NoticeList'>취소</Link>
        </div>
    </div>
</div>
</div>
  )
}

export default NoticeWrite