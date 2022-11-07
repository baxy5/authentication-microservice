const logIn = require("../services/login-service");

const login = async (req, res, next) => {
  const { email, password } = req.body;

  const result = await logIn(email, password);

  switch (result) {
    case 0:
      res.status(200).send("Log in succesful.");
      break;
    case 1:
      res.status(200).send("User not found.");
      break;
    case 2:
      res.status(200).send("Wrong password.");
      break;
  }
};

module.exports = login;
