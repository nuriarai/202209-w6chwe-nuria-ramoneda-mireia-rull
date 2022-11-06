import "../../loadEnvirontment.js";
import express from "express";
import {
  getRobots,
  getRobotById,
  addRobot,
} from "../controllers/robotsControllers.js";

// eslint-disable-next-line new-cap
const robotsRouter = express.Router();

robotsRouter.get("/", getRobots);
robotsRouter.get("/:id", getRobotById);
robotsRouter.post("/create", addRobot);

export default robotsRouter;
