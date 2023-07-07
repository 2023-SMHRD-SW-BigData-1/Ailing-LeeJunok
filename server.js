const express = require('express')
const path = require('path')
const app = express()
const indexRouter = require('./routes/index')
const userRouter = require('./config/oracleDatabase')

app.set('port', process.env.PORT||3000)

app.use(express.static(path.join(__dirname,'project/public')))
app.use('/', indexRouter)
app.use('/', userRouter)

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'제발');
})