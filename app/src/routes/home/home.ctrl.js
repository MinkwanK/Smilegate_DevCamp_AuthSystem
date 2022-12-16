"use strict";
const home = (req,res)=>{
    res.render("home/index")
};

const login = (req,res)=>{
    res.render("home/login")
};

//외부에서 쓸 수 있도록 모듈화로 export
module.exports ={
    home,
    login,
}; 

//object는 원래 키와 값의 타입인데, 키 하나만 적으면 value에 자동으로 키와 같은 value 값을 넣어준다.
//위와 같다.
/* function hello = (req,res)=>{
    res.render("home/login")
}; */