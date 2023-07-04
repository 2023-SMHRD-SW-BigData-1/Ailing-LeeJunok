import React from 'react'

const ShoppingCart = () => {
  return (
    <div id='contentWrapper'>
        <div id='contentWrap'>
            <div id='content'>
                <div id='cartWrap'>
                    <h2 className='tit-page2'>장바구니</h2>
                    <div className='page-body'>
                        <div className='table-cart'>
                            <table summary='번호, 사진, 제품명, 수량, 가격, 배송비, 취소'>
                                <caption>장바구니 담긴 상품</caption>
                                <colgroup>
                                    <col width='75'/>
                                    <col width='90'/>
                                    <col width='*'/>
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
                            <a href="" className=''>주문하기</a>
                            <a href="" className=''>계속 쇼핑하기</a>
                            <a href="" className=''>장바구니 비우기</a>
                        </div>
                        <div className="cart-ft2">
                            " "
                        </div>
                        <h2 className="tit-page tit-space">관심상품</h2>
                        <div className='table-cart2'>
                            <table summary='사진, 제품명, 수량, 재고, 가격, 처리'>
                                <caption>관심상품</caption>
                                <colgroup>
                                <col width='110'/>
                                <col width='*' />
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
                </div>
            </div>
        </div>
  )
}

export default ShoppingCart