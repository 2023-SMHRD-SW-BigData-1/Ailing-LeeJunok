
const SocialKakao = ()=>
{
    const Rest_api_key='de36d8fe1967fbd98d21cd3b2961d8f9' //REST API KEY
    const redirect_uri = 'http://localhost:3000/Login02' //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/Login02/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }
    return(
    <>
    <button onClick={handleLogin}>카카오 로그인</button>
    </>
    )
}
export default SocialKakao
