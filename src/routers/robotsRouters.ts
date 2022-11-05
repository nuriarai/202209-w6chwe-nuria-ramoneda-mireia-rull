import "../loadEnvirontment.js";
import express from "express";
import { getRobots, getRobotsById } from "../controllers/robotsControllers";

// eslint-disable-next-line new-cap
const robotsRouter = express.Router();

robotsRouter.get("/", getRobots);
robotsRouter.get("/robot/:id", getRobotsById);

export default robotsRouter;
