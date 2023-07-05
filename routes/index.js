const express = require('express');
const router = express.Router();
const oracleDbConfig = require('../config/oracleDatabase'); 

router.get('/test', async (req, res) => {
  let sql = 'SELECT PROD_IMG FROM T_PRODUCT WHERE PROD_SEQ = 1';

  try {
    const connection = await oracleDbConfig.init();
    
    console.log('연결 성공!'); // 연결 성공 메시지 출력

    const results = await connection.execute(sql);
    res.json(results.rows);

    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error(error);
      }
    }
  } catch (err) {
    console.error(`연결 실패: ${err}`);
    res.status(500).send('Internal Server Error');
  }
});
