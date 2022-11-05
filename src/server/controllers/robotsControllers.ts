import type { NextFunction, Request, Response } from "express";
import CustomError from "../../CustomError/CustomError.js";
import Robot from "../../database/models/Robot.js";

export const getRobots = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const robots = await Robot.find();
    res.status(200).json({ robots });
  } catch (error: unknown) {
    const customError = new CustomError(
      (error as Error).message,
      500,
      "Database error"
    );
    next(customError);
  }
};

export const getRobotById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const robot = await Robot.findById(id);
  if (!robot) {
    res.status(404).json({ error: "Robot not found" });
    return;
  }

  res.status(200).json({ robot });
};
