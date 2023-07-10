import React, { useContext, useEffect, useState } from 'react'
import { productContext } from '../../context/ProductContext'
import OracleDB from 'oracledb'

const MainDepth = ({name,url}) => {

    const {setProduct,setProductName} = useContext(productContext)

    

    const changeCard = async () => {
        try {
          switch (name) {
            case '면역':
              setProductName('면역')
              const images1 = await getSelect()
              setProduct(images1)
              break;
            case '다이어트':
              setProductName('다이어트')
              const images2 = await getSelect()
              setProduct(images2)
              break;
            case '피부':
              setProductName('피부')
              const images3 = await getSelect()
              setProduct(images3)
              break;
            case '스트레스':
              setProductName('스트레스')
              const images4 = await getSelect()
              setProduct(images4)
              break;
            case '피로':
              setProductName('피로')
              const images5 = await getSelect()
              setProduct(images5)
              break;
            case '간 건강':
              setProductName('간 건강')
              const images6 = await getSelect()
              setProduct(images6)
              break;
            case '눈 건강':
              setProductName('눈 건강')
              const images7 = await getSelect()
              setProduct(images7)
              break;
            case '장 건강':
              setProductName('장 건강')
              const images8 = await getSelect()
              setProduct(images8)
              break;
            case '수면':
              setProductName('수면')
              const images9 = await getSelect()
              setProduct(images9)
              break;
            default:
              break;
          }
        } catch (error) {
          console.error('이미지 가져오기 중 오류가 발생했습니다.', error)
        }
      }
    
      return (
        <>
          <button onClick={changeCard}>
            <img src={url} alt="준비중" />
            <p>{name}</p>
          </button>
        </>
      )
    }
    
    export default MainDepth
    
    const dbConfig = {
        user: "campus_h_230627_2",
        password: "smhrd2",
        connectString: 'project-db-stu2.smhrd.com:1524/'
    }
    
    // select 제품 이미지
    async function getSelect() {
      let sql = 'select prod_img from t_product'
    
      console.log('이미지')
    
      return new Promise((resolve, reject) => {
        OracleDB.getConnection(dbConfig, (err, conn) => {
          if (err) {
            reject(err)
            return
          }
          conn.execute(sql, [], (err1, result) => {
            if (err1) {
              reject(err1)
              return
            }
            console.log(result.rows)
    
            conn.release((err2) => {
              if (err2) {
                reject(err2)
                return
              }
              console.log('db 연결해제')
    
              // 이미지 결과를 JSON 형태로 변환
              const images = result.rows.map((row) => ({ url: row.PROD_IMG }))
              resolve(images)
            })
          })
        })
      })
    }