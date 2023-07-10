const express = require('express')
const app = express()

const server = app.listen(3000, () => {
    console.log('server start, port 3000')
})

const oracledb = require('oracledb')
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT

const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({extended:false}))
oracledb.initOracleClient({libDir:'C:/Users/smhrd/Desktop/oracleClient'})

app.use('/', router)

app.get('/product', async function (request, response) {
    try {
        const result = await getSelect(request, response)
        response.send(result)
    } catch (error) {
        console.log(error)
        response.sendStatus(500)
    }
})

const dbConfig = {
    user: "campus_h_230627_2",
    password: "smhrd2",
    connectString: 'project-db-stu2.smhrd.com:1524/'
}

// select 제품 이미지
async function getSelect(request, response) {
    let sql = 'select prod_img from t_product';
  
    console.log('이미지');
  
    return new Promise((resolve, reject) => {
      oracledb.getConnection(dbConfig, (err, conn) => {
        if (err) {
          reject(err);
          return;
        }
        conn.execute(sql, [], (err1, result) => {
          if (err1) {
            reject(err1);
            return;
          }
          console.log(result.rows);
  
          conn.release((err2) => {
            if (err2) {
              reject(err2);
              return;
            }
            console.log('db 연결해제');
  
            // 이미지 결과를 JSON 형태로 변환
            const images = result.rows.map((row) => ({ url: row.PROD_IMG }));
            resolve(images);
          });
        });
      });
    });
  }
  

// 제품 가격 가져오기
// async function getSelect(request, response) {
//     let sql = 'select prod_price from t_product'

//     console.log('가격');

//     oracledb.getConnection(dbConfig,(err,conn)=>{
//         if(err) throw err;
//         conn.execute(sql,[],(err1,result)=>{
//             if(err1) throw err1;
//             console.log(result.rows);

//             conn.release((err2)=>{
//                 if(err2) throw err2;
//                 console.log('db 연결해제');
//             })
//         })
//     })
// }

// 제품 이름 가져오기
// async function getSelect(request, response) {
//     let sql = 'select prod_name from t_product'

//     console.log('이름');

//     oracledb.getConnection(dbConfig,(err,conn)=>{
//         if(err) throw err;
//         conn.execute(sql,[],(err1,result)=>{
//             if(err1) throw err1;
//             console.log(result.rows);

//             conn.release((err2)=>{
//                 if(err2) throw err2;
//                 console.log('db 연결해제');
//             })
//         })
//     })
// }


module.exports = router;
