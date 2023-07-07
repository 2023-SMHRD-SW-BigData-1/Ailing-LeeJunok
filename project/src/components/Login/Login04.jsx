import React, {Component} from 'react'

class NaverLogin extends Component{
  componentDidMount(){
    const NaverScript = document.createElement('script');
    NaverScript.src=
    "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js";
    NaverScript.type='text/javascript';
    document.head.appendChild(NaverScript);

    NaverScript.onload = () => {
      const naverLogin = new window.naver.LoginWithNaverId({
        clientId:"x1JgF_YVet3WiGsR1lUU",
        callbackUrl : "http://localhost:3000",
        callbackHandle : true,
        isPopup : false,
        loginButton:{
          color : "green",
          type : 3,
          height : 85,
        },
      });
      naverLogin.init();
      naverLogin.logout();
      naverLogin.getLoginStatus((status)=>{
        if(status){
          console.log("Naver 로그인 상태", naverLogin.user);
          const {id, email, gender} =naverLogin.user;

          if(gender == undefined) {
            alert('성별 필수동의')
            naverLogin.reprompt();
            return;
          }
        } else {
          console.log('Naver 비로그인');
        }
      });
    };
  }

render(){
  return<div id='naverIdLogin'> </div>
}
}

export default NaverLogin;