
import React from 'react'




const MainDepth = ({name,url,setproductname}) => {

    
    
    // for (let i = 0; i < productjs.length; i++) {
    //     if (productjs[i].PROD_CATEGORY.indexOf('스트레스') !=-1) {
    //         console.log(productjs[i]);
    //     }
    // }
    

    
    const changeCard = ()=>{

            switch (name) {
                case '면역':setproductname('면역') 
                break;
                case '다이어트':setproductname('다이어트') 
                break;
                case '피부':setproductname('피부') 
                break;
                case '스트레스':setproductname('스트레스') 
                break;
                case '피로':setproductname('피로') 
                break;
                case '간 건강':setproductname('간 건강') 
                break;
                case '눈 건강':setproductname('눈 건강') 
                break;
                case '장 건강':setproductname('장 건강') 
                break;
                case '수면':setproductname('수면') 
                break;
                default:
                
                    break;
            }

        }


    return (
        <>
            <button onClick={changeCard}><img src={url} alt="준비중" /><p>{name}</p></button>
        </>
    )
}

export default MainDepth