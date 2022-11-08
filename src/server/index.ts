import chalk from "chalk";
import debugCreator from "debug";
import app from "./app.js";
const debug = debugCreator("robots: server: root");

app.disable("x-powered-by");

const startServer = async (port: number) => {
  await new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.yellow(`Server listening on: http://localhost:${port}`));
      resolve(server);
    });

    server.on("error", (error: Error) => {
      debug(chalk.red("Error on starting server", error.message));
      reject(error);
    });
  });
};

export default startServer;
