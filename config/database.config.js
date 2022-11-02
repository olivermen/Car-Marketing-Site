const mysql = require("mysql");
const db = mysql.createConnection({
  host: "sql8.freemysqlhosting.net",
  user: "sql8531051",
  password: "UjiYUP9haS",
  database: "sql8531051",
});

module.exports = db;
