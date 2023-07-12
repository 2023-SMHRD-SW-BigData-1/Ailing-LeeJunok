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
          const productJson = result.rows.map((row) => {
            return {
              // 각 row의 필드를 적절히 선택하여 객체에 할당
              // { imageUrl: row.image_url } 형식으로 할당
              prodSeq: row.PROD_SEQ,
              prodName: row.PROD_NAME,
              prodMaker: row.PROD_MAKER,
              prodPrice: row.PROD_PRICE,
              prodImg: row.PROD_IMG,
              prodCategory: row.PROD_CATEGORY,
              prodSobi: row.PROD_SOBI,
              prodDose: row.PROD_DOSE,
              prodMate: row.PROD_MATE,
              prodFunction: row.PROD_FUNTION,
              prodIntake: row.PROD_INTAKE,
              prodCaution: row.PROD_CAUTION,
              prodKeep: row.PROD_KEEP,
              prodNutrition: row.PROD_NUTRITION
            };
          });
          resolve(productJson);
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
//   app.get('/user', async function (request, response) {
//     try {
//         const result = await getSelect(request, response)
//         response.send(result)
//     } catch (error) {
//         console.log(error)
//         response.sendStatus(500)
//     }
// })

// 회원가입
router.post('/user/join', (req, res) => {
    console.log('join 접근!', req.body);
    let sql2 = 'select id from t_user where id=?'

    conn.query(sql2
        , [req.body.userData.id]
        , (err, rows) => {
            console.log(rows);
            if (rows.length > 0) {
                res.json({ result: '중복이다!' });
            } else {
                let sql = 'insert into t_user values (?,?,?)'
                conn.query(sql
                    , [req.body.userData.id, req.body.userData.pw, req.body.userData.add]
                    , (err, rows) => {
                        if (rows) {
                            console.log('성공했다!');
                            res.json({ result: '성공!' })
                        } else {
                            console.log('실패했다....', err);
                        }
                    })
            }
        })
})


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
