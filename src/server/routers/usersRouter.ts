import "../../loadEnvirontment.js";
import express from "express";
import loginUser from "../controllers/userControllers.js";

// eslint-disable-next-line new-cap
const userRouter = express.Router();

userRouter.get("/login", loginUser);

export default userRouter;
