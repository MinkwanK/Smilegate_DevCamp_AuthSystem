"use strict";

const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const loginBtn = document.querySelector("#loginbtn");

loginBtn.addEventListener("click",login);

function login(){
    const req = {
        id : id.value,
        pw : pw.value, 
    };

    fetch("/login",{ //bodyparser 덕분에 문자열로 변환된 bodydata가 다시 객체화되서 백엔드로 넘겨짐
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(req),
    }).then(res.json)
    .then( (res) => console.log(res));
}

