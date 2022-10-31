const express = require("express");
const app = express();
require("dotenv").config();
const client = require("./database");

app.set("view engine", "ejs");

// routing
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.use((req, res) => {
  res.status(404).render("404");
});

// server
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
