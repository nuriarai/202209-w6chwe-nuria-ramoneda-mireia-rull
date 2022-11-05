import "../loadEnvirontment.js";
import express from "express";
import chalk from "chalk";
import debugCreator from "debug";
import { error } from "console";
const debug = debugCreator("robots: server");

const app = express();
app.disable("x-powered-by");
const startServer = async (port: string) => {
  await new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.yellow(`Server listening on: http://localhost:${port}`));
    });
    resolve(server);
    server.on("error", (error) => {
      debug(chalk.red("Error on starting server", error.message));
    });
    reject(error);
  });
};

export default startServer;
