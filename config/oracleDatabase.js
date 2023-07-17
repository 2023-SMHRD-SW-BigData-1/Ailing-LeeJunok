const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const fileStore = require('session-file-store')(session);
const oracledb = require('oracledb');
const router = express.Router();
const userRouter = require('../routes');

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 세션 설정
app.use(
  session({
    store: new fileStore(),
    secret: 'secretkey',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 1000, // 세션 유지 시간 설정 (1시간)
    },
  })
);

app.listen(8888, () => {
  console.log('Server start, port 8888');
});

oracledb.autoCommit = true;
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
oracledb.initOracleClient({ libDir: 'C:/Users/smhrd/Desktop/oracleClient' });

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'project/build')));
app.use('/', router);
app.use('/user', userRouter);

const dbConfig = {
  user: 'campus_h_230627_2',
  password: 'smhrd2',
  connectString: 'project-db-stu2.smhrd.com:1524/',
};

// 회원가입
router.post('/login/join', async (req, res) => {
  console.log('join 접근!', req.body);
  try {
    const connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute('SELECT user_id FROM t_user WHERE user_id = :id', [req.body.user_id]);

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
          req.body.user_addr,
        ]
      );

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
      // 사용자 정보를 세션에 저장합니다.
      req.session.userId = req.body.user_id;
      // 추가적인 사용자 정보가 있는 경우 저장합니다.
      req.session.prodName = rows[0].prod_name;

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

module.exports = router;
