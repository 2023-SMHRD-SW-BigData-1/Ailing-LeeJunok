
// import '../css/Introduce/introduceDesign.css'

import React from 'react'


const Introduce1 = () => (
  <div className='contentBox' >
  
  <div className="bg-gray-200" style={{
    display:'inline-block',
    alignItems: 'center',

  }}>

    <nav id="nav" className="fixed inset-x-0 top-0 flex flex-row justify-between z-10 text-white bg-transparent">
      {/* Nav Items Working on Tablet & Bigger Sceen */}
      {/* Burger Nav Button on Mobile */}
      <div id="nav-open" className="p-4 md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-menu"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </div>
    </nav>

    <div id="up" className="headers">
      {/* Overlay Background + Center Control */}
      {/* <div
        className="h-screen bg-opacity-50 bg-black flex items-center justify-center"
        style={{ background: 'rgba(0,0,0,0.5)' }}
      > */}
        {/* <div className="mx-2 text-center"> */}
          {/* <h1 className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
            <span className="text-white">Pill.Yo</span> 
          </h1>
          <h2 className="text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight">
            더 나은 <span className="text-white">내일을 위한</span> 소비와 <span className="text-white">투자</span>
          </h2> */}
        {/* </div> */}
      {/* </div> */}
      {/* <main>
      <section id="about" className="flex flex-col items-center justify-center bg-white"> */}

        <div className="flex flex-col md:flex-row rounded overflow-hidden"
        style={{
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          marginLeft:'400px'
        }}>
           
           <img
            src="https://ifh.cc/g/YpXmYv.png" // 대문 이미지(가장 큰 이미지)는 css 파일 1줄 주석 참고
            className="h-48 md:w-1/2 md:h-screen"
            loading="lazy"
            style={{
              maxWidth:'1000px',
            }}
            
          />  
           <img
            src="https://ifh.cc/g/CJk5r2.png" // 대문 이미지2(가장 큰 이미지)는 css 파일 1줄 주석 참고
            className="h-48 md:w-1/2 md:h-screen"
            loading="lazy"
            style={{
              maxWidth:'1000px',
            }}
          />  
           <img
            src="https://ifh.cc/g/aJdpld.png" // 대문 이미지2(가장 큰 이미지)는 css 파일 1줄 주석 참고
            className="h-48 md:w-1/2 md:h-screen"
            loading="lazy"
            style={{
              maxWidth:'1000px',
            }}
          />
          <img src="https://ifh.cc/g/LqAgtz.jpg" className="h-48 md:w-1/2 md:h-screen"
            loading="lazy"
            style={{
              float: 'left',
              width:'1000px',
              height:'1000px'
            }} />  
          {/* <div className='logotext'>
            <h1 className="font-extrabold text-4xl mt-1 mb-2 mm:my-4 border-b-4 border-indigo-600 self-start leading-tight">
              Pill.YO
            </h1>
            </div>
          <div className="mt-1 md:mt-4 m-4 flex self-center flex-col">
            <p className="text-lg">
              필요 사이트 소개란 입니다
              <br />
              필요는 영양제 소비가 늘어나는 시대에 과도한 양으로 인해 처리하기 어려운 영양제를 기부한다는 목적으로 만든 사이트
              <li>
                <span>병든이준옥팀</span>
                <ul>김민준</ul>
                <ul>이수호</ul>
                <ul>이준</ul>
                <ul>정병인</ul>
                <ul>정준옥</ul>
              </li>
            </p>
            <div className="flex"></div>
          </div> */}
        </div>
      {/* </section> */}

      {/* <section id="whyus" className="flex flex-col sm:flex-row flex-wrap justify-between">
        <div className="flex flex-col items-center w-full sm:w-1/2 bg-white p-4">
          <div className="bg-indigo-100 rounded-full p-4">
            <svg
              className="w-16 h-16 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            //   className="feather feather-layout"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
          </div>
          <h3 className="text-4xl font-bold text-indigo-600">전자상거래</h3>
          <p className="mb-4">결제API를 토대로 진행되는 프로젝트 메인 주제</p>
        </div>
        <div className="flex flex-col items-center w-full sm:w-1/2 bg-white p-4">
          <div className="bg-indigo-100 rounded-full p-4">
            <svg
              className="w-16 h-16 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            //   className="feather feather-layout"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
          </div>
          <h3 className="text-4xl font-bold text-indigo-600">기부</h3>
          <p className="mb-4">팔고 남은 영양제 일부를 사회 취약 계층에 기부</p>
        </div>
        <div className="flex flex-col items-center w-full sm:w-1/2 bg-white p-4">
          <div className="bg-indigo-100 rounded-full p-4">
            <svg
              className="w-16 h-16 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            //   className="feather feather-layout"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
          </div>
          <h3 className="text-4xl font-bold text-indigo-600">크롤링</h3>
          <p className="mb-4">다량의 정보를 크롤링으로 정보 수집</p>
        </div>
        <div className="flex flex-col items-center w-full sm:w-1/2 bg-white p-4">
          <div className="bg-indigo-100 rounded-full p-4">
            <svg
              className="w-16 h-16 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            //   className="feather feather-layout"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
          </div>
          <h3 className="text-4xl font-bold text-indigo-600">React &amp; Node</h3>
          <p className="mb-4">웹과 서버를 구성</p>
        </div>
      </section>

      <section id="showcase" className="h-screen bg-white p-4 px-8 flex flex-col justify-center items-center">
        <div className="flex justify-center">
          <h1 className="font-extrabold text-4xl mt-1 mb-2 mm:my-4 border-b-4 border-indigo-600 self-start leading-tight">
            적용된 대표 기능 소개
          </h1>
        </div>
      </section> */}
    {/* </main> */}
    </div>

    


  </div>

  </div>
);

export default Introduce1;
