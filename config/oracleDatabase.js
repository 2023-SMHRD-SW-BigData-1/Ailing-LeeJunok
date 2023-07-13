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
// async function getSelect(request, response) {
//     let sql = 'select * from t_user';
  
//     console.log('유저');
  
//     return new Promise((resolve, reject) => {
//       oracledb.getConnection(dbConfig, (err, conn) => {
//         if (err) {
//           reject(err);
//           return;
//         }
//         conn.execute(sql, [], (err1, result) => {
//           if (err1) {
//             reject(err1);
//             return;
//           }
//           console.log(result.rows);
  
//           conn.release((err2) => {
//             if (err2) {
//               reject(err2);
//               return;
//             }
//             console.log('db 연결해제');
  

            // 유저 ID 검색 결과를 JSON 형태로 변환
//             const images = result.rows.map();
//             resolve(images);
//           });
//         });
//       });
//     });
//   }
  app.get('/user', async function (request, response) {
    try {
        const result = await getSelect(request, response)
        response.send(result)
    } catch (error) {
        console.log(error)
        response.sendStatus(500)
    }
})

router.post('/login/join', async (req, res) => {
  console.log('join 접근!', req.body);
  try {
    const connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(
      'SELECT user_id FROM t_user WHERE user_id = :id',
      [req.body.userData.user_id]
    );

    if (result.rows.length > 0) {
      res.json({ result: '중복되는 아이디입니다!' });
    } else {
      // 비밀번호 확인
      if (req.body.userData.user_pw !== req.body.userData.pwConfirmation) {
        res.json({ result: '비밀번호 확인이 일치하지 않습니다!' });
      } else {
        await connection.execute(
          `INSERT INTO t_user 
          (user_id, user_pw, user_name, user_email, user_phone, user_addr, user_ssn, user_gender, joined_at) 
          VALUES 
          (:id, :pw, :name, :email, :phone, :addr, :ssn, :gender, SYSDATE)`,
          [
            req.body.userData.user_id,
            req.body.userData.user_pw,
            req.body.userData.user_name,
            req.body.userData.user_email,
            req.body.userData.user_phone,
            req.body.userData.user_addr,
            req.body.userData.user_ssn,
            req.body.userData.user_gender,
          ]
        );

        console.log('가입에 성공했습니다!');
        res.json({ result: '가입에 성공했습니다!' });
      }
    }

    await connection.close();
  } catch (error) {
    console.log('에러 발생: ', error);
    res.json({ result: '가입에 실패했습니다....' });
  }
});

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
