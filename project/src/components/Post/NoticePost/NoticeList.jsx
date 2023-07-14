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
                    <div class="title_name"><Link to='/NoticeView05'>정준옥</Link></div>
                    <div class="writer"><Link to='/NoticeView05'>정준옥</Link></div>
                    <div class="date"><Link to='/NoticeView05'>2023.07.19</Link></div>
                    <div class="count"><Link to='/NoticeView05'>271</Link></div>
                </div>
                <div>
                    <div class="num">4</div>
                    <div class="title_name"><Link to='/NoticeView04'>정병인</Link></div>
                    <div class="writer"><Link to='/NoticeView04'>정병인</Link></div>
                    <div class="date"><Link to='/NoticeView04'>2023.07.18</Link></div>
                    <div class="count"><Link to='/NoticeView04'>162</Link></div>
                </div>
                <div>
                    <div class="num">3</div>
                    <div class="title_name"><Link to='/NoticeView03'>이수호</Link></div>
                    <div class="writer"><Link to='/NoticeView03'>이수호</Link></div>
                    <div class="date"><Link to='/NoticeView03'>2023.07.17</Link></div>
                    <div class="count"><Link to='/NoticeView03'>112</Link></div>
                </div>
                <div>
                    <div class="num">2</div>
                    <div class="title_name"><Link to='/NoticeView02'>김민준</Link></div>
                    <div class="writer"><Link to='/NoticeView02'>김민준</Link></div>
                    <div class="date"><Link to='/NoticeView02'>2023.07.14</Link></div>
                    <div class="count"><Link to='/NoticeView02'>214</Link></div>
                </div>
                <div>
                    <div class="num">1</div>
                    <div class="title_name"><Link to='/NoticeView01'>이준</Link></div>
                    <div class="writer"><Link to='/NoticeView01'>이준</Link></div>
                    <div class="date"><Link to='/NoticeView01'>2023.07.13</Link></div>
                    <div class="count"><Link to='/NoticeView01'>345</Link></div>
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
                <Link to='/NoticeWrite' class="on">등록</Link>
                {/* <Link to='/NoticeEdit'>수정</Link> */}
            </div>
        </div>
    </div>

    </div>
  )
  }



export default NoticeList