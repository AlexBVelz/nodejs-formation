const mysql = require('mysql2/promise')

const bdd = mysql.createPool({
    host: 'localhost',
    user: 'root', 
    password: '',
    database: 'magasin'
})


module.exports = bdd