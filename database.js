const Pool = require('pg').Pool
let database= new Pool({
    user: "postgres",
    host: "localhost",
    database: "HERITAGE ",
    password: "123",
    port: "5432"
})

module.exports =database 