const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const client = require("./database");
require("dotenv").config();
const bycrpt = require("bcrypt");

app.use(bodyParser.json());
client.connect();

const userRouter = require("./Controllers/User");
app.use("/register", userRouter);

app.get("/", (req, res) => {
  client.query("SELECT email, password FROM credentials", (err, data) => {
    if (err) console.log(err);

    res.send(data.rows);
  });
});

app.post("/register", (req, res, next) => {
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

app.listen(8000, () => {
  console.log("Server running on port 8000.");
});
