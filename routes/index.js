const dbcn = require('../config/oracleDatabase')


async function selectDatabase() {

  console.log("!!!!! db conenction !!!!!");

  let connection = await oracledb.getConnection(dbcn);

  let binds = {};
  let options = {
      outFormat: oracledb.OUT_FORMAT_OBJECT   // query result format
    };

  console.log("!!!!! db select !!!!!");

  let result = await connection.execute("select * from t_product", binds, options);

  console.log("!!!!! db response !!!!!");
  console.log(result.rows[0]);

  console.log("!!!!! db close !!!!!");
  await connection.close();

}