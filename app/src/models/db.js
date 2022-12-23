"use strict";




const mysql  = require('mysql2');
const connectin = mysql.createConnection({
    host : 'localhost',
    port : '3306',
    user : 'root',
    password : '1234',
    database : 'authsystem'
});






// const connection = mysql.createConnection({
//     host : 'localhost',
//     port : '3306',
//     user : 'root',
//     password : '1234',
//     database : 'authsystem'
// });

// connection.query('SELECT * from users_info', (error, rows, fields) => {
//     if (error) throw error;
//     for (i = 0; i < rows.length; i++) {
//     console.log('Row: ' + JSON.stringify(rows[i]));
//     }
//   });

// connection.connect();


module.exports = connectin;