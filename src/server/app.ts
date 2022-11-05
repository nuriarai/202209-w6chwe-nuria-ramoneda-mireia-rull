import express from "express";
import robotsRouter from "../routers/robotsRouters";
import morgan from "morgan";

const app = express();
app.use(express.json);
app.use(morgan("dev"));

app.use("/robots", robotsRouter);
