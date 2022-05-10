import { PrismaClient } from "@prisma/client";
import fp from "fastify-plugin";

export default fp(
  async (fastify) => {
    //添加数据库链接

    const db = new PrismaClient();
    await db.$connect();
    fastify.decorate("db", db);

    fastify.addHook("onClose", async () => {
      await fastify.db.$disconnect();
    });
  },
  {
    fastify: "3.x",
    name: "easynm-plugin-prisma",
    dependencies: ["easynm-plugin-dotenv"],
    decorators: {
      fastify: ["env"],
    },
  }
);
