import "./loadEnvirontment.js";
import mongoose from "mongoose";
import express from "express";
import chalk from "chalk";
import { Robot } from "./database/models/Robot.js";

const uri = process.env.MONGODB_URL;

try {
  await mongoose.connect(uri);
  const robots = await Robot.find();
  console.log(robots);
} catch (error: unknown) {
  console.log("Error on connecting to database", (error as Error).message);
}

const port = process.env.PORT;

const app = express();

const server = app.listen(port, () => {
  console.log(chalk.yellow(`Server listening on: http://localhost:${port}`));
});
