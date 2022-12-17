"use strict";

const express = require('express');
const router = express.Router();

//home.ctrl 파일을 불러와서 그 객체를 이용할 것이다.
const ctrl = require("./home.ctrl")



//라우팅은 클라이언트가 url로 접근하는 경로에 따라 서버가 그에 맞는 동작 실행
router.get('/',ctrl.output.home);
router.get('/login',ctrl.output.login);
router.get('/register',ctrl.output.register);
router.post('/login',ctrl.process.login);

module.exports = router;