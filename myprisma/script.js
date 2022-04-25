const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// A `main` function so that you can use async/await
async function main() {
  const allUsers = await prisma.user.findMany({});
  //   const newUsers = await prisma.user.createMany({
  //     data: [
  //       { email: "45747137@qq.com", name: "WanSimon" },
  //       { email: "734895631@qq.com", name: "fanfan" },
  //     ],
  //   });
  console.log(allUsers, "WanSimon");
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
