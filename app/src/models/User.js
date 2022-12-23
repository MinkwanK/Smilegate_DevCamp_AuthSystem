/*"use strict";

const UserStorage = require('./UserStorage')
const db = require('./db');
const connection = async() => { 
    try{
        await db.getConnection(async conn => conn);
    }
    catch(e)
    {
        console.log(err);

    }
}


class User{
    constructor(body){
        this.body =body; 
    }

    login(){
        const client = this.body;
        const client_id = this.body.id;
        const client_pw = this.body.pw;
        var client_login = false;

        var query = "SELECT * FROM users_info WHERE id = ? AND pw = ?"
        db.query(query,[client_id,client_pw],function(err,rows){
            if(err) throw err;
            else{
                if(rows.length == 0){ //아이디 존재 x
                    console.log("회원 정보가 틀렸습니다.")
                    return {success:false};

                }
            }
        })
    
    }
}




    

//     register(){
//         const client = this.body;
//         UserStorage.save(client);
//     }

// }

async function dbLoginAuth(id,pw){


    var [rows] = await db.query('SELECT * FROM users_info WHERE id = ? AND pw = ?',[id,pw])

    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    if (rows.length>0)
        return true;
    else
        return false;
  
} 

// async function dbLoginCheck(client_id,client_pw){
//     var login_success = false;
//     await dbLoginAuth(client_id,client_pw).then(function(data){
//         login_success = data;
        
//     }).catch(function(err)
//     {
//        login_success = err;
//     });

//     return login_success
    
    
// }




module.exports = User
*/