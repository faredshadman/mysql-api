const mysql = require("mysql");
const pool = mysql.createPool({
  connectionLimit: 10,
  password: "blahblah",
  user: "chirpr",
  database: "chirpr",
  host: "localhost",
  port: "3306",
});

let chirpdb = {};
chirpdb.all = () => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM chirps`, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};
chirpdb.one = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM chirps`, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

module.exports = chirpdb;
