
// ===============================================
// import { Checkbox } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../css/Join/Join.css';
import React, { useRef, useState } from 'react';
import ReactDom from 'react-dom';
import DaumPostcode from 'react-daum-postcode';

const PopupDom = ({ children }) => {
  const el = document.getElementById('popupDom');
  return ReactDom.createPortal(children, el);
};


const PopupPostCode = React.forwardRef((props, ref) => {
  
  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
  const handlePostCode = (data) => {
    
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    props.postRef.current.value = data.zonecode;
    props.addRef.current.value = fullAddress;





    props.onClose();
  };

  const postCodeStyle = {
    // display: 'block',
    top: '10%',
    height: '600px',
    width: '600px'
    
  };

  return (
    <div>
      <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} className='postCode'/>
      <button type="button" onClick={() => props.onClose()} className="postCode_btn">
        닫기
      </button>
    </div>
  );
});

const Join = () => {

//==============================================================
  const postRef = useRef();
  const addRef = useRef();

  // 팝업창 상태 관리
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true);
  };

  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  //=======================================================
  //body 데이터 작업

  const navigate = useNavigate();


  const [id, SetId] = useState("");
  const [pw, SetPw] = useState("");
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [cellphoneNo, SetCellphoneNo] = useState("");
  const [address, SetAddress] = useState("");

  const idHandler = (e) => {
    e.preventDefault();

    SetId(e.target.value);
  };

  const pwHandler = (e) => {
    e.preventDefault();
    SetPw(e.target.value);
  };

  const nameHandler = (e) => {
    e.preventDefault();
    SetName(e.target.value);
  };

  const emailHandler = (e) => {
    e.preventDefault();
    SetEmail(e.target.value);
  };

  const addressHandler = (e) => {
    e.preventDefault();
    const value = e.target.value;
    SetAddress(value);
  };


  const handleJoinSubmit = async (event) => {
    event.preventDefault();

    let body = {
      user_id: id,
      user_pw: pw,
      user_name: name,
      user_email: email,
      user_phone: cellphoneNo,
      user_addr: address,
    };

    console.log(body);

    try {
      const response = await axios.post('http://localhost:8888/login/joi', body);
      console.log(response);
      alert('회원가입에 성공하셨습니다.')
      navigate('/login');
      // 응답에 대한 처리를 수행합니다 (성공 메시지 표시, 리다이렉트 등)
    } catch (error) {
      console.error(error);
      navigate('/login/join')
      alert('회원가입에 실패하셨습니다.')
      // 에러에 대한 처리를 수행합니다 (에러 메시지 표시 등)
    }
  };


  //=====================================================
  // autohyphen

  const [num, setNum] = useState('');
  const phoneRef = useRef();

  // 휴대폰 번호 입력 함수
  const handlePhone = (e) => {
    e.preventDefault();
    SetCellphoneNo(e.target.value);
    const value = phoneRef.current.value.replace(/\D+/g, "");
    const numberLength = 11;

    let result;
    result = "";  

    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 3:
          result += "-";
          break;
        case 7:
          result += "-";
          break;

        default:
          break;
      }

      result += value[i];
    }

    phoneRef.current.value = result;

    setNum(e.target.value); 
  };

  //===================================================
  return (
    <>
    <div className='mainSec'><h2>회원가입</h2></div>
    <div className="joinContainer">
    <form action="doJoin" method="POST" className="joinForm" onSubmit={handleJoinSubmit}>
  <div className="textForm">
    <input name="loginId" type="text" className="id" placeholder="아이디" onChange={idHandler}>
    </input>
  </div>
  <div className="textForm">
    <input name="loginPw" type="password" className="pw" placeholder="비밀번호" onChange={pwHandler}/>
  </div>
  <div className="textForm">
    <input name="name" type="text" className="name" placeholder="이름" onChange={nameHandler}/>
  </div>
   <div className="textForm">
    <input name="email" type="text" className="email" placeholder="이메일" onChange={emailHandler}/>
  </div>
  <div className="textForm">
    <input name="cellphoneNo" type="tel" value={num} ref={phoneRef} onChange={handlePhone} className="cellphoneNo" placeholder="전화번호"/>
  </div>
    <input value='우편번호 찾기' name="mailNumber" type="button" className="mailNumber" placeholder="우편번호 찾기" onClick={openPostCode}/>
    <div id='popupDom'>
            {isPopupOpen && (
                <PopupDom>
                    <PopupPostCode onClose={closePostCode} postRef={postRef} addRef={addRef} onChange={addressHandler}/>
                </PopupDom>
            )}
    </div>
  <div className="textForm">
    <input name="faddress" type="text" className="faddress" placeholder="우편번호" ref={postRef} readOnly/>
  </div>
  <div className="textForm">
    <input name="address" type="text" className="address" placeholder="주소" ref={addRef} readOnly/>
  </div>
  <div className="textForm">
    <input name="detailAddress" type="text" className="detailAddress" placeholder="상세주소"/>
  </div>
  <input type="submit" className="joinBtn" value="SIGN IN"/>
</form>
</div>
</>
     )
    }
    
    export default Join
        
