require("dotenv").config();
const mysql = require("mysql2");

const db = mysql.createConnection(process.env.MYSQL_PRIVATE_URL);

db.connect((err) => {
    if (err) {
        console.log("Database connection failed");
        console.log(err);
    } else {
        console.log("MySql Connected");
    }
});

module.exports = db;