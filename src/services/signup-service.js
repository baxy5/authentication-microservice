const { PrismaClient } = require("@prisma/client");
const { validateEmail } = require("../utils/validateEmail");
const prisma = new PrismaClient();
const bycrpt = require("bcrypt");

const createUser = async (email, password) => {
  //TODO: check if email is valid
  const hashedPassword = bycrpt.hashSync(password, 10);

  await prisma.users.create({
    data: {
      email: email,
      password: hashedPassword,
    },
  });
};

module.exports = createUser;
