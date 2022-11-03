const client = require("../database/connection");

const logIn = (email, password) => {
  client.connect();
  const dbPassword = client.query(
    `SELECT password FROM credentials WHERE email='${email}'`,
    (err, res) => {
      if (err) console.log(err);
    }
  );

  if (password === dbPassword) {
    console.log("Log in successful.");
  }
};

module.exports = logIn;
