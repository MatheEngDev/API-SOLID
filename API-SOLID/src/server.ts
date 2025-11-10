import { DefaultDeserializer } from "node:v8";
import { app } from "./app";
import { env } from "./env";
import { setDefaultAutoSelectFamily } from "node:net";

app.listen({
  port: env.PORT,
  host: "0.0.0.0"
}).then(() => {
  console.log ('HTTP server running!')

})

