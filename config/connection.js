var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-east-03.cleardb.com",
  port: 3306,
  user: "b879d95894222e",
  password: "28d4eba7",
  database: "heroku_68fe76a586e17bb",

});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;