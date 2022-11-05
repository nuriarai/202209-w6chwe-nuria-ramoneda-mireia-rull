import "./loadEnvirontment.js";
import connectDatabase from "./database/index.js";
import startServer from "./server/index.js";

const mongoUrl = process.env.MONGODB_URL;
const port = process.env.PORT;

await connectDatabase(mongoUrl);
await startServer(port);
