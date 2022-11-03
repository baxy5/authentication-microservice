const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const login = require("./src/routes/login");
const signup = require("./src/routes/signup");

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api", signup);
app.use("/api", login);

app.get("/", (req, res, next) => {
  res.send("Authentication & authorization Microservice");
});

app.listen(8005, () => {
  console.log("[Authentication - Microservice] listening on port: 8005");
});
