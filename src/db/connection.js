const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  connectionLimit: 10,
});

module.exports = connection;
