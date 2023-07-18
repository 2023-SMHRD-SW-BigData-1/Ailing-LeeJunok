import '../../css/Modals/Modal.css';

import '../../css/Modals/Modal.css'

import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContext';
import swal from 'sweetalert'


const Modal = ({info,open,close}) => {
    const navigate = useNavigate();
    
    const {isLogin} = useContext(LoginContext);
    let terms = '* 본 제품은 공정거래위원회 고시 소비자분쟁해결기준에 의겨 교환 또는 보상 받을 수 있습니다.\n * 본 제품은 질병의 예방 및 치료를 위한 의약품이 아닙니다.\n * 이상 사례 신고는 1234-5678\n * 이 제품은 알레르기 발생 가능성이 있는 알류(가금류), 메밀, 땅콩, 밀, 고등어, 게, 새우, 돼지고기, 복숭아, 토마토,\n아황산류, 호두, 닭고기, 쇠고기, 오징어, 조개류(굴, 전복, 홍합 포함), 잣을 사용한 제품과 같은 제조 시설에서 제조하고 있습니다.'

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
                        <span className='priceNumber'>{info.PROD_PRICE.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span><span className="priceText"> 원</span>
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
                    <p>{'- 용량 -\n'+info.PROD_DOSE}</p>
                    <p>{'- 유통기한 -\n'+info.PROD_SOBI}</p>
                    <p>{'- 원료명 및 함량 -\n'+info.PROD_MATE}</p>
                    <p>{'- 기능정보 -\n'+info.PROD_FUNTION}</p>
                    <p>{'- 섭취량 -\n'+info.PROD_NUTRITION}</p>
                    <p>{'- 주의 사항 -\n'+info.PROD_CAUTION}</p>
                    <p>{'- 보관 방법 -\n'+info.PROD_KEEP}</p>
                    <hr/>
                    <p className='terms'>{terms}</p>
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
