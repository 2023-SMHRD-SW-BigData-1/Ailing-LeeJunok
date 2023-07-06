const express = require('express')

const bodyParser = require('body-parser')

const app = express()

app.set('views', __dirname+'/views')
app.set('view engine', 'html')

app.use(bodyParser.urlencoded({extended:true}))


app.set('port', process.env.PORT||8090)
app.listen(app.get('port'),()=>{
    console.log(app.get('port'),"번 포트에서 서버연결 기다리는 중....");
})