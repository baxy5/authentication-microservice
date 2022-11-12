const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bycrpt = require("bcrypt");

const createUser = async (email, password) => {
  const hashedPassword = bycrpt.hashSync(password, 10);

  await prisma.users.create({
    data: {
      email: email,
      password: hashedPassword,
    },
  });
};

module.exports = createUser;
