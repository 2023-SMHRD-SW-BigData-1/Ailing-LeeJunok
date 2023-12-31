const express = require('express')
const app = express()
const cors = require('cors')
const multer = require('multer')


app.use(cors());

const server = app.listen(8888, () => {
  console.log('서버 시작, 포트 8888');
});

const oracledb = require('oracledb');
oracledb.autoCommit = true;
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: false }));
oracledb.initOracleClient({ libDir: 'C:/Users/smhrd/Desktop/oracleClient' });

const dbConfig = {
  user: "campus_h_230627_2",
  password: "smhrd2",
  connectString: 'project-db-stu2.smhrd.com:1524/'
}


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
    const result = await connection.execute('SELECT MAX(noti_seq) as max_seq FROM T_ANNOUN');
    const maxSeq = result.rows[0].max_seq || 0;

    // noti_seq를 1 증가
    const notiSeq = maxSeq + 1;

    await connection.execute(
      `INSERT INTO T_ANNOUN ( noti_title, noti_name, noti_text)
      VALUES ( :title, :name, :text)`,
      [req.body.title, req.body.name, req.body.text]
    );

    console.log('공지사항이 추가되었습니다!');
    res.json({ result: '공지사항이 추가되었습니다!' });

    await connection.close();
  } catch (error) {
    console.log('에러 발생: ', error);
    res.json({ result: '공지사항 추가에 실패했습니다.' });
  }
});

// 공지사항 목록 검색
router.get('/NoticeList', async (req, res) => {
  console.log('공지사항 목록에 접근했습니다!');
  try {
    const connection = await oracledb.getConnection(dbConfig);
    console.log('데이터베이스 연결 성공');
    const result = await connection.execute('SELECT NOTI_SEQ, NOTI_TITLE, NOTI_NAME, NOTI_AT, NOTI_VIEWS FROM T_ANNOUN ORDER BY NOTI_SEQ DESC');
    const notices = result.rows;
    console.log(notices);

    res.json({ notices });

    await connection.close();
  } catch (error) {
    console.log('오류가 발생했습니다: ', error);
    res.json({ result: '공지사항을 검색하는 데 실패했습니다.' });
  }
});


router.get('/NoticeView/:noticeSeq', async (req, res) => {
  const noticeSeq = req.params.noticeSeq;
  console.log(`NOTI_SEQ가 ${noticeSeq}인 공지사항을 가져옵니다.`);

  try {
    const connection = await oracledb.getConnection(dbConfig);
    console.log('데이터베이스 연결 성공');

    // Increment the view count for the notice
    await connection.execute(
        `UPDATE T_ANNOUN
        SET NOTI_VIEWS = NOTI_VIEWS + 1
        WHERE NOTI_SEQ = :noticeSeq`,
      [noticeSeq]
    );

    // Fetch the notice details with the updated view count
    const result = await connection.execute(
        `SELECT NOTI_SEQ, NOTI_TITLE, NOTI_NAME, NOTI_AT, NOTI_VIEWS, NOTI_TEXT
        FROM T_ANNOUN
        WHERE NOTI_SEQ = :noticeSeq`,
      [noticeSeq]
    );

    const notice = result.rows[0];
    console.log('공지사항:', notice);

    res.json({ notice });

    await connection.close();
  } catch (error) {
    console.log('오류가 발생했습니다:', error);
    res.json({ result: '공지사항 세부 정보를 가져오는 데 실패했습니다.' });
  }
});


// 이벤트 추가
router.post('/EventWrite', async (req, res) => {
  console.log('이벤트에 접근');
  try {
    const connection = await oracledb.getConnection(dbConfig);
    console.log('db접속');
    console.log(req.body.title, req.body.name, req.body.text);

    // 데이터베이스에서 현재 최대 noti_seq 값을 가져옵니다.
    const result = await connection.execute('SELECT MAX(event_seq) as max_seq FROM T_EVENT');
    const maxSeq = result.rows[0].max_seq || 0;

    // noti_seq를 1 증가
    const eventSeq = maxSeq + 1;

    await connection.execute(
      `INSERT INTO T_EVENT ( event_title, event_name, event_text)
      VALUES ( :title, :name, :text)`,
      [req.body.title, req.body.name, req.body.text]
    );

    console.log('이벤트가 추가되었습니다!');
    res.json({ result: '이벤트가 추가되었습니다!' });

    await connection.close();
  } catch (error) {
    console.log('에러 발생: ', error);
    res.json({ result: '이벤트 추가에 실패했습니다.' });
  }
});

// 이벤트 목록 검색
router.get('/EventList', async (req, res) => {
  console.log('이벤트 목록에 접근했습니다!');
  try {
    const connection = await oracledb.getConnection(dbConfig);
    console.log('데이터베이스 연결 성공');
    const result = await connection.execute('SELECT EVENT_SEQ, EVENT_TITLE, EVENT_NAME, EVENT_AT, EVENT_VIEWS FROM T_EVENT ORDER BY EVENT_SEQ DESC');
    const event = result.rows;
    console.log(event);

    res.json({ event });

    await connection.close();
  } catch (error) {
    console.log('오류가 발생했습니다: ', error);
    res.json({ result: '이벤트를 검색하는 데 실패했습니다.' });
  }
});

