import React from 'react'
import {Link} from 'react-router-dom';
// import "../../Postcss/css.css"
import "../Postcss/css.css"

const EventList = () => {
  return (
    <div class ="notice_css">
    <div class="contentBox">
        <div className='mainSec prl'><img src="https://ifh.cc/g/Sd6TGX.jpg" alt="" /><h2>이벤트 게시판</h2></div>
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
                    <div class="num">3</div>
                    <div class="title_name"><Link to='/EventView03'>제목</Link></div>
                    <div class="writer"><Link to='/EventView03'>이름</Link></div>
                    <div class="date"><Link to='/EventView03'>YYYY.MM.DD</Link></div>
                    <div class="count"><Link to='/EventView03'>12</Link></div>
                </div>
                <div className='write_list'>
                    <div class="num">2</div>
                    <div class="title_name"><Link to='/EventView02'>제목</Link></div>
                    <div class="writer"><Link to='/EventView02'>이름</Link></div>
                    <div class="date"><Link to='/EventView02'>YYYY.MM.DD</Link></div>
                    <div class="count"><Link to='/EventView02'>12</Link></div>
                </div>
                <div>
                    <div class="num">1</div>
                    <div class="title_name"><Link to='/EventView01'>제목</Link></div>
                    <div class="writer"><Link to='/EventView01'>이름</Link></div>
                    <div class="date"><Link to='/EventView01'>YYYY.MM.DD</Link></div>
                    <div class="count"><Link to='/EventView01'>12</Link></div>
                </div>

            </div>


        </div>
    </div>

    </div>
)
}



export default EventList