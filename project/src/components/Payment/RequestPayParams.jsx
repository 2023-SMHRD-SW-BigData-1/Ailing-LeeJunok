import React from 'react';

function Payment() {
  function onClickPayment() {
    const { IMP } = window;
    IMP.init('imp56415161');

    const data = {
      pg: 'html5_inicis',                           // PG사
      pay_method: 'card',                           // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`,   // 주문번호
      amount: 1000,                                 // 결제금액
      name: '결제테스트',                  // 주문명
      buyer_name: '정준옥',                           // 구매자 이름
      buyer_tel: '01022417221',                     // 구매자 전화번호
      buyer_email: 'wnsdhr7221@gmail.com',               // 구매자 이메일
      buyer_addr: '스인재',                    // 구매자 주소
      buyer_postcode: '00123',                      // 구매자 우편번호
      
    };

    IMP.request_pay(data, callback);
  }
  
  function callback(response) {
    const {
      success,
      merchant_uid,
      error_msg,
    } = response;

    if (success) {
      alert('결제 성공');
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }

  return (
    
    <button onClick={onClickPayment}>결제하기</button>
    
  );
}