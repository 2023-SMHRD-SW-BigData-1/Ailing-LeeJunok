


import React from 'react'
import ReviewCard from './ReviewCard'

const Review = () => {


    const coustom = [{em:'https://iam-iam.com/static/review-best-0931d5449644c5c6dada2a3ea827dd07.png', emt:'최고예요',name:'이**님',img:'https://cdn.monolabs.io/reviews/20230116_120255.jpg?w=200',text:'골다공증 치료제로 칼슘과 마그네슘을 매월 1회씩 꼭 보내주셔서 저도 매일매일 있지 않고 잘 복용하고 있어요.효과는 잘 모르지만 기분에 뼈가  튼튼해 지는 니낌입니다.'},
                    { em:'https://iam-iam.com/static/review-best-0931d5449644c5c6dada2a3ea827dd07.png', emt:'최고예요',name:'커피**님',img:'https://cdn.monolabs.io/reviews/image.jpg?w=200',text:"한포씩 먹을수있는게 간편하고 너무좋아요약통으로 먹을땐 휴대도 불편하고 마음먹고 챙겨먹었어야 했는데 포장된상태로 가지고다니면서 먹을수도있고 너무좋습니다"},
                    { em:'https://iam-iam.com/static/review-reliable-5c267f78ef050701f095c11407247c82.png', emt:'든든해요',name:'원*님',img:'https://cdn.monolabs.io/reviews/20230113_185640.jpg?w=200',text:'고르는 것도 일인데, 이젠 영양제도 맞춤으로 설계해주는 시대라니 감사해요 🤍'},
                    { em:'https://iam-iam.com/static/review-best-0931d5449644c5c6dada2a3ea827dd07.png', emt :'최고예요', name :'진호진호***님',img:'https://cdn.monolabs.io/reviews/20230114_150008.jpg?w=200',text:'내 몸에 맞춘 필수요소의 성분으로 구성된 영양제라 안심하고 먹습니다'},
                    { em:'https://iam-iam.com/static/review-good-4947e2741dc44339aff164935092add6.png', emt :'좋아요',name:'쌍둥***님',img:'https://cdn.monolabs.io/reviews/20230129_184041.jpg?w=200',text:'잘  챙겨먹고 있어요.주위에 열심히 홍보도 합니다.'},
                    { em:'https://iam-iam.com/static/review-best-0931d5449644c5c6dada2a3ea827dd07.png', emt :'최고예요',name:'웅*님',img:'https://cdn.monolabs.io/reviews/52206A74-A1AE-435C-9A5C-71781EB24CF8.jpeg?w=200',text:'하나씩 다 챙겨 먹기 귀찮아서 평생 잘 안 챙겨 먹던 영양제들인데 한번에 다 담겨져서 한 포씩 뜯어 먹을 수 있도록 되어 있어서 챙겨 먹기 너무 편합니다. 극 P인 성향의 사람들은 이거 드시면 됩니다!'},
                    { em:'https://iam-iam.com/static/review-best-0931d5449644c5c6dada2a3ea827dd07.png', emt:'최고예요',name:'Cho***님',img:'	https://cdn.monolabs.io/reviews/20230203_120958.jpg?w=200',text:'나만의 맞춤 영양제라 좋습니다매일 먹기쉽게 포장된것도 귀엽구요 알크기가 생각보다 커서 놀랬는데 알려주신 방법대로하니 큰알약도 한번에 꿀-꺽 삼키는게 어렵지 않네요 아직 먹은지 한달이 안되어 효과는 잘 모르겠지만 꾸준히 먹어보려구요'},
                    { em:'https://iam-iam.com/static/review-easy-b65ff2db99bbed349fa4b73473091ee7.png', emt:'편리해요',name:'혜*님',img:'https://cdn.monolabs.io/reviews/A3B83317-F0FD-436B-8606-4AAA40316EA5.jpeg?w=200',text:'영양제 통으로 된건 맨날 까먹고 돈만 날리는데 소분되서 한포씩 챙겨먹을 수 있어서 까먹지 않고 먹게됩니다 =] 아이엠에서 지정한 시간에 알림도 보내줘서 꾸준히 영양제를 챙겨먹게 되네욥!💞'},
                    { em:'https://iam-iam.com/static/review-reliable-5c267f78ef050701f095c11407247c82.png', emt:'든든해요',name:'Ryan***님',img:'https://cdn.monolabs.io/reviews/20230329_110152.jpg?w=200',text:'너무나 편리하게 챙겨먹고 있습니다. 단순히 먹기만 편한게 아니라, 잘 챙겨먹을 수 있도록 안내해주는 서비스까지 너무나 좋습니다^^'},
                    { em:'https://iam-iam.com/static/review-love-ec797f2062056854f46d268729592b88.png', emt:'사랑해요',name:'D**님',img:'https://cdn.monolabs.io/reviews/.jpg?w=200',text:'영양제에 원래 관심이 많아서 이것저것 많이 구매했었는데 꾸준히 먹기가 진짜 어렵더라구요.. 아이엠 구독하고 제대로 습관 들어서 이제 섭취알람 아니어도 잘챙겨먹어요~! 저처럼 영양제 꾸준히 잘 못드시는 분들 있으면 너무 추천해요ㅎㅎ'},
                    { em:'https://iam-iam.com/static/review-cool-21508fbf0a38d126be785525d5eabecd.png', emt:'멋져요',name:'s*님',img:'https://cdn.monolabs.io/reviews/20230215_134952.jpg?w=200',text:'나만의 맞춤 영양제라 좋습니다 매일 먹기쉽게 포장된것도 귀엽구요 알크기가 생각보다 커서 놀랬는데 알려주신 방법대로하니 큰알약도 한번에 꿀-꺽 삼키는게 어렵지 않네요 아직 먹은지 한달이 안되어 효과는 잘 모르겠지만 꾸준히 먹어보려구요' },
                    {  em:'https://iam-iam.com/static/review-easy-b65ff2db99bbed349fa4b73473091ee7.png', emt:'편리해요',name:'혜*님',img:'https://cdn.monolabs.io/reviews/A3B83317-F0FD-436B-8606-4AAA40316EA5.jpeg?w=200',text:'영양제 통으로 된건 맨날 까먹고 돈만 날리는데 소분되서 한포씩 챙겨먹을 수 있어서 까먹지 않고 먹게됩니다 =] 아이엠에서 지정한 시간에 알림도 보내줘서 꾸준히 영양제를 챙겨먹게 되네욥!💞'},
                    {  em:'https://iam-iam.com/static/review-reliable-5c267f78ef050701f095c11407247c82.png', emt:'든든해요',name:'원*님',img:'https://cdn.monolabs.io/reviews/20230113_185640.jpg?w=200',text:'고르는 것도 일인데, 이젠 영양제도 맞춤으로 설계해주는 시대라니 감사해요 🤍'},
                    {  em:'https://iam-iam.com/static/review-love-ec797f2062056854f46d268729592b88.png', emt:'사랑해요',name:'D**님',img:'https://cdn.monolabs.io/reviews/.jpg?w=200',text:'영양제에 원래 관심이 많아서 이것저것 많이 구매했었는데 꾸준히 먹기가 진짜 어렵더라구요.. 아이엠 구독하고 제대로 습관 들어서 이제 섭취알람 아니어도 잘챙겨먹어요~! 저처럼 영양제 꾸준히 잘 못드시는 분들 있으면 너무 추천해요ㅎㅎ'}]

    return (
    <div className='Review slider'>
        <div className='slide-track'>
            {coustom.map(item=> <a href="/review" class="slide"><ReviewCard em={item.em} emt={item.emt} name={item.name} url={item.img} text={item.text}/></a>)}
        </div>


    </div>
    )
}

export default Review