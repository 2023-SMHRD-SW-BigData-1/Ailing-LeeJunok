
// ===============================================
// import { Checkbox } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../css/Join/Join.css';

const Join = () => {
  const navigate = useNavigate();
  const [joinResult, setJoinResult] = useState('');

  const handleJoinSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = {
      loginId: formData.get('loginId'),
      loginPw: formData.get('loginPw'),
      loginPwConfirm: formData.get('loginPwConfirm'),
      name: formData.get('name'),
      email: formData.get('email'),
      cellphoneNo: formData.get('cellphoneNo'),
      address: formData.get('address'),
      birth: formData.get('birth'),
      gender: formData.get('gender'),
    };

    try {
      const response = await axios.post('/login/join', { userData });
      const result = response.data.result;
      setJoinResult(result);
      if (result === '가입에 성공했습니다!') {
        // 가입에 성공한 경우 로그인 페이지로 이동
        navigate('/login');
      }
    } catch (error) {
      console.log('에러 발생: ', error);
      setJoinResult('가입에 실패했습니다....');
    }
  };

  return (
    <>
      <div className='mainSec'>
        <h2>회원가입</h2>
      </div>
      <div className='joinContainer'>
        <form className='joinForm' onSubmit={handleJoinSubmit}>
          <div className='textForm'>
            <input name='loginId' type='text' className='id' placeholder='아이디' required />
          </div>
          <div className='textForm'>
            <input name='loginPw' type='password' className='pw' placeholder='비밀번호' required />
          </div>
          <div className='textForm'>
            <input
              name='loginPwConfirm'
              type='password'
              className='pw'
              placeholder='비밀번호 확인'
              required
            />
          </div>
          <div className='textForm'>
            <input name='name' type='text' className='name' placeholder='이름' required />
          </div>
          <div className='textForm'>
            <input name='email' type='text' className='email' placeholder='이메일' required />
          </div>
          <div className='textForm'>
            <input
              name='cellphoneNo'
              type='number'
              className='cellphoneNo'
              placeholder='전화번호'
              required
            />
          </div>
          <div className='textForm'>
            <input name='address' type='address' className='address' placeholder='주소' required />
          </div>
          <div className='textForm'>
            <input name='birth' type='date' className='birth' placeholder='생년월일' required />
          </div>
          <div className='textForm'>
            <label className='joinLabel'>
              <span className='joinSpan'>남</span>
              <input
                name='gender'
                type='radio'
                className='gender'
                placeholder='성별'
                value='male'
                required
              />
            </label>
            <label className='joinLabel'>
              <span className='joinSpan'>여</span>
              <input
                name='gender'
                type='radio'
                className='gender'
                placeholder='성별'
                value='female'
                required
              />
            </label>
          </div>
          <input type='submit' className='joinBtn' value='SIGN IN' />
        </form>
        {joinResult && <div>{joinResult}</div>}
      </div>
    </>
  );
};

export default Join;

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

        
