import React, { useState } from 'react';
import '../css/ProductDetail/ProdDet.css'

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState('https://weekly.chosun.com/news/photo/202301/23968_46018_5858.gif');
    // 아래의 onclick이벤트 이전 디폴트로 넣어둘 사진
  const selectImage = (source) => {
    setSelectedImage(source);
  };

  return (
    <div className="product_area">
      <div className="left_area">
        <div className="thumb">
          <img src={selectedImage} alt="멀티비타민 미네랄 139" />
          <div className="thumb_tab">
            <a href="javascript:" className="" onClick={() => selectImage('https://weekly.chosun.com/news/photo/202301/23968_46018_5858.gif')}>
              <img src="https://weekly.chosun.com/news/photo/202301/23968_46018_5858.gif" alt="" />
            </a> 
            {/* 첫번째 이미지(렌더링시 나올 기본 이미지[setUseState에서 해뒀던 이미지와 동일하게 기입]) */}
            <a href="javascript:" className="on" onClick={() => selectImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTND4YvL9DmcArsEZJopHJzRgnRFbMZiTqLSAp2VsjZDzK-U2UdXCKFkF9ejoVnIDACkaM&usqp=CAU')}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTND4YvL9DmcArsEZJopHJzRgnRFbMZiTqLSAp2VsjZDzK-U2UdXCKFkF9ejoVnIDACkaM&usqp=CAU" alt="" />
            </a>
            {/* 두번째 이미지(선택해서 바뀔 이미지), 아마 이 자리를 제품 정보 이미지로 대체하면 괜찮을 것으로 보임 */}
            {/* 각각의 주소에 맞게 DB에서 입력받아와 입력할 것 */}
          </div>
        </div>
      </div>
      <div className="right_area">
        <div className="info_div">
          <div className="name">
            <h1 className="tit">약품명</h1>
          </div>
          <div className="price_div">
            <div className="price">
              <p className="won"><span>(가격)</span>원</p>
              <p className="join_coupon">여기엔 뭐 적지?</p>
            </div>
            <div className="price_desc">
              <p className="desc">
                진짜 <span className="won"><strong> 여기엔 뭘 적어야? </strong> 하는거지? </span>
                <br /><span className="day">대충 메이플스토리 곧 6차 출시 바로 다운</span>
              </p>
            </div>
          </div>
          <div className="ingest_div">
            <div className="info info_effect">
              <div className="info eat tab_01">
                
                <h2 className="tit">1회 섭취</h2>
                <p className="desc">정, 한 팩 1알</p>
                {/* 이 부분 디자인은 어떻게 바꿔야 할지 감이 안 와서 일단은 미완 */}
              </div>
              <div className="info info_effect">
                <div className="ico_wrap">
                  
                </div>
                <h2 className="tit">기능</h2>
                <p className="desc">영양보충</p>
                    {/* 이 부분 디자인은 어떻게 바꿔야 할지 감이 안 와서 일단은 미완 */}
              </div>
            </div>
          </div>
          <div className="btn_form">
            <a href="구매 주소로 들어가야함" className="check_btn pur"><span>버튼1</span></a>
            <a href="장바구니로 들어가야함" className="check_btn pur"><span>버튼2</span></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
