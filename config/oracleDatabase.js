const bodyparser = require('body-parser')
const express = require('express')
const oracledb = require('oracledb')
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT
const path = require('path')
const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({extended:false}))
const app = express()
oracledb.initOracleClient({libDir:'C:/Users/smhrd/Desktop/oracleClient'})

router.get('/home', async(req, res)=>{
    let connection;
    let result;
    try{
        connection = await oracledb.getConnection({
            user : "campus_h_230627_2",
            password : "smhrd2",
            connectString : 'project-db-stu2.smhrd.com'
        })
        result = await connection.execute('select * from T_PRODUCT');
        console.log(result.rows);
    } catch (error) {
        console.log(error);
    } finally {
        if (connection){
            try {
                await connection.close()
            } catch (error){
                console.log(error);
            }
        }
    }
    console.log(result.rows);
})

module.exports = router;