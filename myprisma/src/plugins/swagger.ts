import fp from "fastify-swagger";
import fastifySwagger, { type SwaggerOptions } from "fastify-swagger";

export default fp<SwaggerOptions>(
  async (fastify: any) => {
    fastify.register(fastifySwagger, {
      routePrefix: "/docs",

      tags: [
        {
          name: "Boss | User",
          description: "后台用户管理模块",
        },
      ],
      components: {
        securitySchemes: {
          JWT: {
            type: "http",
            scheme: "bearer",
          },
        },
      },
    });
  },
  {
    fastify: "3.x",
    name: "easynm-plugin-swagger",
    dependencies: ["easynm-plugin-dotenv"],
    decorators: {
      fastify: ["env"],
    },
  }
);
