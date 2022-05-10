import fastifyEnv, { type fastifyEnvOpt } from "fastify-env";
import fp from "fastify-plugin";

export default fp<fastifyEnvOpt>(
  async (fastify) => {
    fastify.register(fastifyEnv, {
      dotenv: true,
      confKey: "env",
      schema: {
        type: "object",
        properties: {
          PORT: {
            type: "number",
            default: 3210,
          },
          ADMIN_PASSWORD: {
            type: "string",
            default: "123456",
          },
          ADMIN_USERNAME: {
            type: "string",
            default: "wansimon",
          },
          ADMIN_PHONE: {
            type: "string",
            default: "18638585665",
          },
        },
        required: ["PORT"],
      },
    });
  },
  {
    fastify: "3.x",
    name: "easynm-plugin-dotenv",
  }
);

export interface DotEnvSchema {
  PORT: number;
  ADMIN_PASSWORD: string;
  ADMIN_USERNAME: string;
  ADMIN_PHONE: string;
}
