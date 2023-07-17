import '../../css/Login/Login.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function LogInUI() {
  const navigate = useNavigate();
  const Rest_api_key = 'de36d8fe1967fbd98d21cd3b2961d8f9'; // REST API KEY
  const redirect_uri = 'http://localhost:3000'; // Redirect URI
  const cocoaURL = `https://kauth.cocoa.com/Login02/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  const handleLogin = () => {
    window.location.href = cocoaURL;
  };

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const idHandler = (e) => {
    e.preventDefault();
    setId(e.target.value);
  };

  const pwHandler = (e) => {
    e.preventDefault();
    setPw(e.target.value);
  };

  const handleJoinSubmit = async (event) => {
    event.preventDefault();
  
    let body = {
      userData: {
        user_id: id,
        user_pw: pw,
      },
    };

    try {
      const response = await axios.post('/user/login', body);
      console.log(response.data);
import { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';



// Login[nn]
// 01 : 메인
// 02 : 카카오 [삭제예정]
// 03 : 이메일
// 04 : 네이버
// 05 : 회원가입
// 06 : 아이디/패스워드 찾기



export default function LogInUI() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['user_id']);
    // 카카오 로그인 api
    const Rest_api_key='de36d8fe1967fbd98d21cd3b2961d8f9' //REST API KEY
    const redirect_uri = 'http://localhost:3000' //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/Login02/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
      window.location.href = kakaoURL
    }

    // document.querySelector('.img__btn').addEventListener('click',()=>{
    //   document.querySelector('.cont').classList.toggle('s--signup');
    // });

    window.onload = function(){
      document.querySelector('.img__btn').addEventListener('click',()=>{
        document.querySelector('.cont').classList.toggle('s--signup')
      });
    }
    const [id, SetId] = useState("");
    const [pw, SetPw] = useState("");
  
 

  
    const idHandler = (e) => {
      e.preventDefault();
  
      SetId(e.target.value);
    };
  
    const pwHandler = (e) => {
      e.preventDefault();
      SetPw(e.target.value);
    };
  
    
  
    const handleloginSubmit = async (event) => {
      event.preventDefault();
  
      let body = {
        user_id: id,
        user_pw: pw
      };
  
      console.log(body);
      


      try {
        const response = await axios.post('http://localhost:8888/login', body);
        console.log(response);
        // 응답에 대한 처리를 수행합니다 (성공 메시지 표시, 리다이렉트 등)
        if (response.data.result === 'Success!!') {
         
              // 로그인 성공 시 쿠키에 user_id 값을 저장합니다.
        setCookie('user_id', id, { path: '/' });
          
          // 로그인 성공 시, 원하는 페이지로 이동합니다.
          navigate('/');
        } else {
          // 로그인 실패 시, 에러 메시지를 표시하거나 다른 작업을 수행합니다.
        alert('로그인에 실패하셨습니다.')
        navigate('/login')
        }
      } catch (error) {
        console.error(error);
        // 에러에 대한 처리를 수행합니다 (에러 메시지 표시 등)
        alert('로그인에 실패하셨습니다.')
        navigate('/login')
      }
    };

    

return (
  <div id='mainContentWrapper'>
    <div className='contentBox'>
  
      if (response.data.result === 'Success!!') {
        // 로그인 성공 시, 원하는 페이지로 이동합니다.
        navigate('/');
      } else {
        // 로그인 실패 시, 에러 메시지를 표시하거나 다른 작업을 수행합니다.
        console.log('로그인 실패');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="mainContentWrapper">
      <div className="contentBox">
        <Container component="main" maxWidth="xs" style={{ height: '500px' }}>
          <Box sx={{ marginTop: 13, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography component="h1" variant="h5"></Typography>
            <Avatar sx={{ m: 1, bgcolor: 'black' }}>
              <LockOutlinedIcon />
            </Avatar>
            로그인
            <TextField
              margin="normal"
              label="아이디"
              required
              fullWidth
              name="email address"
              autoComplete="email"
              // autoFocus
              onChange={idHandler}
              value={id}
            />
            <TextField
              label="비밀번호"
              type="password"
              required
              fullWidth
              name="password"
              autoComplete="current-password"
              onChange={pwHandler}
              value={pw}
            />
            <FormControlLabel
              className="control-id"
              control={<Checkbox value="remember" color="primary" />}
              label="기억하기"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 0 }}>
              로그인
            </Button>
            <Button
              onClick={handleLogin}
              size="large"
              fullWidth
              variant="contained"
              sx={{
                mt: 1,
                mb: 2,
                color: '#191919',
                backgroundColor: '#FEE5',
                '&:hover': { backgroundColor: '#FEE500' },
              }}
            >
              사진 버튼
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="join">회원가입</Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </div>
  );
}


      <Typography component="h1" variant="h5">
      </Typography>
          
      <Avatar sx={{ m: 1, bgcolor: 'black' }}>
      <LockOutlinedIcon />
      </Avatar>
          LOGIN 



          <TextField
            margin = 'normal'
            label="ID 입력" 
            required
            fullWidth
            name="email"
            autoComplete="id"
            onChange={idHandler}
            // autoFocus
          />
          <TextField
            label="비밀번호 입력"
            type="password"
            required fullWidth
            name = "password"
            autoComplete='current-password'
            onChange={pwHandler}
          />
        <FormControlLabel className='id-m' control ={       
          <Checkbox value="remember" color="primary" />}
          label="아이디 저장"
          />
          
                <Button type="submit" fullWidth
                        variant="contained" sx={{ mt: 2, mb: 0 }}
                        onClick={handleloginSubmit}> 로그인 </Button>

      <Button onClick={handleLogin}
      size ="large" fullWidth
        variant="contained" sx={{ mt:1 , mb:2, color : "#191919",  backgroundColor:"#FEE500",
        ":hover":{backgroundColor :"#FEE500" }}}>
      카카오 로그인</Button>



<Grid container>
  <Grid item xs><Link to='join'>회원가입하기</Link></Grid>
  <Grid item ><Link>아이디/비밀번호 찾기</Link></Grid>
</Grid>
      </Box>
      </Container>      
      </div >
    </div >
)}
