import React from 'react'
import {Link} from 'react-router-dom';
// import "../../Postcss/css.css"
import "../Postcss/css.css"

const EventList = () => {
  return (
    <div class ="notice_css">
    <div class="board_wrap">
        <div class="board_title">
            <strong>이벤트 게시판</strong>
            <p> Pill. Yo 의 이벤트 게시판 입니다. </p>
        </div>
        <div class="board_list_wrap">
            <div class="board_list">
                <div class="top">
                    <div class="num">번호</div>
                    <div className="title_name">제목</div>
                    <div class="writer">글쓴이</div>
                    <div class="date">작성일</div>
                    <div class="count">조회</div>
                </div>


                <div>
                    <div class="num">1</div>
                    <div class="title_name"><Link to='/EventView03'>정준옥</Link></div>
                    <div class="writer">필요</div>
                    <div class="date">2023.07.14</div>
                    <div class="count">41</div>
                </div>
                <div>
                    <div class="num">2</div>
                    <div class="title_name"><Link to='/EventView02'>이 준</Link></div>
                    <div class="writer">필요</div>
                    <div class="date">2023.07.14</div>
                    <div class="count">52</div>
                </div>
                <div>
                    <div class="num">3</div>
                    <div class="title_name"><Link to='/EventView01'>이수호</Link></div>
                    <div class="writer">필요</div>
                    <div class="date">2023.07.14</div>
                    <div class="count">110</div>
                </div>


            </div>
            <div class="board_page">
                <a href="#" class="bt first"></a>
                <a href="#" class="bt prev"></a>
                <a href="#" class="num on">1</a>
                <a href="#" class="num">2</a>
                <a href="#" class="num">3</a>
                <a href="#" class="num">4</a>
                <a href="#" class="num">5</a>
                <a href="#" class="bt next"></a>
                <a href="#" class="bt last"></a>
            </div>
            <div class="bt_wrap">
                <Link to='/EventWrite' class="on">등록</Link>
                <Link to='/EventEdit'>수정</Link>
            </div>
        </div>
    </div>

    </div>
  )
  }



export default EventList