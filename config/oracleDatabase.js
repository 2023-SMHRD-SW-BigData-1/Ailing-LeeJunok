const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const fileStore = require('session-file-store')(session)

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


// 로그인
router.post('/user/login', (req, res) => {
  console.log('로그인 라우터');
  const { id, pw } = req.body.userData;

  oracledb.getConnection(dbConfig, (err, connection) => {
    if (err) {
      console.error(err);
      res.json({ result: 'Failed' });
      return;
    }

    connection.execute('SELECT * FROM t_user WHERE id = :id AND pw = :pw', [id, pw], (err, result) => {
      if (err) {
        console.error(err);
        res.json({ result: 'Failed' });
      } else {
        if (result.rows.length > 0) {
          res.json({ result: 'Success!!', id });
        } else {
          res.json({ result: 'Failed' });
        }
      }
      connection.close();
    });
  });
});


module.exports = router;
