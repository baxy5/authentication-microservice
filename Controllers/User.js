const express = require("express");
const router = express.Router();
const bycrpt = require("bcrypt");
const client = require("../database");

router.post("/register", (req, res, next) => {
  const { email, password } = req.body;

  const hashedPassword = bycrpt.hashSync(password, 10);

  // TODO: Check email in database
  client.query("SELECT email FROM credentials", (err, data) => {
    if (err) console.log(err);

    data.rows.forEach((row) => {
      console.log("Searching for email.");
      if (row.email == email) {
        res.send("This email is already exist. Please login.");
        console.log("Email is already exist.");
      } else {
        // TODO: Save credentials to database
        console.log("Email doesn't exist.");
        client.query(
          `INSERT INTO credentials (email,password) VALUES (${email}, ${hashedPassword})`,
          (err, data) => {
            if (err) console.log(err);

            console.log("Credentials was added.");
          }
        );
      }
    });
  });
});

router.post("/login", (req, res, next) => {
  // TODO: Check user in database
});

module.exports = router;
