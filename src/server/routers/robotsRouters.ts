import "../../loadEnvirontment.js";
import express from "express";
import { getRobots, getRobotById } from "../controllers/robotsControllers.js";

// eslint-disable-next-line new-cap
const robotsRouter = express.Router();

robotsRouter.get("/", getRobots);
robotsRouter.get("/:id", getRobotById);

export default robotsRouter;
