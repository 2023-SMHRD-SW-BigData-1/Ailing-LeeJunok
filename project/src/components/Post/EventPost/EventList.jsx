import React from 'react'
import {Link} from 'react-router-dom';
// import "../../Postcss/css.css"
import "../Postcss/css.css"

const EventList = () => {
  return (
    <div class ="notice_css">
    <div class="contentBox">
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

            
                <div className='write_list'>
                    <div class="num">3</div>
                    <div class="title_name"><Link to='/EventView03'>내맘대로 하루한포!</Link></div>
                    <div class="writer"><Link to='/EventView03'>정준옥</Link></div>
                    <div class="date"><Link to='/EventView03'>2023.07.19</Link></div>
                    <div class="count"><Link to='/EventView03'>121</Link></div>
                </div>
                <div className='write_list'>
                    <div class="num">2</div>
                    <div class="title_name"><Link to='/EventView02'>Personal Management</Link></div>
                    <div class="writer"><Link to='/EventView02'>정준옥</Link></div>
                    <div class="date"><Link to='/EventView02'>2023.07.15</Link></div>
                    <div class="count"><Link to='/EventView02'>172</Link></div>
                </div>
                <div className='write_list'>
                    <div class="num">1</div>
                    <div class="title_name"><Link to='/EventView01'>리뷰쓰고 포인트받자! #내돈내산</Link></div>
                    <div class="writer"><Link to='/EventView01'>정준옥</Link></div>
                    <div class="date"><Link to='/EventView01'>2023.07.10</Link></div>
                    <div class="count"><Link to='/EventView01'>312</Link></div>
                </div>

            </div>
            <div class="board_page">
                <a href="#" class="bt first"></a>
                <a href="#" class="bt prev"></a>
                <a href="#" class="num on">1</a>
                <a href="#" class="num">2</a>
                <a href="#" class="num">3</a>
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