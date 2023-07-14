const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')

app.use(cors())

app.listen(8888, () => {
    console.log('server start, port 8888')
})

const oracledb = require('oracledb')
oracledb.autoCommit = true
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT

const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({extended:false}))
oracledb.initOracleClient({libDir:'C:/Users/smhrd/Desktop/oracleClient'})

app.set('port', process.env.PORT||3000)

app.use(express.static(path.join(__dirname,'project/build')))
app.use('/', router)
app.use('/user', userRouter)


const dbConfig = {
    user: "campus_h_230627_2",
    password: "smhrd2",
    connectString: 'project-db-stu2.smhrd.com:1524/'
}

// select 제품
// async function getSelect(request, response) {
//     let sql = 'select * from t_product';
  
//     console.log('제품');
  
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
  
//            // 제품 검색 결과를 JSON 형태로 변환
//           const productJson = result.rows.map((row) => {
//             return {
//               // 각 row의 필드를 적절히 선택하여 객체에 할당
//               // { imageUrl: row.image_url } 형식으로 할당
//               PROD_SEQ: row.PROD_SEQ,
//               PROD_NAME: row.PROD_NAME,
//               PROD_MAKER: row.PROD_MAKER,
//               PROD_PRICE: row.PROD_PRICE,
//               PROD_IMG: row.PROD_IMG,
//               PROD_CATEGORY: row.PROD_CATEGORY,
//               PROD_SOBI: row.PROD_SOBI,
//               PROD_DOSE: row.PROD_DOSE,
//               PROD_MATE: row.PROD_MATE,
//               PROD_FUNTION: row.PROD_FUNTION,
//               PROD_INTAKE: row.PROD_INTAKE,
//               PROD_CAUTION: row.PROD_CAUTION,
//               PROD_KEEP: row.PROD_KEEP,
//               PROD_NUTRITION: row.PROD_NUTRITION
//             };
//           });
//           resolve(productJson);
//         });
//       });
//     });
//   });
// }
//   app.get('/product', async function (request, response) {
//     try {
//         const result = await getSelect(request, response)
//         response.send(result)
//     } catch (error) {
//         console.log(error)
//         response.sendStatus(500)
//     }
// })
  

router.post('/login/join', async (req, res) => {
  console.log('join 접근!', req.body);
  try {
    const connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(
      'SELECT user_id FROM t_user WHERE user_id = :id',
      [req.body.user_id]
    );

    if (result.rows.length > 0) {
      res.json({ result: '중복되는 아이디입니다!' });
    } else {  
        await connection.execute(
          `INSERT INTO t_user 
          (user_id, user_pw, user_name, user_email, user_phone, user_addr) 
          VALUES 
          (:id, :pw, :name, :email, :phone, :addr)`,
          [
            req.body.user_id,
            req.body.user_pw,
            req.body.user_name,
            req.body.user_email,
            req.body.user_phone,
            req.body.user_addr
          ]
        ,(err,result)=>{
          if(err) throw err
          console.log(result.rowsAffected);
        });

        console.log('가입에 성공했습니다!');
        res.json({ result: '가입에 성공했습니다!' });
    }

    await connection.close();
  } catch (error) {
    console.log('에러 발생: ', error);
    res.json({ result: '가입에 실패했습니다....' });
  }
});
  



// 로그인
router.post('/user/login', (req,res)=>{
    console.log('로그인 라우터');
    let sql = 'SELECT * FROM t_user WHERE id=? and pw=?'
    
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

// 아이디 찾기(이메일로)
router.post('/user/findId', (req, res) => {
    console.log('login router');
    let sql = 'SELECT id FROM t_user WHERE email=?';

    conn.query(sql,
        [req.body.userData.email],
        (err, rows) => {
            console.log(rows);
            if (rows.length > 0) {
                res.json({ result: 'Success!!', id: rows[0].id });
            } else {
                res.json({ result: 'Failed' });
            }
        });
});

//  아이디로 비밀번호 찾기
router.post('/user/findPassword', (req, res) => {
    console.log('findPassword router');
    let sql = 'SELECT pw FROM t_user WHERE id=?';

    conn.query(sql,
        [req.body.userData.id],
        (err, rows) => {
            console.log(rows);
            if (rows.length > 0) {
                res.json({ result: 'Success!!', password: rows[0].pw });
            } else {
                res.json({ result: 'Failed' });
            }
        });
});




module.exports = router;
