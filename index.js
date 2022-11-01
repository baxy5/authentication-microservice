const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const client = require("./database");
require("dotenv").config();

app.use(bodyParser.json());

// TODO: Log data via routing
app.get("/", (req, res) => {
  client.connect();

  client.query("SELECT email, password FROM credentials", (err, data) => {
    if (err) console.log(err);

    res.send(data.rows);
    client.end();
  });
});

app.listen(8000, () => {
  console.log("Server running on port 8000.");
});
