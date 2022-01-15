const fs = require("fs");
const path = require("path");
const dbConnection = require("./db_connection.js");
require("pg");

const runDbBuild = () => {

  const sqlPath = path.join(__dirname, "db_build.sql");
  // console.log(sqlPath);
  const sql = fs.readFileSync(sqlPath).toString();
  // console.log(sql);

  dbConnection.query(sql, (err, res) => {
    if (err) throw err;
    console.log("DB Created");
    dbConnection.end(() => {
      console.log("connection closed");
    });
  });
};

runDbBuild();

module.exports = runDbBuild;
