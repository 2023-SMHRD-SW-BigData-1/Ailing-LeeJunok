import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useNavigate} from 'react-router-dom';


// Login[nn]
// 01 : 메인
// 02 : 카카오 [삭제예정]
// 03 : 네이버
// 04 : 이메일
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

    // 네이버 로그인 api
    const NAVER_CLIENT_ID = process.env.x1JgF_YVet3WiGsR1lUU
    const REDIRECT_URL = "http://localhost:3000"
    const STATE = "false";
    const NAVER_AUTH_URL=`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URL}`;

    const NaverLogin = () =>{
      window.location.herf = NAVER_AUTH_URL
    }




return (
    <Container component="main" maxWidth="xs">
      <Box
          sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            >


      <Typography component="h1" variant="h5">
      </Typography>
          
      <Avatar sx={{ m: 1, bgcolor: 'black' }}>
      <LockOutlinedIcon />
      </Avatar>
          로그인 


      <Button onClick={handleLogin}
      size ="large" fullWidth
        variant="contained" sx={{mt:5, mb:1, color : "#191919",  backgroundColor:"#FEE500",
        ":hover":{backgroundColor :"#FEE500" }}}
      >카카오로 로그인하기</Button>



      <Button onClick={NaverLogin}
       size ="large" fullWidth
        variant="contained" sx={{m:1, color : "white",  backgroundColor:"#03C75A",
        ":hover":{backgroundColor :"#03C75A" }}}
      >네이버로 로그인하기</Button>
      


        <Button onClick={()=>{navigate('/Login04');}}
            size ="large" fullWidth
            variant="contained" sx={{m:1, color : "rgba(52, 113, 220, 0.70)",  backgroundColor:"#F3F8FE" ,
            ":hover":{backgroundColor :"#F3F8FE" }}}>
            이메일로 로그인하기</Button>
          
     

      <Grid container>
        <Grid item xs ><Button onClick={()=>{navigate('/Login05');}}
        >회원가입</Button></Grid>
        <Grid item ><Button onClick={()=>{navigate('/Login06');}}
        >아이디/패스워드 찾기</Button></Grid>
        {/* <Grid item xs><Button>비밀번호 찾기</Button></Grid> */}
      </Grid>
      </Box>
        

    </Container>
  );
}
  
  
  
  {/* <TextField
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
      label="기억하기"
      /> */}

            {/* <Button type="submit" fullWidth
              variant="contained" sx={{ mt: 2, mb: 2 }}> 로그인 </Button> */}

                      {/* <Grid item xs><Link>비밀번호 찾기</Link></Grid>
        <Grid item ><Link>회원가입</Link></Grid> */}


  //       <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
  //       <LockOutlinedIcon />
  // </Avatar>

  // import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import { createTheme, ThemeProvider } from '@mui/material/styles';


