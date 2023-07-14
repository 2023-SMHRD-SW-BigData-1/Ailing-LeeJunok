import React from 'react'
import {Link} from 'react-router-dom';
// import "../../Postcss/css.css"
import "../Postcss/css.css"

const EventView02 = () => {
  return (
    <div class ="notice_css">
    <div class="contentBox">
        <div class="board_title">
        <strong>이벤트 게시판</strong>
            <p> Pill. Yo 의 이벤트 게시판 입니다. </p>
        </div>
        <div class="board_view_wrap">
            <div class="board_view">
                <div class="title_name">
                    Personal Management
                </div>
                <div class="info">
                    <dl>
                        <td>번호</td>
                        <dd>2</dd>
                    </dl>
                    <dl>
                        <dt>글쓴이</dt>
                        <dd>정준옥</dd>
                    </dl>
                    <dl>
                        <dt>작성일</dt>
                        <dd>2023.07.15</dd>
                    </dl>
                    <dl>
                        <dt>조회</dt>
                        <dd>172</dd>
                    </dl>
                </div>

                <div class="cont">

                    <img src='https://ifh.cc/g/xLJJ7x.jpg'
                    width={972}
                    height={350} >
                    </img>
                        지금당장 무료신청!
                </div>
            </div>
            <div class="bt_wrap">
                <Link to='/EventList' class="on">목록</Link>
                {/* <Link to='/EventEdit'>수정</Link> */}
            </div>
        </div>
    </div>
    </div>




  )
}

export default EventView02