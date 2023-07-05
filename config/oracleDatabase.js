const oracledb = require('oracledb');
const dbConfig = {
  user: 'campus_h_230627_2',
  password: 'smhrd2',
  connectString: 'project-db-stu2.smhrd.com'
};

module.exports = {
  init: async function () {
    const connection = await oracledb.getConnection(dbConfig);
    return connection;
  },
  connect: function (connection) {
    if (connection) {
      console.log('연결 성공!');
    } else {
      console.error('연결 실패!');
    }
  }
};
