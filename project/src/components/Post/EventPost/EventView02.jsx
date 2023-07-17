import React from 'react'
import {Link} from 'react-router-dom';
// import "../../Postcss/css.css"
import "../Postcss/css.css"

const EventView02 = () => {
  return (
    <div class ="Notice_css">
    <div class="board_wrap">
        <div class="board_title">
            <strong>게시판 이름</strong>
            <p>게시판 설명</p>
        </div>
        <div class="board_view_wrap">
            <div class="board_view">
                <div class="title_name">
                    글 제목
                </div>
                <div class="info">
                    <dl>
                        <td>번호</td>
                        <dd>2</dd>
                    </dl>
                    <dl>
                        <dt>글쓴이</dt>
                        <dd>필요</dd>
                    </dl>
                    <dl>
                        <dt>작성일</dt>
                        <dd>2023.07.14</dd>
                    </dl>
                    <dl>
                        <dt>조회</dt>
                        <dd>52</dd>
                    </dl>
                </div>
                <div class="cont">
                    내용
                </div>
            </div>
            <div class="bt_wrap">
                <Link to='/EventList' class="on">목록</Link>
                <Link to='/EventEdit'>수정</Link>
            </div>
        </div>
    </div>
    </div>




  )
}

export default EventView02