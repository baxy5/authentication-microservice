const createUser = require("../services/signup-service");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const signupController = (req, res, next) => {
  const { email, password } = req.body;

  try {
    createUser(email, password)
      .then(async () => {
        await prisma.$disconnect();
        console.log("User has been created.");
        res.status(201).send("Sign up successful.");
      })
      .catch(async (e) => {
        console.log(e.message);
        await prisma.$disconnect();
        process.exit(1);
      });
  } catch (e) {
    console.log(e.message);
    res.status(500).send("Sign up error.");
  }
};

module.exports = signupController;
