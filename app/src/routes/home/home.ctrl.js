"use strict";


//const User = require("../../models/User")
const db = require('../../models/db');



const output = {
    home : (req,res)=>{
        res.render("home/index")
    },
    
    login : (req,res)=>{
        res.render("home/login")
    },
    register : (req,res)=>{
        res.render("home/register")
    }
};




const process = {
    login: (req,res)=> {
       const clientbody = req.body;
       const client_id = clientbody.id;
       const client_pw = clientbody.pw;
       var client_login = false;

       var query = "SELECT * FROM users_info WHERE id = ? AND pw = ?"
       db.query(query,[client_id,client_pw],function(err,rows){
            console.log(rows);
            
           if(err) throw err;
           else{
               if(rows.length == 0){ //아이디 존재 x
                   console.log("회원 정보가 틀렸습니다.")
                   return res.json({success:false,msg:"회원 정보가 틀렸습니다."});
               }
               else{
                console.log("회원 정보가 맞습니다.")
                return res.json({success:true});
               }
           }
       })
    },
    register : (req,res)=>{
       const user = new User(req.body);
       const response = user.register();
       return res.json(response);
    }    
};




//외부에서 쓸 수 있도록 모듈화로 export
module.exports ={
    output,
    process,
}; 

