import "./loadEnvirontment.js";
import debugCreator from "debug";
import mongoose from "mongoose";
import express from "express";
import chalk from "chalk";
import { Robot } from "./database/models/Robot.js";

const debug = debugCreator("robots: root");

debug("hola");

const uri = process.env.MONGODB_URL;

try {
  await mongoose.connect(uri);
  const robots = await Robot.find();
  debug(robots);
} catch (error: unknown) {
  console.log("Error on connecting to database", (error as Error).message);
}

const port = process.env.PORT;

const app = express();

const server = app.listen(port, () => {
  debug(chalk.yellow(`Server listening on: http://localhost:${port}`));
});

export default server;
