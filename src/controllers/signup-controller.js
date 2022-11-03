const saveCredentials = require("../services/signup-service");

const postSignup = (req, res, next) => {
  const { email, password } = req.body;

  try {
    saveCredentials(email, password);
    res.status(201).send("Sign up successful.");
  } catch (e) {
    console.log(e.message);
    res.status(500).send("Sign up error.");
  }
};

module.exports = postSignup;
