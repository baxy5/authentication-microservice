const express = require("express");
const app = express();
const client = require("./database");
const bodyParser = require("body-parser");
require("dotenv").config();

// middlewares
app.use(bodyParser.json());

// routing
app.get("/", (req, res) => {
  res.send("Home page");
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  res.send(email + " " + password);
});

app.use((req, res) => {
  res.status(404).render("404");
});

// server
app.listen(8000, () => {
  console.log("Server running on port 8000.");
});
