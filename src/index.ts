import express from "express";
import { serverConfig } from "./config/config";
import { pingHandler } from "./controllers/ping.controller";
import pingRouter from "./routers/ping.router";

const app = express();

/**
 * Registering all the routers and theirs corresponding routes with out app server object.
 */
app.use(pingRouter);

app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on http://localhost:${serverConfig.PORT}`);
  console.log(`Press Ctrl+C to stop the server.....`);
});
