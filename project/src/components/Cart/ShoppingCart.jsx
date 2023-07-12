import React from 'react'

const ShoppingCart = () => {
  return (
    <div>
                    <div className='page-body'>
                    <div className='hd'>
                        <h2>장바구니</h2>
                        </div>
                        <div className='tbl'>
                            <table summary='번호, 사진, 제품명, 수량, 가격, 배송비, 취소'>
                                <colgroup>
                                    <col width='75'/>
                                    <col width='150'/>
                                    <col width='200'/>
                                    <col width='115'/>
                                    <col width='105'/>
                                    <col width='95'/>
                                    <col width='95'/>
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>
                                        <div className="tb-center">번호</div>
                                        </th>
                                        <th>
                                        <div className="tb-center">사진</div>
                                        </th>
                                        <th>
                                        <div className="tb-center">제품명</div>
                                        </th>
                                        <th>
                                        <div className="tb-center">수량</div>
                                        </th>
                                        <th>
                                        <div className="tb-center">가격</div>
                                        </th>
                                        <th>
                                        <div className="tb-center">배송비</div>
                                        </th>
                                        <th>
                                        <div className="tb-center">취소</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <td colSpan='8'>
                                            <div className='tb-center tb-normal'>장바구니에 담긴 상품이 없습니다.</div>
                                        </td>
                                    </tr>
                                </tfoot>
                                <tbody></tbody>
                                </table>
                        </div>
                        <div className='orderBtn'>
                            <a href="" className='cartBtn'>주문하기</a>
                            <a href="" className='cartBtn'>계속 쇼핑하기</a>
                            <a href="" className='cartBtn'>장바구니 비우기</a>
                        </div>
                        <h2 className="tit-page tit-space">관심상품</h2>
                        <div className='tbl'>
                            <table summary='사진, 제품명, 수량, 재고, 가격, 처리'>
                                <caption>관심상품</caption>
                                <colgroup>
                                <col width='200'/>
                                <col width='200' />
                                <col width='110' />
                                <col width='100' />
                                <col width='100' />
                                <col width='95' />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th scope='col'>
                                        <div className="tb-center">사진</div>
                                        </th>
                                        <th scope='col'>
                                        <div className="tb-center">제품명</div>
                                        </th>
                                        <th scope='col'>
                                        <div className="tb-center">수량</div>
                                        </th>
                                        <th scope='col'>
                                        <div className="tb-center">재고</div>
                                        </th>
                                        <th scope='col'>
                                        <div className="tb-center">가격</div>
                                        </th>
                                        <th scope='col'>
                                        <div className="tb-center">처리</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                        </div>
                     </div>
                    </div>
  )
}

export default ShoppingCart