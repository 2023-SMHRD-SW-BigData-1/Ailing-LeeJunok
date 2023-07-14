import React from 'react'
import {Link} from 'react-router-dom';
// import "../../Postcss/css.css"
import "../Postcss/css.css"

const NoticeEdit = () => {
  return (
<div class ="Notice_css">
    <div class="board_wrap">
        <div class="board_title">
        <strong>공지사항</strong>
            <p> Pill. Yo 의 공지사항 입니다. </p>
        </div>
        <div class="board_write_wrap">
            <div class="board_write">
                <div class="title_name">
                    <dl>
                        <dt>제목</dt>
                        <dd><input type="text" placeholder="제목 입력" value="제목을 입력하세요"/></dd>
                    </dl>
                </div>
                <div class="info">
                    <dl>
                        <dt>글쓴이</dt>
                        <dd><input type="text" placeholder="글쓴이 입력" value="쩡준옥"/></dd>
                    </dl>
                    <dl>
                        <dt>비밀번호</dt>
                        <dd><input type="password" placeholder="비밀번호 입력" value="1234"/></dd>
                    </dl>
                </div>
                <div class="cont">
                    <textarea placeholder="내용 입력">
                        내용
                    </textarea>
                </div>
            </div>
            <div class="bt_wrap">
                <Link to='/NoticeList' class="on">수정</Link>
                <Link to='/NoticeList'>취소</Link>
            </div>
        </div>
    </div>
</div>



    
  )
}

export default NoticeEdit