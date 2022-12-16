//express는 웹 애플리케이션 개발하는데 가장 많이 사용되는 웹 애플리케이션 프레임워크
const express = require('express');
const app = express();
const PORT = 8080;
//const ip = require('ip');
//라우팅
const home = require("./routes/home")

//앱 세팅, 화면 뷰들을 넘겨줄 파일이 있는 경로를 두번째 파라미터에 넣어준다. <뷰 분리>
app.set("views","./views");
//html 코드를 어떤 엔진으로 해석할지? ejs는 자주 사용하는 엔진 <라우터 분리>
app.set("view engine","ejs");
//index.js 로 이동해서 라우터의 코드에 따라 행동하는 형식 
app.use("/",home); //use -> 미들웨어 등록해주는 메서드

module.exports = app;



