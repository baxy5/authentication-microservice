const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const validateEmail = async (email) => {
  const user = await prisma.users.findMany({
    where: {
      email: email,
    },
  });

  return user.length;
};

module.exports = validateEmail;
