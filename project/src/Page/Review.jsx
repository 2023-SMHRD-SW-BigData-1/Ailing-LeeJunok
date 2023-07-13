
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
                    member : '정준옥1',
                    text : '안녕하세요 병든 정준옥입니다.',
                    url : "https://www.mypuzzle.co.kr/upload/review/202302/rv_20230210_9627_56057.png",
                    },
                    {name:['밀크시슬','비타민'],
                    date : `${year}-${month}-${day}`,
                    member : '이수호2',
                    text : '안녕하세요 병든 이수호입니다.',
                    url : "https://www.mypuzzle.co.kr/upload/review/202302/rv_20230210_9627_56057.png",
                    },
                    {name:['밀크시슬','비타민'],
                    date : `${year}-${month}-${day}`,
                    member : '이수호3',
                    text : '안녕하세요 병든 이수호입니다.',
                    url : "https://www.mypuzzle.co.kr/upload/review/202302/rv_20230210_9627_56057.png",
                    },
                    {name:['밀크시슬','비타민'],
                    date : `${year}-${month}-${day}`,
                    member : '이수호4',
                    text : '안녕하세요 병든 이수호입니다.',
                    url : "https://www.mypuzzle.co.kr/upload/review/202302/rv_20230210_9627_56057.png",
                    },
                    {name:['밀크시슬','비타민'],
                    date : `${year}-${month}-${day}`,
                    member : '이수호5',
                    text : '안녕하세요 병든 이수호입니다.',
                    url : "https://www.mypuzzle.co.kr/upload/review/202302/rv_20230210_9627_56057.png",
                    },
                    {name:['밀크시슬','비타민'],
                    date : `${year}-${month}-${day}`,
                    member : '이수호6',
                    text : '안녕하세요 병든 이수호입니다.',
                    url : "https://www.mypuzzle.co.kr/upload/review/202302/rv_20230210_9627_56057.png",
                    },
                    {name:['밀크시슬','비타민'],
                    date : `${year}-${month}-${day}`,
                    member : '이수호7',
                    text : '안녕하세요 병든 이수호입니다.',
                    url : "https://www.mypuzzle.co.kr/upload/review/202302/rv_20230210_9627_56057.png",
                    },
                    {name:['밀크시슬','비타민'],
                    date : `${year}-${month}-${day}`,
                    member : '이수호8',
                    text : '안녕하세요 병든 이수호입니다.',
                    url : "https://www.mypuzzle.co.kr/upload/review/202302/rv_20230210_9627_56057.png",
                    },
                    {name:['밀크시슬','비타민'],
                    date : `${year}-${month}-${day}`,
                    member : '이수호9',
                    text : '안녕하세요 병든 이수호입니다.',
                    url : "https://www.mypuzzle.co.kr/upload/review/202302/rv_20230210_9627_56057.png",
                    },
                    {name:['밀크시슬','비타민'],
                    date : `${year}-${month}-${day}`,
                    member : '이수호10',
                    text : '안녕하세요 병든 이수호입니다.',
                    url : "https://www.mypuzzle.co.kr/upload/review/202302/rv_20230210_9627_56057.png",
                    },
                    {name:['밀크시슬','비타민'],
                    date : `${year}-${month}-${day}`,
                    member : '이수호11',
                    text : '안녕하세요 병든 이수호입니다.',
                    url : "https://www.mypuzzle.co.kr/upload/review/202302/rv_20230210_9627_56057.png",
                    },
                    {name:['밀크시슬','비타민'],
                    date : `${year}-${month}-${day}`,
                    member : '이수호12',
                    text : '안녕하세요 병든 이수호입니다.',
                    url : "https://www.mypuzzle.co.kr/upload/review/202302/rv_20230210_9627_56057.png",
                    }
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