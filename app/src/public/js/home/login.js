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

    fetch();
}

