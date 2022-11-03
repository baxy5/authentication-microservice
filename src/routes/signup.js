const express = require("express");
const router = express.Router();

const postSignup = require("../controllers/post-signup-controller");

router.post("/signup", postSignup);

module.exports = router;
