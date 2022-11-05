import express from "express";
import morgan from "morgan";
import { notFoundError } from "./middlewares/error.js";
import robotsRouter from "./routers/robotsRouters.js";
import cors from "cors";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(
  cors({
    origin: [
      "https://202209-w6chwe-nuria-ramoneda-mireia-r.netlify.app/",
      "http://localhost:3000",
    ],
  })
);

app.disable("x-powered-by");

app.use("/robots", robotsRouter);

app.use(notFoundError);

export default app;
