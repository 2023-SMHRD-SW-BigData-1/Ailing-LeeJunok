const express = require('express')
const app = express()

const server = app.listen(3001, () => {
    console.log('server start, port 3001')
})

const oracledb = require('oracledb')
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT

const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({extended:false}))
oracledb.initOracleClient({libDir:'C:/Users/smhrd/Desktop/oracleClient'})

app.use('/', router)



const dbConfig = {
    user: "campus_h_230627_2",
    password: "smhrd2",
    connectString: 'project-db-stu2.smhrd.com:1524/'
}

// select 제품
async function getSelect(request, response) {
    let sql = 'select * from t_product';
  
    console.log('제품');
  
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
  
            // 제품 검색 결과를 JSON 형태로 변환
            const images = result.rows.map((row) => ({ url: row.PROD_IMG }));
            resolve(images);
          });
        });
      });
    });
  }
  app.get('/product', async function (request, response) {
    try {
        const result = await getSelect(request, response)
        response.send(result)
    } catch (error) {
        console.log(error)
        response.sendStatus(500)
    }
})
  
  // select 유저
async function getSelect(request, response) {
    let sql = 'select * from t_user';
  
    console.log('유저');
  
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
  
            // 유저 ID 검색 결과를 JSON 형태로 변환
            const images = result.rows.map(() => ());
            resolve(images);
          });
        });
      });
    });
  }
  app.get('/user', async function (request, response) {
    try {
        const result = await getSelect(request, response)
        response.send(result)
    } catch (error) {
        console.log(error)
        response.sendStatus(500)
    }
})

router.post('/user/login', (req,res)=>{
    console.log('로그인 라우터');
    let sql = 'SELECT * FROM member2 WHERE id=? and pw=?'

    conn.query(sql, 
        [req.body.userData.id, req.body.userData.pw], 
        (err, rows)=>{
            console.log(rows);
            if(rows.length>0){
                res.json({result : '성공!!', id : req.body.userData.id})
            } else {
                res.json({result : "실패"})
            }
        })
})




module.exports = router;
