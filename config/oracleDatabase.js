const oracledb = require('oracledb');
const express = require('express')
const app = express()

oracledb.initOracleClient({libDir:'C:\\Users\\smhrd\\Desktop\\oracleClient'});

const server = app.listen(8090, () => {
    console.log('server start, port 8090')
})

const oracledb = require('oracledb')
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT

app.get('/select', function(request, response) {
    getSelect(request, response)
})

async function getSelect(request, response) {
    let connection
    try {
        connection = await oracledb.getConnection({
            user          : "campus_h_230627_2",
            password      : "smhrd2",
            connectString : "project-db-stu2.smhrd.com"
        })

        const result = await connection.execute(
            `SELECT *  FROM t_product`,
            
            [1], // num의 값 전달
        )

        console.log(result)
        response.send(result.rows)
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