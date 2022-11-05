import "../loadEnvirontment.js";
import mongoose from "mongoose";
import debugCreator from "debug";
import chalk from "chalk";

const debug = debugCreator("robots: database");

const connectDatabase = async (mongoUrl: string) => {
  try {
    await mongoose.connect(mongoUrl);
    debug(chalk.green("Connection to database was successfull"));
  } catch (error: unknown) {
    debug("Error on connecting to database", (error as Error).message);
  }
};

export default connectDatabase;
