const bodyparser = require('body-parser')
const express = require('express')
const oracledb = require('oracledb')
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT
const path = require('path')
const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({extended:false}))
const app = express()
const yaml = require('js-yaml')
oracledb.initOracleClient({libDir:'C:/Users/smhrd/Desktop/oracleClient'})

const dbConfig = {
    user: "campus_h_230627_2",
    password: "smhrd2",
    connectString: 'project-db-stu2.smhrd.com'
}

router.get('/select', async (req, res) => {
    let connection;

    try {
        connection = await oracledb.getConnection(dbConfig);
        const result = await connection.execute('select prod_img from T_PRODUCT');
        console.log(result.rows);

        const products = result.rows.map(row => ({ prod_img: row[0] }));

        const yamlData = yaml.dump({ products });

        res.header("Content-Type", "text/yaml");
        res.send(yamlData); 
    } catch (error) {
        console.log(error);
        res.status(500).send("Server error");
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (error) {
                console.log(error);
            }
        }
    }
});


// router.post('/insert', (req, res) => {
//     let { id, pw, nick } = req.body

//     let sql = 'insert into t_user values (?,?,?)'
//     conn.query(sql, [id, pw, nick], function (err, rows, fields) {
//         console.log(rows);
//         res.redirect('/select')
//     })

// })

module.exports = router;