// 이벤트 뷰
router.get('/EventView/:eventSeq', async (req, res) => {
  const eventSeq = req.params.eventSeq;
  console.log(`NOTI_SEQ가 ${eventSeq}인 공지사항을 가져옵니다.`);

  try {
    const connection = await oracledb.getConnection(dbConfig);
    console.log('데이터베이스 연결 성공');

    // Increment the view count for the notice
    await connection.execute(
        `UPDATE T_EVENT
        SET  EVENT_VIEWS =  EVENT_VIEWS + 1
        WHERE EVENT_SEQ = :eventSeq`,
      [eventSeq]
    );

    // Fetch the notice details with the updated view count
    const result = await connection.execute(
      `SELECT EVENT_SEQ, EVENT_TITLE, EVENT_NAME, EVENT_AT, EVENT_VIEWS, EVENT_TEXT, EVENT_IMG
      FROM T_EVENT
      WHERE EVENT_SEQ = :eventSeq`,
      [eventSeq]
    );

    const event = result.rows[0];
    console.log('공지사항:', event);

    res.json({ event });

    await connection.close();
  } catch (error) {
    console.log('오류가 발생했습니다:', error);
    res.json({ result: '이벤트 세부 정보를 가져오는 데 실패했습니다.' });
  }
});



// // 이벤트 뷰
// router.get('/EventView/:eventSeq', async (req, res) => {
//   const eventSeq = req.params.eventSeq;
//   console.log(`EVENT_SEQ ${eventSeq}인 공지사항을 가져옵니다.`);

//   try {
//     const connection = await oracledb.getConnection(dbConfig);
//     console.log('데이터베이스 연결 성공');

//     await connection.execute(
//       `UPDATE T_ANNOUN
//       SET EVENT_VIEWS = EVENT_VIEWS + 1
//       WHERE EVENT_SEQ = :eventSeq`,
//     [eventSeq]
//   );

//     const result = await connection.execute(
//       `SELECT EVENT_SEQ, EVENT_TITLE, EVENT_NAME, EVENT_AT, EVENT_VIEWS, EVENT_TEXT
//       FROM T_EVENT
//       WHERE EVENT_SEQ = :eventSeq`,
//       [eventSeq]
//     );

//     const event = result.rows[0];
//     console.log('공지사항:', event);

//     res.json({ event });

//     await connection.close();
//   } catch (error) {
//     console.log('오류가 발생했습니다:', error);
//     res.json({ result: '이벤트 세부 정보를 가져오는 데 실패했습니다.' });
//   }
// });




// 리뷰
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // 파일이 저장될 경로 설정
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // 저장되는 파일명 설정
  }
});

const upload = multer({ storage: storage });

// 리뷰 데이터를 axios로 받아오고 데이터베이스에 값 등록
router.post('/review/edit', upload.single('file'), async (req, res) => {
  console.log('리뷰 작성에 접근');

  try {
    const connection = await oracledb.getConnection(dbConfig);
    console.log('db접속');
    // console.log(req.formData);

    // await connection.execute(
    //   `INSERT INTO `,
    //   [req.body.title, req.body.name, req.body.text]
    // );
    console.log(req.body);
    const reviewR = await connection.execute(`
    insert into T_REVIEW 
    (USER_ID, REVIEW_RATING, REVIEW_COMMENT, 
      REVIEW_NAME,  REVIEW_IMG, REVIEW_AT)
      VALUES
      (:userid, :review_rating, :review_comment, :title, :review_image, SYSDATE )`,
      [req.body.userid, req.body.review_rating, req.body.review_comment, req.body.title, req.body.review_image, ]
      )
    res.json({result: '리뷰가 추가 되었습니다.' });

    await connection.close();
  } catch (error) {
    console.log('에러 발생: ', error);
    res.json({ result: '리뷰 추가 실패했습니다.' });
  }
});


// 리뷰 불러오기
router.get('/review', async (req, res)=>{
  console.log('리뷰에 접근');
  try{
    const connection = await oracledb.getConnection(dbConfig);
    console.log('DB 연결완료!');
    const result = await connection.execute(
      'select USER_ID, REVIEW_NAME, REVIEW_AT, REVIEW_RATING, REVIEW_COMMENT, REVIEW_IMG from T_REVIEW ORDER BY REVIEW_SEQ DESC'
      )
      const reviews = result.rows;
      console.log(reviews);

      res.json({reviews});

      await connection.close();
  } catch (error) {
    console.log('오류다! 오류야! :', error);
    res.json({result: '검색하는데 실패'});
  }
});


app.use('/', router);

module.exports = router;
