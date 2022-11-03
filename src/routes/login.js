const express = require("express");
const router = express.Router();

const postLogin = require("../controllers/login-controller");

router.post("/login", postLogin);

module.exports = router;
