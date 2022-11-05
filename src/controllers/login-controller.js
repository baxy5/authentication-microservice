const logIn = require("../services/login-service");

const login = async (req, res, next) => {
  const { email, password } = req.body;

  const result = await logIn(email, password);

  if (result) {
    res.status(200).send("Log in successful.");
    console.log("User logged in.");
  } else {
    res.status(401).send("Log in error.");
    console.log("Log in error.");
  }
};

module.exports = login;
