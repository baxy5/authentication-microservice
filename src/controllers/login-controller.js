const logIn = require("../services/login-service");

const postLogin = (req, res, next) => {
  const { email, password } = req.body;

  try {
    logIn(email, password);
    res.status(200).send("Log in succesful.");
  } catch (e) {
    console.log(e.message);
    res.status(401).send("Log in error.");
  }
};

module.exports = postLogin;
