const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

const hashPassword = require("./middleware/passwordHash");
const emailValidation = require("./middleware/emailValidation");

// middlewares
app.use(bodyParser.json());

// routing
app.get("/", (req, res) => {
  res.send("Home page");
});

app.post("/signup", emailValidation, async (req, res) => {
  const { email, password } = req.body;

  console.log("[Password]", password);
  res.send(email + " " + password);
});

// server
app.listen(8000, () => {
  console.log("Server running on port 8000.");
});
