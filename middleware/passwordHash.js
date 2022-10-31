const bycrpt = require("bcrypt");
const saltRounds = 10;

const hashPassword = (req, res, next) => {
  const { password } = req.body;

  bycrpt.hash(password, saltRounds, (err, hash) => {
    if (err) console.log(err);

    console.log("[Hashed password]", hash);
  });

  next();
};

module.exports = hashPassword;
