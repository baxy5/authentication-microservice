const createUser = require("../services/signup-service");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const validateEmail = require("../utils/validate-email");

const signupController = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const isEmailFound = await validateEmail(email);

    if (isEmailFound >= 1) {
      res.status(500).send("User already registered.");
    } else {
      await createUser(email, password)
        .then(async () => {
          await prisma.$disconnect();
          res.status(201).send("Sign up successful.");
        })
        .catch(async (e) => {
          console.log(e.message);
          await prisma.$disconnect();
          process.exit(1);
        });
    }
  } catch (e) {
    console.log(e.message);
    res.status(500).send("Sign up error.");
  }
};

module.exports = signupController;
