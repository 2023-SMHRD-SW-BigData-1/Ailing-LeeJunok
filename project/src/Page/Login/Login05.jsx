import { Checkbox } from '@mui/material';
import React from 'react'

const Join = () => {
  return (
    <div>
        <form
            onSubmit={(e)=>{
            e.preventDefault();
             // alert('실행')
            }}
            className='flex flex-col w-60 items-start p-4'
        >
            <div> 회원가입 </div>

        <div>
            <div>이름 입력(*)</div>
            <input type ="text" className="w-full border-2 border-black"
            placeholder="이름 입력"/>

            <div>ID 입력(*)</div>
            <input type ="email" className="w-full border-10 border-black"
            placeholder="이메일 입력"/>
            
            <div>PW 입력(*)</div>
            <input type ="password" className="w-full border-2 border-black"
            placeholder="PW 입력"/>

            <div>PW 확인(*)</div>
            <input type ="password" className="w-full border-2 border-black"
            placeholder="PW 확인"/>

            <div> 생년월일 </div>
            <input type ="date" className="w-full border-2 border-black"/>

            <div> 성별 </div>
            <div>
            <Checkbox></Checkbox>남<Checkbox></Checkbox>여
            </div>
            
            <div> 주소 </div>
            <input type ="address"/>
            <br/>
            <button type="submit" className="btn btn-sm ml-auto mt-4">회원가입</button>
            
            <button type="submit" className="btn btn-sm ml-auto mt-4">가입취소</button>
        </div>


            
            </form>
        </div>

        
  )
}

export default Join