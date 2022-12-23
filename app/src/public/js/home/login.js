"use strict";

const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click",login);

function login(){
    const req = {
        id : id.value,
        pw : pw.value, 
    };
    
    //fetch함수: 첫번째 인자로 URL, 두번째 옵션객체Promise 타입의 객체 반환. 
    //반환된 객체는 API 호출이 성공했을 경우에만 응답 객체를 resolve하고 실패하면 예외 객체를 resolve
    fetch("/login",{ //bodyparser 덕분에 문자열로 변환된 bodydata가 다시 객체화되서 백엔드로 넘겨짐
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res)=>{
        if (res.success) {
            if(res.admin)
            {
                console.log("관리 페이지 이동");
                location.href = "/admin";
           
        }
            else
            {
                console.log("일반 페이지 이동");
                location.href = "/";
            }
        }
     
        else(res.success == false)
                alert(res.msg);
                  
    })
    .catch((err)=>{
        console.error("로그인 중 에러 발생!" + err);
    });
}

