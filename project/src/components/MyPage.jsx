import React from 'react'

const MyPage = () => {
  return (
    <div>
        <div>MYPAGE</div>
        <div id='content'>
            <div id='mypage'>
                <div className='page-body'>
                    {/* 최근 주문 정보 */}
                    <div className='hd'>
                        <h3>최근 주문 정보</h3>
                    </div>
                    <div className='tbl'>
                        <table summary='주문일자, 상품명, 결제금액, 주문상세'>
                            <caption>최근 주문 정보 목록</caption>
                            <colgroup>
                            <col width='150'/>
                            <col width='*' />
                            <col width='140' />
                            <col width='140' />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>
                                    <div className="tb-center">DATE</div>
                                    </th>
                                    <th>
                                    <div className="tb-center">PRODUCT</div>
                                    </th>
                                    <th>
                                    <div className="tb-center">COST</div>
                                    </th>
                                    <th>
                                    <div className="tb-center">DETAIL</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan='4'>
                                        <div className='tb-center'>주문 내역이 없습니다.</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* 최근 등록 게시글 */}
                    <div className='hd'>
                        <h3>최근 등록 게시글</h3>
                    </div>
                    <div className='tbl'>
                        <table summary='등록일자, 제목, 게시판'>
                            <caption>최근 등록 게시물 목록</caption>
                            <colgroup>
                            <col width='150'/>
                            <col width='*'/>
                            <col width='200'/>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>
                                    <div classNames="tb-center">DATE</div>
                                    </th>
                                    <th>
                                    <div classNames="tb-center">SUBJECT</div>
                                    </th>
                                    <th>
                                    <div classNames="tb-center">BOARD</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan='3'>
                                        <div className='tb-center'>등록한 게시글이 없습니다.</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* 관심 상품 정보 */}
                    <div className='hd'>
                        <h3>관심 상품 정보</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyPage