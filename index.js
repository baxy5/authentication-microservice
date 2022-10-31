const express = require("express");
const app = express();
require("dotenv").config();

const client = require("./database");

app.listen(8000, () => {
  console.log("Server running on port 8000.");
  client.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("[PostgreSQL] Database connected.");
    }
  });
});
