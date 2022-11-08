import "../../loadEnvirontment.js";
import express from "express";
import {
  getRobots,
  getRobotById,
  addRobot,
  deleteRobotbyId,
} from "../controllers/robotsControllers.js";
import authentication from "../middlewares/authentication.js";

// eslint-disable-next-line new-cap
const robotsRouter = express.Router();

robotsRouter.get("/", getRobots);
robotsRouter.get("/:id", getRobotById);
robotsRouter.post("/create", addRobot);
robotsRouter.delete("/delete/:idRobot", authentication, deleteRobotbyId);

export default robotsRouter;
