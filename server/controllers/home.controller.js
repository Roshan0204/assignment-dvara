const mysql = require("mysql");
const key = require("../config/keys");

const options = {
    host: key.MYSQL_HOST,
    user: key.MYSQL_USER,
    password: key.MYSQL_PASSWORD,
    database: key.MYSQL_DATABASE
};

var connection = mysql.createConnection(options);