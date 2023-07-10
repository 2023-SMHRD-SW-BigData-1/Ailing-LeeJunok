import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function LogInUI({navigation}) {
  return (
    <Container component="main" maxWidth="xs">
              <Box
          sx={{
            marginTop: 8,
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
      label="기억하기"
      />
      <Button type="submit" fullWidth
              variant="contained" sx={{ mt: 2, mb: 2 }}> 로그인 </Button>

        <Grid container>
          <Grid item xs>
        <Link>비밀번호 찾기</Link>
          </Grid>
        
          <Grid item>
        <Link>회원가입하기</Link>
          </Grid>
        </Grid>
          </Box>
        

    </Container>
  );
}

