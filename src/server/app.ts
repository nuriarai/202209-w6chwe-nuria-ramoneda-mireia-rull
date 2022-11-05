import express from "express";
import morgan from "morgan";
import { notFoundError } from "./middlewares/error.js";
import robotsRouter from "./routers/robotsRouters.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.disable("x-powered-by");

app.use("/robots", robotsRouter);

app.use(notFoundError);

export default app;
