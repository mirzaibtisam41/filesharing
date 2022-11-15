const mysql = require('mysql2');

// const client = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'shareFiles',
//     password: 'mysqlpassword'
// });

const client = mysql.createConnection({
    port: '3306',
    host: 'sql.freedb.tech',
    user: 'freedb_share.user',
    database: 'freedb_shareFiles',
    password: 'j5WukKm4PHbMsA@'
});

module.exports = client;