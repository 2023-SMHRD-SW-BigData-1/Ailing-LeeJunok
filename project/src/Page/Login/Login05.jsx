
// ===============================================
// import { Checkbox } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../css/Join/Join.css';
import React, { useRef, useState } from 'react'
import '../../css/Join/Join.css'
import ReactDom from 'react-dom';
import DaumPostcode from "react-daum-postcode";





const PopupDom = ({ children }) => {
  const el = document.getElementById('popupDom');
  return ReactDom.createPortal(children, el);
};

const PopupPostCode = React.forwardRef((props) => {
	// 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
    const handlePostCode = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

        // 실제 데이터 부분
        console.log(data)
        console.log(fullAddress) // 실제주소 : fullAddress = data.address
        console.log(data.zonecode) // 우편번호


        props.postRef.current.value = data.zonecode
        props.addRef.current.value = fullAddress


        props.onClose()
    }
 
    const postCodeStyle = {
        display: "block",
        
        top: "10%",
        width: "600px",
        height: "600px",
        padding: "7px"
      };
 
    return(
        <div>
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
            <button type='button' onClick={() => {props.onClose()}} className='postCode_btn'>닫기</button>
        </div>
    )
  })
  const Join = () => {
  // 팝업창 상태 관리
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  
  // 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }
  
  // 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }
    const postRef = useRef()
    const addRef = useRef()




  return (
    
    <>
        <div className='mainSec'><h2>회원가입</h2></div>
        <div className="joinContainer">
    <form action="doJoin" method="POST" className='joinForm' >
      <div className="textForm">
        <input name="loginId" type="text" className="id" placeholder="아이디">
        </input>
      </div>
      <div className="textForm">
        <input name="loginPw" type="password" className="pw" placeholder="비밀번호"/>
      </div>
       <div className="textForm">
        <input name="loginPwConfirm" type="password" className="pw" placeholder="비밀번호 확인"/>
      </div>
      <div className="textForm">
        <input name="name" type="text" className="name" placeholder="이름"/>
      </div>
       <div className="textForm">
        <input name="email" type="text" className="email" placeholder="이메일"/>
      </div>
      <div className="textForm">
        <input name="cellphoneNo" type="number" className="cellphoneNo" placeholder="전화번호"/>
      </div>
        <input value='우편번호 찾기' name="mailNumber" type="button" className="mailNumber" placeholder="우편번호 찾기" onClick={openPostCode}/>
        <div id='popupDom'>
                {isPopupOpen && (
                    <PopupDom>
                        <PopupPostCode onClose={closePostCode} postRef={postRef} addRef={addRef} />
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
      <div className="textForm">
        <input name="birth" type="date" className="birth" placeholder="생년월일"/>
      </div>
      <div className="textForm">
        <label className='joinLabel'>
      <span className='joinSpan'>남</span><input name="gender" type="radio" className="gender" placeholder="성별" value='male'/>
      </label>
      <label className='joinLabel'>
      <span className='joinSpan'>여</span><input name="gender" type="radio" className="gender" placeholder="성별" value='female'/>
      </label>
      </div>
      <input type="submit" className="joinBtn" value="SIGN IN"/>
    </form>
    </div>
    </>
    
    
     )
    }

    export default Join
        
