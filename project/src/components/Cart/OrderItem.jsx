import React from 'react'

const OrderItem = () => {
  return (
   <div id='contentWrapper'>
    <div id='contentWrap'>
        <div id='content'>
            <div id='myOrder'>
                <div className='tit-page'>
                    <h2>주문내역</h2>
                    <p className='dsc'>
                        <span className='fc-blue'>[이준]</span>
                        님께서 주문하신 내역입니다.
                    </p>
                </div>
                <div className='page-body'>
                    <div className='table-list'>
                        <table summary='번호, 주문일자, 상품명, 결제금액, 주문상세, 배송현황'>
                            <caption>주문내역</caption>
                            <colgroup>
                            <col width="70"/>
                            <col width="100"/>
                            <col width="*"/>
                            <col width="100"/>
                            <col width="90"/>
                            <col width="90"/>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope='row'>
                                    <div className="tb-center">번호</div>
                                    </th>
                                    <th scope='row'>
                                    <div className="tb-center">주문일</div>
                                    </th>
                                    <th scope='row'>
                                    <div className="tb-center">상품명</div>
                                    </th>
                                    <th scope='row'>
                                    <div className="tb-center">결제금액</div>
                                    </th>
                                    <th scope='row'>
                                    <div className="tb-center">주문상세</div>
                                    </th>
                                    <th scope='row'>
                                    <div className="tb-center">배송현황</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan='6'>
                                    <div className="tb-center">주문내역이 없습니다.</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </div>
  )
}

export default OrderItem