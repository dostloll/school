const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "ehdiyotalaipassword",
  database: "users",
  port: 5432,
});

module.exports = pool;
