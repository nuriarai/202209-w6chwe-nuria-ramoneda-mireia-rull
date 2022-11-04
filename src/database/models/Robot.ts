import { Schema, model } from "mongoose";

const robotSchema = new Schema({
  name: String,
  image: String,
  features: {
    speed: Number,
    endurance: Number,
    creationDate: Number,
  },
});

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Robot = model("Robot", robotSchema, "robots");
