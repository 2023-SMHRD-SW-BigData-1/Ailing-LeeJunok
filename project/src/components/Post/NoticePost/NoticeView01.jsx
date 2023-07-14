import React from 'react'
import {Link} from 'react-router-dom';
// import "../../Postcss/css.css"
import "../Postcss/css.css"

const NoticeView01 = () => {
  return (
    <div class ="notice_css">
    <div class="contentBox">
        <div class="board_title">
        <strong>공지사항</strong>
            <p> Pill. Yo 의 공지사항 입니다. </p>
        </div>
        <div class="board_view_wrap">
            <div class="board_view">
                <div class="title_name">
                    이준
                </div>
                <div class="info">
                    <dl>
                        <td>번호</td>
                        <dd>1</dd>
                    </dl>
                    <dl>
                        <dt>글쓴이</dt>
                        <dd>이준</dd>
                    </dl>
                    <dl>
                        <dt>작성일</dt>
                        <dd>2023.07.13</dd>
                    </dl>
                    <dl>
                        <dt>조회</dt>
                        <dd>345</dd>
                    </dl>
                </div>
                <div class="cont">
                    안녕하세요 이준입니다.
                </div>
            </div>
            <div class="bt_wrap">
                <Link to='/NoticeList' class="on">목록</Link>
                {/* <Link to='/NoticeEdit'>수정</Link> */}
            </div>
        </div>
    </div>
    </div>




  )
}

export default NoticeView01