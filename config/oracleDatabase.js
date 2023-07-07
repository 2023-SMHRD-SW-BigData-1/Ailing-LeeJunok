const bodyparser = require('body-parser')
const express = require('express')
const oracledb = require('oracledb')
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT
const path = require('path')
const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({extended:false}))
const app = express()
oracledb.initOracleClient({libDir:'C:/Users/smhrd/Desktop/oracleClient'})

// Oracle DB 서버와 연결할 프로필 정보 설정
const dbConfig = {
    user : "campus_h_230627_2",
    password : "smhrd2",
    connectString : 'project-db-stu2.smhrd.com'
}

// 미들웨어 설정(JSON을 파싱하는 미들웨어를 사용함)
app.use(express.json());

router.get('/product', async(req, res)=>{
    let connection;
    let result;
    try{
        connection = await oracledb.getConnection(dbConfig)
        result = await connection.execute("select JSON_OBJECT('prod_img', prod_img) FROM t_product");
        console.log(result.rows);

        // 응답 추가
        res.json(result.rows);
    } catch (error) {
        console.log(error);
        // 에러에 대한 응답 추가하기
        res.status(500).send(`Error: ${error.message}`);
    } finally {
        if (connection){
            try {
                await connection.close()
            } catch (error){
                console.log(error);
            }
        }
    }
    console.log(result.rows);
})

module.exports = router;