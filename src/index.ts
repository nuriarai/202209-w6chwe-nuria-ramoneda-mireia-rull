import "./loadEnvirontment.js";
import connectDatabase from "./database/index.js";
import startServer from "./server/index.js";
// Import mongoose from "mongoose";

const port = process.env.PORT;
const mongoUrl = process.env.MONGODB_URL;

// eslint-disable-next-line no-implicit-coercion
await startServer(+port);
await connectDatabase(mongoUrl);

// Try {
// await startServer(+port);
// debug(chalk.yellow(`Server listening on: http://localhost:${port}`));
// await connectDatabase();
// debug(chalk.green("Connection to database was successfull"));
// } catch (error: unknown){
//    debug(chalk.red("Error on starting the API", error.message));
// }
