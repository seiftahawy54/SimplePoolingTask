const pg = require("pg");

const pool = new pg.Pool({
  user: "",
  host: "",
  database: "",
  password: "",
});

module.exports = pool.connect();
