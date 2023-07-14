import React from 'react'
import {Link} from 'react-router-dom';
// import "../../Postcss/css.css"
import "../Postcss/css.css"

const NoticeView04 = () => {
  return (
    <div class ="Notice_css">
    <div class="board_wrap">
        <div class="board_title">
        <strong>공지사항</strong>
            <p> Pill. Yo 의 공지사항 입니다. </p>
        </div>
        <div class="board_view_wrap">
            <div class="board_view">
                <div class="title_name">
                    정병인
                </div>
                <div class="info">
                    <dl>
                        <td>번호</td>
                        <dd>4</dd>
                    </dl>
                    <dl>
                        <dt>글쓴이</dt>
                        <dd>정병인</dd>
                    </dl>
                    <dl>
                        <dt>작성일</dt>
                        <dd>2023.07.18</dd>
                    </dl>
                    <dl>
                        <dt>조회</dt>
                        <dd>162</dd>
                    </dl>
                </div>
                <div class="cont">
                    내용
                </div>
            </div>
            <div class="bt_wrap">
                <Link to='/NoticeList' class="on">목록</Link>
                <Link to='/NoticeEdit'>수정</Link>
            </div>
        </div>
    </div>
    </div>




  )
}

export default NoticeView04