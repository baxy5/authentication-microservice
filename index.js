const express = require("express");
const app = express();
const login = require("./src/routes/login");
const signup = require("./src/routes/signup");

app.use("/signup", signup);
app.use("/login", login);

app.get("/", (req, res, next) => {
  res.send("Authentication & authorization Microservice");
});

app.listen(8005, () => {
  console.log("[Authentication - Microservice] listening on port: 8005");
});
