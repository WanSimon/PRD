import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["src/index.ts", "src/routes/**/*.ts", "src/plugins/*.ts"],
  splitting: false,
  sourcemap: true,
  clean: true,
  onSuccess: "fastify start -o -l info -P -w dist/index.js",
});
