const validateEmail = async (email) => {
  const user = await prisma.users.findMany({
    where: {
      email: email,
    },
  });

  if (user.length == 0) return false;

  return true;
};
