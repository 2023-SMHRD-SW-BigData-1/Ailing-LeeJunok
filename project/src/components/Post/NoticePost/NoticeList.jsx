import React from 'react'
import {Link} from 'react-router-dom';
// import "../../Postcss/css.css"
import "../Postcss/css.css"

const NoticeList = () => {
  return (
    <div class ="notice_css">
    <div class="contentBox">
        <div class="board_title">
            <strong>공지사항</strong>
            <p> Pill. Yo 의 공지사항 입니다. </p>
        </div>
        <div class="board_list_wrap">
            <div class="board_list">
                <div class="top">
                    <div class="num">번호</div>
                    <div className="title_name">제목</div>
                    <div class="writer">글쓴이</div>
                    <div class="date">작성일</div>
                    <div class="count">조회수</div>
                </div>


                <div>
                    <div class="num">5</div>
                    <div class="title_name"><Link to='/NoticeView' onclick>이준</Link></div>
                    <div class="writer">관리자</div>
                    <div class="date">23.07.18</div>
                    <div class="count">26</div>
                </div>
                <div>
                    <div class="num">4</div>
                    <div class="title_name"><Link to='/NoticeView'>정준옥</Link></div>
                    <div class="writer">관리자</div>
                    <div class="date">23.07.17</div>
                    <div class="count">88</div>
                </div>
                <div>
                    <div class="num">3</div>
                    <div class="title_name"><Link to='/NoticeView'>정병인</Link></div>
                    <div class="writer">관리자</div>
                    <div class="date">23.07.16</div>
                    <div class="count">57</div>
                </div>
                <div>
                    <div class="num">2</div>
                    <div class="title_name"><Link to='/NoticeView'>이수호</Link></div>
                    <div class="writer">관리자</div>
                    <div class="date">23.07.15</div>
                    <div class="count">32</div>
                </div>
                <div>
                    <div class="num">1</div>
                    <div class="title_name"><Link to='/NoticeView'>김민준</Link></div>
                    <div class="writer">관리자</div>
                    <div class="date">23.07.14</div>
                    <div class="count">48</div>
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
                <Link to='/NoticeWrite' class="on">등록</Link>
                {/* <Link to='/NoticeEdit'>수정</Link> */}
            </div>
        </div>
    </div>

    </div>
  )
  }



export default NoticeList