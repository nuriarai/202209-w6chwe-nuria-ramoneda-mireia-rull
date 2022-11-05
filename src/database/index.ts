import "../loadEnvirontment.js";
import mongoose from "mongoose";
import debugCreator from "debug";
import { Robot } from "./models/Robot.js";

const debug = debugCreator("robots: database");

const connectDatabase = async (mongoUrl: string) => {
  try {
    await mongoose.connect(mongoUrl);
    const robots = await Robot.find();
    debug(robots);
  } catch (error: unknown) {
    debug("Error on connecting to database", (error as Error).message);
  }
};

export default connectDatabase;
