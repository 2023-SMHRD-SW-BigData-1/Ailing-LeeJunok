import React from 'react'

const MyPage = () => {
  return (
    <div>
 <div id='contentWrapper'>
     <div id='contentWrap'>
        <div id='content'>
            <div id='mypage'>
                <div className='page-body'>
                    {/* 최근 주문 정보 */}
                    <div className='hd'>
                        <h2>최근 주문 정보</h2>
                        <p className='dsc'>
                        <span className='fc-blue'>[이준]</span>
                        님께서 주문하신 내역입니다.
                        </p>
                    </div>
                    <div className='tbl'>
                        <table summary='상품번호, 주문일자, 상품명, 결제금액, 주문상세, 배송현황'>
                        
                            <colgroup>
                            <col width='100'/>
                            <col width='150'/>
                            <col width='200' />
                            <col width='140' />
                            <col width='140'/>
                            <col width='100' />
                            </colgroup>
                            {/* <table> */}
                            <thead>
                                <tr>
                                    <th>
                                    <div className="tb-center">NUMBER</div>
                                    </th>
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
                                    <th>
                                    <div className="tb-center">Delivery</div>
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
                  
                    {/* 관심 상품 정보 */}
                    <div className='hd'>
                        <h2>관심 상품 정보</h2>
                    </div>
                    <div className='tbl'>
                    <th>
                    <table>
                        
                        <div>등록한 관심상품이 없습니다.</div>
                    </table>
                    </th>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default MyPage