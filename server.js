const express = require('express');
const oracle = require('./config/oracleDatabase')
const app = express();
const indexRouter = require('./routes');
const path = require('path');
const cors = require('cors');
'C:\Users\smhrd\.vscode\extensions\ms-dotnettools.vscode-dotnet-runtime-1.6.0'


app.set('port',process.env.PORT||8090);

app.use(express.json());

app.use(cors());
app.use(express.static(path.join(__dirname,'react-project/build')));
app.use('/',indexRouter)


app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 port에서 서버연결 대기중...');
})