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
    console.log("[SERVICE]: User not found.");
    return 1;
  } else {
    const isMatch = await bycrpt.compare(password, user[0].password);
    if (isMatch) {
      console.log("[SERVICE]: Logged in.");
      return 0;
    } else {
      console.log("[SERVICE]: Wrong password.");
      return 2;
    }
  }
};

module.exports = logIn;
