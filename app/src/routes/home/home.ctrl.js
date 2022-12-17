"use strict";

const UserStorage = require("../../models/UserStorage")
const output = {
    home : (req,res)=>{
        res.render("home/index")
    },
    
    login : (req,res)=>{
        res.render("home/login")
    },
};




const process = {
    login: (req,res)=> {
       const id = req.body.id;
       const pw = req.body.pw;
        
       const users = UserStorage.getUsers("id","pw"); 
       const response = {};
       
       if(users.id.includes(id)) {
        const idx = users.id.indexOf(id);   
        if(users.pw[idx] == pw){
            response.success = true;
            return res.json(response);  
        }
       }
       
       response.success = false;
       response.msg = "로그인에 실패했습니다";
       return res.json(response);
       },
    };



//외부에서 쓸 수 있도록 모듈화로 export
module.exports ={
    output,
    process,
}; 

//object는 원래 키와 값의 타입인데, 키 하나만 적으면 value에 자동으로 키와 같은 value 값을 넣어준다.
//위와 같다.
/* function hello = (req,res)=>{
    res.render("home/login")
}; */