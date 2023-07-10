import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useNavigate} from 'react-router-dom';
import NaverLogin from './Login04';
import KakaoLogin from './Login02';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';


// Login[nn]
// 01 : 메인
// 02 : 카카오 [삭제예정]
// 03 : 이메일
// 04 : 네이버
// 05 : 회원가입
// 06 : 아이디/패스워드 찾기





export default function LogInUI() {
  const navigate = useNavigate();
  
    // 카카오 로그인 api
    const Rest_api_key='de36d8fe1967fbd98d21cd3b2961d8f9' //REST API KEY
    const redirect_uri = 'http://localhost:3000' //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/Login02/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
      window.location.href = kakaoURL
    }




return (
  <div id='mainContentWrapper'>
    <div className='contentBox'>
  
    <Container component="main" maxWidth="xs" style={{height : '500px'}}>
      <Box
          sx={{
              marginTop: 13,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              
            }}
            >


      <Typography component="h1" variant="h5">
      </Typography>
          
      <Avatar sx={{ m: 1, bgcolor: 'black' }}>
      <LockOutlinedIcon />
      </Avatar>
          로그인 



          <TextField
            margin = 'normal'
            label="이메일 주소" 
            required
            fullWidth
            name="email"
            autoComplete="email"
            // autoFocus
          />
          <TextField
           label="비밀번호"
           type="password"
           required fullWidth
           name = "password"
           autoComplete='current-password'
           />
        <FormControlLabel control ={       
          <Checkbox value="remember" color="primary" />}
          label="아이디 저장"
          />
          
                <Button type="submit" fullWidth
                        variant="contained" sx={{ mt: 2, mb: 0 }}> 로그인 </Button>

      <Button onClick={handleLogin}
      size ="large" fullWidth
        variant="contained" sx={{mt:5, mb:1, color : "#191919",  backgroundColor:"#FEE500",
        ":hover":{backgroundColor :"#FEE500" }}}>
      카카오 로그인</Button>



<Grid container>
  <Grid item xs><Link>아이디 찾기</Link></Grid>
  <Grid item xs><Link>비밀번호 찾기</Link></Grid>
  <Grid item><Link>회원가입하기</Link></Grid>
</Grid>


      </Box>
      </Container>
      </div >
    </div >
)};