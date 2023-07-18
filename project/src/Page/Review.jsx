import '../css/Review/Review.css'
import React, { useEffect, useState } from 'react'
import ReviewHead from '../components/Review/ReviewHead'
import Paging from '../components/Review/Paging';
import ReviewCard from '../components/Review/ReviewCard';

const Review = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    const [reviewCount,setReviewCount] = useState(0);
    const [bordList, setBordList ] = useState([]);
    const [page, setPage] = useState(1);
    let cnt = 0;


    const info = [{name:['밀크시슬','비타민','영양제','test','집에가고싶다','빨리'],
                    date : `${year}-${month}-${day}`,
                    member : '정준옥',
                    text : '안녕하세요 병든 정준옥입니다.',
                    url : "https://www.mypuzzle.co.kr/upload/review/202302/rv_20230210_9627_56057.png",
                    },{ name:['마그네슘','멀티비타민&미네랄'],date : `${year}-${month}-${day}`, member:'이**님',url:'https://cdn.monolabs.io/reviews/20230116_120255.jpg?w=200',text:'골다공증 치료제로 칼슘과 마그네슘을 매월 1회씩 꼭 보내주셔서 저도 매일매일 있지 않고 잘 복용하고 있어요.효과는 잘 모르지만 기분에 뼈가  튼튼해 지는 니낌입니다.'},
                    { name:['MSM','칼슘'],date : `${year}-${month}-${day}`, member:'커피**님',url:'https://cdn.monolabs.io/reviews/image.jpg?w=200',text:"한포씩 먹을수있는게 간편하고 너무좋아요약통으로 먹을땐 휴대도 불편하고 마음먹고 챙겨먹었어야 했는데 포장된상태로 가지고다니면서 먹을수도있고 너무좋습니다"},
                    {name:['멀티비타민&미네랄','프로바이오틱스'],date : `${year}-${month}-${day}`, member:'원*님',url:'https://cdn.monolabs.io/reviews/20230113_185640.jpg?w=200',text:'고르는 것도 일인데, 이젠 영양제도 맞춤으로 설계해주는 시대라니 감사해요 🤍'},
                    { name:['테아닌'],date : `${year}-${month}-${day}`, member :'진호진호***님',url:'https://cdn.monolabs.io/reviews/20230114_150008.jpg?w=200',text:'내 몸에 맞춘 필수요소의 성분으로 구성된 영양제라 안심하고 먹습니다'},
                    { name:['프로바이오틱스','루테인','코엔자임Q10'],date : `${year}-${month}-${day}`, member:'쌍둥***님',url:'https://cdn.monolabs.io/reviews/20230129_184041.jpg?w=200',text:'잘  챙겨먹고 있어요.주위에 열심히 홍보도 합니다.'},
                    {name:['피에스'],date : `${year}-${month}-${day}`,  member:'웅*님',url:'https://cdn.monolabs.io/reviews/52206A74-A1AE-435C-9A5C-71781EB24CF8.jpeg?w=200',text:'하나씩 다 챙겨 먹기 귀찮아서 평생 잘 안 챙겨 먹던 영양제들인데 한번에 다 담겨져서 한 포씩 뜯어 먹을 수 있도록 되어 있어서 챙겨 먹기 너무 편합니다. 극 P인 성향의 사람들은 이거 드시면 됩니다!'},
                    { name:['오메가3 큰캡슐','감마리놀렌산','비타민A D3 E'],date : `${year}-${month}-${day}`, member:'Cho***님',url:'	https://cdn.monolabs.io/reviews/20230203_120958.jpg?w=200',text:'나만의 맞춤 영양제라 좋습니다매일 먹기쉽게 포장된것도 귀엽구요 알크기가 생각보다 커서 놀랬는데 알려주신 방법대로하니 큰알약도 한번에 꿀-꺽 삼키는게 어렵지 않네요 아직 먹은지 한달이 안되어 효과는 잘 모르겠지만 꾸준히 먹어보려구요'},
                    { name:['잔티젠'],date : `${year}-${month}-${day}`, member:'혜*님',url:'https://cdn.monolabs.io/reviews/A3B83317-F0FD-436B-8606-4AAA40316EA5.jpeg?w=200',text:'영양제 통으로 된건 맨날 까먹고 돈만 날리는데 소분되서 한포씩 챙겨먹을 수 있어서 까먹지 않고 먹게됩니다 =] 아이엠에서 지정한 시간에 알림도 보내줘서 꾸준히 영양제를 챙겨먹게 되네욥!💞'},
                    { name:['비타민D'],date : `${year}-${month}-${day}`, member:'Ryan***님',url:'https://cdn.monolabs.io/reviews/20230329_110152.jpg?w=200',text:'너무나 편리하게 챙겨먹고 있습니다. 단순히 먹기만 편한게 아니라, 잘 챙겨먹을 수 있도록 안내해주는 서비스까지 너무나 좋습니다^^'},
                    {name:['루테인','테아닌'],date : `${year}-${month}-${day}`,  member:'D**님',url:'https://cdn.monolabs.io/reviews/.jpg?w=200',text:'영양제에 원래 관심이 많아서 이것저것 많이 구매했었는데 꾸준히 먹기가 진짜 어렵더라구요.. 아이엠 구독하고 제대로 습관 들어서 이제 섭취알람 아니어도 잘챙겨먹어요~! 저처럼 영양제 꾸준히 잘 못드시는 분들 있으면 너무 추천해요ㅎㅎ'},
                    { name:['멀티비타민&미네랄','남성 복합 비타민'],date : `${year}-${month}-${day}`, member:'s*님',url:'https://cdn.monolabs.io/reviews/20230215_134952.jpg?w=200',text:'나만의 맞춤 영양제라 좋습니다 매일 먹기쉽게 포장된것도 귀엽구요 알크기가 생각보다 커서 놀랬는데 알려주신 방법대로하니 큰알약도 한번에 꿀-꺽 삼키는게 어렵지 않네요 아직 먹은지 한달이 안되어 효과는 잘 모르겠지만 꾸준히 먹어보려구요' },
                    { name:['칼슘','아연&미네랄'],date : `${year}-${month}-${day}`,  member:'혜*님',url:'https://cdn.monolabs.io/reviews/A3B83317-F0FD-436B-8606-4AAA40316EA5.jpeg?w=200',text:'영양제 통으로 된건 맨날 까먹고 돈만 날리는데 소분되서 한포씩 챙겨먹을 수 있어서 까먹지 않고 먹게됩니다 =] 아이엠에서 지정한 시간에 알림도 보내줘서 꾸준히 영양제를 챙겨먹게 되네욥!💞'},
                    { name:['멀티비타민&미네랄','MSM'],date : `${year}-${month}-${day}`, member:'원*님',url:'https://cdn.monolabs.io/reviews/20230113_185640.jpg?w=200',text:'고르는 것도 일인데, 이젠 영양제도 맞춤으로 설계해주는 시대라니 감사해요 🤍'},
                    { name:['여성 복합 비타민'],date : `${year}-${month}-${day}`,  member:'D**님',url:'https://cdn.monolabs.io/reviews/.jpg?w=200',text:'영양제에 원래 관심이 많아서 이것저것 많이 구매했었는데 꾸준히 먹기가 진짜 어렵더라구요.. 아이엠 구독하고 제대로 습관 들어서 이제 섭취알람 아니어도 잘챙겨먹어요~! 저처럼 영양제 꾸준히 잘 못드시는 분들 있으면 너무 추천해요ㅎㅎ'},
                    {name:['멀티비타민&미네랄','프로바이오틱스'],date : `${year}-${month}-${day}`, member:'원*님',url:'https://cdn.monolabs.io/reviews/20230113_185640.jpg?w=200',text:'고르는 것도 일인데, 이젠 영양제도 맞춤으로 설계해주는 시대라니 감사해요 🤍'},
                    { name:['MSM','칼슘'],date : `${year}-${month}-${day}`, member:'커피**님',url:'https://cdn.monolabs.io/reviews/image.jpg?w=200',text:"한포씩 먹을수있는게 간편하고 너무좋아요약통으로 먹을땐 휴대도 불편하고 마음먹고 챙겨먹었어야 했는데 포장된상태로 가지고다니면서 먹을수도있고 너무좋습니다"},
                ]
            
            const [startNum,setStartNum] = useState(0);
            //const [endNum ,setEndNum] =useState(info.length-1);
            let pos = 0;
    
    useEffect(()=>{
        setReviewCount(info.length);
    },[reviewCount])

    
    useEffect(()=>{
        //0~4  1  
        //5~9   2  
        //10~14  3 
        console.log(page)
        cnt =(page-1)*5
        pos = cnt+4
        ///let endNum = startNum+4;
        if(pos>info.length){
            pos=info.length-1
        }
        let newList = info.map((item,index)=>{
        if(cnt<=index && index<=pos){
                return(
                    <ReviewCard key={index} member={item.member} name={item.name} date={item.date} text={item.text} url={item.url}/>
                )
        }      
        })
        setBordList(newList)
    } ,[page])
    
    
    return (
    <>
    <div className='mainSec Review'>
        <h2>Review</h2>
    </div>
    <div className='contentBox'>
        <ReviewHead count={reviewCount}/>
        {bordList}
        <Paging count={reviewCount} page={page} setpage={setPage} />
    </div>
    </>
    )
}

export default Review