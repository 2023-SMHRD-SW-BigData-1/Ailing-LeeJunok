import React, {Component} from "react";

class KakaoLogin extends Component{
  componentDidMount(){
    const kakaoScript = document.createElement('script1');
    kakaoScript.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
    document.head.appendChild(kakaoScript);

    kakaoScript.onload = () => {
      window.Kakao.init('de36d8fe1967fbd98d21cd3b2961d8f9');
      window.Kakao.Auth.createLoginButton({
        container : "#kakao-login-btn",
        success : (auth) =>{
          console.log("카카오 로그인", auth);
          window.Kakao.API.request({
            url: "/v2/user/me",
            success : (res)=>{
              console.log("사용자정보",res);
            },
            fail:(err) => {
              console.log(err);
            },
                      });
            },
            fail:(err) =>{
              console.log(err);
            },
              });
    };
  }

  render(){
    return <button type="button" id ="kakao-login-btn"></button>
  }


}
export default KakaoLogin;


// const navigate = useNavigate();
  
// // 카카오 로그인 api
// const Rest_api_key='de36d8fe1967fbd98d21cd3b2961d8f9' //REST API KEY
// const redirect_uri = 'http://localhost:3000' //Redirect URI
// // oauth 요청 URL
// const kakaoURL = `https://kauth.kakao.com/Login02/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
// const handleLogin = ()=>{
//   window.location.href = kakaoURL
// }


// const KakaoLogin = () => {
//   const CLIENT_ID = `${process.env.REACT_APP_REST_API_KEY}`;
//   const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_URL}`;
//   const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`

//   return(
//       <img
//           alt="카카오 로그인"
//           src="image/kakaoLogin.png"
//           width="255"
//           height="35"
//           style={{margin: '0px 24px 16px 24px'}}
//           onClick={() => window.location.href = kakaoURL}
//       />
//   )
// }

// export default KakaoLogin;



// import { useEffect } from "react";
// import axios from "axios"

// const KakaoCallback = () => {
//   useEffect(() => {
//       const params= new URL(document.location.toString()).searchParams;
//       const code = params.get('code');
//       const grantType = "authorization_code";
//       const REST_API_KEY = `${process.env.REACT_APP_REST_API_KEY}`;
//       const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_URL}`;

//       axios.post(
//           `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
//           {},
//           { headers: { "Content-type": "application/x-www-form-urlencoded;charset=utf-8" } }
//       )
//       .then((res: any) => {
//           console.log(res);
//           const { access_token } = res.data;
//           axios.post(
//               `https://kapi.kakao.com/v2/user/me`,
//               {},
//               {
//                   headers: {
//                       Authorization: `Bearer ${access_token}`,
//                       "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
//                   }
//               }
//           )
//           .then((res: any) => {
//               console.log('2번쨰', res);
//           })
//       })
//       .catch((Error: any) => {
//           console.log(Error)
//       })
//   }, [])
  
//   return(
//       <>
//       </>
//   )
// }
// export default KakaoCallback;