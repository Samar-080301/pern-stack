const Pool = require('pg').Pool;
const pool = new Pool({
user: "samar",
password: "qwer",
host: "localhost",
port: 5432,
database: "samar",
connectionLimit : 10
})

module.exports = {pool};