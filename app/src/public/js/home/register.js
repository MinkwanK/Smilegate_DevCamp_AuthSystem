"use strict";

const id = document.querySelector("#id");
const name =document.querySelector("#name");
const email = document.querySelector("#email")
const pw = document.querySelector("#pw");
const confirmPw = document.querySelector("#confirm-pw")
const registbtn = document.querySelector("#button");

registbtn.addEventListener("click",register);

function register(){    
    
    if(!id.value ) return alert("아이디를 입력해주세요.");
    if(!name.value) return alert("이름을 입력해주세요.");
    if(!email.value) return alert("이메일을 입력해주세요.");
    if(pw.value !== confirmPw.value) return (alert("비밀번호가 일치하지 않습니다"));
 
    
    const req = {
        id : id.value,
        name : name.value,
        email : email.value,
        pw : pw.value,
    };

    
    //fetch함수: 첫번째 인자로 URL, 두번째 옵션객체Promise 타입의 객체 반환. 
    //반환된 객체는 API 호출이 성공했을 경우에만 응답 객체를 resolve하고 실패하면 예외 객체를 resolve
    fetch("/register",{ //bodyparser 덕분에 문자열로 변환된 bodydata가 다시 객체화되서 백엔드로 넘겨짐
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json()) //promise 객체 반환
        .then((res)=>{ 
        if (res.success) {
            alert("회원가입 성공!")
            location.href = "/login";
        }
             else{
                alert(res.msg);
             }        
    })
    .catch((err)=>{
        console.error("회원가입 중 에러 발생!");
    });
}

