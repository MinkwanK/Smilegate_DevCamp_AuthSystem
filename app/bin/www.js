//서버의 실행 파일입니다.

"use strict"

const app = require("../main");
const PORT = 8080;
app.listen(PORT,()=>{
    console.log('Server is Running...')
})