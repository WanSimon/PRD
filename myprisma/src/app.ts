import fastifyAutoload from "fastify-autoload";
import fastify from "fastify";
import path from "path";

const app = fastify();
app.register(fastifyAutoload, {
  dir: path.join(__dirname, "plugins"),
  dirNameRoutePrefix: false,
});

app.register(fastifyAutoload, {
  dir: path.join(__dirname, "routes"),
  maxDepth: 2,
  options: {
    prefix: "/api",
  },
});

app.listen(3210);
