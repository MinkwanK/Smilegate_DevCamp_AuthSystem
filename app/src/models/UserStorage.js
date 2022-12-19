"use strict";   

//static을 붙여야 클래스에서 정적 변수에 바로 접근가능
//변수에 #을 붙이면 private이 된다.
class UserStorage{
    static #users = {
        id : ["user"],
        pw : ["1234"],
        name : ["nickname"],
        email: ["abc@abc.com"]
        
    };
  
    //...변수명 하면 파라미터로 받은 변수명만 쓸 수 있다
    static getUsers(...fields)
    {
        const users = this.#users;
        //fields에 담긴 항목만 newUsers에 넣어줄거다

        //reduce의 첫번째 파라미터는 누산기,콜백의 반환값 누적 두번째 파라미터는 처리할 현재 요소
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field))
            {
                newUsers[field] = users[field];
                //밑의 {}는 newUsers
            }
            return newUsers; //다음 파라미터의 newUser로 들어간다.
        },{});
        console.log(newUsers);
        return newUsers;
       
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users) //users의 key값들만 리스트로 만든다.
        const userInfo = userKeys.reduce((newUser,info)=>{
            newUser[info] = users[info][idx];
            return newUser;
        },{});
        return userInfo;
    }

    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pw.push(userInfo.pw);
        users.email.push(userInfo.email);
        console.log(users);

    }
    
}

module.exports = UserStorage;