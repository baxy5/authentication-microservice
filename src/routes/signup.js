const express = require("express");
const router = express.Router();

const postSignup = require("../controllers/signup-controller");

router.post("/signup", postSignup);

module.exports = router;
