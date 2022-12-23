//---------노드라는 기본 서버의 설정을 모아놨습니다. ---------

//express는 웹 애플리케이션 개발하는데 가장 많이 사용되는 웹 애플리케이션 프레임워크
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 8080;

//const ip = require('ip');
//라우팅
const home = require("./src/routes/home")

//앱 세팅, 화면 뷰들을 넘겨줄 파일이 있는 경로를 두번째 파라미터에 넣어준다. <뷰 분리>
app.set("views","./src/views");
//html 코드를 어떤 엔진으로 해석할지? ejs는 자주 사용하는 엔진 <라우터 분리>
app.set("view engine","ejs");
//정적 경로로 추가 js 스크립트 연결용 미들웨어
app.use(express.static(`${__dirname}/src/public`)); 

app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended : true}));

//index.js 로 이동해서 라우터의 코드에 따라 행동하는 형식 
app.use("/",home); //use -> 미들웨어 등록해주는 메서드

module.exports = app;





