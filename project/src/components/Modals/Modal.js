
import '../../css/Modals/Modal.css'

import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContext';
import swal from 'sweetalert'


const Modal = ({info,open,close}) => {
    const navigate = useNavigate();
    
    const {isLogin} = useContext(LoginContext);

    const infoOut = () =>{
        if (isLogin===false) {
            swal ( "죄송합니다" ,  "로그인이 필요한 서비스입니다." ,  "error" )
        }else{
            navigate('/cart', {
                state: {
                    Prod_id : info.PROD_SEQ, 
                    imageURL : info.PROD_IMG, 
                    titleName : info.PROS_NAME, 
                    descriptionS : info.PROD_CATEGORY, 
                    prices : info.PROD_PRICE
                }
            });
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        }
    }
    
    return (
    <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
            <section>
            <div className='modalHead'>
                <div className='headText'>상세정보</div>
                <button className="close" onClick={close}>
                &times;
                </button>
            </div>
            <div className='modalMain'>
                <div className="product_area">
                    <div className="imgArea">
                        <img src={info.PROD_IMG} alt="준비중.." />
                    </div>
                    <div className="infoArea"> 
                    <div className="infoTop">
                        <p className='infoName'>{info.PROS_NAME}</p>
                        <p className='infoMaker'>{'('+info.PROD_MAKER+')'}</p>
                        <hr/>
                    </div>
                    <div className="infoPrice">
                        <span className='priceNumber'>{info.PROD_PRICE}</span><span className="priceText"> 원</span>
                        <p className='dayPrice'>하루 <span className='dayNumber'>{info.PROD_DAYPRICE+'원'}</span> 30일분</p>
                    </div>
                    <div className='infoCategory'>
                        <div className='taking'>
                            <div className='categoryImg'>
                                <div className='categoryBgc'>
                                    <img src='https://www.mypuzzle.co.kr/resources/images/icon/product/icn_ingest_info_cap_01.svg'></img>
                                </div>
                            </div>
                            <div className='textSuck' >
                            <p>섭취</p>
                            <p className='textFuck'>{info.PROD_INTAKE}</p>
                            </div>
                        </div>
                        <div className='func'>
                            <div className='categoryImg'>
                                <div className='categoryBgc'>
                                    <img src='https://www.mypuzzle.co.kr/resources/images/icon/health/icn_nutritional.svg'></img>
                                </div>
                            </div>
                            <div className='textSuck'>
                            <p>기능</p>
                            <p className='textFuck'>{info.PROD_CATEGORY}</p>
                            </div>
                        </div>
                    </div>
                    <div className="purchase">
                        <button className='purchaseBtn' onClick={infoOut}>장바구니 추가</button>
                    </div>
                    <div className='explanation'>
                    <p>{info.PROD_SOBI}</p>
                    <p>{info.PROD_DOSE}</p>
                    <p>{info.PROD_MATE}</p>
                    <p>{info.PROD_FUNTION}</p>
                    <p>{info.PROD_CAUTION}</p>
                    <p>{info.PROD_KEEP}</p>
                    <p>{info.PROD_NUTRITION}</p>
                    </div>

                    </div>
                </div>
            </div>

            </section>
        ) : null}
        </div>
    )
}

export default Modal;
