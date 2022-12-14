const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

module.exports = client;
