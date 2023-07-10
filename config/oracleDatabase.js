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

app.get('/product', async function(request, response) {
    const result = await getSelect(request, response)
    response.send(result)
})
const dbConfig = {
    user: "campus_h_230627_2",
    password: "smhrd2",
    connectString: 'project-db-stu2.smhrd.com'
}

async function getSelect(request, response) {
    let connection
    try {
        connection = await oracledb.getConnection({dbConfig})

        const result = await connection.execute(
            `SELECT * 
            FROM t_user`,
            [1], // num의 값 전달
        )

        console.log(result)
        return result
    } catch (error) {
        console.log(error)
    } finally {
        if (connection) {
            try {
                await connection.close()
            } catch (error) {
                console.log(error)
            }
        }
    }
}



module.exports = router;