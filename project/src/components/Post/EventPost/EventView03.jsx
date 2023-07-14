import React from 'react'
import {Link} from 'react-router-dom';
// import "../../Postcss/css.css"
import "../Postcss/css.css"

const EventView03 = () => {
  return (
    <div class ="Notice_css">
    <div class="board_wrap">
        <div class="board_title">
        <strong>이벤트 게시판</strong>
            <p> Pill. Yo 의 이벤트 게시판 입니다. </p>
        </div>
        <div class="board_view_wrap">
            <div class="board_view">
                <div class="title_name">
                    내맘대로 하루한포!
                </div>
                <div class="info">
                    <dl>
                        <td>번호</td>
                        <dd>3</dd>
                    </dl>
                    <dl>
                        <dt>글쓴이</dt>
                        <dd>정준옥</dd>
                    </dl>
                    <dl>
                        <dt>작성일</dt>
                        <dd>2023.07.19</dd>
                    </dl>
                    <dl>
                        <dt>조회</dt>
                        <dd>33</dd>
                    </dl>
                </div>
                

                <div class="cont">

                    <img src='https://ifh.cc/g/VRjT4R.jpg'
                                        width={972}
                                        height={350} >
                    </img>
                    
                    골라서 하루한포!
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

export default EventView03