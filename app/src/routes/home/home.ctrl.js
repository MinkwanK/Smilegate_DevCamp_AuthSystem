"use strict";


//const User = require("../../models/User")
const db = require('../../models/db');
const crypto = require('crypto');



const output = {
    home : (req,res)=>{
        res.render("home/index")
    },
    
    login : (req,res)=>{
        res.render("home/login")
    },
    register : (req,res)=>{
        res.render("home/register")
    },
    admin : (req,res)=>{
        res.render("home/admin")
    }
};




const process = {
    //로그인 파트 
    login: (req,res)=> {
       const clientbody = req.body;
       const client_id = clientbody.id;
       const client_pw = crypto.createHash('sha256').update(clientbody.pw).digest('base64');


       var query = "SELECT * FROM users_info WHERE id = ? AND pw = ?"
       db.query(query,[client_id,client_pw],function(err,rows){
           if(err) throw err;
           else{
               if(rows.length == 0){ //아이디 존재 x
                   console.log("회원 정보가 틀렸습니다.")
                   return res.json({success:false,msg:"회원 정보가 틀렸습니다."});
               }
               else{
                console.log("회원 정보가 맞습니다.")
                if(rows[0].admin == '0')
                {
                    console.log("admin은 0")
                return res.json({success : true, admin:false});

                }
                else if(rows[0].admin == '1')
                {
                    console.log("admin은 1")
                    return res.json({success : true,admin :true});
                }
                
               }
           }
       })
    }, //회원가입 파트
    register : (req,res)=>{
       const clientbody = req.body;
       const client_id = clientbody.id;
       const client_pw = clientbody.pw;
       const client_name = clientbody.name;
       const client_email = clientbody.email;

       var query = "SELECT * FROM users_info WHERE id = ? OR name = ? OR email = ?"
       db.query(query,[client_id,client_name,client_email],function(err,rows){
        if(err) throw err;
        else{
            if(rows.length == 0 ){ //중복되는 정보 x
                var sql = {
                    id : client_id,
                    pw : crypto.createHash('sha256').update(client_pw).digest('base64'),
                    name: client_name,
                    email: client_email
                };

                query = "INSERT INTO users_info set ?"
                db.query(query,sql,function(err,rows){
                    if(err) throw err;
                    else{
                        console.log("회원가입 성공")
                        return res.json({success:true});
                    }
                })

            }
            else{ //중복되는 정보가 있다.
                return res.json({success:false,msg:"중복 정보가 있습니다."});
            }
        }
       })

    }    
};




//외부에서 쓸 수 있도록 모듈화로 export
module.exports ={
    output,
    process,
}; 

