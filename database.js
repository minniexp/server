const { Pool } = require("pg");

const pool = new Pool({
  user: "finalcheckv2_user",
  password: process.env.REACT_APP_DATABASE_PASSWORD,
  host: "dpg-cq5lmjmehbks73bqnqv0-a.ohio-postgres.render.com",
  port: 5432,
  database: "finalcheckv2",
  ssl: true,
});

//update ssl item - future

module.exports = pool;
