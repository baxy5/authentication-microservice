const saveCredentials = require("../services/signup-service");

const postSignup = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    await saveCredentials(email, password);
    res.sendStatus(201);
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500);
  }
};

module.exports = postSignup;
