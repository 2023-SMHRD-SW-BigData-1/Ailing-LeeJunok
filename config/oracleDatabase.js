const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

const server = app.listen(8888, () => {
    console.log('server start, port 8888')
})

const oracledb = require('oracledb')
oracledb.autoCommit = true
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
router.post('/login', async (req, res) => {

  console.log('login router');

    const sql = 'SELECT * FROM t_user WHERE user_id = :id AND user_pw = :pw';

  try {
    const connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(sql, [req.body.user_id, req.body.user_pw]);
    const rows = result.rows;

    if (rows.length > 0) {
      res.json({ result: 'Success!!', id: req.body.user_id });
    } else {
      res.json({ result: 'Failed' });
    }

    await connection.close();
  } catch (error) {
    console.error(error);
    res.status(500).json({ result: 'Error' });
  }
  });

// 공지사항 추가
router.post('/NoticeWrite', async (req, res) => {
  console.log('공지사항에 접근');
  try {
    const connection = await oracledb.getConnection(dbConfig);
    console.log('db접속');
    console.log(req.body.title, req.body.name, req.body.text);

    // 데이터베이스에서 현재 최대 noti_seq 값을 가져옵니다.
    const result = await connection.execute(
      `SELECT MAX(noti_seq) as max_seq FROM T_ANNOUN`
    );
    const maxSeq = result.rows[0].MAX_SEQ || 0;

    // noti_seq를 1 증가시키고 noti_views를 0으로 설정합니다.
    const notiSeq = maxSeq + 1;

    await connection.execute(
      `INSERT INTO T_ANNOUN (noti_title, noti_name, noti_text)
      VALUES (:title, :name, :text)`,
      [req.body.title, req.body.name, req.body.text]
    );

    console.log('공지사항이 추가되었습니다!');
    res.json({result: '공지사항이 추가되었습니다!' });

    await connection.close();
  } catch (error) {
    console.log('에러 발생: ', error);
    res.json({result: '공지사항 추가에 실패했습니다.' });
  }
});


// 모든 공지사항 조회
router.get('/NoticeList', async (req, res) => {
  console.log('공지 리스트에 접근하였습니다!');
  try {
    const connection = await oracledb.getConnection(dbConfig);
    console.log('데이터베이스 연결 성공');
    const result = await connection.execute('SELECT NOTI_SEQ, NOTI_TITLE, NOTI_NAME, NOTI_DATE, NOTI_VIEWS FROM T_ANNOUN ORDER BY NOTI_SEQ DESC');
    const notices = result.rows;
    console.log(notices);

    res.json({ notices });

    await connection.close();
  } catch (error) {
    console.log('에러가 발생하였습니다: ', error);
    res.json({ result: '공지사항 조회에 실패했습니다.' });
  }
});


module.exports = router;
