const client = require("../database");

const emailValidation = async (req, res, next) => {
  const queryCmd = "";

  client.query(queryCmd, (err, res) => {
    if (err) console.log(err);

    console.log(res);
  });
};

module.exports = emailValidation;
