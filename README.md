# Smilegate_DevCamp_AuthSystem

## 인증 시스템 
![image](https://user-images.githubusercontent.com/94276637/209356162-85bfadee-c942-4e75-80c3-b92003724362.png)
### 개요<br>
웹서버를 구축하고, mvc 패턴으로 최적화된 폴더 구조를 이루었습니다. mysql과의 연동을 통해 로그인과 회원가입,비밀번호 암호화를 구현하였습니다.

### 기술스택<br>
Node.js, MySQL, Java Script

### 코드<br>
 1. java script에 매우 미숙하여 기본 코드 구현도 굉장히 어려웠습니다. 저는 .then()을 왜 쓰는지 구현하면서도 헷갈리고 어려웠습니다.<br>
```
 fetch("/register",{ //bodyparser 덕분에 문자열로 변환된 bodydata가 다시 객체화되서 백엔드로 넘겨짐
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json()) //promise 객체 반환
        .then((res)=>{ 
        
   
```
2. output 변수에 home 함수를 선언한건가요? JS는 C++ 사용 방식과 달라 이해가 잘 가지 않습니다.
변수안에 변수 : 함수를 작성하니 어떤 의미인지 잘 모르겠습니다.
```
const output = {
    home : (req,res)=>{
        res.render("home/index")
    },
  };
 ```
 
### 궁금한 점<br>

클라이언트 프로그래머로서 백엔드의 기초 지식을 알고 싶어 인증 시스템을 선택했습니다. 백엔드를 이해했다기 보다, js와 기본 웹 페이 구성에 허덕인 것 같습니다. 게임 클라이언트 프로그래머로서 백엔드의 지식을 습득하기 가장 좋은 방법은 무엇이 있나요? 이런 인증 시스템을 혼자 열심히 만들어 보면 좋은 경험이 될까요? 
