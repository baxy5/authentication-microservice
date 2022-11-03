const client = require("../database/connection");

const saveCredentials = (email, password) => {
  client.connect();
  client.query(
    `INSERT INTO credentials (email,password) VALUES ('${email}', '${password}')`,
    (err, res) => {
      if (err) console.log(err);

      console.log("Sign up successful.");
    }
  );
};

module.exports = saveCredentials;
