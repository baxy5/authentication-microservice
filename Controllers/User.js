const express = require("express");
const router = express.Router();
const bycrpt = require("bcrypt");

router.post("/register", (req, res, next) => {
  const { email, name, password } = req.body;

  const hashedPassword = bycrpt.hashSync(password, 10);

  // TODO: Check email in database
  // TODO: Save credentials to database
});

router.post("/login", (req, res, next) => {
  // TODO: Check user in database
});
