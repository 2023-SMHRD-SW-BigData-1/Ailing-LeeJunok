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

app.get('/product', async function(request, response) {
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

async function getSelect(request, response) {
    let sql = 'select prod_img from t_product'

    console.log('테스트');

    oracledb.getConnection(dbConfig,(err,conn)=>{
        if(err) throw err;
        conn.execute(sql,[],(err1,result)=>{
            if(err1) throw err1;
            console.log(result.rows);

            conn.release((err2)=>{
                if(err2) throw err2;
                console.log('db 연결해제');
            })
        })
    })
}

module.exports = router;
