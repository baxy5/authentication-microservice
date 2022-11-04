const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createUser = async (email, password) => {
  //TODO: check if email is valid
  //TODO: bycrpt password
  await prisma.users.create({
    data: {
      email: email,
      password: password,
    },
  });
};

module.exports = createUser;
