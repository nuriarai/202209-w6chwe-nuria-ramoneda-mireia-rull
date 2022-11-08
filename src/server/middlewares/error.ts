import chalk from "chalk";
import type { NextFunction, Request, Response } from "express";
import debugCreator from "debug";
import CustomError from "../../CustomError/CustomError";

const debug = debugCreator("robots: server: middlewares: root");

export const notFoundError = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = new CustomError(
    "Endpoint not found",
    404,
    "Endpoint not found"
  );
  next(error);
};

export const generalError = (
  error: CustomError,
  req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars
  next: NextFunction
) => {
  debug(chalk.red(error.message));

  const statusCode = error.statusCode ?? 500;
  const publicMessage = error.publicMessage || "Something went wrong";

  res.status(statusCode).json({ error: publicMessage });
};
