
import React, { useContext, useEffect, useState } from 'react'
import { productContext } from '../../context/ProductContext'



const MainDepth = ({name,url}) => {

    const {product,setProduct,setProductName} = useContext(productContext)
    
    // for (let i = 0; i < productjs.length; i++) {
    //     if (productjs[i].PROD_CATEGORY.indexOf('스트레스') !=-1) {
    //         console.log(productjs[i]);
    //     }
    // }
    

    
    const changeCard = ()=>{

            switch (name) {
                case '면역':setProductName('면역') 
                break;
                case '다이어트':setProductName('다이어트') 
                break;
                case '피부':setProductName('피부') 
                break;
                case '스트레스':setProductName('스트레스') 
                break;
                case '피로':setProductName('피로') 
                break;
                case '간 건강':setProductName('간 건강') 
                break;
                case '눈 건강':setProductName('눈 건강') 
                break;
                case '장 건강':setProductName('장 건강') 
                break;
                case '수면':setProductName('수면') 
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