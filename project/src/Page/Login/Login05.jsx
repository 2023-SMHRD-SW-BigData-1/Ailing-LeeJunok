
// ===============================================
// import { Checkbox } from '@mui/material';
import React from 'react'
import '../../css/Join/Join.css'

const Join = () => {
  return (
    <>
        <div className='mainSec'><h2>회원가입</h2></div>
        <div className="joinContainer">
    <form action="doJoin" method="POST" className='joinForm' onsubmit="DoJoinForm__submit(this); return false;">
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
        <input name="name" type="password" className="name" placeholder="이름"/>
      </div>
       <div className="textForm">
        <input name="email" type="text" className="email" placeholder="이메일"/>
      </div>
      <div className="textForm">
        <input name="cellphoneNo" type="number" className="cellphoneNo" placeholder="전화번호"/>
      </div>
      <div className="textForm">
        <input name="address" type="address" className="address" placeholder="주소"/>
      </div>
      <div className="textForm">
        <input name="birth" type="date" className="birth" placeholder="생년월일"/>
      </div>
      <div className="textForm">
        <label>
      남<input name="gender" type="radio" className="gender" placeholder="성별" value='male'/>
      </label>
      <label>
      여<input name="gender" type="radio" className="gender" placeholder="성별" value='female'/>
      </label>
      </div>
      <input type="submit" className="joinBtn" value="SIGN IN"/>
    </form>
    </div>
    </>
    
     )
    }

    export default Join



    //------------------------------------------------
    {/* <div>
        <form
            onSubmit={(e)=>{
            e.preventDefault();
             // alert('실행')
            }}
            className='flex flex-col w-60 items-start p-4'
        > 
            <table width="400px">

        <div className='joinTable'>
            <div id = "USER_NAME">이름 입력(*)</div>
            <input type ="text" className="w-full border-2 border-black"
            placeholder="이름 입력"/>

            <div id = "USER_ID">ID 입력(*)</div>
            <input type ="email" className="w-full border-10 border-black"
            placeholder="이메일 입력"/>
            
            <div>PW 입력(*)</div>
            <input type ="password" className="w-full border-2 border-black"
            placeholder="PW 입력"/>

            <div>PW 확인(*)</div>
            <input type ="password" className="w-full border-2 border-black"
            placeholder="PW 확인"/>

            <div id = "USER_NAME">전화번호</div>
            <input type ="text" className="w-full border-2 border-black"
            placeholder="전화"/>

            <div> 생년월일 </div>
            <input type ="date" className="w-full border-2 border-black"/>

            <div> 성별 </div>
            <div>
            <Checkbox name='gender' value='male'></Checkbox>남<Checkbox name='gender' value='female'></Checkbox>여
            </div>
            
            <div> 주소 </div>
            <input type ="address"/>
            <br/>
            <button type="submit" className="btn btn-sm ml-auto mt-4">회원가입</button>
            
            <button type="submit" className="btn btn-sm ml-auto mt-4">가입취소</button>
        </div>


            </table>
            </form>
        </div> */}

        
