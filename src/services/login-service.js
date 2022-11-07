const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bycrpt = require("bcrypt");

const logIn = async (email, password) => {
  const user = await prisma.users.findMany({
    where: {
      email: email,
    },
  });

  if (user.length == 0) {
    await prisma.$disconnect();
    return 1;
  } else {
    const isMatch = await bycrpt.compare(password, user[0].password);
    if (isMatch) {
      return 0;
    } else {
      return 2;
    }
  }
};

module.exports = logIn;
