import React, {useEffect} from 'react';

const Payment = (effect, deps) =>{
    useEffect (()=>{
        const jquery= document.createElement('script');
        jquery.src= "https://code.jquery.com/jquery-1.12.4.min.js";
        const iamport = document.createElement('script');
        iamport.src = 'https://cdn.iamport.kr./js/iamport.payment-1.1.7.js';
        
        document.head.appendChild(jquery);
        document.head.appendChild(iamport);
        return ()=>{
            document.head.removeChild(jquery); document.head.removeChild(iamport);
        }
    }, []);

const Payment01 = () =>{
    const {IMP} = window;
    IMP.init("imp56415161");

    const data = {


        pg: 'html5_inicis.INIpayTest',                           // PG사
        pay_method: 'card',                                     // 결제수단
        merchant_uid: 'wnsdhr7221',                           // 주문번호
        amount: 1000,                                         // 결제금액
        name: '옥픽맛집',                                     // 주문명
        buyer_name: '정준옥',                                 // 구매자 이름
        buyer_tel: '01072417221',                             // 구매자 전화번호
        buyer_email: 'wnsdhr7221@gmail.com',                   // 구매자 이메일
        buyer_addr: '옥픽맛집',                              // 구매자 주소
        buyer_postcode: '01234',                             // 구매자 우편번호

    };
    IMP.request_pay(data, callback);
    }

    const callback = (response) => {
        const {success, error_msg, imp_uid, merchant_uid, pay_method, paid_amount, status } = response;
        if(success){
            alert('결제완료') ;
        }
        else {
            alert(`결제실패 : ${error_msg}`);
        }
    }

    return(
    <>
    <button onClick={Payment01}> 제발 결제좀 </button>
    </>

    )
}

export default Payment;