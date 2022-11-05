import chalk from "chalk";
import type { NextFunction, Request, Response } from "express";
import debugCreator from "debug";
import type CustomError from "../../CustomError/CustomError";

const debug = debugCreator("robots: root");

export const notFoundError = (req: Request, res: Response) => {
  res.status(404).json({ message: "unknown enpoint" });
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
  const publicMessage = error.publicMessage || "General error";

  res.status(statusCode).json({ error: publicMessage });
};
